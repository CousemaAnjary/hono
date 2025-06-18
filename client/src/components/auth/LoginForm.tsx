"use client"

import { login } from "@/src/services/auth.service"
import { setToken } from "@/src/utils/auth"
import { loginSchema } from "@/src/validators/auth.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "sonner"



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
      if (!reponse.success) return void toast.warning(reponse.message)

      // Stocker le token dans le cookie
      setToken(reponse.token)
      toast.success(reponse.message)

    } catch (error) {
      console.error("Erreur lors de la connexion :", error)
    }
  }

  // ! AFFICHAGE (affichage, UI) de l'application
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <div>
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
                      type="email"
                      placeholder="Adresse email"
                      className="bg-white font-spaceGrotesk placeholder:text-muted-foreground dark:bg-zinc-950 max-md:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="font-spaceGrotesk" />
                </FormItem>
              )}
            />
          </div>

           <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-spaceGrotesk text-base">
                    Mot de passe                    
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Mot de passe"
                      className="bg-white font-spaceGrotesk placeholder:text-muted-foreground dark:bg-zinc-950 max-md:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="font-spaceGrotesk" />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Se connecter
          </Button>

        </form>
      </Form>
    </>
  )
}
