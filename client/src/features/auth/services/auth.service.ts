import { z } from "zod"
import { authFetch } from "@/src/lib/authFetch"
import { GetCurrentUserResponse, LoginResponse } from "@/src/types/auth"

import { loginSchema } from "@/src/validators/auth.validator"


// Fonction pour se connecter
export const login = async (data: z.infer<typeof loginSchema>) => {
  return await authFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

// Récupère l'utilisateur connecté
export const getCurrentUser = async () => {
  const res = await authFetch<GetCurrentUserResponse>("/user/me")
  return res.currentUser
}

// Fonction pour se déconnecter
export const logout = async () => {
  await authFetch("/auth/logout", {
    method: "POST",
  })
}
