/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureMenu from './components/SignatureMenu';
import Testimonials from './components/Testimonials';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <LanguageProvider>
      <div id="app-root-container" className="min-h-screen bg-black text-gold-cream antialiased font-sans selection:bg-mid-brown selection:text-gold-cream">
        {/* Sticky Top Navigation */}
        <Navbar onOpenReservation={handleOpenReservation} />

        {/* Main Sections */}
        <main>
          {/* Cinematic Hero Pitch */}
          <Hero onOpenReservation={handleOpenReservation} />

          {/* Our Concept & Storytelling (Theme Background Contrast) */}
          <About />

          {/* Interactive Menu Filtering */}
          <SignatureMenu />

          {/* Interactive Client Reviews Slider */}
          <Testimonials />
        </main>

        {/* Grand Architectural Brand Footer */}
        <Footer />

        {/* Interactive Reservation Modal Workflow */}
        <ReservationModal 
          isOpen={isReservationOpen} 
          onClose={handleCloseReservation} 
        />
      </div>
    </LanguageProvider>
  );
}
