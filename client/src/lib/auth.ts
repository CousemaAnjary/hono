import { User } from "../types/auth"
import { jwtDecode } from "jwt-decode"
import { getToken } from "./cookies"


export const getCurrentUser = (): User | null => {
  const token = getToken()
  if (!token) return null

  try {
    const payload = jwtDecode(token) as User
    return payload

  } catch (error) {
    return null
  }

}