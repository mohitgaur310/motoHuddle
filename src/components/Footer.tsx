import React, { useState } from 'react';
import { 
  Navigation, 
  Apple, 
  Smartphone, 
  Send, 
  Check, 
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-light-surface dark:bg-[#0A0C0E] border-t border-light-border dark:border-white/10 text-light-text dark:text-dark-text pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-light-border dark:border-white/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-blue shadow-glow-blue">
                <Navigation className="w-5 h-5 text-white transform -rotate-45" />
              </div>
              <div>
                <span className="font-montserrat font-black text-2xl tracking-tight leading-none text-light-text dark:text-white">
                  BIKERS<span className="text-brand-crimson">.</span>
                </span>
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-blue dark:text-dark-secondary">
                  CONVOY & RIDE TELEMETRY
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted max-w-sm leading-relaxed">
              The social ride planning and convoy navigation engine trusted by over 50,000 riders worldwide. Zero-drop mesh telemetry, real-time safety escort vehicle tracking, and curated hairpin libraries.
            </p>

            {/* Store Download CTA Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenDownload}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-light-text dark:bg-white text-white dark:text-dark-bg hover:opacity-90 transition-all shadow-sm"
              >
                <Apple className="w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-[8px] uppercase font-bold opacity-80 leading-none">Download on</div>
                  <div className="text-xs font-black font-montserrat leading-tight">App Store</div>
                </div>
              </button>

              <button
                onClick={onOpenDownload}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-light-input dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand-blue transition-all shadow-sm"
              >
                <Smartphone className="w-5 h-5 text-brand-blue" />
                <div className="text-left">
                  <div className="text-[8px] uppercase font-bold opacity-80 leading-none">Get it on</div>
                  <div className="text-xs font-black font-montserrat leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Column 2: Platform Features */}
          <div className="space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-light-text dark:text-white">
              Platform Features
            </h4>
            <ul className="space-y-2 text-xs text-light-muted dark:text-dark-muted">
              <li><a href="#live-ride" className="hover:text-brand-blue transition-colors">RideLive Convoy Radar</a></li>
              <li><a href="#live-ride" className="hover:text-brand-blue transition-colors">HostRideLobby Muster</a></li>
              <li><a href="#safety-escort" className="hover:text-brand-blue transition-colors">Support Escort Car Tagging</a></li>
              <li><a href="#trip-planner" className="hover:text-brand-blue transition-colors">5-Step Route Architect</a></li>
              <li><a href="#digital-garage" className="hover:text-brand-blue transition-colors">Digital Garage & AddBike</a></li>
              <li><a href="#scenic-routes" className="hover:text-brand-blue transition-colors">GPX Telemetry Exporter</a></li>
            </ul>
          </div>

          {/* Column 3: Safety & Legal */}
          <div className="space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-light-text dark:text-white">
              Safety & Governance
            </h4>
            <ul className="space-y-2 text-xs text-light-muted dark:text-dark-muted">
              <li><a href="#safety" className="hover:text-brand-blue transition-colors">SOS Satellite Protocol</a></li>
              <li><a href="#guidelines" className="hover:text-brand-blue transition-colors">Convoy Riding Code</a></li>
              <li><a href="#privacy" className="hover:text-brand-blue transition-colors">Rider Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
              <li><a href="#escort" className="hover:text-brand-blue transition-colors">Escort Vehicle Standards</a></li>
              <li><a href="#mesh" className="hover:text-brand-blue transition-colors">Offline Mesh Encryption</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Dispatch */}
          <div className="space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-light-text dark:text-white">
              The Weekend Huddle
            </h4>
            <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
              Curated mountain passes, canyon condition reports, and upcoming regional rally invites delivered every Thursday.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="rider@throttle.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-surface text-light-text dark:text-dark-text text-xs focus:outline-none focus:border-brand-blue"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-500 font-bold flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the pack! Check your inbox.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-light-muted dark:text-dark-muted gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Bikers Mobile Technologies, Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-brand-crimson fill-current" /> for riders everywhere.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
