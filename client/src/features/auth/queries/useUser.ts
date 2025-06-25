"use client"
import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/auth.service"


export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  })
}
