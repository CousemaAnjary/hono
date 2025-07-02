import { Context } from "hono"
import { currentUser } from "services/user.service"

// Récupère l'utilisateur connecté
export const getCurrentUser = async (c: Context) => {
  try {
    const userPayload = await currentUser(c)
    return c.json({ success: true, message: "Utilisateur récupéré avec succès", userPayload }, 200)

  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 409)
    }
   // En cas d'erreur inconnue
    return c.json({ success: false, message: "Une erreur inconnue est survenue" },500) 
  }
}
