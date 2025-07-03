CREATE TYPE "public"."status" AS ENUM('en cours', 'terminé', 'en pause');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('manga', 'manhwa', 'manhua');--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "mangas" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"cover_url" text NOT NULL,
	"rating" real DEFAULT 0,
	"type" "type" NOT NULL,
	"status" "status" NOT NULL,
	"is_featured" boolean DEFAULT false,
	"is_recommended" boolean DEFAULT false,
	"is_popular" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "mangas_slug_unique" UNIQUE("slug")
);
