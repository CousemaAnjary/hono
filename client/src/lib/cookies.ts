import Cookies from "js-cookie"

/**
 * Récupère le token JWT depuis les cookies.
 * @returns Le token ou undefined s’il n’existe pas
 */
export const getToken = (): string | undefined => {
  return Cookies.get("auth_token")
}

/**
 * Supprime le token JWT des cookies.
 */
export const removeToken = () => {
  Cookies.remove("auth_token")
}
