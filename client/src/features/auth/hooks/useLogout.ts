import { toast } from "sonner"
import { LogoutResponse } from "../types/auth"
import { authFetch } from "@/src/lib/authFetch"
import { queryClient } from "@/src/lib/react-query"
import { useMutation } from "@tanstack/react-query"


export const useLogout = () => {
  return useMutation({

    // Envoie la requête de déconnexion à l'API
    mutationFn: async () => {
      return await authFetch<LogoutResponse>("/auth/logout", {
        method: "POST",
      })
    },

    // Gestion des erreurs et succès
    onError: (error) => { toast.error(error.message) },

    onSuccess: (response) => {
      toast.success(response.message)
      queryClient.clear()
    }
  })
}
