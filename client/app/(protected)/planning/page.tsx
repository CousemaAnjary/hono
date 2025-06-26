"use client"

import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Plus,
  Star,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function PlanningPage() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedView, setSelectedView] = useState("semaine") // "jour", "semaine", "mois"
  const [showAddModal, setShowAddModal] = useState(false)

  // Données de planning simulées
  const planningData = [
    {
      id: 1,
      title: "One Piece",
      chapter: "Chapitre 1100",
      time: "14:00",
      duration: "30 min",
      status: "planifié",
      priority: "haute",
      cover: "/api/placeholder/60/80",
      date: new Date(2025, 5, 26), // 26 juin 2025
    },
    {
      id: 2,
      title: "Attack on Titan",
      chapter: "Tome 34",
      time: "16:30",
      duration: "45 min",
      status: "en-cours",
      priority: "moyenne",
      cover: "/api/placeholder/60/80",
      date: new Date(2025, 5, 26),
    },
    {
      id: 3,
      title: "Demon Slayer",
      chapter: "Chapitre 205",
      time: "20:00",
      duration: "25 min",
      status: "planifié",
      priority: "basse",
      cover: "/api/placeholder/60/80",
      date: new Date(2025, 5, 26),
    },
    {
      id: 4,
      title: "My Hero Academia",
      chapter: "Tome 37",
      time: "18:00",
      duration: "40 min",
      status: "terminé",
      priority: "haute",
      cover: "/api/placeholder/60/80",
      date: new Date(2025, 5, 27),
    },
    {
      id: 5,
      title: "Jujutsu Kaisen",
      chapter: "Chapitre 245",
      time: "15:30",
      duration: "35 min",
      status: "planifié",
      priority: "haute",
      cover: "/api/placeholder/60/80",
      date: new Date(2025, 5, 28),
    },
  ]

  const quickStats = {
    today: planningData.filter(
      (item) => item.date.toDateString() === new Date().toDateString()
    ).length,
    thisWeek: planningData.length,
    completed: planningData.filter((item) => item.status === "terminé").length,
    pending: planningData.filter((item) => item.status === "planifié").length,
  }

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getWeekDays = () => {
    const start = new Date(currentDate)
    start.setDate(start.getDate() - start.getDay() + 1) // Lundi

    const days = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      days.push(day)
    }
    return days
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "terminé":
        return "bg-green-100 text-green-800"
      case "en-cours":
        return "bg-blue-100 text-blue-800"
      case "planifié":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "haute":
        return "border-l-red-500"
      case "moyenne":
        return "border-l-yellow-500"
      case "basse":
        return "border-l-green-500"
      default:
        return "border-l-gray-300"
    }
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <>
      {/* Header */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-spaceGrotesk text-2xl font-bold text-gray-800">
              Planning de lecture
            </h1>
            <p className="text-gray-600 mt-1">
              Organisez vos sessions de lecture
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Sélecteur de vue */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {["jour", "semaine", "mois"].map((view) => (
                <button
                  key={view}
                  onClick={() => setSelectedView(view)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedView === view
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Nouvelle session
            </button>
          </div>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-50 rounded-lg">
              <Clock className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Aujourd&apos;hui</p>
              <p className="text-xl font-bold text-gray-900">
                {quickStats.today}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Cette semaine</p>
              <p className="text-xl font-bold text-gray-900">
                {quickStats.thisWeek}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <BookOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Terminées</p>
              <p className="text-xl font-bold text-gray-900">
                {quickStats.completed}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">En attente</p>
              <p className="text-xl font-bold text-gray-900">
                {quickStats.pending}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation de dates */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <h2 className="text-lg font-semibold text-gray-800">
            {formatDate(currentDate)}
          </h2>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Vue Planning */}
      {selectedView === "semaine" && (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-7 gap-0 border-b">
            {getWeekDays().map((day, index) => (
              <div
                key={index}
                className="p-4 text-center border-r last:border-r-0"
              >
                <div className="text-sm font-medium text-gray-600">
                  {day.toLocaleDateString("fr-FR", { weekday: "short" })}
                </div>
                <div className="text-lg font-bold text-gray-900 mt-1">
                  {day.getDate()}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0 min-h-[400px]">
            {getWeekDays().map((day, index) => {
              const dayItems = planningData.filter(
                (item) => item.date.toDateString() === day.toDateString()
              )

              return (
                <div
                  key={index}
                  className="p-2 border-r last:border-r-0 bg-gray-50"
                >
                  <div className="space-y-2">
                    {dayItems.map((item) => (
                      <div
                        key={item.id}
                        className={`p-3 bg-white rounded-lg shadow-sm border-l-4 ${getPriorityColor(
                          item.priority
                        )} hover:shadow-md transition-shadow cursor-pointer`}
                      >
                        <div className="flex items-start gap-2">
                          <Image
                            src={item.cover}
                            alt={item.title}
                            width={32}
                            height={40}
                            className="w-8 h-10 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-medium text-gray-900 truncate">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 truncate">
                              {item.chapter}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500">
                                {item.time}
                              </span>
                            </div>
                            <span
                              className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 ${getStatusColor(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Vue Liste (pour jour et mois) */}
      {selectedView !== "semaine" && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Sessions programmées
            </h3>
            <div className="space-y-4">
              {planningData.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 border rounded-lg border-l-4 ${getPriorityColor(
                    item.priority
                  )} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.cover}
                      alt={item.title}
                      width={48}
                      height={64}
                      className="w-12 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.chapter}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date.toLocaleDateString("fr-FR")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="px-3 py-1 text-xs bg-pink-100 text-pink-700 rounded hover:bg-pink-200 transition-colors">
                        Modifier
                      </button>
                      <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
