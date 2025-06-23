import type { Context } from "hono"
import { deleteAccessTokenCookie, setAccessTokenCookie } from "utils/cookies/accessToken"
import { deleteRefreshTokenCookie } from "utils/cookies/refreshToken"
import { loginUser, refreshAccessToken, registerUser } from "../services/auth.service"
import { loginSchema, registerSchema } from "../validators/auth.validator"


export const register = async (c: Context) => {

  // validate des données d'entrée (body)
  const validated = registerSchema.safeParse(await c.req.json())
  if (!validated.success)return c.json({success: false, message: "Validation échouée", errors: validated.error.flatten().fieldErrors,},400)
    
  try {
    const newUser = await registerUser(validated.data)
    return c.json({ success: true, message: "Utilisateur créé avec succès", newUser },201)
      
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 409)
    }
    // En cas d'erreur inconnue
    return c.json({ success: false, message: "Une erreur inconnue est survenue" },500) 
  }
}

export const login = async (c: Context) => {
  
  // validate des données d'entrée (body)
  const validated = loginSchema.safeParse(await c.req.json())
  if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)

  try {
    const { user, token } = await loginUser(validated.data)

    // On stocke le token dans un cookie Http-Only
    setAccessTokenCookie(c, token)

    return c.json( { success: true, message: "Connexion réussie", user }, 200 )
     
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 409)
    }
    // En cas d'erreur inconnue
    return c.json( { success: false, message: "Une erreur inconnue est survenue" },500 )
  }
}

export const refreshToken = async (c: Context) => {

  try {
    const result = await refreshAccessToken(c)
    return c.json(result, 200)

  } catch (error) {

    // en cas d'erreur, on supprime les cookies même si l erreur est connue
    deleteAccessTokenCookie(c)
    deleteRefreshTokenCookie(c)


    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 401)
    }
    
   
    // En cas d'erreur inconnue
    return c.json({ success: false, message: "Une erreur inconnue est survenue" }, 500)
  }
}


