"use client"

import { Search } from "lucide-react"
import UserMenu from "../../features/user/components/UserMenu"
import NotificationMenu from "./NotificationMenu"
import SearchButton from "./SearchButton"

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
