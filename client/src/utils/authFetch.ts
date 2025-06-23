import { refreshAccessToken } from "../services/auth.service"

export const authFetch = async (url: string, options: RequestInit = {}): Promise<Response> => {

  // Options par défaut pour la requête fetch
  const finalOptions: RequestInit = {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }

  let response = await fetch(url, finalOptions)

  // 🔁 Si le token est expiré, on tente un refresh puis on réessaie une seule fois
  if (response.status === 401) {

    try {
      await refreshAccessToken()
      response = await fetch(url, finalOptions)

    } catch (err) {
      throw new Error("Session expirée. Veuillez vous reconnecter.")
    }
  }

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message)
  }

  return response
}
