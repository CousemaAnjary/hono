"use client"
import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/user.service"

export const useUser = () => {
  return useQuery({
    queryKey:["user"],
    queryFn: getCurrentUser,
    retry: false, // ne pas réessayer en cas d'erreur
    refetchOnWindowFocus: false, // évite les appels inutiles en revenant sur la page
  })
}