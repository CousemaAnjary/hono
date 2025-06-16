import type { z } from "zod"
import * as bcrypt from "bcrypt"
import type { registerSchema } from "../validators/auth.validator.js"
import { createUser, findUserByEmail } from "../repositories/auth.repository"


export const registerUser = async (data: z.infer<typeof registerSchema>) => {
  // Destructuration des données validées
  const { name, email, password } = data

  // Vérification si l'utilisateur existe déjà
  const existingUser = await findUserByEmail(email)
  if (existingUser) throw new Error("cet email est déjà utilisé")

  // hashage du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10)

  // Création de l'utilisateur
  const newUser = await createUser(name, email, hashedPassword)

}
