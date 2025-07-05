/* eslint-disable @next/next/no-img-element */
"use client"
import user from "@/public/images/user.png"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import SignOutButton from "@/src/features/auth/components/SignOutButton"
import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { useCurrentUser } from "../queries/useCurrentUser"
import ThemeSwitcher from "./ThemeSwitcher"
import Link from "next/link"

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
      <DropdownMenuContent className="mt-3 w-72" align="end">
        <DropdownMenuItem className="flex w-full items-start gap-2 px-3 py-2 cursor-pointer" asChild>
          <Link href="/profile">
            <div className="min-w-0 flex flex-col overflow-hidden">
              <span className="truncate text-sm font-medium text-foreground font-spaceGrotesk">
                {userPayload?.name || "Nom d’utilisateur"}
              </span>
              <span className="truncate text-xs text-muted-foreground font-normal font-spaceGrotesk">
                {userPayload?.email || "email@example.com"}
              </span>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="space-y-3 p-2">
          <div className="flex items-center justify-between">
            <span className="font-spaceGrotesk text-sm">Thème</span>
            <ThemeSwitcher />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-spaceGrotesk text-sm">Langue</span>
            <Select defaultValue="fr">
              <SelectTrigger className="h-7 w-[130px] font-spaceGrotesk">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="font-spaceGrotesk">
                  <SelectItem value="fr">🇫🇷 Français</SelectItem>
                  <SelectItem value="en">🇬🇧 English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
