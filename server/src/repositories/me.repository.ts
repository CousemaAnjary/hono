import { eq } from "drizzle-orm"
import db from "../config/drizzle"
import { users } from "../models"

export const updateUserAvatarById = async (userId: number, avatarUrl: string) => {
  await db.update(users).set({ image: avatarUrl }).where(eq(users.id, userId))

  const [updated] = await db
    .select({
      id: users.id,
      image: users.image,
    })
    .from(users)
    .where(eq(users.id, userId))

  return updated
}
