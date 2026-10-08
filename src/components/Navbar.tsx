import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Navigation, 
  ShieldCheck, 
  Compass, 
  Wrench, 
  Users, 
  Download, 
  Smartphone,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenPublicRides: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenPublicRides }) => {
  const { toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Live Convoy', href: '#live-ride', icon: Navigation },
    { label: 'Trip Planner', href: '#trip-planner', icon: Compass },
    { label: 'Scenic Routes', href: '#scenic-routes', icon: Compass },
    { label: 'Digital Garage', href: '#digital-garage', icon: Wrench },
    { label: 'Safety Escort', href: '#safety-escort', icon: ShieldCheck },
    { label: 'Community', href: '#community-feed', icon: Users },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Dual-Tone Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-blue shadow-glow-blue transition-transform group-hover:scale-105">
              <Navigation className="w-5 h-5 text-white transform -rotate-45" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-amber rounded-full border-2 border-white dark:border-dark-bg animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-2xl tracking-tight leading-none text-light-text dark:text-dark-text">
                BIKERS<span className="text-brand-crimson">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue dark:text-dark-secondary">
                RIDE CONVOY SYSTEM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-light-surface/70 dark:bg-dark-surface/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-light-border dark:border-dark-border">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-light-muted dark:text-dark-muted hover:text-brand-blue dark:hover:text-white rounded-full transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Group: Theme Toggle & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Explore Public Rides Demo Button */}
            <button
              onClick={onOpenPublicRides}
              className="text-xs font-semibold px-3.5 py-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white transition-colors border border-transparent hover:border-light-border dark:hover:border-dark-border"
            >
              Public Rides
            </button>

            {/* Light / Dark Mode Toggle Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="relative p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text hover:border-brand-blue transition-all shadow-sm group"
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {isDark ? (
                  <Sun className="w-5 h-5 text-brand-amber transition-transform duration-500 rotate-0 hover:rotate-90" />
                ) : (
                  <Moon className="w-5 h-5 text-brand-blue transition-transform duration-500 rotate-0 hover:-rotate-45" />
                )}
              </div>
            </button>

            {/* Download CTA Button */}
            <button
              onClick={onOpenDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-hover text-white font-montserrat font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-glow-blue transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Get App</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text"
            >
              {isDark ? <Sun className="w-4 h-4 text-brand-amber" /> : <Moon className="w-4 h-4 text-brand-blue" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl glass-card border border-light-border dark:border-dark-border shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-light-input dark:hover:bg-dark-surfaceAlt text-sm font-semibold text-light-text dark:text-dark-text transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-blue" />
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-light-muted dark:text-dark-muted" />
                </a>
              );
            })}

            <div className="pt-3 border-t border-light-border dark:border-dark-border flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPublicRides();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-light-border dark:border-dark-border font-semibold text-sm text-light-text dark:text-dark-text"
              >
                <Compass className="w-4 h-4 text-brand-amber" />
                <span>Explore Public Rides</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-blue text-white font-montserrat font-bold text-sm tracking-wide shadow-md"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download Bikers App</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
