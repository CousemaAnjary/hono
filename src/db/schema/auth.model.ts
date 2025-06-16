import { integer, pgTable, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: integer("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})
