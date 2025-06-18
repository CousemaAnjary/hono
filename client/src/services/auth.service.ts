import { z } from "zod"
import { loginSchema } from "../validators/auth.validator"

export const login = async (data: z.infer<typeof loginSchema>):Promise<{user , token}> => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Login failed")
  
  return await res.json()
}
