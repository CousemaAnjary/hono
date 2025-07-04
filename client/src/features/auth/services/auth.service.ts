import { z } from "zod"
import { authFetch } from "@/src/lib/authFetch"
import { loginSchema } from "@/src/validators/auth.validator"
import { LoginResponse, LogoutResponse } from "../types/auth"


// Fonction pour se connecter
export const login = async (data: z.infer<typeof loginSchema>) => {
  return await authFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

// Fonction pour se déconnecter
export const logout = async () => {
  return await authFetch<LogoutResponse>("/auth/logout", {
    method: "POST",
  })
}
