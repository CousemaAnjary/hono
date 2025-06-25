export type User = {
  id: number
  name: string
  email: string
  password: string
}

export type LoginResponse = {
  success: boolean
  message: string
}

export type getCurrentUserResponse = {
  user: User
  success: boolean
  message: string
}