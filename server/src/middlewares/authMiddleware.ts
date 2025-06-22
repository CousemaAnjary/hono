import { MiddlewareHandler } from "hono"
import { getAuthCookie } from "utils/cookies.server"
import { verifyToken } from "utils/jwt"

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const token = getAuthCookie(c)
  if (!token) return c.json({ success: false, message: "Token manquant" }, 401)

  try {
    // Vérification et décodage du token (à implémenter)
    const payload = verifyToken(token)

    // Ajout des informations de l'utilisateur au contexte
    c.set("user", payload)

    return next()
  } catch (error) {
    return c.json({ success: false, message: "Token invalide ou expiré" }, 401)
  }
}
