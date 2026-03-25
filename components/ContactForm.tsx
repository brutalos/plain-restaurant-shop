'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      // Reset form if needed, but for now just show success
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 bg-white rounded-xl shadow-lg border border-primary/10 text-center gap-6 animate-in fade-in zoom-in duration-500">
        <CheckCircle2 size={64} className="text-accent" />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-primary uppercase tracking-widest">Dankeschön!</h3>
          <p className="text-dark/60 font-karla">Deine Nachricht wurde erfolgreich verschickt. Wir melden uns in Kürze bei dir.</p>
        </div>
        <button 
          onClick={() => setStatus('idle')}
          className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary hover:text-accent hover:border-accent transition-all pb-1"
        >
          Neue Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 bg-white p-8 md:p-12 shadow-2xl rounded-xl border border-primary/5">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-primary uppercase tracking-widest">Meld dich bei uns!</h3>
        <p className="text-sm text-dark/50 font-karla">Du hast eine Frage oder ein Anliegen? Schreib uns einfach.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40">Name</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              className="border-b border-primary/20 focus:border-accent outline-none py-2 bg-transparent text-sm transition-all duration-300 placeholder:text-dark/20" 
              placeholder="Dein Name" 
              required 
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40">E-Mail</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              className="border-b border-primary/20 focus:border-accent outline-none py-2 bg-transparent text-sm transition-all duration-300 placeholder:text-dark/20" 
              placeholder="deine@email.com" 
              required 
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40">Telefon</label>
          <input 
            id="phone"
            type="tel" 
            name="phone" 
            className="border-b border-primary/20 focus:border-accent outline-none py-2 bg-transparent text-sm transition-all duration-300 placeholder:text-dark/20" 
            placeholder="+43 676 ..." 
            required 
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40">Nachricht</label>
          <textarea 
            id="message"
            name="message" 
            rows={4} 
            className="border-b border-primary/20 focus:border-accent outline-none py-2 bg-transparent text-sm resize-none transition-all duration-300 placeholder:text-dark/20" 
            placeholder="Was gibt's Neues?" 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="group flex items-center justify-center gap-3 bg-primary hover:bg-accent text-white font-bold tracking-[0.3em] py-5 transition-all duration-500 uppercase text-xs mt-4 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <span className="animate-pulse">Wird gesendet...</span>
          ) : (
            <>
              Abschicken <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
