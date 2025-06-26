"use client"

import { loginSchema } from "@/src/validators/auth.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { useLogin } from "../hooks/useLogin"


export default function LoginForm() {
  // ! STATE (état, données) de l'application

  const router = useRouter()
  const { mutate: login, isPending } = useLogin()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // ! ACTIONS (actions, fonctions) de l'application

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    login(data, {
      onSuccess: (response) => {
        toast.success(response.message)
        router.push("/profile")
      },
      onError: (error) => { toast.error(error.message) },
    })
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

          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader className="mr-2 size-4 animate-spin" />
                Veuillez patienter
              </>
            ) : (
              "Se connecter"
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}
