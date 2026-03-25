import "./globals.css"

import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: "PLAIN Vienna | Soul Food | Healthy & Sustainable",
  description: "PLAIN Vienna - No Plain, No Gain. Genuine soul food in Vienna with high-quality organic, regional and sustainable ingredients.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased font-karla">
        <Navbar />
        {children}
        <Footer />
        {/* Molzait Reservation Script */}
        <Script 
          src="/mirror/_ext/reserve.molzait.com/embed-c18fac4133.js"
          data-restaurant="plain-40f6097f9e5f429fbdbd"
          data-open-selectors="molzait-trigger"
          data-hide-button="true"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
