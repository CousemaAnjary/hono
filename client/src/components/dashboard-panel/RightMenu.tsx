"use client"
import { useState } from "react"
import SearchButton from "./SearchButton"
import NotificationMenu from "./NotificationMenu"
import UserMenu from "../../features/user/components/UserMenu"
import CommandMenuSearch from "./CommandMenuSearch"



export default function RightMenu() {
  /**
   * ! STATE (état, données) de l'application
   */
    const [openCommand, setOpenCommand] = useState(false)
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="flex items-center gap-4">
      {/* Barre de recherche stylisée */}
     <SearchButton onClick={() => setOpenCommand(true)} />

      <div className="flex items-center gap-2">
        <NotificationMenu />
      </div>

      <UserMenu />
       <CommandMenuSearch open={openCommand} setOpen={setOpenCommand} />
    </div>
  )
}
