export type User = {
  id: number
  name: string
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  user: User
  success: boolean
  message: string
}