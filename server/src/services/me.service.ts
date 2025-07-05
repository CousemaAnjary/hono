import { Context } from "hono"
import { UserPayload } from "types/auth"

export const currentUser = async (c: Context): Promise<UserPayload> => {
  // Récupérer l'utilisateur à partir du contexte
  const user = c.get("user") as UserPayload
  if (!user) throw new Error("Utilisateur non trouvé")
  return user
}

export const updateUserAvatar = async (image: File) => {
  // Lire le contenu binaire du fichier
  const buffer = await image.arrayBuffer()

  // renommer le fichier avec un nom unique
  const extension = image.name.split(".").pop() // ex: "jpg"
  const filename = `${Date.now()}-avatar.${extension}`

  // 📂 Chemin de sauvegarde local
  const localPath = `./uploads/${filename}`
}
