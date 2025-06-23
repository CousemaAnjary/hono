import { z } from "zod"
import { apiUrl } from "../lib/api"
import { LoginResponse } from "../types/auth"
import { loginSchema } from "../validators/auth.validator"


export const login = async (data: z.infer<typeof loginSchema>):Promise<LoginResponse> => {
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // pour que le cookie envoyé par le serveur soit stocké dans le navigateur 
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  
  return await res.json()
}

export const refreshAccessToken = async () => {
  const res = await fetch(`${apiUrl}/auth/refresh`, {
    method: "POST", 
    credentials: "include", 
  })
  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  return await res.json()
}