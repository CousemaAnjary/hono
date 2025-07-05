import { Hono } from "hono"
import { getCurrentUserController, updateMyAvatar } from "controllers/me.controller"


const meRoutes = new Hono()
  .get('/', getCurrentUserController)
  .patch('/avatar', updateMyAvatar)


export default meRoutes