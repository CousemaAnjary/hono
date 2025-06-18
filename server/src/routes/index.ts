import { Hono } from "hono"
import authRoutes from "./auth.routes"
import { authMiddleware } from "middlewares/authMiddleware"

const router = new Hono()

// Routes publiques (sans middleware)
const publicRoutes = new Hono()
  .route("/auth", authRoutes)


// Route protégées (avec middleware)
const privateRoutes = new Hono()
privateRoutes.use("*", authMiddleware) // Appliquer le middleware à toutes les routes privées
  // .route("/posts", postRoutes)



// Regroupement des routes publiques et privées
router.route("/d", publicRoutes)
router.route("/", privateRoutes)

export default router