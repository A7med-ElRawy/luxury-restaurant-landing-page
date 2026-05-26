import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { Review } from '../types';
import { useLanguage } from '../context/LanguageContext';

const REVIEWS: Review[] = [
  {
    id: 'review-1',
    author: "Evelyn Montgomery",
    location: "New York Gastronomy Guild",
    rating: 5,
    text: "Dining at L'Étoile is not merely a meal; it is an evocative, transportive artistic masterpiece. The Aigre-Doux Beetroot Rose is visually heartbreaking, and the table service remains classical royalty.",
    date: "May 2026"
  },
  {
    id: 'review-2',
    author: "Lord Harrison Vance",
    location: "London Culinary Register",
    rating: 5,
    text: "The seared Imperial A5 Wagyu is quite literally the finest cut I have experienced outside of Kyoto. Understated elegance paired with extreme culinary discipline. A pristine, high-contrast masterpiece.",
    date: "April 2026"
  },
  {
    id: 'review-3',
    author: "Elena Rostova",
    location: "Milan Avant-Garde Journal",
    rating: 5,
    text: "Absolute gastronomic theater! The Gold Noir chocolate dome melting tableside had our entire party in awe. The ambiance is dark, velvety, intimate, and profoundly luxurious.",
    date: "March 2026"
  }
];

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const isAr = language === 'ar';

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const active = REVIEWS[currentIndex];
  const activeTranslation = t.testimonials.reviews[active.id];
  const reviewText = activeTranslation?.text || active.text;
  const reviewAuthor = activeTranslation?.author || active.author;
  const reviewLocation = activeTranslation?.location || active.location;
  const reviewDate = active.date; // Year numerals are universal in our translations

  // Slide animations
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0
    })
  };

  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-accent-bg text-gold-cream relative overflow-hidden border-t border-b border-mid-brown/40"
    >
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(#412d1522_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className={`absolute bottom-10 opacity-5 pointer-events-none ${isAr ? 'left-10' : 'right-10'}`}>
        <Quote className="h-64 w-64 text-gold-cream" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Stamp */}
        <div className="flex flex-col items-center mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-cream/55 flex items-center justify-center space-x-2">
            <span className="h-[1px] w-6 bg-gold-cream/30" />
            <span>{isAr ? "أصداء وتجارب الضيوف" : "GUEST EXPERIENCES"}</span>
            <span className="h-[1px] w-6 bg-gold-cream/30" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mt-3 text-gold-cream font-semibold">
            {t.testimonials.sectionTitle}
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-[#E1DCC9]/40 mt-1.5">
            {t.testimonials.sectionSubtitle}
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[340px] md:min-h-[220px] flex items-center justify-center max-w-4xl mx-auto">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute w-full flex flex-col items-center"
            >
              {/* Star rating indicators */}
              <div className={`flex items-center space-x-1.5 mb-6 text-yellow-500/90 ${isAr ? 'space-x-reverse' : ''}`}>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* High end quotes */}
              <p className="font-serif text-lg md:text-2xl text-gold-cream/90 leading-relaxed font-light mb-8 max-w-3xl italic">
                "{reviewText}"
              </p>

              {/* Author & Specs */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-base text-gold-cream font-medium tracking-wide">
                  {reviewAuthor}
                </span>
                <span className={`font-mono text-[9px] uppercase tracking-[0.15em] text-gold-cream/50 mt-1 flex items-center space-x-2 ${
                  isAr ? 'space-x-reverse' : ''
                }`}>
                  <span>{reviewLocation}</span>
                  <span className="h-1 w-1 rounded-full bg-gold-cream/35" />
                  <span>{reviewDate}</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controls block */}
        <div className={`flex items-center justify-center space-x-6 mt-6 relative z-20 ${
          isAr ? 'space-x-reverse' : ''
        }`}>
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="p-3 bg-[#000000]/60 hover:bg-mid-brown text-gold-cream/70 hover:text-gold-cream border border-mid-brown/40 hover:border-gold-cream/30 rounded-none transition-all duration-300 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="h-4.5 w-4.5" />
          </button>
          
          {/* Custom dots indication */}
          <div className={`flex items-center space-x-2 ${isAr ? 'space-x-reverse' : ''}`}>
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                id={`testimonial-dot-${index}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`h-1 transition-all duration-300 rounded-none cursor-pointer ${
                  index === currentIndex ? 'w-8 bg-gold-cream' : 'w-3 bg-gold-cream/35'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="p-3 bg-[#000000]/60 hover:bg-mid-brown text-gold-cream/70 hover:text-gold-cream border border-mid-brown/40 hover:border-gold-cream/30 rounded-none transition-all duration-300 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Michelin Guide Endorsement Stamp */}
        <div className={`mt-16 pt-12 border-t border-mid-brown/20 flex flex-col md:flex-row items-center justify-center gap-6 text-gold-cream/65 ${
          isAr ? 'md:flex-row-reverse' : ''
        }`}>
          <div className={`flex items-center space-x-2.5 ${isAr ? 'space-x-reverse' : ''}`}>
            <Award className="h-6 w-6 text-gold-cream/80" />
            <span className="font-serif italic text-sm">
              {isAr ? "مدرج بمطاعم النخبة المعترف بها في أدلة ميشلان لباريس ولندن" : "Recognized inside the Parisian & London Michelin Gastronomy Guides"}
            </span>
          </div>
          <span className="hidden md:inline text-gold-cream/35">|</span>
          <span className="font-mono text-[10px] tracking-widest uppercase">
            {isAr ? "عضو في رابطة ريليه آند شاتو الفرنسية" : "Member of Relais & Châteaux"}
          </span>
        </div>

      </div>
    </section>
  );
}
