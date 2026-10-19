import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { TEACHER_INFO } from '../data/classData.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element, no attached subtitle chips) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            මාලින්ද රාජපක්ෂ
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#hero"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              මුල් පිටුව
            </a>
            <a
              href="#subjects"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              පන්ති විස්තර
            </a>
            <a
              href="#venues"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              පැවැත්වෙන ස්ථාන
            </a>
            <a
              href="#philosophy"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              ඉගැන්වීම් දැක්ම
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              සබඳතා
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${TEACHER_INFO.rawVoicePhone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-amber-400 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{TEACHER_INFO.phoneVoice}</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="ප්‍රධාන මෙනුව"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-md"
            >
              මුල් පිටුව
            </a>
            <a
              href="#subjects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-md"
            >
              පන්ති විස්තර
            </a>
            <a
              href="#venues"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-md"
            >
              පැවැත්වෙන ස්ථාන
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-md"
            >
              ඉගැන්වීම් දැක්ම
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-md"
            >
              සබඳතා
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${TEACHER_INFO.rawVoicePhone}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                ඇමතුමක් ලබා දෙන්න ({TEACHER_INFO.phoneVoice})
              </a>
              <a
                href={`https://wa.me/${TEACHER_INFO.rawWhatsAppPhone}?text=${encodeURIComponent('ආයුබෝවන් ගුරුතුමනි, මට 2027 පන්ති පිළිබඳ විස්තර දැනගැනීමට අවශ්‍යයි.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp පණිවිඩයක් ({TEACHER_INFO.phoneWhatsApp})
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
