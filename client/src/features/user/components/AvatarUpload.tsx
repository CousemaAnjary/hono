"use client"
import { Avatar, AvatarImage } from "@/src/components/ui/avatar"
import { useCurrentUser } from "../queries/useCurrentUser"

export default function AvatarUpload() {
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
    <div className="relative inline-flex">
      <Avatar className="h-36 w-36 rounded-xl border-2 border-white shadow-md">
        <AvatarImage
          src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${userPayload?.email}`}
          alt="Profile image"
        />
      </Avatar>
    </div>
  )
}
