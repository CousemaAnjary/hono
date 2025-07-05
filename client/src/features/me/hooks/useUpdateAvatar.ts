import { toast } from "sonner"
import { authFetch } from "@/src/lib/authFetch"
import { useMutation } from "@tanstack/react-query"
import { UpdatedAvatarResponse } from "../types/avatar"



export const useUpdateAvatar = () => {
  return useMutation({

    // Envoie le fichier d'avatar à l'API
    mutationFn: async (image: File) => {
      const formData = new FormData()
      formData.append("image", image)

      return await authFetch<UpdatedAvatarResponse>("/me/avatar", {
        method: "PATCH",
        body: formData,
      })
    },

    // Gestion des erreurs et succès
    onError: (error) => { toast.error(error.message) },
    onSuccess: (response) => {toast.success(response.message)},
  })
}
