import React, { useState } from 'react';
import { Lock, X, KeyRound, Check, AlertCircle } from 'lucide-react';
import { useAdmin } from '../context/AdminContext.tsx';

export const AdminLoginModal: React.FC = () => {
  const { loginModalOpen, closeLoginModal, login, isAdmin, logout, updatePin } = useAdmin();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinChangeSuccess, setPinChangeSuccess] = useState(false);

  if (!loginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(pin)) {
      setPin('');
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePinChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      updatePin(newPin);
      setPinChangeSuccess(true);
      setNewPin('');
      setTimeout(() => setPinChangeSuccess(false), 3000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeLoginModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="වසන්න"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {isAdmin ? 'පරිපාලක පාලක පැනලය' : 'ගුරු පරිපාලක පිවිසුම'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAdmin
                ? 'මාලින්ද රාජපක්ෂ ගුරුතුමා ලෙස ඔබ පිවිස ඇත'
                : 'ඡායාරූප වෙනස් කිරීම සඳහා මුරපදය ඇතුළත් කරන්න'}
            </p>
          </div>
        </div>

        {!isAdmin ? (
          /* Login Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-pin" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                පරිපාලක PIN අංකය (Admin PIN)
              </label>
              <div className="relative">
                <input
                  id="admin-pin"
                  type="password"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="PIN අංකය ඇතුළත් කරන්න"
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-center tracking-widest text-lg font-mono"
                  autoFocus
                />
              </div>
              {error && (
                <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>ඇතුළත් කළ PIN අංකය වැරදියි. කරුණාකර නැවත උත්සාහ කරන්න.</span>
                </div>
              )}
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
              <span className="font-semibold text-amber-400">පෙරනිමි මුරපදය (Default PIN):</span> 2027
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={closeLoginModal}
                className="w-1/2 py-2.5 px-4 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                අවලංගු කරන්න
              </button>
              <button
                type="submit"
                className="w-1/2 py-2.5 px-4 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
              >
                පිවිසෙන්න
              </button>
            </div>
          </form>
        ) : (
          /* Logged In View - Controls to change PIN or logout */
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300">
              ඔබට දැන් Hero section හි ඇති පාලක බොත්තම් මඟින් ඡායාරූපය ඇතුළත් කිරීමට (Upload) හෝ ඉවත් කිරීමට (Remove) හැකියාව ඇත.
            </div>

            {/* Change PIN section */}
            <form onSubmit={handlePinChange} className="space-y-3 pt-2 border-t border-slate-800">
              <label htmlFor="new-admin-pin" className="block text-xs font-semibold text-slate-300">
                PIN අංකය වෙනස් කිරීමට අවශ්‍ය නම්:
              </label>
              <div className="flex gap-2">
                <input
                  id="new-admin-pin"
                  type="password"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="නව PIN (අවම ඉලක්කම් 4)"
                  maxLength={10}
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap"
                >
                  යාවත්කාලීන කරන්න
                </button>
              </div>
              {pinChangeSuccess && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>PIN අංකය සාර්ථකව වෙනස් කරන ලදී!</span>
                </div>
              )}
            </form>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  logout();
                  closeLoginModal();
                }}
                className="text-xs text-rose-400 hover:text-rose-300 font-medium underline"
              >
                පරිපාලක පිවිසුමෙන් ඉවත් වන්න (Logout)
              </button>
              <button
                type="button"
                onClick={closeLoginModal}
                className="py-2 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg"
              >
                සම්පූර්ණයි
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
