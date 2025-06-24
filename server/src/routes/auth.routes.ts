import { Hono } from "hono"
import { login, logout, register } from "../controllers/auth.controller"


const authRoutes = new Hono()
  .post('/register', register)
  .post('/login', login)
  .post('/logout', logout)


export default authRoutes