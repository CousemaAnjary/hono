import { useMutation } from "@tanstack/react-query"
import { updateUserAvatar } from "../services/me.service"

export const useUpdateAvatar = () => {
  return useMutation({
    mutationFn: updateUserAvatar,
  })
}
