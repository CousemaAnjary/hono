import { Context } from "hono"


export const currentUser = async (c: Context) => {
   const user = c.get("user")
   if (!user) throw new Error("Utilisateur non authentifié")

  return user
}