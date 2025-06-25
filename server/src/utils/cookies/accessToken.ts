import { Context } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"

const COOKIE_NAME = "auth_token"

/**
 * Définit un cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 * @param token - Le token JWT à stocker dans le cookie
 */
export const setAccessTokenCookie = (c: Context, token: string) => {
  setCookie(c, COOKIE_NAME, token, {
    httpOnly: true, // cookie Http-Only
    secure: process.env.NODE_ENV === "production", // seulement pour HTTPS en production( cache le cookie)
    path: "/", // accessible sur tout le site
    sameSite: "Strict", // strict pour éviter les attaques CSRF
    maxAge: 60 * 15, // synchro avec la durée de vie du token (15 minutes)
  })
}


/**
 * Récupère le cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 * @returns Le token JWT ou undefined si le cookie n'existe pas
 */
export const getAccessTokenCookie = (c: Context): string | undefined => {
  return getCookie(c, COOKIE_NAME)
}


/**
 * Supprime le cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 */
export const deleteAccessTokenCookie = (c: Context) => {
  deleteCookie(c, COOKIE_NAME, {
    httpOnly: true, // cookie Http-Only
    path: "/", // doit correspondre au path du cookie
    sameSite: "Strict", // strict pour éviter les attaques CSRF
    secure: process.env.NODE_ENV === "production",
  })
}
