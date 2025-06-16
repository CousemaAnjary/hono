import type { Context } from "hono"
import { registerUser } from "../services/auth.service"
import { registerSchema } from "../validators/auth.validator"

export const register = async (c: Context) => {
  // validate des données d'entrée (body)
  const validated = registerSchema.safeParse(await c.req.json())
  if (!validated.success) return c.json({ success:false, message: validated.error.message }, 400)

  try {
    const user = await registerUser(validated.data)
    return c.json({success:true, message: "Utilisateur créé avec succès", user}, 201)

  } catch (error) {
    return c.json({success:false, message: "Une erreur inconnue est survenue"}, 500)
  }
}
