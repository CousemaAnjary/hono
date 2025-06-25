"use client"
import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/auth.service"


export const useCurrentUser = () => {
  
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  })
}
