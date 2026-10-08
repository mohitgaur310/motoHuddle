import React, { useState } from 'react';
import { 
  X, 
  Apple, 
  Smartphone, 
  QrCode, 
  Send, 
  Check, 
  ShieldCheck, 
  DownloadCloud 
} from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sentSms, setSentSms] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setSentSms(true);
    setTimeout(() => {
      setSentSms(false);
      setPhoneNumber('');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-card rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-light-border dark:border-dark-border shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white hover:bg-light-input dark:hover:bg-dark-surfaceAlt transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/15 text-brand-blue font-bold text-xs uppercase tracking-wider mb-2">
            <DownloadCloud className="w-4 h-4" />
            <span>Universal App Download</span>
          </div>
          <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-light-text dark:text-dark-text">
            Get Bikers On Your Device
          </h3>
          <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted mt-1">
            Scan the QR code with your smartphone camera or download directly from the app store.
          </p>
        </div>

        {/* QR Code and App Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center p-4 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border mb-6">
          
          {/* Stylized QR Code Box */}
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            {/* SVG QR Code Simulation */}
            <svg viewBox="0 0 120 120" className="w-32 h-32 text-slate-900">
              <rect width="120" height="120" fill="white" />
              {/* Corner 1 */}
              <rect x="10" y="10" width="30" height="30" fill="currentColor" rx="4" />
              <rect x="16" y="16" width="18" height="18" fill="white" rx="2" />
              <rect x="20" y="20" width="10" height="10" fill="currentColor" rx="1" />
              {/* Corner 2 */}
              <rect x="80" y="10" width="30" height="30" fill="currentColor" rx="4" />
              <rect x="86" y="16" width="18" height="18" fill="white" rx="2" />
              <rect x="90" y="20" width="10" height="10" fill="currentColor" rx="1" />
              {/* Corner 3 */}
              <rect x="10" y="80" width="30" height="30" fill="currentColor" rx="4" />
              <rect x="16" y="86" width="18" height="18" fill="white" rx="2" />
              <rect x="20" y="90" width="10" height="10" fill="currentColor" rx="1" />
              {/* Data matrix pattern */}
              <circle cx="55" cy="25" r="4" fill="currentColor" />
              <circle cx="65" cy="35" r="4" fill="currentColor" />
              <circle cx="25" cy="55" r="4" fill="currentColor" />
              <circle cx="35" cy="65" r="4" fill="currentColor" />
              <circle cx="55" cy="55" r="5" fill="#F0535C" />
              <circle cx="65" cy="65" r="4" fill="currentColor" />
              <circle cx="85" cy="55" r="4" fill="currentColor" />
              <circle cx="55" cy="85" r="4" fill="currentColor" />
              <circle cx="75" cy="85" r="4" fill="currentColor" />
              <circle cx="95" cy="85" r="4" fill="currentColor" />
            </svg>
            <div className="text-[10px] font-bold text-slate-600 mt-2 flex items-center gap-1">
              <QrCode className="w-3 h-3 text-brand-blue" />
              <span>Point Camera at QR Code</span>
            </div>
          </div>

          {/* Direct Store Download Badges */}
          <div className="flex flex-col gap-3">
            <a
              href="#ios"
              className="flex items-center gap-3 p-3 rounded-2xl bg-light-text dark:bg-white text-white dark:text-dark-bg hover:opacity-90 transition-all shadow-md"
            >
              <Apple className="w-7 h-7 fill-current" />
              <div>
                <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">
                  Download on
                </div>
                <div className="text-sm font-black font-montserrat tracking-tight leading-tight">
                  Apple App Store
                </div>
              </div>
            </a>

            <a
              href="#android"
              className="flex items-center gap-3 p-3 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand-blue transition-all shadow-md"
            >
              <Smartphone className="w-7 h-7 text-brand-blue" />
              <div>
                <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">
                  Get it on
                </div>
                <div className="text-sm font-black font-montserrat tracking-tight leading-tight">
                  Google Play Store
                </div>
              </div>
            </a>

            <div className="text-[10px] text-light-muted dark:text-dark-muted flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>iOS 16+ & Android 12+ Compatible</span>
            </div>
          </div>

        </div>

        {/* SMS Link Dispatcher */}
        <form onSubmit={handleSendLink} className="space-y-3">
          <label className="block text-xs font-bold uppercase text-light-muted dark:text-dark-muted">
            Or text the download link to your phone
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-surface text-light-text dark:text-dark-text text-xs font-semibold focus:outline-none focus:border-brand-blue"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold uppercase font-montserrat flex items-center gap-1.5 transition-all shadow-sm"
            >
              {sentSms ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Link</span>
                </>
              )}
            </button>
          </div>
          {sentSms && (
            <div className="text-xs text-emerald-500 font-semibold animate-in fade-in">
              ✓ SMS link sent! Check your phone messages.
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
