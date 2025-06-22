import { currentUser } from "controllers/user.controller"
import { Hono } from "hono"


const userRoutes = new Hono()
  .get('/me', currentUser)


export default userRoutes