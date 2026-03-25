import "./globals.css"

import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
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
      </body>
    </html>
  )
}
