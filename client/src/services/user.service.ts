import { apiUrl } from "../lib/api"

export const getCurrentUser = async () => {
  const res = await fetch(`${apiUrl}/user/me`, {
    method: "GET",
    credentials: "include",
  })

   if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  
   const data = await res.json()
  return data.user 
}