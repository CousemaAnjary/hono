"use client"

import UserMenu from "./UserMenu"
import NotificationMenu from "./NotificationMenu"

export default function RightMenu() {
  // ! STATE (état, données) de l'application

  // ! ACTIONS (actions, fonctions) de l'application

  // ! AFFICHAGE (affichage, UI) de l'application
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
