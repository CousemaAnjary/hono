/* eslint-disable @next/next/no-img-element */
"use client"
import user from "@/public/images/user.png"
import { Button } from "@/src/components/ui/button"
import { useFileUpload } from "@/src/hooks/use-file-upload"
import { Pencil, XIcon } from "lucide-react"
import { useState } from "react"
import AvatarCropDialog from "./AvatarCropDialog"

export default function AvatarUpload() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    })

  const fileId = files[0]?.id
  const previewUrl = files[0]?.preview || null
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null)
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="relative size-36">
      <Button
        variant="outline"
        className="group relative size-full rounded-xl border-2 border-white p-0 shadow-md overflow-hidden bg-transparent hover:bg-transparent"
        onClick={openFileDialog}
      >
        <div className="absolute inset-0">
          <img
            src={finalImageUrl || user.src}
            alt="Image de profil"
            className={`h-full w-full transition-all duration-200 group-hover:blur-sm ${
              finalImageUrl ? "object-cover" : "object-contain p-5"
            }`}
          />
        </div>

        {/* Icône d'édition */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <Pencil className="size-7 text-white drop-shadow-lg" />
        </div>
      </Button>

      {(previewUrl || finalImageUrl) && (
        <Button
          onClick={() => {
            if (fileId) removeFile(fileId)
            setFinalImageUrl(null)
          }}
          size="icon"
          className="absolute -top-2 -right-2 size-6 rounded-full border-2 border-background shadow-none z-10"
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

      <AvatarCropDialog
        isOpen={isDialogOpen}
        fileId={fileId}
        setIsOpen={setIsDialogOpen}
        previewUrl={previewUrl}
        setFinalImageUrl={setFinalImageUrl}
      />
    </div>
  )
}
