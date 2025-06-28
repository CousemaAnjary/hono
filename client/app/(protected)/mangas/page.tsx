"use client"

import man1 from "@/public/images/man1.jpg"
import useEmblaCarousel from "embla-carousel-react"
import { Play, Star } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

export default function MangasPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const slides = [
    {
      id: 1,
      title:"I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
      description: "La nouvelle saison commence en 9/7",
      image: man1,
      tags: ["16+", "VOSTFR", "VF", "Fantastique"],
      rating: 4.5,
      votes: "61.4K",
    },
  ]

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

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
      <div className="w-full h-[40vh] relative overflow-hidden rounded-md" ref={emblaRef} >
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
              {/* Overlay sombre à gauche */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

              {/* Texte par-dessus */}
              <div className="absolute left-0 top-0 h-full w-full flex items-center px-12 md:px-24 z-10">
                <div className="text-white max-w-2xl space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-200">{slide.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                    {slide.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">
                      {slide.rating}
                    </span>
                    <span className="text-gray-300">({slide.votes})</span>
                  </div>
                  <div className="pt-4">
                    <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-md font-medium text-sm uppercase">
                      <Play className="h-5 w-5" />
                      Lecture E1
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicateurs en bas */}
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

      {/* Filtres */}
      {/* <div className="mb-6">
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
      </div> */}
    </>
  )
}
