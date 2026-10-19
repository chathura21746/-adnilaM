import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, ArrowRight, UserCheck } from 'lucide-react';
import { TEACHER_INFO } from '../data/classData.ts';

export const ContactSection: React.FC = () => {
  const [copiedVoice, setCopiedVoice] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const copyToClipboard = (text: string, type: 'voice' | 'whatsapp') => {
    navigator.clipboard.writeText(text);
    if (type === 'voice') {
      setCopiedVoice(true);
      setTimeout(() => setCopiedVoice(false), 2000);
    } else {
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    }
  };

  const whatsAppDirectLink = `https://wa.me/${TEACHER_INFO.rawWhatsAppPhone}?text=${encodeURIComponent(
    'ආයුබෝවන් ගුරුතුමනි, මට 2027 පන්ති ආරම්භය පිළිබඳ විස්තර දැනගෙන ලියාපදිංචි වීමට අවශ්‍යයි.'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-2">
            04. සබඳතා සහ ලියාපදිංචිය
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            වැඩි විස්තර සඳහා අදම අමතන්න
          </h2>
          <p className="mt-3 text-base text-slate-300">
            පන්ති වේලාවන්, විෂය නිර්දේශ ආවරණය සහ නව ලියාපදිංචි කිරීම් පිළිබඳ ඕනෑම තොරතුරක් සඳහා පහත අංක ඔස්සේ සම්බන්ධ වන්න.
          </p>
        </div>

        {/* 2 Main Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Voice Call Card */}
          <div className="rounded-2xl p-7 bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Voice Call
                </span>
              </div>

              <div className="text-xs text-slate-400 mb-1">සෘජු දුරකථන ඇමතුම් සඳහා</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {TEACHER_INFO.phoneVoice}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                පන්ති පිළිබඳ සෘජුවම විමසා කරුණු පැහැදිලි කරගැනීමට ඕනෑම වේලාවක අමතන්න.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <a
                href={`tel:${TEACHER_INFO.rawVoicePhone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors active:scale-[0.99]"
              >
                <Phone className="w-4 h-4" />
                <span>ඇමතුමක් ලබා දෙන්න</span>
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(TEACHER_INFO.phoneVoice, 'voice')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
              >
                {copiedVoice ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">අංකය පිටපත් කරගන්නා ලදී (Copied)</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>අංකය පිටපත් කරගන්න</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="rounded-2xl p-7 bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  WhatsApp
                </span>
              </div>

              <div className="text-xs text-slate-400 mb-1">WhatsApp පණිවිඩ සඳහා</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {TEACHER_INFO.phoneWhatsApp}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                ඔබගේ නම, ශ්‍රේණිය සහ පන්තිය සඳහන් කර WhatsApp පණිවිඩයක් එවන්න.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <a
                href={whatsAppDirectLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp වෙත පිවිසෙන්න</span>
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(TEACHER_INFO.phoneWhatsApp, 'whatsapp')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
              >
                {copiedWhatsApp ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">අංකය පිටපත් කරගන්නා ලදී (Copied)</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>අංකය පිටපත් කරගන්න</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Helpful Info Box for Parents & Students */}
        <div className="max-w-4xl mx-auto mt-8 rounded-xl p-5 bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-semibold text-white">පණිවිඩයක් එවීමේදී ඇතුළත් කළ හැකි තොරතුරු:</span>
            <div className="text-slate-400">
              සිසුවාගේ නම · ශ්‍රේණිය (6-11 ගණිතය / 12-13 ගිණුම්කරණය) · බලාපොරොත්තු වන පන්තිය (Online / භෞතික)
            </div>
          </div>
          <a
            href={whatsAppDirectLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold whitespace-nowrap shrink-0"
          >
            <span>ක්ෂණික පණිවිඩයක් යවන්න</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
