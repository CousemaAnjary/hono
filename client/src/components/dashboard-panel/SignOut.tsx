"use client"

import { LogOutIcon } from "lucide-react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { logout } from "@/src/services/auth.service"

export default function SignOut() {
  // ! STATE (état, données) de l'application


  // ! ACTIONS (actions, fonctions) de l'application
  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error)
    }
  }

  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <DropdownMenuItem className="hover:cursor-pointer" onClick={handleSignOut}>
      <LogOutIcon size={16} className="mr-1 opacity-60" aria-hidden="true" />
      <span>Déconnexion</span>
    </DropdownMenuItem>
  )
}
