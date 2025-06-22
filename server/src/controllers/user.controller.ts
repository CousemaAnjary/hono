import { Context } from "hono"
import { getCurrentUser } from "services/user.service"


export const currentUser = async (c: Context) => {
  try {
    const user = await getCurrentUser(c)
    return c.json({ success: true, user }, 200)
    
  } catch(error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 409)
    }
    // En cas d'erreur inconnue
    return c.json({ success: false, message: "Une erreur inconnue est survenue" }, 500)
   
  }
}