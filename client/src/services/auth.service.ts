import { z } from "zod"
import { LoginResponse } from "../types/auth"
import { loginSchema } from "../validators/auth.validator"

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string


export const login = async (data: z.infer<typeof loginSchema>):Promise<LoginResponse> => {
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Login failed")
  
  return await res.json()
}
