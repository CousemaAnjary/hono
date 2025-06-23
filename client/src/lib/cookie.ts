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


/**
 * Supprime le cookie d'authentification.
 * @return {Promise<void>}
 */
export const deleteToken = async (): Promise<void> => {
  const cookieStore = await cookies()
  cookieStore.delete("auth_token")
}