"use client"

import UserMenu from "../../features/auth/components/UserMenu"
import NotificationMenu from "./NotificationMenu"

export default function RightMenu() {
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
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {/* <InfoMenu /> */}
        <NotificationMenu />
      </div>
      <UserMenu />
    </div>
  )
}
