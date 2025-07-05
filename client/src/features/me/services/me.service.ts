import { authFetch } from "@/src/lib/authFetch"


// // Récupère l'utilisateur connecté
// export const getCurrentUser = async () => {
//   const res = await authFetch<GetCurrentUserResponse>("/me")
//   return res.userPayload
// }

// Met à jour l'avatar de l'utilisateur connecté
export const updateUserAvatar = async (image: File) => {
  const formData = new FormData()
  formData.append("image", image)

  return await authFetch<{ updatedImage: string }>("/me/avatar", {
    method: "PATCH",
    body: formData,
  })
}
