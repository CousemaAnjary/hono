"use client"
import Link from "next/link"
import RightMenu from "./RightMenu"

export default function Navbar() {
  /**
   * ! STATE (état, données) de l'application
   */
  const navigationLinks = [{ href: "/dashboard", label: "Dashboard" }]
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
        <nav className="flex items-center gap-8">
          <Link
            href="#"
            className="text-xl font-bold  font-mansalva"
          >
            Hono-API
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <RightMenu />
      </div>
    </header>
  )
}
