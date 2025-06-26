"use client"

import { Search } from "lucide-react"
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
      {/* Barre de recherche stylisée */}
      <div className="relative hidden md:flex items-center">
        <button
          type="button"
          className="group flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-muted-foreground shadow-sm transition hover:bg-muted"
        >
          <Search className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500 font-spaceGrotesk">Rechercher tout</span>
          <kbd className="ml-auto rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600 font-spaceGrotesk">
            CTRL + K
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <NotificationMenu />
      </div>

      <UserMenu />
    </div>
  )
}
