import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow(),
})


// Type générés automatiquement par Drizzle
export type User = InferSelectModel<typeof users> 
export type InsertUser = InferInsertModel<typeof users>