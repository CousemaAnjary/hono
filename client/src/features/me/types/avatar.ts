export interface AvatarCropDialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  previewUrl: string | null
  fileId?: string
  setFinalImageUrl: (url: string | null) => void
}

export type UpdatedAvatarResponse = {
  success: boolean
  message: string
  updatedAvatar: UpdatedAvatar
}

type UpdatedAvatar = {
  id: number
  image: string
}