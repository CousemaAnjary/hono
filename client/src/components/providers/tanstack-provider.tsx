"use client"

import { queryClient } from "@/src/lib/react-query"
import { QueryClientProvider } from "@tanstack/react-query"


export const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}