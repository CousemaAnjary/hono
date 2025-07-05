export interface AvatarCropDialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  previewUrl: string | null
  fileId?: string
  setFinalImageUrl: (url: string | null) => void
}
