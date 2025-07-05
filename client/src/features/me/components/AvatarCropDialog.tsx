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

type AvatarCropDialogProps = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  previewUrl: string | null
  fileId: string | null
  onCropConfirm: (blob: Blob) => void
}

export default function AvatarCropDialog({
  isOpen,
  setIsOpen,
  previewUrl,
  fileId,
  onCropConfirm,
}: AvatarCropDialogProps) {
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const previousFileIdRef = useRef<string | undefined | null>(null)

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

    onCropConfirm(blob)
    setIsOpen(false)
  }

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
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleApply} disabled={!previewUrl} className="bg-pink-700 text-white">
            Appliquer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
