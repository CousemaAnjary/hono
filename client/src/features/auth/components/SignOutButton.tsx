"use client"
import { DropdownMenuItem } from "@/src/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { BsEmojiTear } from "react-icons/bs"
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
        <BsEmojiTear
          size={18}
          className="mr-1  text-pink-700"
          aria-hidden="true"
        />
      ) : (
        <LogOut size={18} className="mr-1  text-pink-700" aria-hidden="true" />
      )}
      <span>Déconnexion</span>
    </DropdownMenuItem>
  )
}
