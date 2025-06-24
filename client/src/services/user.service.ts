import { apiUrl } from "../lib/api"
import { User } from "../types/auth"
import { authFetch } from "../utils/authFetch"

export const getCurrentUser = async (): Promise<User | null> => {
  const res = await fetch(`${apiUrl}/user/me`, {
    method: "GET",
    credentials: "include", 
  })
    if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  return await res.json()
}
