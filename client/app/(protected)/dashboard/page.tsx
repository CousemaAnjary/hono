"use client"

import { apiUrl } from "@/src/lib/api"
import { User } from "@/src/types/auth"
import { useEffect, useState } from "react"


export default function DashboardPage() {
const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res =  await fetch(`${apiUrl}/user/me`, {
          method: "GET",
          credentials: "include",
        })
        if (res.ok) {
          const u: User = await res.json()
          setUser(u)
        } else {
          setUser(null)
        }
      } catch (e) {
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  if (!user) return <p>Non connecté</p>

  return (
    <p>Connecté en tant que : {user.name}</p>
  )
}