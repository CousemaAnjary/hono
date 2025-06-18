"use client"

import { login } from "@/src/services/auth.service"
import { setToken } from "@/src/utils/auth"
import { loginSchema } from "@/src/validators/auth.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"



export default function LoginForm() {
  // ! STATE (état, données) de l'application

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // ! ACTIONS (actions, fonctions) de l'application

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
      const reponse = await login(data)
      if (!reponse.success) return console.error(reponse.message)

      // Stocker le token dans le cookie
      setToken(reponse.token)
      console.log(reponse.message)
    } catch (error) {
      console.error("Erreur lors de la connexion :", error)
    }
  }

  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-spaceGrotesk text-base">
                  Adresse email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="ABDILLAH"
                    className="bg-white font-spaceGrotesk placeholder:text-muted-foreground dark:bg-zinc-950 max-md:text-sm"
                  />
                </FormControl>
                <FormMessage className="font-spaceGrotesk" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  )
}
