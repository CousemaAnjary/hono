import { eq } from "drizzle-orm"
import db from "../config/drizzle"
import { InsertUser, User, users } from "../models"


export const findUserByEmail = async (email: string): Promise<User | null> => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))

  return user ?? null
}

export const createUser = async (userData:InsertUser):Promise<User> => {
  const [newUser] = await db.insert(users).values(userData).returning()
  return newUser
}
