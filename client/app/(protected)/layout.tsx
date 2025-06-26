import Navbar from "@/src/components/dashboard-panel/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  /**
   * ! STATE (état, données) de l'application
   */

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 sm:px-8">
        <div className="mx-auto max-w-[95rem] px-6">{children}</div>
      </main>
    </div>
  );
}
