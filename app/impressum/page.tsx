import React from 'react'

export default function Impressum() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        <h1 className="text-5xl md:text-7xl font-bold text-primary font-playfair uppercase tracking-tight">Impressum</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-widest uppercase text-accent">PLAIN 9 GmbH</h2>
            <p className="text-lg leading-relaxed text-dark/80 font-karla">
              Berggasse 25/6-9<br />
              1090 Wien
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-widest uppercase text-accent">Vertreten durch</h2>
            <p className="text-lg leading-relaxed text-dark/80 font-karla">
              Rubin Okotie
            </p>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-12 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-widest uppercase text-accent">Kontakt</h2>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-dark/80 font-karla"><span className="font-bold">Tel.:</span> +676 6676883</p>
              <p className="text-lg text-dark/80 font-karla"><span className="font-bold">Mail:</span> office@plainvienna.at</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-widest uppercase text-accent">Umsatzsteuer-ID</h2>
            <p className="text-lg text-dark/80 font-karla leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="font-bold">ATU77631635</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-widest uppercase text-accent">Bild- & Videorechte</h2>
            <ul className="list-disc list-inside text-lg text-dark/80 font-karla flex flex-col gap-2">
              <li>The First Thought</li>
              <li>Plain Vienna</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
