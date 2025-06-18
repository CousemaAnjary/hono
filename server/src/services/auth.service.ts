import { User } from "models"
import type { z } from "zod"
import { createUser, findUserByEmail } from "../repositories/auth.repository"
import { comparePassword, hashPassword } from "../utils/hash"
import { generateToken } from "../utils/jwt"
import type { loginSchema, registerSchema } from "../validators/auth.validator"

export const registerUser = async (
  data: z.infer<typeof registerSchema>
): Promise<User> => {
  // Destructuration des données validées
  const { name, email, password } = data

  // Vérification si l'utilisateur existe déjà
  const existingUser = await findUserByEmail(email)
  if (existingUser) throw new Error("cet email est déjà utilisé")

  // hashage du mot de passe
  const hashedPassword = await hashPassword(password)

  // Création de l'utilisateur
  const newUser = await createUser({ name, email, password: hashedPassword })

  // Retour de l'utilisateur créé
  return newUser
}

export const loginUser = async (
  data: z.infer<typeof loginSchema>
): Promise<{ user: User; token: string }> => {
  // Destructuration des données validées
  const { email, password } = data

  // Vérification si l'utilisateur existe
  const user = await findUserByEmail(email)
  if (!user) throw new Error("Utilisateur non trouvé")

  // Vérification du mot de passe
  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) throw new Error("Mot de passe incorrect")

  // Génération d'un token JWT (à implémenter)
  const token = generateToken({
    id: user.id,
    name: user.name,
    email: user.email,
  })

  // Retour de l'utilisateur et du token
  return { user, token }
}
