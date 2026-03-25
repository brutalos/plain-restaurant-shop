import React from 'react'
import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-primary text-white text-center px-4 overflow-hidden relative">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <Leaf size={400} className="rotate-45" />
         </div>
         <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-5 pointer-events-none">
            <Leaf size={400} className="-rotate-45" />
         </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs animate-in fade-in slide-in-from-bottom-4 duration-1000">PLAIN CARES</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight uppercase font-playfair animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Kein überflüssiges Blabla, <br className="hidden md:block" />
            kein Kleingedrucktes, <br />
            <span className="text-accent italic">just PLAIN.</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center gap-6 group hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-accent shadow-xl border border-primary/5">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-primary">Ehrlich</h3>
            <p className="text-dark/60 font-karla leading-relaxed">
              Bei uns bekommst du, was zählt: ehrliches Essen und Trinken – ohne Chichi, ohne Kompromisse. Dafür mit echtem Geschmack, hochwertigen Zutaten und viel Feingefühl.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-6 group hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-accent shadow-xl border border-primary/5">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-primary">Bio & Regional</h3>
            <p className="text-dark/60 font-karla leading-relaxed">
              Wir setzen auf Natürlichkeit, Qualität und Haltung – nicht als Marketing, sondern aus Überzeugung. Denn „gut“ bedeutet für uns mehr als nur lecker.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-6 group hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-accent shadow-xl border border-primary/5">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-primary">Impact</h3>
            <p className="text-dark/60 font-karla leading-relaxed">
              Uns ist nicht egal, wie unsere Welt morgen aussieht. Und Dir sicherlich auch nicht, oder? Jede Wahl bei PLAIN ist ein Schritt in die richtige Richtung.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Story Section */}
      <section className="py-24 md:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/plain_food_hoch-54-128392f9c8c7.webp" 
                alt="PLAIN Food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-primary leading-tight">
                To Do Good <br />
                <span className="text-accent italic">Instead of Just To Go.</span>
              </h2>
              <div className="flex flex-col gap-6 text-lg text-dark/70 font-karla leading-relaxed">
                <p>
                  Natürlich ist uns bewusst, dass wir die Welt nicht alleine verändern können, aber: Wir wollen alles dazu beitragen, was wir können. Nicht nur guttun, sondern auch Gutes tun – das ist es, wofür PLAIN steht.
                </p>
                <p>
                  Aus diesem Grund sind unsere Speisen und Getränke nicht nur wahlweise „to go“, sondern immer (!) auch „to do good“. Also, „Superfood“ im wahrsten Sinne des Wortes! Denn wir wollen nicht nur etwas zurückgeben, sondern machen es tatsächlich und inspirieren damit auch andere.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/plain_food_hoch-55-9ec56d6d8c7c.webp" 
                alt="Inspiration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1 flex flex-col gap-8">
               <h2 className="text-3xl md:text-5xl font-bold font-playfair text-primary leading-tight uppercase tracking-tight">
                Inspirieren & <br />
                <span className="text-accent">Unterstützen.</span>
              </h2>
              <div className="flex flex-col gap-6 text-lg text-dark/70 font-karla leading-relaxed">
                <p>
                  So wie Dich! Warum? Weil Du uns mit Deinem Besuch (also ganz easy) dabei unterstützt, dass wir unterstützen können, und zwar Tag für Tag.
                </p>
                <p>
                  Wir glauben an die Kraft der Gemeinschaft und die Wirkung jeder einzelnen Entscheidung. PLAIN ist mehr als ein Restaurant – es ist ein Statement für bewussten Genuss und soziale Verantwortung.
                </p>
              </div>
              <div className="mt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-4 bg-primary hover:bg-accent text-white font-bold tracking-widest px-10 py-5 transition-all duration-300 uppercase text-xs"
                >
                  Join the Movement <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-light text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-10">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair text-primary">Hungrig auf Impact?</h2>
          <p className="text-lg text-dark/60 font-karla max-w-2xl">Komm vorbei und überzeuge dich selbst von unserem Soul Food. Wir freuen uns auf dich!</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="https://plainvienna.at/wp-content/uploads/2025/09/Plain-Vienna-Menu-Autumn.pdf" 
              className="bg-accent hover:bg-primary text-white font-bold tracking-widest px-12 py-5 transition-all duration-300 uppercase text-xs"
            >
              Speisekarte
            </Link>
            <Link 
              href="/#reservation" 
              className="border-2 border-primary hover:bg-primary hover:text-white text-primary font-bold tracking-widest px-12 py-5 transition-all duration-300 uppercase text-xs"
            >
              Reservierung
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
