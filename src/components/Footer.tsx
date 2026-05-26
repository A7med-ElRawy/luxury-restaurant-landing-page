import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const isAr = language === 'ar';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate luxury newsletter dispatch delay
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-accent-bg text-gold-cream border-t border-mid-brown/40 relative overflow-hidden"
    >
      {/* Decorative dark vignettes */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-cream/40 to-transparent" />
      <div className={`absolute -bottom-12 w-80 h-80 bg-black/40 pointer-events-none filter blur-xl ${
        isAr ? '-left-12' : '-right-12'
      }`} />

      {/* Main Footer Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start ${
          isAr ? 'text-right' : 'text-left'
        }`}>
          
          {/* Col 1: Brand & Description */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl tracking-[0.2em] text-gold-cream font-semibold">
              {t.footer.aboutTitle}
            </h3>
            <p className="font-sans text-xs text-gold-cream/70 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>
            <div className={`flex items-center space-x-1 text-gold-cream/40 text-[10px] font-mono tracking-widest uppercase ${
              isAr ? 'space-x-reverse justify-start' : ''
            }`}>
              <Sparkles className="h-3 w-3 fill-current text-gold-cream/60" />
              <span>{isAr ? "فنون ورفاهية الطهي" : "Epicurean Perfection"}</span>
            </div>
          </div>

          {/* Col 2: Operational Hours */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E1DCC9]/55 border-b border-mid-brown/30 pb-2 w-fit">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-3.5 text-xs text-gold-cream/75 font-sans">
              <div className={`flex justify-between items-center ${isAr ? 'flex-row-reverse' : ''}`}>
                <span>{t.footer.dayTueThu}</span>
                <span className="font-mono text-[11px] text-gold-cream/60">18:00 - 23:00</span>
              </div>
              <div className={`flex justify-between items-center ${isAr ? 'flex-row-reverse' : ''}`}>
                <span>{t.footer.dayFriSat}</span>
                <span className="font-mono text-[11px] text-gold-cream/60 font-semibold text-gold-cream">17:30 - 00:00</span>
              </div>
              <div className={`flex justify-between items-center ${isAr ? 'flex-row-reverse' : ''}`}>
                <span>{t.footer.daySunBrunch}</span>
                <span className="font-mono text-[11px] text-gold-cream/60">12:00 - 15:30</span>
              </div>
              <div className={`flex justify-between items-center text-gold-cream/45 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span>{t.footer.dayMon}</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[9px] bg-black/40 px-2 py-0.5 rounded-none border border-mid-brown/20">
                  {t.footer.closedLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contacts & Linkage */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E1DCC9]/55 border-b border-mid-brown/30 pb-2 w-fit">
              {t.footer.locationsTitle}
            </h4>
            <ul className="space-y-4 text-xs text-gold-cream/75">
              <li className={`flex items-start space-x-3 ${isAr ? 'space-x-reverse' : ''}`}>
                <MapPin className="h-4 w-4 text-gold-cream/50 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">{t.footer.locationsText}</span>
              </li>
              <li className={`flex items-center space-x-3 ${isAr ? 'space-x-reverse' : ''}`}>
                <Phone className="h-4 w-4 text-gold-cream/50 flex-shrink-0" />
                <a href="tel:+15550293844" className="hover:text-gold-cream hover:underline transition-all font-mono">
                  +1 (555) 029-3844
                </a>
              </li>
              <li className={`flex items-center space-x-3 ${isAr ? 'space-x-reverse' : ''}`}>
                <Mail className="h-4 w-4 text-gold-cream/50 flex-shrink-0" />
                <a href="mailto:concierge@letoileretreat.com" className="hover:text-gold-cream hover:underline transition-all font-sans">
                  concierge@letoileretreat.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Grand Newsletter Ledger */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E1DCC9]/55 border-b border-mid-brown/30 pb-2 w-fit">
              {t.footer.newsletterTitle}
            </h4>
            <p className="font-sans text-xs text-gold-cream/70 leading-relaxed">
              {t.footer.newsletterText}
            </p>

            {/* Newsletter Dispatch Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    id="footer-newsletter-email"
                    placeholder={t.footer.newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-black/50 border border-mid-brown/40 focus:border-gold-cream/50 rounded-none py-2.5 text-xs text-gold-cream placeholder-gold-cream/35 focus:outline-none placeholder-italic ${
                      isAr ? 'pl-10 pr-4 text-right' : 'pl-4 pr-10 text-left'
                    }`}
                    aria-label="Newsletter email input"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className={`absolute top-1.5 p-1.5 text-gold-cream/70 hover:text-gold-cream transition-colors cursor-pointer ${
                      isAr ? 'left-1.5' : 'right-1.5'
                    }`}
                    aria-label="Subscribe to newsletter"
                  >
                    {loading ? (
                      <span className="h-3.5 w-3.5 border border-gold-cream border-t-transparent rounded-none animate-spin block" />
                    ) : (
                      <Send className={`h-4 w-4 ${isAr ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className={`p-3 bg-black/40 border border-gold-cream/30 rounded-none flex items-center space-x-2 text-xs text-gold-cream ${
                isAr ? 'space-x-reverse' : ''
              }`}>
                <CheckCircle className="h-4.5 w-4.5 text-gold-cream flex-shrink-0" />
                <span className="italic font-sans text-xs">{t.footer.newsletterSuccess}</span>
              </div>
            )}
          </div>

        </div>

        {/* Outer bottom copyright deck */}
        <div className={`mt-16 pt-8 border-t border-mid-brown/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-gold-cream/45 uppercase ${
          isAr ? 'sm:flex-row-reverse text-right' : 'text-left'
        }`}>
          <p>{isAr ? `© ${currentYear} ليتوال جراند هاوس للطهي. جميع الحقوق محفوظة.` : `© ${currentYear} L'ÉTOILE Gastronomic House. All Rights Reserved.`}</p>
          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="hover:text-gold-cream transition-colors">
              {t.footer.privacyText}
            </a>
            <a href="#" className="hover:text-gold-cream transition-colors">
              {t.footer.termsText}
            </a>
            <a href="#" className="hover:text-gold-cream transition-colors">
              {t.footer.careersText}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
