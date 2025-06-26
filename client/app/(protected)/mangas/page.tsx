"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Plus, Star, Heart, Eye, ChevronLeft, ChevronRight, Flame, Clock, BookOpen } from "lucide-react"

export default function MangasPage() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("tous")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Données de démonstration
  const featuredMangas = [
    {
      id: 1,
      title: "One Piece",
      chapter: "Chapitre 1100",
      image: "/api/placeholder/300/400",
      rating: 4.9,
      status: "En cours",
      description: "L'aventure épique de Monkey D. Luffy continue..."
    },
    {
      id: 2,
      title: "Attack on Titan",
      chapter: "Tome 34",
      image: "/api/placeholder/300/400",
      rating: 4.8,
      status: "Terminé",
      description: "La bataille finale pour l'humanité..."
    },
    {
      id: 3,
      title: "Demon Slayer",
      chapter: "Chapitre 205",
      image: "/api/placeholder/300/400",
      rating: 4.7,
      status: "Terminé",
      description: "Tanjiro face à ses derniers défis..."
    }
  ]

  const mangaCollection = [
    {
      id: 1,
      title: "One Piece",
      author: "Eiichiro Oda",
      image: "/api/placeholder/200/280",
      rating: 4.9,
      chapters: 1100,
      status: "En cours",
      genre: "Shōnen",
      year: 1997,
      isFavorite: true,
      isReading: true
    },
    {
      id: 2,
      title: "Attack on Titan",
      author: "Hajime Isayama",
      image: "/api/placeholder/200/280",
      rating: 4.8,
      chapters: 139,
      status: "Terminé",
      genre: "Shōnen",
      year: 2009,
      isFavorite: true,
      isReading: false
    },
    {
      id: 3,
      title: "Demon Slayer",
      author: "Koyoharu Gotouge",
      image: "/api/placeholder/200/280",
      rating: 4.7,
      chapters: 205,
      status: "Terminé",
      genre: "Shōnen",
      year: 2016,
      isFavorite: false,
      isReading: false
    },
    {
      id: 4,
      title: "My Hero Academia",
      author: "Kohei Horikoshi",
      image: "/api/placeholder/200/280",
      rating: 4.6,
      chapters: 400,
      status: "En cours",
      genre: "Shōnen",
      year: 2014,
      isFavorite: true,
      isReading: true
    },
    {
      id: 5,
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      image: "/api/placeholder/200/280",
      rating: 4.8,
      chapters: 245,
      status: "En cours",
      genre: "Shōnen",
      year: 2018,
      isFavorite: false,
      isReading: true
    },
    {
      id: 6,
      title: "Tokyo Ghoul",
      author: "Sui Ishida",
      image: "/api/placeholder/200/280",
      rating: 4.5,
      chapters: 143,
      status: "Terminé",
      genre: "Seinen",
      year: 2011,
      isFavorite: false,
      isReading: false
    }
  ]

  const filterOptions = [
    { id: "tous", label: "Tous", icon: BookOpen },
    { id: "en-cours", label: "En cours", icon: Clock },
    { id: "favoris", label: "Favoris", icon: Heart },
    { id: "tendances", label: "Tendances", icon: Flame }
  ]

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMangas.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMangas.length) % featuredMangas.length)
  }

  const filteredMangas = mangaCollection.filter(manga => {
    const matchesSearch = manga.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manga.author.toLowerCase().includes(searchTerm.toLowerCase())
    
    switch (activeFilter) {
      case "en-cours":
        return matchesSearch && manga.isReading
      case "favoris":
        return matchesSearch && manga.isFavorite
      case "tendances":
        return matchesSearch && manga.rating >= 4.7
      default:
        return matchesSearch
    }
  })

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <>
      {/* Header avec recherche */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-spaceGrotesk text-2xl font-bold text-gray-800">
              Ma Collection
            </h1>
            <p className="text-gray-600 mt-1">{mangaCollection.length} mangas dans votre bibliothèque</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Rechercher un manga..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent w-full sm:w-64"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
              <Plus className="h-4 w-4" />
              Ajouter un manga
            </button>
          </div>
        </div>
      </div>

      {/* Carrousel des mangas à la une */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            À la une
          </h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredMangas.map((manga) => (
                <div key={manga.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row p-6">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <Image
                        src={manga.image}
                        alt={manga.title}
                        width={300}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{manga.title}</h3>
                        <p className="text-gray-600 mb-3">{manga.description}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{manga.rating}</span>
                          </div>
                          <span className="text-sm text-gray-600">{manga.chapter}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            manga.status === "En cours" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {manga.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                          <Eye className="h-4 w-4" />
                          Lire maintenant
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Heart className="h-4 w-4" />
                          Ajouter aux favoris
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          
          {/* Indicateurs */}
          <div className="flex justify-center space-x-2 pb-6">
            {featuredMangas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-pink-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => {
            const IconComponent = filter.icon
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeFilter === filter.id
                    ? "bg-pink-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grille des mangas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMangas.map((manga) => (
          <div key={manga.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow group">
            <div className="relative">
              <Image
                src={manga.image}
                alt={manga.title}
                width={200}
                height={280}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              
              {/* Badges de statut */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {manga.isFavorite && (
                  <div className="p-1 bg-red-500 rounded-full">
                    <Heart className="h-3 w-3 text-white fill-current" />
                  </div>
                )}
                {manga.isReading && (
                  <div className="p-1 bg-green-500 rounded-full">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                  Voir détails
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 truncate">{manga.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{manga.author}</p>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{manga.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{manga.chapters} ch.</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{manga.genre} • {manga.year}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  manga.status === "En cours" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {manga.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucun résultat */}
      {filteredMangas.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun manga trouvé</h3>
          <p className="text-gray-600">Essayez de modifier vos critères de recherche ou ajoutez de nouveaux mangas à votre collection.</p>
        </div>
      )}
    </>
  )
}