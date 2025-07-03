/* eslint-disable @next/next/no-img-element */
"use client"
import user from "@/public/images/user.png"
import SignOutButton from "@/src/features/auth/components/SignOutButton"
import { Settings, User } from "lucide-react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { useCurrentUser } from "../queries/useCurrentUser"

export default function UserMenu() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { data: userPayload } = useCurrentUser()

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <img
            src={user.src}
            alt="Image de profil par défaut"
            className="size-6 object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {userPayload?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {userPayload?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link
              href="/profile"
              className="flex items-center font-spaceGrotesk"
            >
              <User className="mr-1 size-4 text-muted-foreground " />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="#" className="flex items-center font-spaceGrotesk">
              <Settings className="mr-1 size-4 text-muted-foreground" />
              Paramètres
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
