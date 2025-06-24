// La méthode cookies() de next/headers permet de uniquement de lire le 
import { cookies } from "next/headers"


/**
 * Récupère le token d'authentification stocké dans les cookies.
 * @return {Promise<string | null>} Le token d'authentification ou null s'il n'existe pas.
 */
export const getToken = async (): Promise<string | null> => {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value
  return token || null
}