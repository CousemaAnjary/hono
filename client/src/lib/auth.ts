import type { User } from "@/src/types/auth"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"

export const getServerUser = async (): Promise<User | null> => {

  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value
  if (!token) return null

  try {
    return jwtDecode<User>(token)
    
  } catch {
    return null
  }
}
