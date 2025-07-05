import { z } from "zod"
import { LoginResponse } from "../types/auth"
import { authFetch } from "@/src/lib/authFetch"
import { useMutation } from "@tanstack/react-query"
import { loginSchema } from "@/src/validators/auth.validator"


export const useLogin = () => {
  return useMutation({

    mutationFn: async (data: z.infer<typeof loginSchema>) => {
      return await authFetch<LoginResponse>("/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
        })
    }
  })
}
