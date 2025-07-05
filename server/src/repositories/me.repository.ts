import { eq } from "drizzle-orm"
import db from "../config/drizzle"
import { users } from "../models"

export const updateAvatar = async (userId: number, avatarUrl: string) => {
  await db.update(users).set({ image: avatarUrl }).where(eq(users.id, userId))

  const [updatedUserAvatar] = await db
    .select({
      image: users.image,
    })
    .from(users)
    .where(eq(users.id, userId))

  return updatedUserAvatar
}
