import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { TEACHER_INFO } from '../data/classData.ts';

export const MobileQuickBar: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${TEACHER_INFO.rawWhatsAppPhone}?text=${encodeURIComponent(
    'ආයුබෝවන් ගුරුතුමනි, 2027 පන්ති ආරම්භය පිළිබඳ විස්තර දැනගැනීමට කැමැත්තෙමි.'
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${TEACHER_INFO.rawVoicePhone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-400 active:bg-amber-300 rounded-lg shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>අමතන්න</span>
        </a>
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 active:bg-emerald-500 rounded-lg shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
