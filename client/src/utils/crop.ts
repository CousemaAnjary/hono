/**
 * 🧠 UTILITAIRES POUR LE TRAITEMENT D'IMAGES (Recadrage)
 *
 * Ce fichier contient deux fonctions utilitaires :
 *
 * 1. 🔧 createImage(url: string): Promise<HTMLImageElement>
 *    - Charge une image à partir d'une URL (base64 ou blob URL)
 *    - Utile pour préparer l’image avant traitement (ex: dessin sur canvas)
 *
 * 2. ✂️ getCroppedImg(imageSrc, pixelCrop, outputWidth, outputHeight)
 *    - Utilise canvas pour générer un "crop" (recadrage) de l’image chargée
 *    - Retourne une `Blob` représentant l'image recadrée, au format JPEG
 *    - Peut être utilisée pour un avatar utilisateur ou une image compressée
 */

export type Area = { x: number; y: number; width: number; height: number }

/**
 * Crée une balise <img> HTML à partir d'une URL, avec gestion CORS
 * @param url - L’URL de l’image (blob, base64 ou distante)
 * @returns Promise<HTMLImageElement>
 */

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.onload = () => resolve(image)
    image.onerror = (err) => reject(err)
    image.src = url
  })

/**
 * Génère un blob représentant une image recadrée (crop) via canvas
 * @param imageSrc - URL de l’image à recadrer
 * @param pixelCrop - Zone de crop en pixels (x, y, width, height)
 * @param outputWidth - Largeur de sortie (par défaut = largeur du crop)
 * @param outputHeight - Hauteur de sortie (par défaut = hauteur du crop)
 * @returns Promise<Blob | null> - L’image recadrée sous forme de Blob JPEG
 */

export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: Area,
  outputWidth = pixelCrop.width,
  outputHeight = pixelCrop.height
): Promise<Blob | null> => {
  try {
    const image = await createImage(imageSrc)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    canvas.width = outputWidth
    canvas.height = outputHeight

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      outputWidth,
      outputHeight
    )

    return new Promise((resolve) =>
      canvas.toBlob((blob) => resolve(blob), "image/jpeg")
    )
  } catch (err) {
    console.error("getCroppedImg error:", err)
    return null
  }
}