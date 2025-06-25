import { User } from "../types/auth"
import { authFetch } from "../utils/authFetch"


// Récupère l'utilisateur actuellement connecté
export const getCurrentUser = async () => authFetch<User>("/user/me")

