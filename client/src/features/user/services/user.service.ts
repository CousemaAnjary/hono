import { authFetch } from "@/src/lib/authFetch"
import { GetCurrentUserResponse } from "@/src/types/user"


// Récupère l'utilisateur connecté
export const getCurrentUser = async () => {
  const res = await authFetch<GetCurrentUserResponse>("/user/me")
  return res.userPayload
}