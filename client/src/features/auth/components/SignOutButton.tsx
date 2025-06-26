"use client"
import { DropdownMenuItem } from "@/src/components/ui/dropdown-menu"
import { CloudRain, Frown } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLogout } from "../hooks/useLogout"

export default function SignOutButton() {
  /**
   * ! STATE (état, données) de l'application
   */
  const router = useRouter()
  const { mutate: logout } = useLogout()
  const [isHovered, setIsHovered] = useState(false)

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const handleSignOut = async () => {
    logout(undefined, {
      onSuccess: () => {
        router.push("/login")
      },
      onError: (error) => {
        console.error("Erreur lors de la déconnexion :", error)
      },
    })
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <DropdownMenuItem
      className="hover:cursor-pointer font-spaceGrotesk"
      onClick={handleSignOut}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Frown size={16} className="mr-1 opacity-60" aria-hidden="true" />
      ) : (
        <CloudRain size={16} className="mr-1 opacity-60" aria-hidden="true" />
      )}
      <span>Déconnexion</span>
    </DropdownMenuItem>
  )
}
