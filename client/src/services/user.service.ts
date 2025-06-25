import { getCurrentUserResponse } from "../types/user"
import { authFetch } from "../utils/authFetch"

// Récupère l'utilisateur connecté
export const getCurrentUser = async () => {
  const res = await authFetch<getCurrentUserResponse>("/user/me")
  return res.user
}
