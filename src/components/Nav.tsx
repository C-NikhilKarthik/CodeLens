"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="z-10 text-primary-foreground bg-color1/20 fixed top-0 left-0 backdrop-blur-sm w-full flex items-center px-4 md:px-10 lg:px-16 xl:px-20 py-2">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  return <Link {...props} className={cn("p-2")} />;
}
