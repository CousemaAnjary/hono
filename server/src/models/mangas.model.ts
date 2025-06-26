import { boolean, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

// Define the enum type separately
export const typeEnum = pgEnum("type", ["manga", "manhwa", "manhua"])
export const statusEnum = pgEnum("status", ["en cours", "terminé", "en pause"])

export const mangas = pgTable("mangas", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  coverUrl: text("cover_url").notNull(),
  type: typeEnum("type").notNull(),
  status: statusEnum("status").notNull(),
  isFeatured: boolean("is_featured").default(false),
  isRecommended: boolean("is_recommended").default(false),
  isPopular: boolean("is_popular").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// 1. manga (漫画) 🇯🇵
    // Origine : Japon
    // Format : noir & blanc, lecture de droite à gauche
    // Exemples : One Piece, Naruto, Attack on Titan

// 2. manhwa (만화) 🇰🇷
    // Origine : Corée du Sud
    // Format : souvent en couleur, lecture de gauche à droite
    // Publiés souvent en scroll vertical (webtoon)
    // Exemples : Solo Leveling, Tower of God

// 3. manhua (漫画) 🇨🇳
    // Origine : Chine
    // Format : souvent en couleur, lecture de gauche à droite
    // Style proche des manhwas, mais avec des noms chinois
    // Exemples : Tales of Demons and Gods, The King’s Avatar