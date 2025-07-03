export type GetCurrentUserResponse = {
  userPayload: UserPayload
  success: boolean
  message: string
}

export type UserPayload = {
  id: number
  name: string
  email: string
  image: string | null
}
