export type LoginResponse = {
  success: boolean
  message: string
}

export type GetCurrentUserResponse = {
  currentUser: CurrentUser
  success: boolean
  message: string
}

export type CurrentUser = {
  id: number
  name: string
  email: string
}

export type LogoutResponse = {
  success: boolean
  message: string
}