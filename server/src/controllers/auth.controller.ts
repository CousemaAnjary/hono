import type { Context } from "hono"
import { jsonError } from "utils/jsonError"
import { loginService, registerUser } from "../services/auth.service"
import { loginSchema, registerSchema } from "../validators/auth.validator"
import { deleteAccessTokenCookie, setAccessTokenCookie } from "utils/cookies/accessToken"

export const register = async (c: Context) => {
  
  // validate des données d'entrée (body)
  const validated = registerSchema.safeParse(await c.req.json())
  if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)
    
  try {
    const newUser = await registerUser(validated.data)
    return c.json({ success: true, message: "Utilisateur créé avec succès", newUser },201)
      
  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}

export const loginController = async (c: Context) => {
  
  // validate des données d'entrée (body)
  const validated = loginSchema.safeParse(await c.req.json())
  if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)

  try {
    const { accessToken } = await loginService(validated.data)
    setAccessTokenCookie(c, accessToken)
    // setRefreshTokenCookie(c, refreshToken)
    return c.json( { success: true, message: "Connexion réussie" }, 200 )
     
  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}

export const logout = async (c: Context) => {
  deleteAccessTokenCookie(c)
  return c.json({ success: true, message: "Déconnexion réussie" }, 200)
}