import React from 'react';
import { Phone, MessageCircle, ArrowUp, Lock, ShieldCheck } from 'lucide-react';
import { TEACHER_INFO } from '../data/classData.ts';
import { useAdmin } from '../context/AdminContext.tsx';

export const Footer: React.FC = () => {
  const { isAdmin, openLoginModal } = useAdmin();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-xl font-bold text-white tracking-tight">
              {TEACHER_INFO.name}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {TEACHER_INFO.role} · 2027 නව පන්ති ආරම්භය
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a href="#hero" className="hover:text-amber-400 transition-colors">
              මුල් පිටුව
            </a>
            <a href="#subjects" className="hover:text-amber-400 transition-colors">
              පන්ති විස්තර
            </a>
            <a href="#venues" className="hover:text-amber-400 transition-colors">
              පැවැත්වෙන ස්ථාන
            </a>
            <a href="#philosophy" className="hover:text-amber-400 transition-colors">
              දැක්ම
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              සබඳතා
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>ඉහළට</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {TEACHER_INFO.name}. සියලුම හිමිකම් ඇවිරිණි.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Voice: {TEACHER_INFO.phoneVoice}</span>
            <span>·</span>
            <span>WhatsApp: {TEACHER_INFO.phoneWhatsApp}</span>
            <span>·</span>
            {/* Discreet Admin Login Trigger for the teacher */}
            <button
              type="button"
              onClick={openLoginModal}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
              title="පරිපාලක පිවිසුම"
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400">පරිපාලක (Admin)</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>පරිපාලක</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
