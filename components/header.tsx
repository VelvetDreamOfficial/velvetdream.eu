"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/velvet-dream-icon.png" alt="VelvetDream" width={40} height={40} className="w-10 h-10" />
          <Image
            src="/images/velvet-dream-logo.png"
            alt="VelvetDream"
            width={150}
            height={50}
            className="h-8 w-auto hidden sm:block"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#a-propos" className="text-foreground/80 hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="#univers" className="text-foreground/80 hover:text-primary transition-colors">
            Univers
          </Link>
          <Link href="#projets" className="text-foreground/80 hover:text-primary transition-colors">
            Projets
          </Link>
          <Link href="#valeurs" className="text-foreground/80 hover:text-primary transition-colors">
            Valeurs
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <Link href="#a-propos" className="text-foreground/80 hover:text-primary transition-colors text-lg">
                  À propos
                </Link>
                <Link href="#univers" className="text-foreground/80 hover:text-primary transition-colors text-lg">
                  Univers
                </Link>
                <Link href="#projets" className="text-foreground/80 hover:text-primary transition-colors text-lg">
                  Projets
                </Link>
                <Link href="#valeurs" className="text-foreground/80 hover:text-primary transition-colors text-lg">
                  Valeurs
                </Link>
                <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors text-lg">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
