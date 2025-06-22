import { apiUrl } from "./api"
import { getCurrentUserResponse } from "../types/auth"


export const getCurrentUser = async ():Promise<getCurrentUserResponse>  => { 
  const res = await fetch(`${apiUrl}/user/me`, {
    method: "GET",
    credentials: "include",
  })
  if(!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  
  return await res.json() 
}