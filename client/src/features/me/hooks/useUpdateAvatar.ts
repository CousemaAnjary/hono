import { authFetch } from "@/src/lib/authFetch"
import { useMutation } from "@tanstack/react-query"

export const useUpdateAvatar = () => {
  return useMutation({
    //
    mutationFn: async (image: File) => {
      const formData = new FormData()
      formData.append("image", image)

      return await authFetch<{ updatedImage: string }>("/me/avatar", {
        method: "PATCH",
        body: formData,
      })
    },
  })
}
