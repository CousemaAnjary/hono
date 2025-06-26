"use client"

import { BellIcon } from "lucide-react"
import { Button } from "../ui/button"

export default function NotificationMenu() {
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
    <>
      <Button
        size="icon"
        variant="ghost"
        className="text-muted-foreground relative size-8 rounded-full shadow-none"
        aria-label="Open notifications"
      >
        <BellIcon size={16} aria-hidden="true" />
      </Button>
    </>
  )
}
