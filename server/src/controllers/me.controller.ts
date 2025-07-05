import { Context } from "hono"
import { currentUser, updateUserAvatar } from "services/me.service"
import { jsonError } from "utils/jsonError"
import { myAvatarSchema } from "validators/me.validator"

// Récupère l'utilisateur connecté
export const getCurrentUser = async (c: Context) => {
  try {
    const userPayload = await currentUser(c)
    return c.json({ success: true, message: "Utilisateur récupéré avec succès", userPayload }, 200)

  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}

// Met à jour l'avatar de l'utilisateur connecté
export const updateMyAvatar = async (c: Context) => {

  // Reçoit le fichier d'avatar
  const form = await c.req.formData()
  const image = form.get("image") as File

  // Valider les données d'entrée (fichier)
  const validated = myAvatarSchema.safeParse({ image })
  if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)

  try {
    const updatedImage = await updateUserAvatar(validated.data.image, c)
    return c.json({ success: true, message: "Avatar mis à jour avec succès", updatedImage }, 200)

  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}