/* eslint-disable @next/next/no-img-element */
"use client"

import user from "@/public/images/user.png"
import { Button } from "@/src/components/ui/button"
import { useFileUpload } from "@/src/hooks/use-file-upload"
import { XIcon } from "lucide-react"
import { useCurrentUser } from "../queries/useCurrentUser"

export default function AvatarUpload() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { data: userPayload } = useCurrentUser()
  const previewUrl = userPayload?.image || null
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
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
        className="relative size-36 rounded-xl border-2 border-white p-0 shadow-md overflow-hidden bg-transparent"
        onClick={openFileDialog}
        aria-label={previewUrl ? "Changer l'image" : "Uploader une image"}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Aperçu de l'image"
            className="size-full object-cover"
          />
        ) : (
          <img
            src={typeof user === "string" ? user : user.src}
            alt="Image de profil par défaut"
            className="size-24"
          />
        )}
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
