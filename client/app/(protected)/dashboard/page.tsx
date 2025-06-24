"use client"

import { getCurrentUser } from "@/src/services/user.service"
import { User } from "@/src/types/auth"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)

 useEffect(() => {
  getCurrentUser().then(setUser).catch(() => setUser(null))
}, [])

if (!user) {
  return <p>Chargement...</p>
}

  return <p>Connecté en tant que : {user.name}</p>
}
