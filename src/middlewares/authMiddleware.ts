import { MiddlewareHandler } from "hono"
import { verifyToken } from "utils/jwt"


export const authMiddleware:MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header("Authorization")

  const token = authHeader?.split(" ")[1]
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