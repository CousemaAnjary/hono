import type { User } from "@/src/types/auth"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import { getToken } from "./cookie"

export const getServerUser = async (): Promise<User | null> => {

  // Récupère le Token d'authentification depuis les cookies
  const token = await getToken()
  if (!token) return null

  try {
    return jwtDecode<User>(token)
    
  } catch {
    return null
  }
}
