"use client"

import SearchButton from "./SearchButton"
import NotificationMenu from "./NotificationMenu"
import UserMenu from "../../features/user/components/UserMenu"


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
      {/* Barre de recherche stylisée */}
       <SearchButton />

      <div className="flex items-center gap-2">
        <NotificationMenu />
      </div>

      <UserMenu />
    </div>
  )
}
