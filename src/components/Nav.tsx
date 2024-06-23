"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"

export function Nav({ children }: { children: ReactNode }) {
    return (
        <nav className="bg-black text-primary-foreground flex items-center px-4">
            {children}
        </nav>


    )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    return (
        <Link
            {...props}
            className={cn(
                "p-2"
            )}
        />
    )
}