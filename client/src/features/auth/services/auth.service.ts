import { authFetch } from "@/src/lib/authFetch"
import { LoginResponse } from "@/src/types/auth"
import { getCurrentUserResponse } from "@/src/types/user"
import { loginSchema } from "@/src/validators/auth.validator"
import { z } from "zod"

// Fonction pour se connecter
export const login = async (data: z.infer<typeof loginSchema>) => {
  await authFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

// Récupère l'utilisateur connecté
export const getCurrentUser = async () => {
  const res = await authFetch<getCurrentUserResponse>("/user/me")
  return res.user
}

// Fonction pour se déconnecter
export const logout = async () => {
   await authFetch("/auth/login", {
    method: "POST",
  })
}

