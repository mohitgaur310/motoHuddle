import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  BatteryMedium, 
  Radio, 
  AlertTriangle, 
  Mic, 
  TrendingUp, 
  Navigation2, 
  Truck, 
  Sun, 
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ConvoyPhoneMockup: React.FC = () => {
  const { isDark: globalIsDark } = useTheme();
  // Allow independent phone mode preview or sync with global
  const [phoneMode, setPhoneMode] = useState<'sync' | 'light' | 'dark'>('sync');
  const [speed, setSpeed] = useState(82);
  const [selectedRider, setSelectedRider] = useState<string | null>('you');
  const [sosActive, setSosActive] = useState(false);
  const [pttActive, setPttActive] = useState(false);

  const isPhoneDark = phoneMode === 'sync' ? globalIsDark : phoneMode === 'dark';

  // Subtle speed telemetry fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const newSpeed = prev + delta;
        return newSpeed > 94 ? 92 : newSpeed < 74 ? 76 : newSpeed;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const riders = [
    { id: 'scout', name: 'Marco (Scout)', x: '78%', y: '16%', dist: '+450m', color: '#EBC307', role: 'Lead Scout', bike: 'Multistrada V4' },
    { id: 'lead', name: 'Sarah (Lead)', x: '62%', y: '36%', dist: '+120m', color: '#4B70F5', role: 'Convoy Lead', bike: 'R 1250 GS' },
    { id: 'you', name: 'You (Midfield)', x: '45%', y: '52%', dist: '0m', color: '#F0535C', role: 'Midfield (You)', bike: 'Scrambler 1200' },
    { id: 'sweeper', name: 'Devon (Sweeper)', x: '32%', y: '68%', dist: '-180m', color: '#DB1FFF', role: 'Sweeper', bike: 'Ténéré 700' },
    { id: 'escort', name: 'Unit-01 Chase Car', x: '18%', y: '84%', dist: '-350m', color: '#10B981', role: 'Escort 4x4 Support', bike: 'Ford Raptor Truck' },
  ];

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[360px] select-none transition-all duration-300">
      
      {/* Decorative ambient underglow */}
      <div className={`absolute -inset-4 rounded-[48px] filter blur-2xl opacity-40 transition-all duration-700 ${
        isPhoneDark ? 'bg-gradient-to-tr from-brand-purple via-brand-blue to-brand-crimson' : 'bg-gradient-to-tr from-brand-blue via-sky-300 to-amber-200'
      }`} />

      {/* Floating Theme Controller for Phone */}
      <div className="absolute -top-11 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-light-surface/90 dark:bg-dark-surface/90 backdrop-blur-md border border-light-border dark:border-dark-border shadow-md">
        <span className="text-[10px] text-light-muted dark:text-dark-muted">HUD View:</span>
        <button
          onClick={() => setPhoneMode(phoneMode === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-crimson transition-colors"
          title="Toggle phone screen between Day and Night HUD"
        >
          {isPhoneDark ? (
            <>
              <Moon className="w-3 h-3 text-purple-400" />
              <span>Night HUD</span>
            </>
          ) : (
            <>
              <Sun className="w-3 h-3 text-amber-500" />
              <span>Day Sun</span>
            </>
          )}
        </button>
      </div>

      {/* Outer Phone Shell Frame */}
      <div className={`relative rounded-[44px] p-3 shadow-2xl border-4 transition-colors duration-500 ${
        isPhoneDark 
          ? 'bg-[#18191B] border-[#2E3138] shadow-dark-card' 
          : 'bg-[#E2E8F0] border-[#CBD5E1] shadow-light-card'
      }`}>
        
        {/* Antenna band accents */}
        <div className="absolute -left-1 top-24 w-1 h-8 bg-zinc-600 rounded-l" />
        <div className="absolute -right-1 top-28 w-1 h-12 bg-zinc-600 rounded-r" />

        {/* Inner Phone Screen Display */}
        <div className={`relative overflow-hidden rounded-[36px] flex flex-col h-[670px] border transition-colors duration-500 ${
          isPhoneDark 
            ? 'bg-[#111315] text-white border-white/10' 
            : 'bg-[#F8FAFC] text-[#0F172A] border-slate-300/60'
        }`}>
          
          {/* Dynamic Island / Speaker Notch */}
          <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 z-40 w-28 h-5 bg-black rounded-full flex items-center justify-between px-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-900/60 border border-blue-400/40" />
          </div>

          {/* Phone Top Status Bar */}
          <div className="pt-3 px-6 flex items-center justify-between text-[11px] font-medium opacity-80 z-30">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                <Radio className="w-2.5 h-2.5 animate-pulse" /> SAT-LOCKED
              </span>
              <Wifi className="w-3 h-3" />
              <BatteryMedium className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* App Header Bar */}
          <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-white/5 dark:border-white/10">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-crimson animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-crimson">
                  LIVE CONVOY
                </span>
              </div>
              <h4 className="font-montserrat font-bold text-xs tracking-tight truncate max-w-[170px]">
                Dolomite Alpine Passes
              </h4>
            </div>

            <div className="flex items-center gap-1">
              <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                isPhoneDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                <span>5 / 5 RIDERS</span>
              </div>
            </div>
          </div>

          {/* Telemetry Gauge Strip */}
          <div className="px-4 py-2 grid grid-cols-3 gap-2">
            
            {/* Speedometer */}
            <div className={`p-2 rounded-xl text-center border ${
              isPhoneDark ? 'bg-[#1C1E22] border-white/5' : 'bg-white border-slate-200'
            }`}>
              <div className="text-[10px] uppercase font-bold text-slate-400">Speed</div>
              <div className="font-montserrat font-black text-xl text-brand-blue flex items-center justify-center leading-none mt-0.5">
                {speed}
                <span className="text-[9px] font-bold ml-0.5 text-slate-400">KM/H</span>
              </div>
            </div>

            {/* Compass Heading */}
            <div className={`p-2 rounded-xl text-center border ${
              isPhoneDark ? 'bg-[#1C1E22] border-white/5' : 'bg-white border-slate-200'
            }`}>
              <div className="text-[10px] uppercase font-bold text-slate-400">Heading</div>
              <div className="font-montserrat font-bold text-base flex items-center justify-center gap-1 leading-none mt-1">
                <Navigation2 className="w-3.5 h-3.5 text-brand-crimson transform rotate-45" />
                <span>NE 042°</span>
              </div>
            </div>

            {/* Elevation */}
            <div className={`p-2 rounded-xl text-center border ${
              isPhoneDark ? 'bg-[#1C1E22] border-white/5' : 'bg-white border-slate-200'
            }`}>
              <div className="text-[10px] uppercase font-bold text-slate-400">Altitude</div>
              <div className="font-montserrat font-black text-sm flex items-center justify-center leading-none mt-1">
                2,140 <span className="text-[9px] text-slate-400 ml-0.5">M</span>
              </div>
            </div>

          </div>

          {/* Interactive Radar & Winding Route Map */}
          <div className="relative flex-1 mx-3 rounded-2xl overflow-hidden border border-white/10 my-1">
            
            {/* Map Canvas Background */}
            <div className={`absolute inset-0 ${
              isPhoneDark ? 'bg-[#15171B]' : 'bg-[#E2E8F0]'
            }`}>
              {/* Topographic Contour lines SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="12" cy="12" r="1" fill={isPhoneDark ? '#FFFFFF' : '#0F172A'} />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M-50,80 Q80,20 180,120 T350,70" fill="none" stroke={isPhoneDark ? '#4B70F5' : '#3B82F6'} strokeWidth="1" strokeDasharray="4 4" />
                <path d="M-20,180 Q100,120 220,240 T380,190" fill="none" stroke={isPhoneDark ? '#4B70F5' : '#3B82F6'} strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Curving Winding Road Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 260">
                {/* Road Base */}
                <path
                  d="M 50 220 C 90 200, 110 170, 140 140 C 180 100, 170 80, 250 40"
                  fill="none"
                  stroke={isPhoneDark ? '#2E323A' : '#CBD5E1'}
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Road Lane Centerline */}
                <path
                  d="M 50 220 C 90 200, 110 170, 140 140 C 180 100, 170 80, 250 40"
                  fill="none"
                  stroke={isPhoneDark ? '#EBC307' : '#F59E0B'}
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {/* Radar Sweep Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <div className="w-[300px] h-[300px] absolute -top-10 -left-10 rounded-full border border-brand-blue/40 animate-pulse-ring" />
            </div>

            {/* Interactive Rider Blips */}
            {riders.map((r) => {
              const isSelected = selectedRider === r.id;
              const isEscort = r.id === 'escort';
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRider(r.id)}
                  style={{ left: r.x, top: r.y }}
                  aria-label={r.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring for your bike */}
                    {r.id === 'you' && (
                      <span className="absolute w-8 h-8 rounded-full bg-brand-crimson/40 animate-ping" />
                    )}
                    
                    {/* Blip Circle */}
                    <div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${
                        isSelected ? 'scale-125 ring-2 ring-brand-blue' : 'group-hover:scale-110'
                      }`}
                      style={{ backgroundColor: r.color }}
                    >
                      {isEscort ? (
                        <Truck className="w-3 h-3 text-white" />
                      ) : (
                        <span className="text-[9px] font-black text-white">{r.name[0]}</span>
                      )}
                    </div>

                    {/* Small distance flag */}
                    <span className="absolute -bottom-4 px-1 py-0.2 text-[8px] font-black bg-black/80 text-white rounded whitespace-nowrap">
                      {r.dist}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Selected Rider Overlay Card */}
            {selectedRider && (
              <div className="absolute top-2 left-2 right-2 p-2 rounded-xl backdrop-blur-md bg-black/85 text-white border border-white/15 z-30 flex items-center justify-between text-xs animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-xs">
                    {riders.find(r => r.id === selectedRider)?.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[11px] leading-tight flex items-center gap-1">
                      {riders.find(r => r.id === selectedRider)?.name}
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-purple/40 text-purple-200">
                        {riders.find(r => r.id === selectedRider)?.role}
                      </span>
                    </div>
                    <div className="text-[9px] text-zinc-300">
                      {riders.find(r => r.id === selectedRider)?.bike} • {riders.find(r => r.id === selectedRider)?.dist}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRider(null)}
                  className="text-zinc-400 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Escort Tag Alert Banner */}
            <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-[9px] flex items-center gap-1.5 shadow-md">
              <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">
                <strong>Safety Escort Unit:</strong> Ford Raptor • 350m behind • Trauma Kit Ready
              </span>
            </div>

          </div>

          {/* Elevation Profile Graph cross-section */}
          <div className="px-4 py-2">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-brand-blue" /> Pass Elevation
              </span>
              <span>Peak: 2,758m</span>
            </div>
            
            {/* SVG Elevation Contour */}
            <div className="h-9 w-full">
              <svg viewBox="0 0 280 40" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="elevGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4B70F5" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#4B70F5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 35 Q 40 28, 80 32 T 160 8 T 230 18 T 280 30 L 280 40 L 0 40 Z"
                  fill="url(#elevGrad)"
                />
                <path
                  d="M 0 35 Q 40 28, 80 32 T 160 8 T 230 18 T 280 30"
                  fill="none"
                  stroke="#4B70F5"
                  strokeWidth="2"
                />
                {/* Rider Dot on Elevation */}
                <circle cx="160" cy="8" r="3.5" fill="#F0535C" stroke="#FFFFFF" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* App In-Ride Action Dock */}
          <div className={`p-3 border-t grid grid-cols-2 gap-2 ${
            isPhoneDark ? 'bg-[#181A1F] border-white/10' : 'bg-slate-100 border-slate-200'
          }`}>
            {/* Push To Talk */}
            <button
              onMouseDown={() => setPttActive(true)}
              onMouseUp={() => setPttActive(false)}
              onTouchStart={() => setPttActive(true)}
              onTouchEnd={() => setPttActive(false)}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all ${
                pttActive 
                  ? 'bg-brand-crimson text-white scale-95 shadow-glow-crimson' 
                  : 'bg-brand-blue text-white shadow-sm hover:bg-brand-blue-hover'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>{pttActive ? 'TRANSMITTING...' : 'HOLD TO TALK'}</span>
            </button>

            {/* SOS Satellite Relay */}
            <button
              onClick={() => {
                setSosActive(true);
                setTimeout(() => setSosActive(false), 3000);
              }}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs border transition-all ${
                sosActive
                  ? 'bg-red-600 text-white border-red-500 animate-pulse'
                  : isPhoneDark
                  ? 'bg-red-950/40 text-red-400 border-red-900/60 hover:bg-red-900/40'
                  : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{sosActive ? 'BEACON SENT!' : 'CONVOY SOS'}</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
