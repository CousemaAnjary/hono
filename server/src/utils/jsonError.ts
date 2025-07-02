

export const jsonError = (error: unknown) => {
  if (error instanceof Error) {
    return { success: false, message: error.message }
  }
  // En cas d'erreur inconnue
  return { success: false, message: "Une erreur inconnue est survenue" }
}
