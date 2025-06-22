export type User = {
  id: number
  name: string
  email: string
  password: string
}

export type LoginResponse = {
  user: User
  success: boolean
  message: string
}