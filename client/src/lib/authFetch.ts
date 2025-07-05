import { apiUrl } from "./api"

export const authFetch = async <T = unknown>(url: string, options: RequestInit = {}): Promise<T> => {
  const isFormData = options.body instanceof FormData

  const res = await fetch(`${apiUrl}${url}`, {
    credentials: "include",
    headers: {
       ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
    ...options,
  })
  if (!res.ok) throw new Error((await res.json()).message)
  return await res.json() as T
}