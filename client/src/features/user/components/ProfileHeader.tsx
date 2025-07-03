"use client"
import profileCover from "@/public/images/profile-cover.jpg"
import Image from "next/image"
import { useCurrentUser } from "../queries/useCurrentUser"
import AvatarUpload from "./AvatarUpload"

export default function ProfileHeader() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { data: userPayload } = useCurrentUser()
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="mx-auto overflow-hidden rounded-md bg-white shadow">
      <div className="relative h-72 w-full">
        <Image
          src={profileCover}
          alt="Cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative -mt-20 flex flex-col items-start px-6 pb-6">
        <AvatarUpload />

        <h2 className="mt-2 font-inter font-semibold text-gray-800">
          {userPayload?.name}
        </h2>
        <p className="mt-1 text-center font-spaceGrotesk text-sm text-muted-foreground max-md:mt-2 max-md:text-left">
          Fan de mangas, toujours à la recherche de nouvelles aventures à
          dévorer ✨
        </p>
      </div>
    </div>
  )
}
