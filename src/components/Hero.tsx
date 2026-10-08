import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Radio, 
  Star, 
  Apple, 
  Smartphone, 
  Users
} from 'lucide-react';
import { ConvoyPhoneMockup } from './ConvoyPhoneMockup';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenPublicRides: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenPublicRides }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-radial-bg bg-topo-pattern">
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-crimson/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Store Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Version / Launch Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm mb-6 animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-brand-crimson" />
              <span className="text-xs font-bold uppercase tracking-wider text-light-text dark:text-dark-text">
                Next-Gen Motorcycle Convoy Engine v2.4
              </span>
              <span className="text-xs font-semibold px-2 py-0.2 rounded-full bg-brand-blue/15 text-brand-blue">
                Now Live
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-light-text dark:text-dark-text leading-[1.08] mb-6">
              The Ultimate Co-Pilot for Every{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-brand-purple to-brand-blue">
                Group Ride
              </span>{' '}
              & Solo Adventure.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-light-muted dark:text-dark-muted max-w-2xl leading-relaxed mb-8">
              Plan scenic hairpin routes, coordinate convoys in real time with safety escort chase vehicle support, manage your digital garage, and connect with motorcycle communities worldwide.
            </p>

            {/* CTA Badges & Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              
              {/* Apple App Store Button */}
              <button
                onClick={onOpenDownload}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-light-text dark:bg-white text-white dark:text-dark-bg hover:opacity-95 transition-all shadow-md hover:scale-[1.02] active:scale-100"
              >
                <Apple className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider leading-none opacity-80">
                    Download on the
                  </div>
                  <div className="text-sm font-black font-montserrat tracking-tight leading-tight">
                    App Store
                  </div>
                </div>
              </button>

              {/* Google Play Store Button */}
              <button
                onClick={onOpenDownload}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand-blue transition-all shadow-md hover:scale-[1.02] active:scale-100"
              >
                <Smartphone className="w-6 h-6 text-brand-blue" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider leading-none opacity-80">
                    Get it on
                  </div>
                  <div className="text-sm font-black font-montserrat tracking-tight leading-tight">
                    Google Play
                  </div>
                </div>
              </button>

              {/* Explore Public Rides Demo Button */}
              <button
                onClick={onOpenPublicRides}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blue-hover text-white font-montserrat font-bold text-sm tracking-wide shadow-glow-blue hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Explore Public Rides</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Trust Proof Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-light-border dark:border-dark-border w-full">
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-black text-sm text-light-text dark:text-dark-text">50,000+</div>
                  <div className="text-[11px] text-light-muted dark:text-dark-muted">Active Riders</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-crimson/15 flex items-center justify-center text-brand-crimson">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-black text-sm text-light-text dark:text-dark-text">99.8%</div>
                  <div className="text-[11px] text-light-muted dark:text-dark-muted">Safe Arrivals</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                  <Radio className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-black text-sm text-light-text dark:text-dark-text">Zero-Drop</div>
                  <div className="text-[11px] text-light-muted dark:text-dark-muted">Mesh Telemetry</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-amber/15 flex items-center justify-center text-brand-amber">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-black text-sm text-light-text dark:text-dark-text">4.9 / 5.0</div>
                  <div className="text-[11px] text-light-muted dark:text-dark-muted">Rider Ratings</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ConvoyPhoneMockup />
          </div>

        </div>
      </div>

    </section>
  );
};
