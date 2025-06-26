"use client"
import Image from "next/image"
import profileCover from "@/public/images/profile-cover.jpg"

export default function ProfileHeader() {
  /**
   * ! STATE (état, données) de l'application
   */
  
  
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
        <div className="relative size-36 overflow-hidden rounded-xl ">
          
          {/* <img
            src={
              session?.user.image ||
              `https://api.dicebear.com/9.x/lorelei/svg?seed=${session?.user.email}`
            }
            alt="Profile picture"
            width={144}
            height={144}
            className="size-full object-cover"
          /> */}
        </div>

        <h2 className="mt-2 font-inter font-semibold text-gray-800">
          {/* {session?.user.name} */}
        </h2>
        <p className="mt-1 text-center font-spaceGrotesk text-sm text-muted-foreground max-md:mt-2 max-md:text-left">
          Explorateur curieux, toujours en quête de nouvelles expériences
        </p>
      </div>
    </div>
  )
}