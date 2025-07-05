import { Hono } from "hono"
import { getCurrentUserController, updateUserAvatarController } from "controllers/me.controller"


const meRoutes = new Hono()
  .get('/', getCurrentUserController)
  .patch('/avatar', updateUserAvatarController)


export default meRoutes