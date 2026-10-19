import React, { useRef, useState } from 'react';
import { Phone, MessageCircle, Upload, Trash2, Lock, Unlock, User, ShieldCheck } from 'lucide-react';
import { TEACHER_INFO } from '../data/classData.ts';
import { useAdmin } from '../context/AdminContext.tsx';

export const Hero: React.FC = () => {
  const { isAdmin, openLoginModal, teacherPhoto, setTeacherPhoto } = useAdmin();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgError, setImgError] = useState(false);

  // If teacherPhoto has been set by admin, use it. Otherwise attempt default image path.
  const currentPhoto = teacherPhoto || `/${TEACHER_INFO.defaultImageName}`;

  const whatsAppUrl = `https://wa.me/${TEACHER_INFO.rawWhatsAppPhone}?text=${encodeURIComponent(
    'ආයුබෝවන් මාලින්ද රාජපක්ෂ ගුරුතුමනි, 2027 පන්ති ආරම්භය පිළිබඳ තොරතුරු දැනගැනීමට කැමැත්තෙමි.'
  )}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setTeacherPhoto(result);
          setImgError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    if (window.confirm('ඔබට මෙම ඡායාරූපය ඉවත් කිරීමට අවශ්‍ය බව තහවුරු කරන්න ද?')) {
      setTeacherPhoto(null);
      setImgError(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-10 w-[350px] h-[250px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with dot separator (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-400">
              <span className="uppercase">2027 නව පන්ති ආරම්භය</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">ගණිතය සහ ගිණුම්කරණය</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight lg:leading-[1.15] [text-wrap:balance]">
              ගණිතය කියන්නේ බය වෙන්න ඕන විෂයයක් නෙවෙයි!
            </h1>

            {/* Teacher's Message / Core Philosophy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              හරි ක්‍රමයට මුල සිටම මූලික සංකල්ප තේරුම් ගත්තොත් ගණිතය තරම් ලේසි වෙනත් විෂයයක් නැහැ.
              ගණිතය සහ ගිණුම්කරණය විෂයයන් මුල සිටම සරලව, පැහැදිලිව සහ ආසාවෙන් ඉගෙන ගන්න{' '}
              <strong className="text-amber-300 font-semibold">මාලින්ද රාජපක්ෂ ගුරුතුමා</strong> සමඟ එක්වන්න!
            </p>

            {/* Direct Connect Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/10 transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                <MessageCircle className="w-5 h-5 text-slate-950" />
                <span>WhatsApp මඟින් විමසන්න</span>
              </a>

              <a
                href={`tel:${TEACHER_INFO.rawVoicePhone}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-slate-500"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>අමතන්න ({TEACHER_INFO.phoneVoice})</span>
              </a>
            </div>

            {/* Key trust bullets (Unboxed, clean typographic structure) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
                <span>6 - 11 ශ්‍රේණි: ගණිතය (Mathematics)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
                <span>12 - 13 ශ්‍රේණි: ගිණුම්කරණය (Accounting)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                <span>මුළු දිවයිනටම Online මාර්ගයෙන්</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                <span>වැලිමඩ · අඹගස්දෝව · ඇටම්පිටිය භෞතික</span>
              </div>
            </div>
          </div>

          {/* Right Column: Teacher Portrait Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Teacher-only Admin Status Bar (ONLY visible to Admin) */}
              {isAdmin && (
                <div className="mb-3 px-4 py-2 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>පරිපාලක මාදිලිය සක්‍රියයි</span>
                  </div>
                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="text-amber-400 hover:text-white underline text-[11px]"
                  >
                    පාලක පැනලය
                  </button>
                </div>
              )}

              {/* Outer Frame with Royal Blue / Gold Gradient */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/30 via-blue-500/30 to-slate-800/80 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-slate-900 min-h-[440px] flex flex-col items-center justify-center">
                  {!imgError && currentPhoto ? (
                    <img
                      src={currentPhoto}
                      alt="ප්‍රවීණ ගුරු මාලින්ද රාජපක්ෂ"
                      className="w-full h-auto aspect-[3/4] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        setImgError(true);
                      }}
                    />
                  ) : (
                    /* Dignified Educator Card when no image is loaded */
                    <div className="w-full aspect-[3/4] p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950">
                      <div className="w-24 h-24 rounded-full bg-blue-600/20 border-2 border-amber-400/40 flex items-center justify-center text-amber-400 mb-4 shadow-inner">
                        <User className="w-12 h-12" />
                      </div>
                      <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">
                        {TEACHER_INFO.title}
                      </div>
                      <div className="text-2xl font-bold text-white tracking-tight">
                        {TEACHER_INFO.name}
                      </div>
                      <div className="text-sm text-slate-300 mt-1">
                        {TEACHER_INFO.role}
                      </div>

                      {/* Admin-only Upload prompt (ONLY visible if logged in as Admin) */}
                      {isAdmin ? (
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>ඔබගේ ඡායාරූපය ඇතුළත් කරන්න</span>
                          </button>
                        </div>
                      ) : (
                        <div className="mt-4 text-xs text-slate-400">
                          2027 නව පන්ති ආරම්භය · මාලින්ද රාජපක්ෂ
                        </div>
                      )}
                    </div>
                  )}

                  {/* Scrim overlay for teacher identity */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">
                          {TEACHER_INFO.title}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {TEACHER_INFO.name}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
                          {TEACHER_INFO.role}
                        </div>
                      </div>

                      {/* Admin-only Action Buttons (Upload / Remove) */}
                      {isAdmin && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            title="ඡායාරූපය ඇතුළත් කරන්න / මාරු කරන්න"
                            className="p-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-sm"
                          >
                            <Upload className="w-4 h-4" />
                          </button>

                          {teacherPhoto && (
                            <button
                              type="button"
                              onClick={handleRemovePhoto}
                              title="ඡායාරූපය ඉවත් කරන්න"
                              className="p-2 rounded-lg bg-rose-600/90 hover:bg-rose-600 text-white transition-colors shadow-sm"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin file input (Protected) */}
              {isAdmin && (
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
