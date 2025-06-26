import { Context } from "hono"
import { UserPayload } from "types/auth"


export const currentUser = async (c: Context):Promise<UserPayload> => {
  // Récupérer l'utilisateur à partir du contexte
  const user = c.get("user") as UserPayload
  if (!user) throw new Error("Utilisateur non trouvé")
  return user
}