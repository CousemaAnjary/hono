import { z } from "zod"
import { apiUrl } from "../lib/api"
import { LoginResponse } from "../types/auth"
import { loginSchema } from "../validators/auth.validator"


export const login = async (data: z.infer<typeof loginSchema>):Promise<LoginResponse> => {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error((await response.json()).message)
  return await response.json() as LoginResponse
}

export const logout = async ():Promise<void> => {
  const res = await fetch(`${apiUrl}/auth/logout`, {
    method: "POST",
    credentials: "include",
  })
  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  
  return await res.json()
}