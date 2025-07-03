/* eslint-disable @next/next/no-img-element */
"use client"
import user from "@/public/images/user.png"
import { Button } from "@/src/components/ui/button"
import { useFileUpload } from "@/src/hooks/use-file-upload"
import { PencilIcon, XIcon } from "lucide-react"
import { useCurrentUser } from "../queries/useCurrentUser"


export default function AvatarUpload() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { data: userPayload } = useCurrentUser()
  const previewUrl = userPayload?.image || null
  const [{ files }, { removeFile, openFileDialog, getInputProps }] = useFileUpload({
      accept: "image/*",
    })
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="relative">
      <Button
        variant="outline"
        className="relative size-36 rounded-xl border-2 border-white p-0 shadow-md overflow-hidden bg-transparent group"
        onClick={openFileDialog}
        aria-label={previewUrl ? "Changer l'image" : "Uploader une image"}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Aperçu de l'image"
            className="size-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
        ) : (
          <img
            src={typeof user === "string" ? user : user.src}
            alt="Image de profil par défaut"
            className="size-24 transition-all duration-300 group-hover:blur-sm"
          />
        )}
        
        {/* Icône d'édition qui apparaît au hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <PencilIcon className="size-8 text-white drop-shadow-lg" />
        </div>
      </Button>

      {previewUrl && (
        <Button
          onClick={() => removeFile(files[0]?.id)}
          size="icon"
          className="absolute -top-2 -right-2 size-6 rounded-full border-2 border-background shadow-none"
          aria-label="Supprimer l'image"
        >
          <XIcon className="size-3.5" />
        </Button>
      )}

      <input
        {...getInputProps()}
        className="sr-only"
        aria-label="Uploader un fichier image"
        tabIndex={-1}
      />
    </div>
  )
}
