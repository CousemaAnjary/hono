import { authFetch } from "@/src/lib/authFetch"
import { GetCurrentUserResponse } from "../types/user"


// Récupère l'utilisateur connecté
export const getCurrentUser = async () => {
  const res = await authFetch<GetCurrentUserResponse>("/me")
  return res.userPayload
}