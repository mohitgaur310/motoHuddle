import React from 'react';
import { Sun, Moon, Sparkles, Eye, Battery, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeComparison: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="py-24 relative bg-light-surface/60 dark:bg-dark-bg/60 border-t border-b border-light-border dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual Ergonomic Display Modes</span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-light-text dark:text-dark-text mb-4">
            Engineered for Noon Glare &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber via-brand-crimson to-brand-purple">
              Night Touring Stealth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted">
            Motorcyclists face extreme lighting shifts: blazing direct sun on handlebar phone mounts, followed by pitch-black mountain passes. Bikers shifts seamlessly to safeguard rider focus.
          </p>
        </div>

        {/* Interactive Global Theme Control Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-lg">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider transition-all ${
                theme === 'light'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4 text-white" />
              <span>☀️ High-Glare Sun Mode</span>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider transition-all ${
                theme === 'dark'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4 text-purple-200" />
              <span>🌙 Night Touring Stealth</span>
            </button>
          </div>
        </div>

        {/* Side-by-Side Dual Ergonomic Comparison Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card A: Light Mode Daylight Glare Proof */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#F3F4F6] text-[#0F172A] border border-[#E5E7EB] shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <Sun className="w-4 h-4" />
                </div>
                <h4 className="font-montserrat font-black text-lg">
                  Daylight Sun Mode
                </h4>
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200">
                #F3F4F6 RADIAL
              </span>
            </div>

            <p className="text-xs text-[#64748B] mb-6 leading-relaxed">
              Tuned for direct midday sun reflection on helmet visors and handlebar mounts. Features pure charcoal #0F172A typography for extreme contrast and instant legibility at speed.
            </p>

            {/* Mock Light HUD Snippet */}
            <div className="p-4 rounded-2xl bg-white border border-[#DBE3EE] shadow-sm space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-500 uppercase text-[10px]">Stelvio Hairpin 24</span>
                <span className="font-black text-emerald-600 font-mono">CONVOY ACTIVE</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-montserrat font-black text-3xl text-[#0F172A]">88 <span className="text-xs font-bold text-slate-500">KM/H</span></span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">Lead Gap: 140m</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-3/4" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Anti-Glare 7:1 Contrast</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Polarized Visor Safe</span>
              </div>
            </div>
          </div>

          {/* Card B: Dark Mode Night Touring Stealth */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#111315] text-white border border-white/10 shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01] glow-purple-edge">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-brand-purple text-white flex items-center justify-center font-bold">
                  <Moon className="w-4 h-4" />
                </div>
                <h4 className="font-montserrat font-black text-lg">
                  Night Touring Stealth
                </h4>
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#202020] text-purple-300 border border-white/10">
                #111315 ASPHALT
              </span>
            </div>

            <p className="text-xs text-[#A4A4A4] mb-6 leading-relaxed">
              Deep asphalt black #111315 prevents pupil contraction on pitch-black rural roads. Subtle purple and electric blue glow accents keep your night-adapted peripheral vision intact.
            </p>

            {/* Mock Dark HUD Snippet */}
            <div className="p-4 rounded-2xl bg-[#202020] border border-white/10 shadow-md space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-zinc-400 uppercase text-[10px]">Stelvio Hairpin 24</span>
                <span className="font-black text-emerald-400 font-mono">CONVOY ACTIVE</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-montserrat font-black text-3xl text-white">88 <span className="text-xs font-bold text-zinc-400">KM/H</span></span>
                <span className="text-xs font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded-lg">Lead Gap: 140m</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-purple to-brand-blue w-3/4" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Battery className="w-4 h-4 text-emerald-400" />
                <span>65% OLED Battery Saving</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Eye className="w-4 h-4 text-brand-purple" />
                <span>Zero Blue Light Fatigue</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
