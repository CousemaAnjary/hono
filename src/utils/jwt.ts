import * as jwt from 'jsonwebtoken'


export const generateToken = (payload: object)=> {
  
  const JWT_SECRET = process.env.JWT_SECRET
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in environment variables")
   
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })
}
