import "dotenv/config"
import { Hono } from 'hono'
import router from './routes'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'


// App principale
const app = new Hono()

// Middleware CORS (autorise toutes les origines par défaut)
app.use('*', cors({
  origin: "http://localhost:3000",
  credentials: true, // Autorise les cookies 
}))

// ✅ Sert les fichiers statiques depuis le dossier `uploads`
app.use("/uploads/*", serveStatic({ root: "./src" }))

// Routes
app.route("/api", router)

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
