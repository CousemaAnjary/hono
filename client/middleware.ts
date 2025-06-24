import { NextRequest } from "next/server"
import { getToken } from "./src/lib/cookie"

export async function middleware(request: NextRequest) {
  const token = getToken()
}
