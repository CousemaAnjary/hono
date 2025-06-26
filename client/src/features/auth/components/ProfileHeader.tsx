"use client"
import profileCover from "@/public/images/profile-cover.jpg"
import { Avatar, AvatarImage } from "@/src/components/ui/avatar"
import Image from "next/image"
import { useCurrentUser } from "../queries/useCurrentUser"

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
    <div className="mx-auto overflow-hidden rounded-md bg-white shadow-sm">
      <div className="relative h-72 w-full">
        <Image
          src={profileCover}
          alt="Cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative -mt-20 flex flex-col items-start px-6 pb-6">
        <div className="relative">
          <Avatar className="h-36 w-36 rounded-xl">
            <AvatarImage
              src= {`https://api.dicebear.com/9.x/lorelei/svg?seed=${userPayload?.email}`}
              alt="Profile image"
            />
          </Avatar>
        </div>

        <h2 className="mt-2 font-inter font-semibold text-gray-800">
          {userPayload?.name}
        </h2>
        <p className="mt-1 text-center font-spaceGrotesk text-sm text-muted-foreground max-md:mt-2 max-md:text-left">
          Explorateur curieux, toujours en quête de nouvelles expériences
        </p>
      </div>
    </div>
  )
}
