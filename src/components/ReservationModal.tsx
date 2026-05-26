import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Calendar, Clock, ShieldAlert, Sparkles, CheckCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: 2,
    requests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const timeSlots = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate luxury API booking delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '19:00',
      guests: 2,
      requests: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  const generateTicketNumber = () => {
    return 'LÉ-' + Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="reservation-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            id="reservation-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative bg-black border border-mid-brown/50 w-full max-w-2xl rounded-none overflow-hidden shadow-2xl flex flex-col my-8"
          >
            {/* Top gold bar asset */}
            <div className="h-1.5 w-full bg-gradient-to-r from-mid-brown via-gold-cream to-mid-brown" />

            {/* Inner Content Section */}
            {!isSubmitted ? (
              // Active form container
              <form onSubmit={handleSubmit} className={`p-6 md:p-10 text-gold-cream flex-1 ${isAr ? 'text-right' : 'text-left'}`}>
                {/* Header view */}
                <div className={`flex items-start justify-between mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-cream/55">
                      {t.booking.sectionSubtitle}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-gold-cream font-medium tracking-wide mt-1">
                      {t.booking.sectionTitle}
                    </h2>
                  </div>
                  <button
                    type="button"
                    id="close-reserve-modal"
                    onClick={onClose}
                    className="p-1.5 text-gold-cream/75 hover:text-gold-cream border border-mid-brown/40 hover:border-gold-cream/35 rounded-none transition-all cursor-pointer"
                    aria-label="Close Reservation Form"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Grid Inputs */}
                <div className="space-y-6">
                  {/* Row 1: Guests Choice Chips */}
                  <div>
                    <label className={`block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-3 flex items-center space-x-1.5 ${isAr ? 'space-x-reverse justify-end' : ''}`}>
                      <Users className="h-3.5 w-3.5" />
                      <span>{t.booking.guestsLabel}</span>
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {guestOptions.map((num) => (
                        <button
                          key={num}
                          type="button"
                          id={`guests-opt-${num}`}
                          onClick={() => setFormData({ ...formData, guests: num })}
                          className={`py-2 px-1 font-mono text-xs rounded-none transition-all border cursor-pointer ${
                            formData.guests === num
                              ? 'bg-mid-brown text-gold-cream border-gold-cream/60 font-semibold shadow'
                              : 'bg-black/40 text-gold-cream/60 border-mid-brown/30 hover:border-gold-cream/30 hover:text-gold-cream'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Date Selector & Name Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-2.5 flex items-center space-x-1.5 ${isAr ? 'space-x-reverse justify-end' : ''}`} htmlFor="book-date">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{t.booking.dateLabel}</span>
                      </label>
                      <input
                        type="date"
                        id="book-date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-accent-bg border border-mid-brown/40 focus:border-gold-cream/50 rounded-none py-2.5 px-4 text-xs font-serif text-gold-cream focus:outline-none focus:ring-1 focus:ring-gold-cream/10"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-2.5" htmlFor="book-name">
                        {t.booking.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="book-name"
                        placeholder={isAr ? "مثال: البرنس فهد بن عبد العزيز" : "e.g. Jean-Luc Picard"}
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-accent-bg border border-mid-brown/40 focus:border-gold-cream/50 rounded-none py-2.5 px-4 text-xs font-sans text-gold-cream placeholder-gold-cream/30 focus:outline-none focus:ring-1 focus:ring-gold-cream/10"
                      />
                    </div>
                  </div>

                  {/* Row 3: Evening Time Slot Incrs */}
                  <div>
                    <label className={`block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-3 flex items-center space-x-1.5 ${isAr ? 'space-x-reverse justify-end' : ''}`}>
                      <Clock className="h-3.5 w-3.5" />
                      <span>{t.booking.timeLabel}</span>
                    </label>
                    <div className={`flex flex-wrap gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                      {timeSlots.map((tVal) => (
                        <button
                          key={tVal}
                          type="button"
                          id={`time-slot-${tVal.replace(':', '')}`}
                          onClick={() => setFormData({ ...formData, time: tVal })}
                          className={`py-1.5 px-3.5 font-mono text-xs rounded-none transition-all border cursor-pointer ${
                            formData.time === tVal
                              ? 'bg-mid-brown text-gold-cream border-gold-cream/60 font-semibold shadow'
                              : 'bg-black/30 text-gold-cream/50 border-mid-brown/35 hover:border-gold-cream/25'
                          }`}
                        >
                          {tVal}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Email / Phone Contacts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-2.5" htmlFor="book-email">
                        {t.booking.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="book-email"
                        required
                        placeholder="companion@luxury.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-accent-bg border border-mid-brown/40 focus:border-gold-cream/50 rounded-none py-2.5 px-4 text-xs font-sans text-gold-cream placeholder-gold-cream/30 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-2.5" htmlFor="book-phone">
                        {t.booking.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        id="book-phone"
                        required
                        placeholder="+966 (50) 192-3840"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-accent-bg border border-mid-brown/40 focus:border-gold-cream/50 rounded-none py-2.5 px-4 text-xs font-sans text-gold-cream placeholder-gold-cream/30 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 5: Special requests (Dietary, Wine pairings etc) */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-gold-cream/60 mb-2.5" htmlFor="book-requests">
                      {t.booking.requestsLabel}
                    </label>
                    <textarea
                      id="book-requests"
                      rows={2}
                      placeholder={isAr ? "مثال: تفضيل طاولة بجانب الشرفة، عشاء ذكرى سنوية، حساسية ضد المكسرات..." : "e.g. Vegetarian preference on dessert, anniversary setup..."}
                      value={formData.requests}
                      onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                      className="w-full bg-accent-bg border border-mid-brown/40 focus:border-gold-cream/50 rounded-none py-2.5 px-4 text-xs font-sans text-gold-cream placeholder-gold-cream/30 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Important Dress Code and policy banner */}
                <div className={`mt-8 p-3.5 bg-accent-bg border border-mid-brown/30 rounded-none flex items-start space-x-2.5 text-gold-cream/60 text-[11px] leading-relaxed ${
                  isAr ? 'space-x-reverse' : ''
                }`}>
                  <ShieldAlert className="h-4.5 w-4.5 text-gold-cream/80 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gold-cream/80 font-medium">
                      {isAr ? "دليل الزي المعتمد:" : "Dress Alliance Code:"}
                    </strong>{' '}
                    {t.booking.dressCodeText}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className={`mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end space-y-4 sm:space-y-0 ${
                  isAr ? 'sm:space-x-reverse sm:space-x-4' : 'sm:space-x-4'
                }`}>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-3 px-6 text-gold-cream/60 hover:text-gold-cream font-mono text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    {t.booking.cancelButton}
                  </button>
                  <button
                    type="submit"
                    id="submit-booking-btn"
                    disabled={loading}
                    className="py-3 px-10 bg-mid-brown text-gold-cream border border-gold-cream/20 hover:bg-gold-cream hover:text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-none transition-all shadow-md flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-gold-cream border-t-transparent rounded-none animate-spin" />
                    ) : (
                      <>
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{t.booking.submitButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              // Luxury Success confirmation screen
              <motion.div
                id="booking-success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center text-gold-cream flex flex-col items-center"
              >
                <div className="h-16 w-16 bg-mid-brown/40 border border-gold-cream/40 rounded-none flex items-center justify-center mb-6 text-gold-cream animate-bounce">
                  <CheckCircle className="h-8 w-8 text-gold-cream" />
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-cream/50 mb-2">
                  {t.booking.successSubtitle}
                </span>

                <h2 className="font-serif text-3xl md:text-4xl text-gold-cream font-medium tracking-wide mb-3">
                  {t.booking.successTitle}
                </h2>

                <p className="font-sans text-xs md:text-sm text-gold-cream/70 leading-relaxed max-w-lg mb-8">
                  {isAr ? (
                    <>
                      عزيزنا الضيف المتميز <strong>{formData.name}</strong>، تم استلام طلب الحجز الخاص بكم لدى الكونسيرج بنجاح. سنرسل لكم تأكيداً إلكترونياً فورياً ومفصلاً إلى البريد الإلكتروني الخاص بكم: <strong>{formData.email}</strong>.
                    </>
                  ) : (
                    <>
                      Chère <strong>{formData.name}</strong>, our reservation concierge has received your request. An elegant electronic confirmation ledger is being dispatched to you immediately at <strong>{formData.email}</strong>.
                    </>
                  )}
                </p>

                {/* Simulated luxury print boarding pass / luxury receipt */}
                <div className="w-full max-w-md bg-accent-bg border border-mid-brown rounded-none p-6 text-left font-mono text-xs space-y-4 mb-8 shadow-inner relative">
                  
                  <div className={`flex justify-between border-b border-mid-brown/40 pb-4 ${
                    isAr ? 'flex-row-reverse text-right' : 'text-left'
                  }`}>
                    <div>
                      <span className="text-gold-cream/40 uppercase text-[9px]">{t.booking.ticketLabel}</span>
                      <p className="text-sm font-semibold tracking-wider text-gold-cream/90">{generateTicketNumber()}</p>
                    </div>
                    <div>
                      <span className={`text-gold-cream/40 uppercase text-[9px] block ${isAr ? 'text-left' : 'text-right'}`}>{t.booking.statusLabel}</span>
                      <p className="text-[10px] bg-mid-brown/80 text-gold-cream py-0.5 px-2 rounded-none border border-gold-cream/15 font-sans font-medium">{t.booking.statusPending}</p>
                    </div>
                  </div>

                  <div className={`grid grid-cols-3 gap-4 ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div>
                      <span className="text-gold-cream/40 uppercase text-[9px] block">{isAr ? "الضيوف" : "GUESTS"}</span>
                      <p className="text-gold-cream/90 font-serif font-medium text-sm">{formData.guests} Pax</p>
                    </div>
                    <div>
                      <span className="text-gold-cream/40 uppercase text-[9px] block">{isAr ? "التاريخ" : "DATE"}</span>
                      <p className="text-gold-cream/90 font-serif font-medium text-sm">{formData.date}</p>
                    </div>
                    <div>
                      <span className={`text-gold-cream/40 uppercase text-[9px] block ${isAr ? 'text-left' : 'text-right'}`}>{isAr ? "ميعاد الحضور" : "SESSION TIME"}</span>
                      <p className={`text-gold-cream/90 font-serif font-medium text-sm ${isAr ? 'text-left' : 'text-right'}`}>{formData.time}</p>
                    </div>
                  </div>

                  <div className={`border-t border-mid-brown/40 pt-4 space-y-1 bg-black/30 p-3 rounded-none ${
                    isAr ? 'text-right' : 'text-left'
                  }`}>
                    <span className={`text-gold-cream/40 uppercase text-[9px] flex items-center space-x-1 ${isAr ? 'space-x-reverse justify-end' : ''}`}>
                      <MapPin className="h-3 w-3" />
                      <span>{isAr ? "موقع القاعة والحجز" : "SALLE DISPOSITION"}</span>
                    </span>
                    <p className="text-[11px] text-gold-cream/80">
                      {isAr 
                        ? "ليتوال جراند هول، ٤٥ شارع ليومير، باريس / لندن زون" 
                        : "L'Étoile Grand Hall, 45 Rue de l'Étoile, Paris / London Club"}
                    </p>
                  </div>
                </div>

                {/* Reset button */}
                <button
                  id="success-done-btn"
                  onClick={handleReset}
                  className="py-3.5 px-12 bg-mid-brown border border-gold-cream/25 hover:bg-gold-cream hover:text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-none transition-all shadow-md cursor-pointer"
                >
                  {t.booking.returnButton}
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
