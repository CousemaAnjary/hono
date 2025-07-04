"use client"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog"
import { Cropper, CropperCropArea, CropperDescription, CropperImage } from "@/src/components/ui/cropper"
import { Button } from "@/src/components/ui/button"
import { Slider } from "@/src/components/ui/slider"
import { useCallback, useEffect, useRef, useState } from "react"
import { type Area } from "react-easy-crop"

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener("load", () => resolve(image))
    image.addEventListener("error", (error) => reject(error))
    image.setAttribute("crossOrigin", "anonymous")
    image.src = url
  })

async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  outputWidth = pixelCrop.width,
  outputHeight = pixelCrop.height
): Promise<Blob | null> {
  try {
    const image = await createImage(imageSrc)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    canvas.width = outputWidth
    canvas.height = outputHeight

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      outputWidth,
      outputHeight
    )

    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/jpeg")
    })
  } catch (err) {
    console.error("getCroppedImg error:", err)
    return null
  }
}

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  previewUrl: string | null
  fileId?: string
  setFinalImageUrl: (url: string | null) => void
}

export default function AvatarCropDialog({
  isOpen,
  setIsOpen,
  previewUrl,
  fileId,
  setFinalImageUrl,
}: Props) {
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const previousFileIdRef = useRef<string | undefined | null>(null)

  useEffect(() => {
    if (fileId && fileId !== previousFileIdRef.current) {
      setCroppedAreaPixels(null)
      setZoom(1)
    }
    previousFileIdRef.current = fileId
  }, [fileId])

  const handleCropChange = useCallback((pixels: Area | null) => {
    setCroppedAreaPixels(pixels)
  }, [])

  const handleApply = async () => {
    if (!previewUrl || !fileId || !croppedAreaPixels) return

    const blob = await getCroppedImg(previewUrl, croppedAreaPixels)
    if (!blob) return

    const newUrl = URL.createObjectURL(blob)
    setFinalImageUrl(newUrl)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="gap-0 p-0 sm:max-w-140">
        <DialogHeader>
          <DialogTitle className="p-4 text-base flex justify-between items-center border-b">
            <span>Recadrer l&apos;image</span>
            <Button size="sm" onClick={handleApply} disabled={!previewUrl}>
              Appliquer
            </Button>
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

        <DialogFooter className="border-t px-4 py-6">
          <div className="mx-auto w-full max-w-80 flex items-center gap-4">
            <span className="text-xs opacity-60">Zoom</span>
            <Slider
              defaultValue={[1]}
              value={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={(v) => setZoom(v[0])}
              aria-label="Zoom slider"
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
