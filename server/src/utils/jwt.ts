import jwt, { SignOptions } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET 
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in environment variables")

// Définition du type pour le payload du token
export type JwtPayload = {
  id: number
  email: string
  name: string
}

/**
 * Génère un token JWT signé
 * @param payload - Données à encoder (ex. { id, email, name })
 * expiresIn - Bonne pratique : 15 à 30 minutes
 * @returns Une chaîne JWT signée
 */
export const generateToken = ( payload: JwtPayload, options:SignOptions ): string => {
  return jwt.sign(payload, JWT_SECRET,  options) 
}

/**
 * Vérifie et décode un token JWT
 * @param token - Le token à vérifier
 * @returns Le payload décodé si le token est valide
 * @throws Une erreur si le token est invalide ou expiré
 */
export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload
}
