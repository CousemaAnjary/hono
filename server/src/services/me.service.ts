import { Context } from "hono"
import { writeFile } from "fs/promises"
import { UserPayload } from "types/auth"
import { updateUserAvatarById } from "repositories/me.repository"


export const getCurrentUserService = async (c: Context): Promise<UserPayload> => {
  // Récupérer l'utilisateur à partir du contexte
  const user = c.get("user") as UserPayload
  if (!user) throw new Error("Utilisateur non trouvé")
  return user
}

export const updateUserAvatarService = async (image: File , c:Context ) => {

  const user = c.get("user") as UserPayload
  const userId = user.id

  // Lire le contenu binaire du fichier
  const buffer = await image.arrayBuffer()

  // renommer le fichier avec un nom unique
  const extension = image.name.split(".").pop() 
  const filename = `${Date.now()}-avatar.${extension}`

  // 📂 Chemin de sauvegarde local
  const localPath = `src/uploads/avatars/${filename}`

  // 💾 Sauvegarde sur le disque (avec Bun)
  await writeFile(localPath, Buffer.from(buffer));

  // 🔗 Construire une URL publique (exemple)
  const avatarUrl = `/uploads/avatars/${filename}`

  // Mettre à jour l'utilisateur dans la base de données 
  const updatedAvatar = await updateUserAvatarById(userId, avatarUrl)

  return updatedAvatar

}
