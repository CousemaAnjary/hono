"use client"
import man1 from "@/public/images/man1.jpg"
import useEmblaCarousel from "embla-carousel-react"
import { BookOpen, Star } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

export default function FeatureMangas() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const slides = [
    {
      id: 1,
      title:
        "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
      description: "Chapitre 1 disponible - Sortie du prochain le 9/7",
      image: man1,
      tags: ["Fantastique", "Isekai"],
      rating: 4.5,
    },
  ]
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )
  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div
      className="w-full h-[40vh] relative overflow-hidden rounded-md"
      ref={emblaRef}
    >
      <div className="flex h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

            <div className="absolute left-0 top-0 h-full w-full flex items-center px-12 md:px-24 z-10">
              <div className="text-white max-w-2xl space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-snug">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-200">{slide.description}</p>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                  {slide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 rounded">
                      {tag}
                    </span>
                  ))}
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">
                      {slide.rating}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-md font-medium text-sm uppercase">
                    <BookOpen className="h-5 w-5" />
                    Lire le Chapitre 1
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-orange-500" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
