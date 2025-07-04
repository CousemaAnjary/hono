import { Hono } from "hono"
import meRoutes from "./me.routes"
import authRoutes from "./auth.routes"
import { authMiddleware } from "middlewares/authMiddleware"


const router = new Hono()

// Routes publiques (sans middleware)
const publicRoutes = new Hono()
  .route("/auth", authRoutes)


// Route protégées (avec middleware)
const privateRoutes = new Hono()
privateRoutes.use("*", authMiddleware) 
  .route("/me", meRoutes)



// Regroupement des routes publiques et privées
router.route("/", publicRoutes)
router.route("/", privateRoutes)

export default router