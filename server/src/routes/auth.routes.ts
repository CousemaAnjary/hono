import { Hono } from "hono"
import { login, refreshToken, register } from "../controllers/auth.controller"

const authRoutes = new Hono()
  .post('/register', register)
  .post('/login', login)
  .post('/refresh', refreshToken)


export default authRoutes