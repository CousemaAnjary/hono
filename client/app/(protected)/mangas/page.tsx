"use client"

import {
  BookOpen,
  Clock,
  Eye,
  Flame,
  Heart,
  Star,
} from "lucide-react"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

import man1 from "@/public/images/man1.jpg"
// import man2 from "@/public/images/man2.jpg"
// import man3 from "@/public/images/man3.jpg"


export default function MangasPage() {
  const [activeFilter, setActiveFilter] = useState("tous")
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const featuredMangas = [
    {
      id: 1,
      title: "One Piece",
      chapter: "Chapitre 1100",
      image: man1,
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

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <>
      {/* Carrousel Embla */}


      <div className="mb-8 bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />À la une
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredMangas.map((manga) => (
              <div className="min-w-full flex-shrink-0 p-6" key={manga.id}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src={manga.image}
                      alt={manga.title}
                      width={300}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {manga.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{manga.description}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{manga.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">{manga.chapter}</span>
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

        {/* Indicateurs Embla */}
        <div className="flex justify-center space-x-2 pb-6 pt-2">
          {featuredMangas.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-pink-600" : "bg-gray-300"
              }`}
            />
          ))}
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
