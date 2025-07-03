"use client"

import { Search } from "lucide-react"

interface SearchButtonProps {
  onClick: () => void
}

export default function SearchButton({ onClick }: SearchButtonProps) {
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
     <div className="relative hidden md:flex items-center">
      <button
        type="button"
         onClick={onClick}
        className="group flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-muted-foreground shadow-sm transition hover:bg-muted"
      >
        <Search className="h-4 w-4 text-gray-500" />
        <span className="text-sm text-gray-500 font-spaceGrotesk font-medium">Rechercher tout</span>
        <kbd className="ml-auto rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700 font-spaceGrotesk font-medium">
          CTRL + K
        </kbd>
      </button>
    </div>
  )
}