import { Context } from "hono"
import { currentUser } from "services/user.service"

export const getCurrentUser = async (c: Context) => {
  try {
    const user = await currentUser(c)
    return c.json({ success: true, message: "Utilisateur récupéré avec succès", user }, 200)

  } catch (error) {

    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 409)
    }
   // En cas d'erreur inconnue
    return c.json({ success: false, message: "Une erreur inconnue est survenue" },500) 
  }
}
