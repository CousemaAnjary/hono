import { Hono } from "hono"
import { getCurrentUser, updateMyAvatar } from "controllers/me.controller"


const meRoutes = new Hono()
  .get('/', getCurrentUser)
  .patch('/avatar', updateMyAvatar)


export default meRoutes