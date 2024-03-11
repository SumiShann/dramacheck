'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

export default function NavBar(){
  const pathname = usePathname()
  if (pathname === "/home") return (
    <header className="w-full h-50 bg-peach">
      <nav>
        <Link href="/home/dashboard">Home</Link>
      </nav>
      <ThemeSwitch />
    </header>
  )
  else return (
    <header className="w-full h-12 bg-peach dark:bg-evening p-2 flex justify-between items-center">
      <nav className="w-full h-full flex items-center">
        <Link href="/home">Browse</Link>
      </nav>
      <ThemeSwitch />
    </header>
  )
}