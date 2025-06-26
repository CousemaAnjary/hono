"use client"
import SignOutButton from "@/src/features/auth/components/SignOutButton"
import { useCurrentUser } from "@/src/features/auth/queries/useCurrentUser"
import { Settings, User } from "lucide-react"
import Link from "next/link"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar"
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
          <Avatar>
            <AvatarImage src="#" alt="Profile image" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
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
            <Link href="#" className="flex items-center font-inter">
              <User className="mr-1 size-4 text-muted-foreground" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="#" className="flex items-center font-inter">
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
