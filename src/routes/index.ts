import { Hono } from "hono"
import authRoutes from "./auth.routes"

const router = new Hono()
  .route("/auth", authRoutes)


export default router