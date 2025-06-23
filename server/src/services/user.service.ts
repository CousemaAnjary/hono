import { Context } from "hono"
import { User } from "models"


export const currentUser = async (c: Context):Promise<User> => {
   const user = c.get("user")
   if (!user) throw new Error("Utilisateur non authentifié")

  return user
}