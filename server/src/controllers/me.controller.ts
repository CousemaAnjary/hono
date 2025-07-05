import { Context } from "hono"
import { currentUser } from "services/me.service"
import { jsonError } from "utils/jsonError"

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
export const updateMyAvatar = async (c: Context) => {}