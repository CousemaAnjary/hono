import { User } from "../types/user"
import { authFetch } from "../utils/authFetch"

// Récupère l'utilisateur connecté 
export const getCurrentUser = async () => authFetch<User>("/user/me")
