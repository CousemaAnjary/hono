import type { Context } from "hono"
import { registerUser } from "../services/auth.service.js"

export const register = async (c: Context) => {
  // 
  const { name, email, password } = await c.req.json()

  try {
    const user = await registerUser(name, email, password)
    return c.json({success:true, message: "Utilisateur créé avec succès", user}, 201)

  } catch (error) {
    return c.json({success:false, message: "Une erreur inconnue est survenue"}, 500)
  }
}
