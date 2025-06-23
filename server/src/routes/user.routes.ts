import { getCurrentUser } from "controllers/user.controller"
import { Hono } from "hono"


const userRoutes = new Hono()
  .get('/me', getCurrentUser)


export default userRoutes