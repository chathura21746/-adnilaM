import React from 'react';
import { AdminProvider } from './context/AdminContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SubjectCards } from './components/SubjectCards.tsx';
import { VenueCards } from './components/VenueCards.tsx';
import { TeachingPhilosophy } from './components/TeachingPhilosophy.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';
import { AdminLoginModal } from './components/AdminLoginModal.tsx';

export default function App() {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-16 sm:pb-0">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <SubjectCards />
          <VenueCards />
          <TeachingPhilosophy />
          <ContactSection />
        </main>
        <Footer />
        <MobileQuickBar />
        <AdminLoginModal />
      </div>
    </AdminProvider>
  );
}
