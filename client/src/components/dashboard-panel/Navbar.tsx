"use client"

import { Bookmark, Calendar, Heart, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import RightMenu from "./RightMenu"

export default function Navbar() {
  /**
   * ! STATE (état, données) de l'application
   */
  const pathname = usePathname()

  const navigationLinks = [
    { href: "/dashboard", label: "Accueil", icon: Home },
    { href: "/mangas", label: "Mangas", icon: Bookmark },
    { href: "/planning", label: "Planning de lecture", icon: Calendar },
    { href: "/favoris", label: "Favoris", icon: Heart },
  ]

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <header className="relative z-10 mx-auto mt-4 w-full max-w-7xl rounded-full border bg-white px-6 py-1  dark:bg-zinc-950 max-md:mt-0 max-md:rounded-none">
      <div className="flex h-12 items-center justify-between">
        {/* Left side */}
        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className="text-2xl font-bold font-mansalva text-primary"
          >
            Otaku<span className="text-pink-500">Hub</span>
          </Link>

          <ul className="hidden md:flex items-center gap-4 text-sm font-medium">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href
              const IconComponent = link.icon
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors px-3 py-2 rounded-md font-spaceGrotesk flex items-center gap-2 ${
                      isActive
                        ? "bg-pink-50 text-pink-700 font-semibold "
                        : " hover:text-pink-700"
                    }`}
                  >
                    <IconComponent size={16} />
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right side */}
        <RightMenu />
      </div>
    </header>
  )
}
