import { User } from "../types/auth"
import { authFetch } from "../utils/authFetch"

export const getCurrentUser = async (): Promise<User | null> => {
  const res = await authFetch("/user/me", {
    method: "GET",
  })
  return await res.json()
}
