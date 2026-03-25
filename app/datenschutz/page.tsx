import React from 'react'

export default function Datenschutz() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-16">
        <h1 className="text-5xl md:text-7xl font-bold text-primary font-playfair uppercase tracking-tight">Datenschutz</h1>
        
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-primary">1. Datenschutz auf einen Blick</h2>
          <div className="flex flex-col gap-6 text-lg text-dark/80 font-karla leading-relaxed">
            <h3 className="text-xl font-bold tracking-widest uppercase text-accent">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            
            <h3 className="text-xl font-bold tracking-widest uppercase text-accent">Datenerfassung auf dieser Website</h3>
            <div className="flex flex-col gap-4">
              <p><span className="font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</span><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
              
              <p><span className="font-bold">Wie erfassen wir Ihre Daten?</span><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              
              <p><span className="font-bold">Wofür nutzen wir Ihre Daten?</span><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 border-t border-primary/10 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-primary">2. Hosting</h2>
          <div className="flex flex-col gap-6 text-lg text-dark/80 font-karla leading-relaxed">
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <div className="p-6 bg-light rounded-lg border border-primary/5">
              <h3 className="text-xl font-bold tracking-widest uppercase text-accent">easyname GmbH</h3>
              <p className="mt-2">Canettistraße 5/10, 1100 Wien</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 border-t border-primary/10 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-primary">3. Hinweis zur verantwortlichen Stelle</h2>
          <div className="flex flex-col gap-6 text-lg text-dark/80 font-karla leading-relaxed">
            <div className="p-6 bg-primary text-white rounded-lg">
              <h3 className="text-xl font-bold tracking-widest uppercase text-accent">PLAIN 9 GmbH</h3>
              <p className="mt-4">
                Berggasse 25/6-9<br />
                1090 Wien<br />
                Tel.: +676 6676883<br />
                E-Mail: office@plainvienna.at
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
