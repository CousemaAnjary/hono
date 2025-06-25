import { Context } from "hono"
import { userCurrent } from "services/user.service"


export const getCurrentUser = async (c: Context) => {
  try {
    const currentUser = await userCurrent(c)
    return c.json({ success: true, message: "Utilisateur récupéré avec succès", currentUser }, 200)

  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 409)
    }
   // En cas d'erreur inconnue
    return c.json({ success: false, message: "Une erreur inconnue est survenue" },500) 
  }
}
