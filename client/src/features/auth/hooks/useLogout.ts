import { queryClient } from "@/src/lib/react-query"
import { useMutation } from "@tanstack/react-query"
import { logout } from "../services/auth.service"


export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess : () => { queryClient.clear() }
  })
}
