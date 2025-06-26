"use client"
import { LogOutIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLogout } from "../hooks/useLogout"
import { DropdownMenuItem } from "@/src/components/ui/dropdown-menu"


export default function SignOutButton() {
  /**
   * ! STATE (état, données) de l'application
   */
  const router = useRouter()
  const { mutate: logout } = useLogout()

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const handleSignOut = async () => {
    logout(undefined, {
      onSuccess: () => { router.push("/login") },
      onError: (error) => { console.error("Erreur lors de la déconnexion :", error) }, 
    })
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <DropdownMenuItem className="hover:cursor-pointer" onClick={handleSignOut}>
      <LogOutIcon size={16} className="mr-1 opacity-60" aria-hidden="true" />
      <span>Déconnexion</span>
    </DropdownMenuItem>
  )
}
