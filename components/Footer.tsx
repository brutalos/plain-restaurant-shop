import React from 'react'
import Link from 'next/link'
import { Instagram, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <Link href="/">
            <img 
              src="/images/plain_logo_weiss-2048x1931-c5dd2ef2236e.png" 
              alt="PLAIN Logo" 
              className="h-20 w-auto"
            />
          </Link>
          <p className="text-sm font-medium leading-relaxed opacity-80 max-w-xs">
            und das meinen wir ernst. Was bei uns auf den Teller kommt ist echtes soul food.
          </p>
        </div>

        {/* Contact & Location */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold tracking-widest text-accent font-playfair">CONTACT</h3>
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <MapPin className="text-accent flex-shrink-0" />
            <p className="text-sm font-medium opacity-80 leading-relaxed">
              Berggasse 25, 1090 Wien
            </p>
          </div>
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <Phone className="text-accent flex-shrink-0" />
            <p className="text-sm font-medium opacity-80 leading-relaxed">
              +676 6676883
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold tracking-widest text-accent font-playfair">OPEN HOURS</h3>
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <Clock className="text-accent flex-shrink-0" />
            <p className="text-sm font-medium opacity-80 leading-relaxed uppercase">
              MO-SO 09:00 – 23:00
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Instagram className="text-accent flex-shrink-0" />
            <Link href="https://www.instagram.com/plain_vienna/" target="_blank" className="text-sm font-medium opacity-80 hover:text-accent transition-colors">
              @plain_vienna
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold tracking-[0.2em] uppercase opacity-60">
        <p>&copy; {new Date().getFullYear()} PLAIN Vienna. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
