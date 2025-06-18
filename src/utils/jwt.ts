import jwt from "jsonwebtoken"

export const generateToken = (payload: object) => {
  const JWT_SECRET = process.env.JWT_SECRET as string
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })
}
