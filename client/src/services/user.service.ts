import { authFetch } from "../utils/authFetch"
import { getCurrentUserResponse } from "../types/user"

// Récupère l'utilisateur connecté 
export const getCurrentUser = async () => authFetch<getCurrentUserResponse>("/user/me")
