import { z } from "zod"
import { User } from "models"
import { Context } from "hono"
import jwt from "jsonwebtoken"
import { generateToken, verifyToken } from "../utils/jwt"
import { comparePassword, hashPassword } from "../utils/hash"
import { setAccessTokenCookie } from "utils/cookies/accessToken"
import { createUser, findUserByEmail } from "../repositories/auth.repository"
import type { loginSchema, registerSchema } from "../validators/auth.validator"
import { getRefreshTokenCookie, setRefreshTokenCookie } from "utils/cookies/refreshToken"



export const registerUser = async (data: z.infer<typeof registerSchema>): Promise<User> => {

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

export const loginUser = async (data: z.infer<typeof loginSchema>): Promise<{ user: User, accessToken: string  }> => {
  
  // Destructuration des données validées
  const { email, password } = data

  // Vérification si l'utilisateur existe
  const user = await findUserByEmail(email)
  if (!user) throw new Error("Utilisateur non trouvé")

  // Vérification du mot de passe
  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) throw new Error("Mot de passe incorrect")

  // Préparation du payload pour le token
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  }

  // Génération d'un token d'accès et d'un token de rafraîchissement
  const accessToken = generateToken(payload, {expiresIn: "15m"})
  // const refreshToken = generateToken(payload, {expiresIn: "7d"})

  // Retour de l'utilisateur et du token
  return { user, accessToken }
}


export const refreshAccessToken = async (c : Context): Promise<{ success: boolean; message: string }> => {

  const token = getRefreshTokenCookie(c)
  if (!token) throw new Error("Token de rafraîchissement manquant")

  const payload = verifyToken(token)
  
  const newAccessToken = generateToken(payload, {expiresIn: "15m"})
  const newRefreshToken = generateToken(payload, {expiresIn: "7d"})

  setAccessTokenCookie(c, newAccessToken)
  setRefreshTokenCookie(c, newRefreshToken)

  return { success: true, message: "Token renouvelé avec succès" }
  
}