import * as bcrypt from "bcrypt"

/**
 * Hache un mot de passe avec un salt.
 * @param password - Mot de passe en clair
 * @returns Mot de passe haché
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

/**
 * Compare un mot de passe avec son hash.
 * @param plainPassword - Mot de passe en clair
 * @param hashedPassword - Mot de passe haché
 * @returns true si les deux correspondent
 */
export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword)
}