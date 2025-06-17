import type { z } from "zod"
import { hashPassword } from "../utils/hash"
import type { registerSchema } from "../validators/auth.validator"
import { createUser, findUserByEmail } from "../repositories/auth.repository"


export const registerUser = async (data: z.infer<typeof registerSchema>) => {
  // Destructuration des données validées
  const { name, email, password } = data

  // Vérification si l'utilisateur existe déjà
  const existingUser = await findUserByEmail(email)
  if (existingUser) throw new Error("cet email est déjà utilisé")

  // hashage du mot de passe
  const hashedPassword = await hashPassword(password)

  // Création de l'utilisateur
  const newUser = await createUser(name, email, hashedPassword)

  // Retour de l'utilisateur créé
  return newUser
}
