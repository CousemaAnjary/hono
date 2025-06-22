import { Context } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { get } from "http"

const COOKIE_NAME = "auth_token"


/**
 * Définit un cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 * @param token - Le token JWT à stocker dans le cookie
 */
export const setAuthCookie = (c: Context, token: string) => {
  setCookie(c, COOKIE_NAME, token, {
    httpOnly: true, // cookie Http-Only
    secure: process.env.NODE_ENV === "production", // seulement pour HTTPS en production
    path: "/", // accessible sur tout le site
    sameSite: "Strict", // strict pour éviter les attaques CSRF
    maxAge: 60 * 60, // expire dans 1 heure
  })
}

/**
 * Récupère le cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 * @returns Le token JWT ou undefined si le cookie n'existe pas
 */
export const getAuthCookie = (c: Context): string | undefined => {
  return getCookie(c, COOKIE_NAME)
}

/**
 * Supprime le cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 */
export const deleteAuthCookie = (c: Context) => {
  deleteCookie(c, COOKIE_NAME, {
    path: "/", // doit correspondre au path du cookie
    secure: true, // seulement pour HTTPS
  })
}
