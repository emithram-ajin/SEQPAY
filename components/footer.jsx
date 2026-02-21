"use client"

import { Twitter, Linkedin, Github, Instagram, ArrowUp, Youtube, Facebook } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Docs", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Status", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "#" },
  ],
}

const socialLinks = [
  { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@emitramcsp" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-black/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 lg:gap-16 items-start">
            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-4 mb-8 ">
                <div className="w-24 h-12 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src="seqpaylogo.png"
                    alt="SeqPay Logo"
                    className="w-full h-full object-cover  invert brightness-0 "
                  />
                </div>
                {/* <span className="text-2xl font-bold tracking-tight">SEQPAY</span> */}
              </div>

              <p className="text-background/60 text-sm mb-8 max-w-xs leading-relaxed">
                SeqPay is a brand owned and operated by ESTA ENTERPRISES PVT LTD. © 2026 SeqPay.
                All Rights Reserved. Safe | Secure | Seamless
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h4 className="font-bold text-sm uppercase tracking-wider text-background/90">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[15px] text-background/50 hover:text-primary transition-colors duration-200 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom */}
        <FadeIn delay={0.1}>
          <div className="mt-5 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm text-background/50 text-center md:text-left">
              © 2026 SeqPay. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-background/50">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  PCI DSS Compliant
                </span>
                <span>RBI Authorized</span>
              </div>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
