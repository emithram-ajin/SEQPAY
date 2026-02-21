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
  title: "SeqPay | Seamless Payment Solutions for Businesses",
  description:
    "SeqPay provides secure and fast payment solutions including AEPS, DMT, BBPS, and more. Transform your shop into a digital service hub with SeqPay.",
  keywords: "SeqPay, Fintech, AEPS, DMT, BBPS, Digital Payments, Business Payments, Money Transfer, Bill Payments, Recharge",
  authors: [{ name: "SeqPay Team" }],
  creator: "ESTA Enterprises Pvt Ltd",
  publisher: "ESTA Enterprises Pvt Ltd",
  openGraph: {
    title: "SeqPay | Seamless Payment Solutions for Businesses",
    description: "Accept payments seamlessly with SeqPay. Support for AEPS, DMT, BBPS, and industry-leading security.",
    url: "https://seqpay.in",
    siteName: "SeqPay",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or provide a valid path
        width: 1200,
        height: 630,
        alt: "SeqPay - Secure Payments",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeqPay | Seamless Payment Solutions for Businesses",
    description: "Accept payments seamlessly with SeqPay. Support for AEPS, DMT, BBPS, and industry-leading security.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://seqpay.in",
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
