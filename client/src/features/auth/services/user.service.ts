import { authFetch } from "../utils/authFetch"
import { getCurrentUserResponse } from "../types/user"


// Récupère l'utilisateur connecté
export const getCurrentUser = async () => {
  const res = await authFetch<getCurrentUserResponse>("/user/me")
  return res.user
}
