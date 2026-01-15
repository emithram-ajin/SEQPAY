"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "home", type: "scroll" },
  {
    name: "Services Menu",
    type: "submenu",
    submenu: [
      {
        title: "Banking Services",
        items: [
          { name: "AEPS", href: "/aeps", type: "page" },
          { name: "DMT", href: "/dmt", type: "page" },
          { name: "MATM", href: "/matm", type: "page" },
        ],
      },
      {
        title: "Payment Services",
        items: [
          { name: "Recharge", href: "/mobilerecharge", type: "page" },
          { name: "BBPS", href: "/bbps", type: "page" },
        ],
      },
    ],
  },
  { name: "About Us", href: "/aboutus", type: "page" },
  { name: "Contact", href: "/contact", type: "page" },
]

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({})

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle navigation
  const handleNavigation = (e, link) => {
    e.preventDefault()

    // If link is string, find in navLinks or submenus
    if (typeof link === "string") {
      const found = navLinks.flatMap(l =>
        l.submenu ? l.submenu.flatMap(c => c.items) : l
      ).find(l => l.href === link)
      link = found || { href: link, type: "scroll" }
    }

    // Page navigation
    if (link.type === "page") {
      router.push(link.href)
      return
    }

    // Scroll links
    if (pathname !== "/") {
      router.push(`/#${link.href}`)
      return
    }

    const element = document.getElementById(link.href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={e => {
              e.preventDefault()
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                router.push("/")
              }
            }}
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={250}
              height={20}
              className="object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.submenu && setOpenSubmenu(link.name)
                }
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {link.submenu ? (
                  <>
                    <button
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                      onClick={e => e.preventDefault()}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4/5 transition-all duration-300" />
                    </button>
                    {openSubmenu === link.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-4"
                        onMouseEnter={() => setOpenSubmenu(link.name)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {link.submenu.map(category => (
                          <div key={category.title}>
                            <h4 className="text-xs font-semibold text-primary mb-2">
                              {category.title}
                            </h4>
                            <div className="space-y-1">
                              {category.items.map(item => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={e => handleNavigation(e, item)}
                                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={e => handleNavigation(e, link)}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4/5 transition-all duration-300" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="font-medium hover:bg-primary/5 hover:text-primary transition-colors duration-200"
              onClick={() =>
                window.open("https://partners.seqpay.in/login", "_blank")
              }
            >
              Login In
            </Button>
            <Button
              size="sm"
              className="font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 btn-shine"
            >
              Apply/Enquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={e => {
                      if (link.type !== "submenu") {
                        handleNavigation(e, link)
                        setMobileMenuOpen(false)
                      } else {
                        e.preventDefault()
                        setMobileSubmenuOpen(prev => ({
                          ...prev,
                          [link.name]: !prev[link.name],
                        }))
                      }
                    }}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200 flex justify-between items-center"
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-4 h-4 ml-2" />}
                  </a>

                  {/* Mobile submenu */}
                  {link.submenu && mobileSubmenuOpen[link.name] && (
                    <div className="pl-6 mt-1 space-y-1">
                      {link.submenu.map(category => (
                        <div key={category.title}>
                          <h4 className="text-xs font-semibold text-primary mb-1">
                            {category.title}
                          </h4>
                          {category.items.map(item => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={e => {
                                handleNavigation(e, item)
                                setMobileMenuOpen(false)
                              }}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600">
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
