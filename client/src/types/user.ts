export type getCurrentUserResponse = {
  user: User
  success: boolean
  message: string
}

export type User = {
  id: number
  name: string
  email: string
  password: string
}