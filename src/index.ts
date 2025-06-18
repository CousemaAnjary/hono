import "dotenv/config"
import { Hono } from 'hono'
import router from './routes'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'

// App principale
const app = new Hono()

// Middleware CORS (autorise toutes les origines par défaut)app.use(cors())
app.use('*', cors())

// Routes
app.route("/api", router)

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
