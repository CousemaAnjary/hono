import "dotenv/config"
import { Pool } from "pg"
import * as schema from "../database/schema/index.js"
import { drizzle } from "drizzle-orm/node-postgres"


const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
})
const db = drizzle(pool, { schema })

export default db