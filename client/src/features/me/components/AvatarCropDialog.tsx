"use client"

import { Button } from "@/src/components/ui/button"
import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "@/src/components/ui/cropper"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog"
import { Area, getCroppedImg } from "@/src/utils/crop"
import { useCallback, useEffect, useRef, useState } from "react"
import { AvatarCropDialogProps } from "../types/avatar"

export default function AvatarCropDialog({
  isOpen,
  setIsOpen,
  previewUrl,
  fileId,
  setFinalImageUrl,
}: AvatarCropDialogProps) {
  /**
   * ! STATE (état, données) de l'application
   */
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const previousFileIdRef = useRef<string | undefined | null>(null)

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  useEffect(() => {
    if (fileId && fileId !== previousFileIdRef.current) {
      setIsOpen(true)
      setCroppedAreaPixels(null)
      setZoom(1)
    }
    previousFileIdRef.current = fileId
  }, [fileId, setIsOpen])

  const handleCropChange = useCallback((pixels: Area | null) => {
    setCroppedAreaPixels(pixels)
  }, [])

  const handleApply = async () => {
    if (!previewUrl || !croppedAreaPixels) return
    const blob = await getCroppedImg(previewUrl, croppedAreaPixels)
    if (!blob) return
    const url = URL.createObjectURL(blob)
    setFinalImageUrl(url)
    setIsOpen(false)
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="gap-0 p-0 sm:max-w-140">
        <DialogHeader className="border-b px-4 py-4 flex flex-row items-center justify-between">
          <DialogTitle className="font-medium font-spaceGrotesk">
            Recadrer l&apos;image
          </DialogTitle>
        </DialogHeader>

        {previewUrl && (
          <Cropper
            className="h-96 sm:h-120"
            image={previewUrl}
            zoom={zoom}
            onCropChange={handleCropChange}
            onZoomChange={setZoom}
          >
            <CropperDescription />
            <CropperImage />
            <CropperCropArea />
          </Cropper>
        )}

        <DialogFooter className="border-t bg-muted/30 px-4 py-3 flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="font-spaceGrotesk"
          >
            Annuler
          </Button>
          <Button
            onClick={handleApply}
            disabled={!previewUrl}
            className="font-spaceGrotesk bg-pink-700 font-medium"
          >
            Appliquer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
