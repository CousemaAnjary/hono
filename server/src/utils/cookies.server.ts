import { Context } from "hono"
import { setCookie } from "hono/cookie"

const COOKIE_NAME = "auth_token"


/**
 * Définit un cookie d'authentification.
 * @param c - Le contexte Hono
 * @param token - Le token JWT à stocker dans le cookie
 */
export const setAuthCookie = (c: Context, token: string) => {
  setCookie(c, COOKIE_NAME, token, {
    httpOnly: true, // cookie Http-Only
    secure: true, // seulement pour HTTPS
    path: "/", // accessible sur tout le site
    sameSite: "Strict", // strict pour éviter les attaques CSRF
    maxAge: 60 * 60, // expire dans 1 heure
  })
}
