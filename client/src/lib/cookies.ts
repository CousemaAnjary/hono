import Cookies from "js-cookie"

/**
 * Stocke le token JWT dans les cookies du navigateur.
 * @param token - Le token JWT à stocker
 */
export const setToken = (token: string) => {
  Cookies.set("auth_token", token, {
    expires: 7, // expires dans 7 jours
    secure: true, // seulement pour HTTPS
    sameSite: "Strict", // strict pour éviter les attaques CSRF
    path: "/", // accessible sur tout le site
  })
}

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
