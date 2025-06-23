import { Context } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"

const REFRESH_COOKIE_NAME = "refresh_token"

/**
 * Définit un cookie HTTP-only contenant le token de rafraîchissement.
 * @param c - Le contexte Hono
 * @param token - Le token de rafraîchissement à stocker dans le cookie
 */
export const setRefreshTokenCookie = (c: Context, token: string) => {
  setCookie(c, REFRESH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "Strict",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  })
}

/**
 * Récupère le cookie HTTP-only contenant le token de rafraîchissement.
 * @param c - Le contexte Hono
 * @returns Le token de rafraîchissement ou undefined si le cookie n'existe pas
 */
export const getRefreshTokenCookie = (c: Context): string | undefined => {
  return getCookie(c, REFRESH_COOKIE_NAME)
}


/**
 * Supprime le cookie HTTP-only contenant le token de rafraîchissement.
 * @param c - Le contexte Hono
 */
export const deleteRefreshTokenCookie = (c: Context) => {
  deleteCookie(c, REFRESH_COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "Strict",
  })
}