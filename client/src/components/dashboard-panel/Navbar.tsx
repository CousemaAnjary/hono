"use client"
import RightMenu from "./RightMenu"

export default function Navbar() {
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
    <header className="border-b px-4 md:px-14">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* <Link href="#" className="text-primary hover:text-primary/90 font-semibold ">
            Hono
          </Link> */}

          {/* <NavigationMenuDesktop /> */}
        </div>

        {/* Right side */}
        <RightMenu />
      </div>
    </header>
  )
}
