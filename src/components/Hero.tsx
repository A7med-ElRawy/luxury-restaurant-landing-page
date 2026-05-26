import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageWithFallback from './ImageWithFallback';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-black pt-24 overflow-hidden"
    >
      {/* Decorative Warm Backlight */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mid-brown/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-bg/20 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid Pattern / Subtle Elegance */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f150c0c_1px,transparent_1px),linear-gradient(to_bottom,#1f150c0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center relative z-10 py-12">
        {/* Left Columns: Brand Pitch */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 text-gold-cream/60 mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em]">
              {t.hero.michelinBadge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`font-serif text-5xl sm:text-6xl lg:text-7xl text-gold-cream leading-[1.1] mb-6 font-normal italic ${
              isAr ? 'text-right' : ''
            }`}
          >
            {t.hero.titleLine1}<br />
            <span className="not-italic text-gold-cream font-serif">{t.hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`font-sans text-xs sm:text-sm text-gold-cream/80 max-w-md leading-relaxed border-l border-[#412D15] pl-6 mb-10 text-justify ${
              isAr ? 'border-r border-l-0 pr-6 pl-0' : 'border-l pl-6'
            }`}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className={`flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 ${
              isAr ? 'sm:space-x-reverse sm:space-x-6' : 'sm:space-x-6'
            }`}
          >
            <button
              id="hero-reserve-btn"
              onClick={onOpenReservation}
              className="px-10 py-4 bg-[#412D15] text-[#E1DCC9] text-xs uppercase tracking-widest hover:bg-[#E1DCC9] hover:text-[#000000] transition-colors border border-[#412D15] cursor-pointer rounded-none font-medium active:scale-95"
            >
              {t.hero.secureReservation}
            </button>
            <a
              href="#menu"
              className="px-10 py-4 border border-[#E1DCC9] text-xs uppercase tracking-widest hover:bg-[#E1DCC9] hover:text-[#000000] text-[#E1DCC9] transition-colors rounded-none text-center font-medium active:scale-95"
            >
              {t.hero.exploreMenu}
            </a>
          </motion.div>

          {/* Metadata Flags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-mid-brown/40"
          >
            <div className="flex flex-col">
              <span className="font-serif text-xl text-gold-cream">***</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-gold-cream/50 mt-1">
                {isAr ? "معايير السقاة وميشلان" : "Michelin Stars Standard"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-medium text-gold-cream flex items-center space-x-1">
                <span>4.9</span>
                <span className={`flex text-yellow-500/80 text-[10px] ${isAr ? 'mr-1' : 'ml-1'}`}>
                  <Star className="h-3 w-3 fill-current" />
                </span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-gold-cream/50 mt-1.5">
                {isAr ? "أكثر من ١,٢٠٠ تقييم ممتاز" : "Over 1,200 Guest Reviews"}
              </span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-sans text-sm font-medium text-gold-cream flex items-center space-x-1.5">
                <Clock className="h-3.5 w-3.5 text-gold-cream/60" />
                <span>18:00 - 23:30</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-gold-cream/50 mt-1.5">
                {t.hero.dinnerService}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Columns: Showcase Image Panels */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Main Showcase Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/5] max-w-md bg-accent-bg border border-mid-brown/40 p-3 rounded-none overflow-hidden shadow-2xl group"
          >
            <div className="relative w-full h-full overflow-hidden rounded-none">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=805&q=80"
                fallbackSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=805&q=80"
                alt="Exquisite dining table setting at L'Étoile"
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Minimal Luxury Plate Abstract Wireframe Art overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none scale-90 opacity-60">
                 <div className="absolute inset-0 rounded-full border border-gold-cream/40" />
                 <div className="absolute inset-4 rounded-full border-2 border-mid-brown" />
                 <div className="absolute inset-20 rounded-full bg-gold-cream/20 blur-xl" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gold-cream/30 rotate-12" />
              </div>

              {/* Float Overlay Box */}
              <div className={`absolute bottom-6 left-6 right-6 bg-black/95 border border-mid-brown/50 p-5 rounded-none text-left ${isAr ? 'text-right' : 'text-left'}`}>
                <p className="font-serif italic text-gold-cream/90 text-sm mb-1">
                  "{t.hero.quoteText}"
                </p>
                <div className="flex justify-between items-center mt-3 border-t border-mid-brown/30 pt-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-cream/50">
                    {t.hero.tableLabel}
                  </span>
                  <span className="text-xs text-gold-cream/80 font-medium">
                    {t.hero.quoteAuthor}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary architectural overlapping element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className={`absolute hidden sm:block w-36 h-48 bg-black border border-mid-brown p-2 shadow-2xl rounded-none ${
              isAr ? '-left-4 -bottom-4' : '-right-4 -bottom-4'
            }`}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=305&q=80"
              fallbackSrc="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=305&q=80"
              alt="Champagne pour at L'Étoile"
              className="w-full h-full object-cover rounded-none filter brightness-90 grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
