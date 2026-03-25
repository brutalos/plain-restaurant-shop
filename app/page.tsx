import React from 'react'
import Link from 'next/link'
import { Instagram, ArrowRight, ShoppingBag } from 'lucide-react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Home() {
  const products = await prisma.menuItem.findMany({
    include: { category: true }
  })

  const instagramImages = [
    { src: '/images/588475531_18325359436301030_50-4ffe96e4d5f8.webp', alt: 'Fresh From Our Kitchen' },
    { src: '/images/608563124_18325245766301030_56-d543c68b5b46.webp', alt: 'Korean Fried Burger' },
    { src: '/images/604093348_18324795520301030_58-d66f641fa5cd.webp', alt: 'Cold outside. PLAIN inside' },
    { src: '/images/587397196_18324433339301030_76-bc2fe305dc41.webp', alt: 'Your Perfect PLAIN Evening' },
    { src: '/images/587954095_18323194984301030_70-4345a9e36fa4.webp', alt: 'Brunch of Your Dreams' },
    { src: '/images/587814637_18322381117301030_55-388391f698a2.webp', alt: 'Brunch & Gossip' },
    { src: '/images/586719461_18322032922301030_26-b6e94323618f.webp', alt: 'Vegan Cheesecake Dreams' },
    { src: '/images/588456433_18321600325301030_80-861d31c82e60.webp', alt: 'Halloumi Burger' },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/plain_vienna-5038ee5f9a0b.webp" 
            alt="PLAIN Vienna Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight uppercase font-playfair animate-in fade-in zoom-in duration-1000">
            NO PLAIN,<br />NO GAIN
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-wide max-w-xl opacity-90 font-karla">
            und das meinen wir ernst. Was bei uns auf den Teller kommt ist echtes soul food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              href="https://plainvienna.at/wp-content/uploads/2025/09/Plain-Vienna-Menu-Autumn.pdf" 
              className="bg-accent hover:bg-white hover:text-primary text-white font-bold tracking-widest px-10 py-4 transition-all duration-300 uppercase text-sm"
            >
              OUR MENU
            </Link>
            <Link 
              href="/#reservation" 
              className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold tracking-widest px-10 py-4 transition-all duration-300 uppercase text-sm"
            >
              RESERVATION
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Good Vibes, gutes Essen,<br />gute Entscheidung.
            </h2>
            <p className="text-lg text-dark/80 leading-relaxed font-karla">
              Du suchst gesundes Essen in Wien, das nicht nur schmeckt, sondern auch Sinn macht? Im PLAIN Vienna bekommst du ehrliche Küche mit hochwertigen Bio-Zutaten, regional und nachhaltig gedacht. Ob vegane Bowls, herzhafte Burger oder frische Limonaden – bei uns isst du mit gutem Gefühl. Ganz ohne Verzicht. Ganz viel Genuss. Und ganz klar: mit Impact.
            </p>
            <div className="flex flex-col gap-4 mt-4">
               <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                   <ArrowRight size={20} />
                 </div>
                 <span className="text-sm font-bold tracking-widest uppercase text-primary">Explore our Story</span>
               </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-lg">
            <img 
              src="/images/plain_food_hoch-03-8f9fdf87c073.webp" 
              alt="PLAIN Food" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="bg-light py-8 overflow-hidden border-y border-primary/10">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter text-primary/10 font-playfair mx-8">
              S'IL VOUS PLAIN
            </span>
          ))}
        </div>
      </section>

      {/* Menu / Shop Section */}
      <section id="menu" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs font-karla">The Flavor Experience</span>
            <h2 className="text-4xl md:text-6xl font-bold font-playfair text-primary">OUR MENU</h2>
            <p className="text-lg text-dark/60 max-w-2xl font-karla">Discover our curated selection of soul food. Healthy, flavorful, and made with heart.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden border border-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.imageUrl || '/images/placeholder.webp'} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
                    <span className="text-sm font-bold text-primary">€{item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-karla">{item.category?.name}</span>
                    <h3 className="text-xl font-bold text-primary font-playfair">{item.name}</h3>
                  </div>
                  <p className="text-sm text-dark/60 leading-relaxed font-karla line-clamp-3">
                    {item.description}
                  </p>
                  <button className="mt-auto flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white font-bold tracking-widest py-3 transition-all duration-300 uppercase text-[10px] w-full">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link 
              href="https://plainvienna.at/wp-content/uploads/2025/09/Plain-Vienna-Menu-Autumn.pdf" 
              className="border-b-2 border-primary hover:border-accent text-primary hover:text-accent font-bold tracking-widest uppercase text-sm transition-all pb-1"
            >
              Download Full PDF Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">PLAIN CARES</span>
            <h2 className="text-4xl md:text-6xl font-bold font-playfair">Kein überflüssiges Blabla,<br />kein Kleingedrucktes.</h2>
          </div>
          <p className="text-lg md:text-xl max-w-3xl opacity-80 leading-relaxed font-karla">
            Bei uns bekommst du, was zählt: ehrliches Essen und Trinken – ohne Chichi, ohne Kompromisse. Dafür mit echtem Geschmack, hochwertigen Zutaten und viel Feingefühl. Wir setzen auf Natürlichkeit, Qualität und Haltung – nicht als Marketing, sondern aus Überzeugung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full">
            <div className="flex flex-col gap-4">
              <span className="text-3xl font-bold font-playfair text-accent italic">01.</span>
              <h3 className="text-xl font-bold tracking-widest uppercase">Ehrlich</h3>
              <p className="text-sm opacity-60 leading-relaxed">Keine versteckten Zusätze. Nur das Beste vom Feld direkt in die Küche.</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-3xl font-bold font-playfair text-accent italic">02.</span>
              <h3 className="text-xl font-bold tracking-widest uppercase">Bio & Regional</h3>
              <p className="text-sm opacity-60 leading-relaxed">Wir kennen unsere Produzenten und setzen auf kurze Wege.</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-3xl font-bold font-playfair text-accent italic">03.</span>
              <h3 className="text-xl font-bold tracking-widest uppercase">Impact</h3>
              <p className="text-sm opacity-60 leading-relaxed">Jeder Bissen unterstützt eine bessere Welt. Vegan-friendly & sustainable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Instagram Section */}
      <section id="impressions" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">LOOKS GOOD</span>
              <h2 className="text-4xl md:text-6xl font-bold text-primary font-playfair leading-tight">TASTES BETTER.</h2>
            </div>
            <Link 
              href="https://www.instagram.com/plain_vienna/" 
              className="flex items-center gap-2 text-primary hover:text-accent font-bold tracking-widest uppercase text-sm transition-colors border-b-2 border-primary hover:border-accent pb-1"
            >
              Follow the Flavor <Instagram size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-md group">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation & Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Reservation Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">RESERVIERUNG</h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              Du möchtest einen Tisch reservieren? Wir freuen uns auf deinen Besuch! Genieße entspannte Stunden in unserem modernen Restaurant im 9. Bezirk.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              <div className="p-8 bg-white shadow-xl rounded-lg border border-primary/5 flex flex-col gap-6 items-center text-center">
                <h3 className="text-xl font-bold tracking-widest uppercase">Einfach online buchen</h3>
                <Link 
                  href="#mol-open" 
                  className="bg-primary hover:bg-accent text-white font-bold tracking-widest px-12 py-5 transition-all duration-300 uppercase text-sm w-full"
                >
                  Zur Reservierung
                </Link>
                <p className="text-xs font-bold uppercase tracking-widest text-dark/40">Powered by Molzait</p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="flex flex-col gap-8 bg-white p-8 md:p-12 shadow-2xl rounded-xl">
            <h3 className="text-2xl font-bold text-primary uppercase tracking-widest">Meld dich bei uns!</h3>
            <form action="/api/contact" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-dark/50">Name</label>
                  <input type="text" name="name" className="border-b border-primary/20 focus:border-primary outline-none py-2 bg-transparent text-sm" placeholder="Dein Name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-dark/50">E-Mail</label>
                  <input type="email" name="email" className="border-b border-primary/20 focus:border-primary outline-none py-2 bg-transparent text-sm" placeholder="deine@email.com" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-dark/50">Nachricht</label>
                <textarea name="message" rows={4} className="border-b border-primary/20 focus:border-primary outline-none py-2 bg-transparent text-sm resize-none" placeholder="Was gibt's Neues?" required></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-accent text-white font-bold tracking-widest py-4 transition-all duration-300 uppercase text-xs mt-4">
                Abschicken
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
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
