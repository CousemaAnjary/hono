"use client"

import { useTheme } from "next-themes"
import { Monitor, MoonStar, Sun } from "lucide-react"
import { Button } from "@/src/components/ui/button"


export default function ThemeSwitcher() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { theme, setTheme } = useTheme()


  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */


  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="flex gap-1">
      <Button variant={theme === "light" ? "outline" : "ghost"} size="icon" className="size-8" onClick={() => setTheme("light")}>
        <Sun className="size-4" />
      </Button>
      <Button variant={theme === "system" ? "outline" : "ghost"} size="icon" className="size-8" onClick={() => setTheme("system")}>
        <Monitor className="size-4" />
      </Button>
      <Button variant={theme === "dark" ? "outline" : "ghost"} size="icon" className="size-8" onClick={() => setTheme("dark")}>
        <MoonStar className="size-4" />
      </Button>
    </div>
  )
}