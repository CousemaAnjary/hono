import Navbar from "@/src/components/dashboard-panel/Navbar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  // ! STATE (état, données) de l'application
  
  
  // ! ACTIONS (actions, fonctions) de l'application
  
  
  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden bg-background">
        <div className="container flex h-full max-w-7xl flex-col items-center justify-center px-4 md:px-6">
          <div className="flex w-full max-w-3xl flex-col items-start justify-start gap-6 py-8">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}