import { z } from "zod"
import { toast } from "sonner"
import { LoginResponse } from "../types/auth"
import { authFetch } from "@/src/lib/authFetch"
import { useMutation } from "@tanstack/react-query"
import { loginSchema } from "@/src/validators/auth.validator"


export const useLogin = () => {
  return useMutation({

    // Envoie les données de connexion à l'API
    mutationFn: async (data: z.infer<typeof loginSchema>) => {
      return await authFetch<LoginResponse>("/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
        })
    },

    // Gestion des erreurs et succès
    onError: (error) => { toast.error(error.message) },
    
    onSuccess: (response) => {toast.success(response.message)},
  })
}
