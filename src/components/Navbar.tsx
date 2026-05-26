/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.philosophy, href: '#story' },
    { name: t.navbar.menu, href: '#menu' },
    { name: t.navbar.reviews, href: '#reviews' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-mid-brown/40 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 border border-gold-cream rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[135deg] shrink-0">
              <span className="text-[10px] -rotate-45 font-serif font-semibold text-gold-cream">L'É</span>
            </div>
            <span className="font-serif text-xl tracking-[0.25em] text-gold-cream font-medium">
              L'ÉTOILE
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.2em] text-gold-cream/75 hover:text-white transition-colors duration-300 relative py-1"
              >
                {link.name}
              </a>
            ))}

            <span className="h-4 w-px bg-gold-cream/20" />

            {/* Language Switcher */}
            <button
              id="lang-toggle-desktop"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/90 hover:text-gold-cream hover:underline underline-offset-4 transition-all cursor-pointer font-medium"
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>
          </div>

          {/* Booking CTA */}
          <div className="hidden md:block">
            <button
              id="nav-book-btn"
              onClick={onOpenReservation}
              className="px-6 py-2.5 bg-mid-brown text-gold-cream text-xs uppercase tracking-widest hover:bg-gold-cream hover:text-black transition-all border border-mid-brown cursor-pointer"
            >
              {t.navbar.bookTable}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-gold-cream/90 hover:text-gold-cream focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-black/95 border-b border-mid-brown/60 py-8 px-6 backdrop-blur-md md:hidden flex flex-col space-y-6"
          >
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between pb-3 border-b border-mid-brown/30">
              <span className="font-sans text-xs uppercase tracking-widest text-[#E1DCC9]/45">Language / اللغة</span>
              <button
                id="lang-toggle-mobile"
                onClick={() => {
                  setLanguage(language === 'en' ? 'ar' : 'en');
                  setIsOpen(false);
                }}
                className="font-sans text-xs uppercase tracking-[0.2em] bg-mid-brown text-gold-cream py-1 px-3.5 border border-gold-cream/30 cursor-pointer"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>

            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-lg tracking-wide text-gold-cream/80 hover:text-gold-cream py-1 border-b border-mid-brown/20"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <button
              id="mobile-book-btn"
              onClick={() => {
                setIsOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-mid-brown border border-gold-cream/30 text-gold-cream uppercase tracking-[0.15em] text-xs hover:bg-gold-cream hover:text-black transition-all duration-300 rounded-none cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>{t.navbar.bookTable}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
