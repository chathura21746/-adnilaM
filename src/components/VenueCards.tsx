import React from 'react';
import { Globe, MapPin, Building2, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { VENUES, TEACHER_INFO } from '../data/classData.ts';

export const VenueCards: React.FC = () => {
  return (
    <section id="venues" className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-2">
            02. පන්ති පැවැත්වෙන ස්ථාන හා ක්‍රමවේදය
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Online හෝ ඔබට පහසු භෞතික දේශන ශාලාව තෝරාගන්න
          </h2>
          <p className="mt-3 text-base text-slate-300">
            දිවයිනේ ඕනෑම තැනක සිට Online මාර්ගයෙන් හෝ වැලිමඩ, අඹගස්දෝව, ඇටම්පිටිය භෞතික පන්ති ශාලා වෙත සම්බන්ධ විය හැක.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VENUES.map((venue) => {
            const isOnline = venue.mode === 'online';
            const venueWhatsAppUrl = `https://wa.me/${TEACHER_INFO.rawWhatsAppPhone}?text=${encodeURIComponent(
              `ආයුබෝවන් ගුරුතුමනි, මට 2027 ${venue.name} (${venue.location}) පන්තිය පිළිබඳ තොරතුරු දැනගැනීමට අවශ්‍යයි.`
            )}`;

            return (
              <div
                key={venue.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                  isOnline
                    ? 'bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-900 border-blue-500/30 ring-1 ring-blue-500/20'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top unboxed indicator */}
                  <div className="flex items-center justify-between text-xs font-semibold mb-4 text-slate-400">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      {isOnline ? <Globe className="w-4 h-4 text-amber-400" /> : <MapPin className="w-4 h-4 text-amber-400" />}
                      <span>{venue.location}</span>
                    </span>
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider">
                      {isOnline ? 'Online' : 'භෞතික'}
                    </span>
                  </div>

                  {/* Title & Institute */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {venue.name}
                  </h3>
                  <div className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{venue.institute}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {venue.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                    {venue.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct inquiry CTA */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={venueWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                      isOnline
                        ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>විස්තර විමසන්න</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
