  "use client"

  import { useLogout } from "@/src/features/auth/hooks/useLogout"
  import { LogOutIcon } from "lucide-react"
  import { useRouter } from "next/navigation"
  import { DropdownMenuItem } from "../ui/dropdown-menu"

  export default function SignOut() {
    // ! STATE (état, données) de l'application
    const router = useRouter()
    const { mutate: logout } = useLogout()


    // ! ACTIONS (actions, fonctions) de l'application
    const handleSignOut = async () => {
      logout(undefined, {
        onSuccess: () => {
          router.push("/auth/login")
        },
        onError: (error) => {
          console.error("Erreur lors de la déconnexion :", error)
        },
      })
    }


    // ! AFFICHAGE (affichage, UI) de l'application
    return (
      <DropdownMenuItem className="hover:cursor-pointer" onClick={handleSignOut}>
        <LogOutIcon size={16} className="mr-1 opacity-60" aria-hidden="true" />
        <span>Déconnexion</span>
      </DropdownMenuItem>
    )
  }
