export interface AvatarCropDialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  previewUrl: string | null
  fileId?: string
  setFinalImageUrl: (url: string | null) => void
}

export type updatedAvatarResponse = {
  success: boolean
  message: string
  updatedAvatar: updatedAvatar
}

type updatedAvatar = {
  id: number
  image: string
}
