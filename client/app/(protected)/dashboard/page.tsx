'use client'
import { getCurrentUser } from "@/src/lib/auth"

export default function DashboardPage() {
  // ! STATE (état, données) de l'application
    const user = getCurrentUser()
  
  // ! ACTIONS (actions, fonctions) de l'application
  
  
  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! {user?.name}</p>
      
      {/* Add more components or content here as needed */}

    </>
  )
}