"use client"

import { apiUrl } from "@/src/lib/api"
import { User } from "@/src/types/auth"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  // ! STATE (état, données) de l'application
  const [user, setUser] = useState<User | null>(null)


  // ! ACTIONS (actions, fonctions) de l'application
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${apiUrl}/user/me`, {
          method: "GET",
          credentials: "include", 
        })

        if (!res.ok) {
          throw new Error("Échec de la récupération des données utilisateur")
        }

        const data = await res.json()
        setUser(data.user)

      } catch (error) {
         console.error("Erreur lors de la récupération de l'utilisateur :", error)
        setUser(null)
      }
    }
    fetchUser()
  }, [])

  
  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <h1>Dashboard</h1>
      <p>Bienvenue sur votre tableau de bord !</p>
      {user ? (
        <div>
          <h2>Bonjour, {user.name} !</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Chargement des données utilisateur...</p>
      )}
    </>
  )
}
