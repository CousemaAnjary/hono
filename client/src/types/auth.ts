export type LoginResponse = {
  success: boolean
  message: string
}

export type GetCurrentUserResponse = {
  userPayload: UserPayload
  success: boolean
  message: string
}

export type UserPayload = {
  id: number
  name: string
  email: string
}

export type LogoutResponse = {
  success: boolean
  message: string
}
