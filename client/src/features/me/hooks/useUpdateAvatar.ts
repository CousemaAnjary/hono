import { toast } from "sonner"
import { authFetch } from "@/src/lib/authFetch"
import { useMutation } from "@tanstack/react-query"
import { updatedAvatarResponse } from "../types/avatar"


export const useUpdateAvatar = () => {
  return useMutation({

    //
    mutationFn: async (image: File) => {
      const formData = new FormData()
      formData.append("image", image)

      return await authFetch<updatedAvatarResponse>("/me/avatar", {
        method: "PATCH",
        body: formData,
      })
    },

    // Gestion des erreurs et succès
    onError: (error) => { toast.error(error.message) },
    onSuccess: (response) => {toast.success(response.message)},
  })
}
