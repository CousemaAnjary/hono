"use client"
import { useUser } from "@/src/hooks/useUser"

export default function DashboardPage() {
  // ! STATE (état, données) de l'application
  const { data: user } = useUser()

  // ! ACTIONS (actions, fonctions) de l'application

  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>Bonjour, {user?.name} !</p>
      </div>
    </>
  )
}
