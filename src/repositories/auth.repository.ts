import { eq } from "drizzle-orm"
import db from "../config/drizzle"
import { users } from "../models"


export const findUserByEmail = async (email: string) => {
  const result = await db.select().from(users).where(eq(users.email, email))
  return result[0] ?? null
}

export const createUser = async (name:string, email:string, hashedPassword:string) => {
  const result = await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  }).returning()

  return result[0] 
}
