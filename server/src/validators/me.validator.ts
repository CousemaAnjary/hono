import { z } from "zod"

export const myAvatarSchema = z.object({
  image: z
    //  Vérifie que l'entrée est un fichier (File)
    .custom<File>((value) => value instanceof File, {
      message: "Le fichier doit être un fichier valide.",
    })
    // Vérifie que le fichier est une image (image/png, image/jpeg, etc.)
    .refine((file) => file?.type.startsWith("image/"), {
      message: "Le fichier doit être une image.",
    })
    // //Vérifie que la taille du fichier est inférieure à 5 Mo
    // .refine((file) => file?.size < 5 * 1024 * 1024, {
    //   message: "Le fichier doit être inférieur à 5 Mo.",
    // }),
})
