import "dotenv/config"
import { Pool } from "pg"
import * as schema from "../models/index"
import { drizzle } from "drizzle-orm/node-postgres"


const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
})
const db = drizzle(pool, { schema })

export default db