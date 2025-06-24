"use client"

import { logout } from "@/src/services/auth.service"
import { LogOutIcon } from "lucide-react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function SignOut() {
  // ! STATE (état, données) de l'application
  const router = useRouter()

  // ! ACTIONS (actions, fonctions) de l'application
  const handleSignOut = async () => {
    try {
      await logout()
      router.push("/login")
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
