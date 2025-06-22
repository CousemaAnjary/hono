import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export default function page() {
  // ! STATE (état, données) de l'application

  // ! ACTIONS (actions, fonctions) de l'application

  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <Button asChild className="font-semibold m-5 bg-blue-950">
        <Link href="/login">Login</Link>
      </Button>
    </>
  )
}
