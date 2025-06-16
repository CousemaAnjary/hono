import { Hono } from "hono"
const authRoutes = new Hono()

// Importation des contrôleurs
import { register } from "../controllers/auth.controller.js"


authRoutes.post('/register', register)


export default authRoutes