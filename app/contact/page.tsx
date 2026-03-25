import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Clock, Mail, Instagram, ArrowRight } from 'lucide-react'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-light text-center px-4 overflow-hidden relative border-b border-primary/5">
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] animate-in fade-in slide-in-from-bottom-4 duration-700">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight uppercase font-playfair text-primary animate-in fade-in slide-in-from-bottom-8 duration-1000">
            CONTACT
          </h1>
          <p className="text-lg md:text-xl text-dark/60 font-karla max-w-2xl mt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Fragen, Anliegen oder einfach nur Lust auf ein kurzes Hallo? Wir freuen uns auf deine Nachricht!
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Info & Reservation */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-12">
               <div className="flex flex-col gap-6">
                 <h2 className="text-4xl font-bold font-playfair text-primary leading-tight uppercase tracking-tight">Reservierung</h2>
                 <p className="text-lg text-dark/60 font-karla leading-relaxed">
                   Sichere dir jetzt deinen Platz in unserem Restaurant. Egal ob für ein gemütliches Frühstück, einen Business-Lunch oder ein entspanntes Dinner.
                 </p>
               </div>
               
               <div className="p-10 bg-primary text-white shadow-2xl rounded-2xl flex flex-col items-center text-center gap-8 group hover:bg-accent transition-all duration-700">
                 <div className="flex flex-col gap-3">
                   <h3 className="text-xl font-bold tracking-[0.2em] uppercase">Online Buchen</h3>
                   <p className="text-sm opacity-60 font-karla">Schnell, einfach & direkt.</p>
                 </div>
                 <Link 
                   href="#mol-open" 
                   className="bg-white text-primary hover:bg-light hover:text-accent font-bold tracking-widest px-12 py-5 transition-all duration-300 uppercase text-xs w-full shadow-lg"
                 >
                   Jetzt Reservieren
                 </Link>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Powered by Molzait</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-primary/10 pt-16">
               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 text-accent">
                   <MapPin size={24} />
                   <h3 className="text-sm font-bold tracking-widest uppercase text-primary">Location</h3>
                 </div>
                 <p className="text-lg font-karla text-dark/80 leading-relaxed">
                    Berggasse 25<br />
                    1090 Wien
                 </p>
               </div>
               
               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 text-accent">
                   <Clock size={24} />
                   <h3 className="text-sm font-bold tracking-widest uppercase text-primary">Open Hours</h3>
                 </div>
                 <p className="text-lg font-karla text-dark/80 leading-relaxed uppercase">
                    Täglich von <br />
                    09:00 – 23:00 Uhr
                 </p>
               </div>

               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 text-accent">
                   <Phone size={24} />
                   <h3 className="text-sm font-bold tracking-widest uppercase text-primary">Phone</h3>
                 </div>
                 <p className="text-lg font-karla text-dark/80 leading-relaxed transition-colors hover:text-accent">
                    +676 6676883
                 </p>
               </div>

               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 text-accent">
                   <Mail size={24} />
                   <h3 className="text-sm font-bold tracking-widest uppercase text-primary">Email</h3>
                 </div>
                 <p className="text-lg font-karla text-dark/80 leading-relaxed transition-colors hover:text-accent">
                    office@plainvienna.at
                 </p>
               </div>
            </div>

            <div className="flex items-center gap-8 border-t border-primary/10 pt-16">
               <Link href="https://www.instagram.com/plain_vienna/" target="_blank" className="flex items-center gap-3 text-primary hover:text-accent font-bold tracking-widest uppercase text-xs transition-all group">
                 <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                   <Instagram size={18} />
                 </div>
                 Instagram
               </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="sticky top-32">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/10 pointer-events-none z-10 mix-blend-multiply" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.336153923363!2d16.35824511565163!3d48.21938927922987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07963d89069d%3A0xe7f98d5c4d5e97f9!2sBerggasse%2025%2C%201090%20Wien%2C%20Austria!5e0!3m2!1sen!2sde!4v1653456789012!5m2!1sen!2sde" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  )
}
