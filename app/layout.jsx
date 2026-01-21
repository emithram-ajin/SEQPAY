import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/navbar.jsx"
import Footer from "@/components/footer.jsx"
import { Toaster } from "@/components/ui/toast"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata = {
  title: "SeqPay",
  description:
    "Accept payments seamlessly with SeqPay. Support for UPI, credit cards, debit cards, and netbanking with industry-leading security.",
  icons: {
    icon: "/logonew.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
