import { Hono } from "hono"
import { getCurrentUser } from "controllers/user.controller"


const userRoutes = new Hono()
  .get('/me', getCurrentUser)


export default userRoutes