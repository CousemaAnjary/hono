
import { authFetch } from "@/src/lib/authFetch"
import { useQuery } from "@tanstack/react-query"
import { GetCurrentUserResponse } from "../types/user"

export const useCurrentUser = () => {
  return useQuery({

    // Clé unique pour cette requête
    queryKey: ["current-user"],

    // Récupère l'utilisateur connecté
    queryFn: async () => {
      const res = await authFetch<GetCurrentUserResponse>("/me")
      return res.userPayload
    }
  })
}
