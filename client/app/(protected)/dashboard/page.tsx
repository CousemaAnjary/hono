import { getCurrentUser } from "@/src/services/user.service"


export default async function DashboardPage() {

  const user = await getCurrentUser()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      {user ? (
        <p>Bienvenue, {user.name} !</p>
      ) : (
        <p>Utilisateur non authentifié</p>
      )}
    </div>
  )
}
