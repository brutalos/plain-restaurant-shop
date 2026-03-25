'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'ABOUT', href: '/#about' },
    { name: 'MENU', href: 'https://plainvienna.at/wp-content/uploads/2025/09/Plain-Vienna-Menu-Autumn.pdf' },
    { name: 'IMPRESSIONS', href: '/#impressions' },
    { name: 'CONTACT', href: '/#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav - Left */}
        <div className="hidden md:flex items-center space-gap gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-semibold tracking-widest hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2">
          <img 
            src={isScrolled ? "/images/cropped-2020_12_14_plain_logo--4d7d089bb79a.png" : "/images/plain_logo_weiss-2048x1931-c5dd2ef2236e.png"} 
            alt="PLAIN Logo" 
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex items-center space-gap gap-8">
          {navLinks.slice(2).map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-semibold tracking-widest hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
          <Link href="/cart" className={`relative ${isScrolled ? 'text-primary' : 'text-white'}`}>
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center hidden">0</span>
          </Link>
        </div>

        {/* Mobile Cart Icon */}
        <Link href="/cart" className={`md:hidden relative ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center hidden">0</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-primary">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-primary hover:text-accent">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
