import {
  BookOpen,
  CalendarDays,
  Clock,
  Heart,
  Star,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"


export default function page() {
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
    <>
      {/* Header */}
      <div className="mb-8 flex w-full items-center justify-between rounded-lg bg-white p-4 px-6 shadow-sm border">
        <div>
          <h1 className="font-spaceGrotesk text-xl font-medium text-gray-800">
            Tableau de bord
          </h1>
          <p className="text-gray-600 mt-1 text-sm font-spaceGrotesk">
            Vue d&apos;ensemble de vos activités et tendances.
          </p>
        </div>
        <div className="text-right flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-sm text-muted-foreground font-spaceGrotesk">
            <CalendarDays className="h-4 w-4" />
            <span>Aujourd&apos;hui</span>
          </div>
          <p className="font-semibold text-gray-800 font-spaceGrotesk">
            {new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium font-spaceGrotesk text-gray-700">
                Mangas lus
              </p>
              <p className="text-2xl font-bold font-spaceGrotesk text-gray-900">
                24
              </p>
            </div>
            <div className="p-3 bg-pink-50 rounded-full">
              <BookOpen className="h-6 w-6 text-pink-600" />
            </div>
          </div>
          <p className="text-xs text-green-600 font-spaceGrotesk mt-2">
            +3 ce mois-ci
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium font-spaceGrotesk text-gray-700">
                Favoris
              </p>
              <p className="text-2xl font-bold font-spaceGrotesk text-gray-900">
                12
              </p>
            </div>
            <div className="p-3 bg-red-50 rounded-full">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <p className="text-xs text-blue-600 mt-2 font-spaceGrotesk">
            2 ajoutés récemment
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium font-spaceGrotesk text-gray-600">
                En cours
              </p>
              <p className="text-2xl font-bold font-spaceGrotesk text-gray-900">
                8
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-orange-600 font-spaceGrotesk mt-2">
            4 à terminer
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium font-spaceGrotesk text-gray-600">
                Note moyenne
              </p>
              <p className="text-2xl font-bold font-spaceGrotesk text-gray-900">
                4.2
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-xs text-gray-600 font-spaceGrotesk mt-2">
            Sur 5 étoiles
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activité récente */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-pink-600" />
            Activité récente
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  One Piece - Chapitre 1100
                </h3>
                <p className="text-sm text-gray-600">Terminé il y a 2 heures</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">4.5</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  Attack on Titan - Tome 34
                </h3>
                <p className="text-sm text-gray-600">Ajouté aux favoris hier</p>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  Demon Slayer - Tome 23
                </h3>
                <p className="text-sm text-gray-600">Commencé il y a 3 jours</p>
              </div>
              <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                En cours
              </div>
            </div>
          </div>
        </div>

        {/* Mangas populaires */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-600" />
              Mangas populaires
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-2">
                  <Image
                    src="/api/placeholder/120/160"
                    alt="One Piece"
                    width={120}
                    height={160}
                    className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-1 right-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded">
                    4.9
                  </div>
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center truncate">
                  One Piece
                </h3>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-2">
                  <Image
                    src="/api/placeholder/120/160"
                    alt="Attack on Titan"
                    width={120}
                    height={160}
                    className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-1 right-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded">
                    4.8
                  </div>
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center truncate">
                  Attack on Titan
                </h3>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-2">
                  <Image
                    src="/api/placeholder/120/160"
                    alt="Demon Slayer"
                    width={120}
                    height={160}
                    className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-1 right-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded">
                    4.7
                  </div>
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center truncate">
                  Demon Slayer
                </h3>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-2">
                  <Image
                    src="/api/placeholder/120/160"
                    alt="Jujutsu Kaisen"
                    width={120}
                    height={160}
                    className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-1 right-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded">
                    4.8
                  </div>
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center truncate">
                  Jujutsu Kaisen
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
