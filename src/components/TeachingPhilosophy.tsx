import React from 'react';
import { Sparkles, Target, Compass, HeartHandshake } from 'lucide-react';
import { TEACHER_INFO } from '../data/classData.ts';

export const TeachingPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 relative overflow-hidden">
          {/* Subtle gold accent circle */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
              03. ඉගැන්වීම් දර්ශනය හා අපගේ දැක්ම
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight [text-wrap:balance]">
              &ldquo;ගණිතය කියන්නේ බය වෙන්න ඕන විෂයයක් නෙවෙයි; හරි ක්‍රමයට මුල සිටම මූලික සංකල්ප තේරුම් ගත්තොත් ගණිතය තරම් ලේසි වෙනත් විෂයයක් නැහැ.&rdquo;
            </blockquote>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              විෂය කටපාඩම් කිරීම වෙනුවට, ඕනෑම සංකීර්ණ ගණිත හෝ ගිණුම් ගැටලුවකට තර්කානුකූලව සිතා විසඳුම් සෙවීමේ සැබෑ කුසලතාව දරුවා තුළ ගොඩනැංවීම අපගේ ප්‍රමුඛ අරමුණයි.
            </p>

            <div className="pt-2 text-sm text-amber-300 font-medium">
              — ප්‍රවීණ දේශක මාලින්ද රාජපක්ෂ
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-800/80">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">මුල සිටම මූලික සංකල්ප</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                කලින් ශ්‍රේණිවල අතපසු වූ දැනුම නැවත ආවරණය කරමින්, අත්තිවාරමේ සිටම නිරවුල්ව විෂය කරුණු ගොඩනැංවීම.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">විභාග ඉලක්කගත ප්‍රශ්න පත්‍ර</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                වාර විභාග සහ රජයේ විභාග (O/L & A/L) ප්‍රශ්න රටාවන්ට අනුව ක්‍රමානුකූලව හුරු කරවීම සහ ලකුණු ලබාගැනීමේ ක්‍රමවේද.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">නිරන්තර පෞද්ගලික අවධානය</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ඕනෑම දරුවෙකුට තමන්ට නොතේරෙන ගැටලු බියෙන් හෝ සැකයෙන් තොරව විමසා විසඳා ගැනීමට සුහදශීලී ඉගැන්වීම් පරිසරයක්.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
