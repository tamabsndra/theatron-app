"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Logo from "./logoApp"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/movie", label: "Movie" },
  { href: "/series", label: "Series" },
  { href: "/kids", label: "Kids" },
]

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href
    return (
      <Link
        className={`text-sm transition-all ease-in-out hover:text-app-red ${
          isActive ? "text-app-white font-bold" : "text-app-white font-medium"
        }`}
        href={href}
      >
        {label}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-12 flex items-center justify-between py-4 bg-transparent">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Logo/>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input className="pl-8 w-[200px] bg-transparent" placeholder="Search..." type="search" />
        </div>
        <Avatar>
          <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "text-app-white" : "text-app-white"}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}