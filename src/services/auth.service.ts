import type { z } from "zod"
import type { registerSchema } from "../validators/auth.validator.js"


export const registerUser = async (data : z.infer<typeof registerSchema>) => {}