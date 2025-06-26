import {
  BookOpen,
  Calendar,
  Clock,
  Heart,
  Star,
  TrendingUp,
} from "lucide-react"

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
      <div className="mb-8 flex w-full items-center justify-between rounded-lg bg-white p-6 shadow-sm border">
        <div>
          <h1 className="font-spaceGrotesk text-2xl font-bold text-gray-800">
            Tableau de bord
          </h1>
          <p className="text-gray-600 mt-1">
            Vue d&apos;ensemble de vos activités et tendances.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Aujourd&apos;hui</p>
          <p className="font-semibold text-gray-800">
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
              <p className="text-sm font-medium text-gray-600">Mangas lus</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="p-3 bg-pink-50 rounded-full">
              <BookOpen className="h-6 w-6 text-pink-600" />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2">+3 ce mois-ci</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Favoris</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="p-3 bg-red-50 rounded-full">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <p className="text-xs text-blue-600 mt-2">2 ajoutés récemment</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">En cours</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-orange-600 mt-2">4 à terminer</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Note moyenne</p>
              <p className="text-2xl font-bold text-gray-900">4.2</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2">Sur 5 étoiles</p>
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

        {/* Planning et raccourcis */}
        <div className="space-y-6">
          {/* Planning du jour */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-pink-600" />
              Planning du jour
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Naruto - Chapitre 700
                  </p>
                  <p className="text-xs text-gray-600">Prévu pour 14:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    My Hero Academia - Tome 37
                  </p>
                  <p className="text-xs text-gray-600">Prévu pour 18:30</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Dragon Ball Super - Chapitre 98
                  </p>
                  <p className="text-xs text-gray-600">Prévu pour 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Raccourcis rapides */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Raccourcis rapides
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors text-center">
                <BookOpen className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">
                  Nouveau manga
                </span>
              </button>
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center">
                <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">
                  Planning
                </span>
              </button>
              <button className="p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-center">
                <Heart className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">
                  Mes favoris
                </span>
              </button>
              <button className="p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-center">
                <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">
                  Top mangas
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
