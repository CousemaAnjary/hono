import { Hono } from "hono"
import { loginController, logout, register } from "../controllers/auth.controller"


const authRoutes = new Hono()
  .post('/register', register)
  .post('/login', loginController)
  .post('/logout', logout)


export default authRoutes