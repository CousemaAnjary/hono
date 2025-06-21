export const apiUrl = process.env.NEXT_PUBLIC_API_URL as string

if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL is not defined in environment variables")

