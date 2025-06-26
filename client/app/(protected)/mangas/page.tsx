"use client"

import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Flame,
  Heart,
  Star,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function MangasPage() {
  /**
   * ! STATE (état, données) de l'application
   */

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
      description: "L'aventure épique de Monkey D. Luffy continue...",
    },
    {
      id: 2,
      title: "Attack on Titan",
      chapter: "Tome 34",
      image: "/api/placeholder/300/400",
      rating: 4.8,
      status: "Terminé",
      description: "La bataille finale pour l'humanité...",
    },
    {
      id: 3,
      title: "Demon Slayer",
      chapter: "Chapitre 205",
      image: "/api/placeholder/300/400",
      rating: 4.7,
      status: "Terminé",
      description: "Tanjiro face à ses derniers défis...",
    },
  ]

  const filterOptions = [
    { id: "tous", label: "Tous", icon: BookOpen },
    { id: "en-cours", label: "En cours", icon: Clock },
    { id: "favoris", label: "Favoris", icon: Heart },
    { id: "tendances", label: "Tendances", icon: Flame },
  ]

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMangas.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredMangas.length) % featuredMangas.length
    )
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <>
      {/* Header avec recherche */}

      {/* Carrousel des mangas à la une */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />À la une
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {manga.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {manga.description}
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">
                              {manga.rating}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">
                            {manga.chapter}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              manga.status === "En cours"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
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
    </>
  )
}
