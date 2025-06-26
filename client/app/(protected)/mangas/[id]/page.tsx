"use client"

import {
  Calendar,
  Clock,
  Download,
  Eye,
  Flag,
  Heart,
  Play,
  Plus,
  Share2,
  Star,
  Tag,
} from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function MagaPage() {
  /**
   * ! STATE (état, données) de l'application
   */
  const params = useParams()
  const [isInList, setIsInList] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [userRating, setUserRating] = useState(0)

  // Données simulées du manga/film
  const mediaData = {
    id: params.id,
    title: "Destination finale : Bloodlines",
    originalTitle: "Final Destination: Bloodlines",
    type: "Film",
    releaseDate: "14 mai 2025",
    genres: ["Horreur", "Mystère"],
    rating: 7.2,
    duration: "1h 45min",
    status: "Sorti",
    synopsis:
      "Stefani, 18 ans, fait d'affreux cauchemars. Dans ceux-ci, elle voit sa grand-mère échapper à la mort dans un accident qui aurait dû la tuer il y a 50 ans. Son ancêtre a réussi alors à esquiver le décès jusqu'à l'âge de 80 ans où elle meurt de façon naturelle. À cause de ce miracle, toute sa descendance doit quelque chose à la mort.",
    director: "Steven Quale",
    cast: ["Brec Bassinger", "Teo Briones", "Richard Harmon"],
    studio: "New Line Cinema",
    language: "Anglais",
    country: "États-Unis",
    budget: "$23M",
    boxOffice: "$158M",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1200/600",
    trailer: "https://youtube.com/watch?v=example",
    chapters: 24, // Pour les mangas
    volumes: 3,
    author: "James Wong", // Pour les mangas
  }

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const handleAddToList = () => {
    setIsInList(!isInList)
  }

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleRating = (rating: number) => {
    setUserRating(rating)
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <>
      {/* Hero Section avec Background */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={mediaData.backdrop}
            alt={mediaData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Poster */}
              <div className="flex-shrink-0">
                <div className="relative w-64 h-96 md:w-72 md:h-[430px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={mediaData.poster}
                    alt={`Affiche de ${mediaData.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl"></div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-white space-y-6">
                <div>
                  <p className="text-sm text-gray-300 mb-2">
                    {mediaData.releaseDate}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 font-spaceGrotesk">
                    {mediaData.title}
                  </h1>
                  {mediaData.originalTitle && (
                    <p className="text-xl text-gray-300 mb-4">
                      {mediaData.originalTitle}
                    </p>
                  )}
                </div>

                {/* Genres et Rating */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    {mediaData.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-bold text-yellow-400">
                      {mediaData.rating}
                    </span>
                  </div>
                </div>

                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{mediaData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{mediaData.releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>{mediaData.status}</span>
                  </div>
                </div>

                {/* Synopsis */}
                <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
                  {mediaData.synopsis}
                </p>

                {/* Actions Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleAddToList}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                      isInList
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-white hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    {isInList ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                    {isInList ? "Dans ma liste" : "Ajouter à la liste"}
                  </button>

                  <button
                    onClick={handleToggleFavorite}
                    className={`flex items-center gap-2 px-6 py-3 border-2 border-white/30 rounded-lg font-medium transition-all hover:bg-white/10 ${
                      isFavorite ? "text-red-400 border-red-400" : "text-white"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                    Favoris
                  </button>

                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-white/30 rounded-lg font-medium text-white transition-all hover:bg-white/10">
                    <Play className="h-5 w-5" />
                    Regarder
                  </button>

                  <button className="p-3 border-2 border-white/30 rounded-lg text-white transition-all hover:bg-white/10">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Synopsis détaillé */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-spaceGrotesk">
                Synopsis
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {mediaData.synopsis}
              </p>
            </div>

            {/* Cast & Crew */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-spaceGrotesk">
                Distribution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Réalisateur
                  </h3>
                  <p className="text-gray-700">{mediaData.director}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Acteurs principaux
                  </h3>
                  <div className="space-y-1">
                    {mediaData.cast.map((actor, index) => (
                      <p key={index} className="text-gray-700">
                        {actor}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Évaluation utilisateur */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-spaceGrotesk">
                Votre évaluation
              </h2>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`p-1 transition-colors ${
                      star <= userRating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    <Star className="h-8 w-8 fill-current" />
                  </button>
                ))}
                <span className="ml-2 text-gray-600">
                  {userRating > 0 ? `${userRating}/5` : "Cliquez pour noter"}
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations techniques */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-spaceGrotesk">
                Informations
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Durée</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Langue</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.language}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pays</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.country}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Studio</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.studio}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.budget}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Box Office</span>
                  <span className="font-medium text-gray-900">
                    {mediaData.boxOffice}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-spaceGrotesk">
                Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">Télécharger</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Flag className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">Signaler</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">Partager</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
