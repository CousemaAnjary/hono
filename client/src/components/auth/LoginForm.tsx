"use client"

import { z } from "zod"
import { Form } from "../ui/form"
import { useForm } from "react-hook-form"
import { login } from "@/src/services/auth.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/src/validators/auth.validator"
import { setToken } from "@/src/utils/auth"


export default function LoginForm() {

  // ! STATE (état, données) de l'application

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver:zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  
  // ! ACTIONS (actions, fonctions) de l'application

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
      const reponse = await login(data)
      if (!reponse.success) return console.error(reponse.message)
      
      // Stocker le token dans le cookie
      setToken(reponse.token)
      console.log(reponse.message)
    } 
    catch (error) {
     console.error("Erreur lors de la connexion :", error)
    }
  }
  
  
  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>

        </form>
      </Form>
    </>
  )
}