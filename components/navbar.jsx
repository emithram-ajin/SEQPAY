"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", type: "scroll" },
  { name: "About Us", href: "/aboutus", type: "page" },
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
  { name: "Contact", href: "/contact", type: "page" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({})
  const [applyMenuOpen, setApplyMenuOpen] = useState(false)


  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation
  const handleNavigation = (e, link) => {
    e.preventDefault();

    // If link is string, find in navLinks or submenus
    if (typeof link === "string") {
      const found = navLinks
        .flatMap((l) => (l.submenu ? l.submenu.flatMap((c) => c.items) : [l]))
        .find((l) => l.href === link);

      link = found || { href: "/", type: "scroll" };
    }

    // PAGE navigation
    if (link.type === "page") {
      router.push(link.href);
      return;
    }

    // HOME scroll (NO #)
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    // Already on home → smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/seqpaylogo.png"
              alt="SeqPay Logo"
              width={160}
              height={40}
              className="object-contain w-20 sm:w-24  md:w-28 h-auto"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {link.submenu ? (
                  <>
                    <button
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                      onClick={e => e.preventDefault()}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4/5 transition-all duration-300 " />
                    </button>
                    {openSubmenu === link.name && (
                      <div
                        className="absolute top-full left-0 pt-2 w-80"
                        onMouseEnter={() => setOpenSubmenu(link.name)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-4">
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
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link)}
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
              className="font-medium hover:bg-primary/5 hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() =>
                window.open("https://partners.seqpay.in/login", "_blank")
              }
            >
              Login In
            </Button>
            <div
              className="relative"
              onMouseEnter={() => setApplyMenuOpen(true)}
              onMouseLeave={() => setApplyMenuOpen(false)}
            >
              <Button
                size="sm"
                className="font-medium bg-gradient-to-r from-primary to-blue-600
               hover:from-primary/90 hover:to-blue-600/90
               shadow-lg shadow-primary/25 hover:shadow-primary/40
               transition-all duration-300 btn-shine flex items-center gap-1 cursor-pointer"
              >
                Apply / Enquiry
                <ChevronDown className="w-4 h-4" />
              </Button>

              {applyMenuOpen && (
                <div className="absolute right-0 mt-0 w-44 rounded-xl
                    bg-background/95 backdrop-blur-xl
                    border border-border/50 shadow-xl z-50">
                  <a
                    href="/retailer"
                    onClick={e => handleNavigation(e, { href: "/retailer", type: "page" })}
                    className="block px-4 py-2 text-sm text-muted-foreground
                   hover:text-foreground hover:bg-muted/50 rounded-t-xl"
                  >
                    Retailer
                  </a>
                  <a
                    href="/distributor"
                    onClick={e => handleNavigation(e, { href: "/distributor", type: "page" })}
                    className="block px-4 py-2 text-sm text-muted-foreground
                   hover:text-foreground hover:bg-muted/50 rounded-b-xl"
                  >
                    Distributor
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-background/98 backdrop-blur-2xl border-t border-border/50"
            >
              <div className="py-6 px-4 space-y-2">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <button
                        onClick={(e) => {
                          if (link.submenu) {
                            setMobileSubmenuOpen((prev) => ({
                              ...prev,
                              [link.name]: !prev[link.name],
                            }));
                          } else {
                            handleNavigation(e, link);
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={`w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 flex justify-between items-center ${mobileSubmenuOpen[link.name]
                          ? "bg-primary/5 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                      >
                        {link.name}
                        {link.submenu && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenuOpen[link.name] ? "rotate-180" : ""
                              }`}
                          />
                        )}
                      </button>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {link.submenu && mobileSubmenuOpen[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 mt-2 pb-2 space-y-4">
                              {link.submenu.map((category) => (
                                <div key={category.title}>
                                  <h4 className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-2 px-3">
                                    {category.title}
                                  </h4>
                                  <div className="space-y-1">
                                    {category.items.map((item) => (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                          handleNavigation(e, item);
                                          setMobileMenuOpen(false);
                                        }}
                                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors border-l-2 border-transparent hover:border-primary/30"
                                      >
                                        {item.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="pt-6 mt-4 border-t border-border/50 flex flex-col gap-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-center h-12 rounded-xl text-primary hover:bg-primary/5 border border-primary/10"
                    onClick={() => {
                      window.open("https://partners.seqpay.in/login", "_blank");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Partner Login
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      className="h-12 rounded-xl bg-primary text-white shadow-lg shadow-primary/20"
                      onClick={() => {
                        router.push("/retailer");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Retailer
                    </Button>
                    <Button
                      className="h-12 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      onClick={() => {
                        router.push("/distributor");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Distributor
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
