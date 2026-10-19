import React from 'react';
import { BookOpen, Calculator, Check, MessageCircle, Sigma, TrendingUp, PieChart, Percent, Divide } from 'lucide-react';
import { SUBJECTS, TEACHER_INFO } from '../data/classData.ts';

export const SubjectCards: React.FC = () => {
  return (
    <section id="subjects" className="py-16 sm:py-20 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-2">
            01. පන්ති විස්තර සහ විෂය නිර්දේශය
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            මුල සිටම සරලව, පැහැදිලිව සහ ආසාවෙන් ඉගෙන ගන්න
          </h2>
          <p className="mt-3 text-base text-slate-300">
            සාමාන්‍ය පෙළ (O/L) දක්වා ශක්තිමත් ගණිතමය පදනමක් සහ උසස් පෙළ (A/L) වාණිජ අංශයේ විශිෂ්ටතම A සාමාර්ථයක් සඳහා ක්‍රමානුකූල මඟපෙන්වීම.
          </p>
        </div>

        {/* 2-Column Subject Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {SUBJECTS.map((sub) => {
            const isMath = sub.id === 'maths';
            const subjectWhatsAppUrl = `https://wa.me/${TEACHER_INFO.rawWhatsAppPhone}?text=${encodeURIComponent(
              `ආයුබෝවන් ගුරුතුමනි, මට 2027 ${sub.name} (${sub.grades}) පන්තියට ලියාපදිංචි වීමට අවශ්‍යයි.`
            )}`;

            return (
              <div
                key={sub.id}
                className="flex flex-col rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-xl"
              >
                {/* Academic Graphic Header (Custom SVG & Typography - No foreign stock people) */}
                <div
                  className={`relative h-48 sm:h-56 w-full overflow-hidden flex flex-col justify-between p-6 ${
                    isMath
                      ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border-b border-amber-500/20'
                      : 'bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40 border-b border-blue-500/20'
                  }`}
                >
                  {/* Subtle Background Mathematical/Accounting Pattern */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none select-none font-mono text-xs sm:text-sm text-slate-200 overflow-hidden p-4 leading-relaxed"
                    aria-hidden="true"
                  >
                    {isMath ? (
                      <div>
                        π = 3.14159 &nbsp; a² + b² = c² &nbsp; sin²θ + cos²θ = 1 &nbsp; f(x) = ax² + bx + c<br />
                        Δ = b² - 4ac &nbsp; log(xy) = log(x) + log(y) &nbsp; ∫ 2x dx = x² + C<br />
                        A = ½bh &nbsp; V = ⁴⁄₃πr³ &nbsp; ∑ x / n &nbsp; y - y₁ = m(x - x₁)
                      </div>
                    ) : (
                      <div>
                        Assets = Liabilities + Equity &nbsp; Dr. Purchases / Cr. Payables<br />
                        Gross Profit = Revenue - Cost of Sales &nbsp; Net Profit Ratio = (NP / Rev) × 100<br />
                        Depreciation = (Cost - Residual Value) / Useful Life &nbsp; Working Capital = CA - CL
                      </div>
                    )}
                  </div>

                  {/* Top unboxed indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700">
                      {isMath ? <Calculator className="w-4 h-4 text-amber-400" /> : <BookOpen className="w-4 h-4 text-blue-400" />}
                      <span>{sub.grades}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400">
                      {isMath ? (
                        <>
                          <Sigma className="w-5 h-5 text-amber-400/80" />
                          <Divide className="w-5 h-5 text-amber-400/60" />
                        </>
                      ) : (
                        <>
                          <TrendingUp className="w-5 h-5 text-blue-400/80" />
                          <Percent className="w-5 h-5 text-blue-400/60" />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Bottom Header Title */}
                  <div className="relative z-10">
                    <div className="text-xs text-amber-400 font-medium tracking-wide">
                      {sub.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {sub.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {sub.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-3 pt-2 border-t border-slate-800/80">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      පන්තියේ විශේෂත්වයන්
                    </div>
                    <ul className="space-y-2.5">
                      {sub.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp inquiry button */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <a
                      href={subjectWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors active:scale-[0.99]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{sub.name} පිළිබඳ විමසන්න</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
