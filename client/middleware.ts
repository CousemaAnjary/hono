import { getToken } from "./src/lib/cookie"
import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/dashboard"]
const publicRoutes = ["/", "/login", "/register"]

export async function middleware(request: NextRequest) {
  //
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  //
  const token = await getToken()
  const isAuthenticated = !!token

  // Redirection si l n'est pas authentifié
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }

  // Redirection si l'utilisateur est authentifié 
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
  }

  // Si aucune condition n'est remplie, on continue la requête
  return NextResponse.next()
}

// Configuration du middleware pour matcher les routes
// On ignore les routes API, les fichiers statiques Next.js et les images PNG
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}