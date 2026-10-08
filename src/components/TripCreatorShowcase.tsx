import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Bike, 
  Calendar, 
  MapPin, 
  Truck, 
  Share2, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Fuel, 
  Coffee, 
  Mountain, 
  Sparkles,
  Lock,
  Globe,
  Copy
} from 'lucide-react';
import { GARAGE_BIKES } from '../data/garageBikes';

export const TripCreatorShowcase: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBike, setSelectedBike] = useState(GARAGE_BIKES[0].id);
  const [tripName, setTripName] = useState('Passo Di Gavia Dawn Patrol');
  const [tripDate, setTripDate] = useState('2026-10-12');
  const [tripTime, setTripTime] = useState('06:30');
  const [pace, setPace] = useState<'Chilled' | 'Spirited' | 'Canyon Master'>('Spirited');
  const waypoints = [
    { id: 1, name: 'Bormio Alpine Square', type: 'Start Point', icon: Mountain },
    { id: 2, name: 'Gavia Pass Summit (2,652m)', type: 'Scenic Lookout', icon: Mountain },
    { id: 3, name: 'Rifugio Bonetta Coffee Pit', type: 'Cafe Stop', icon: Coffee },
    { id: 4, name: 'Ponte di Legno Eni Station', type: 'Fuel Stop (145km)', icon: Fuel },
  ];
  const [hasEscort, setHasEscort] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const steps = [
    { number: 1, label: 'Garage Bike', icon: Bike },
    { number: 2, label: 'Trip Details', icon: Calendar },
    { number: 3, label: 'Waypoints', icon: MapPin },
    { number: 4, label: 'Safety Escort', icon: Truck },
    { number: 5, label: 'Publish & PIN', icon: Share2 },
  ];

  const handlePublish = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F0535C', '#4B70F5', '#EBC307', '#7030EF']
    });
  };

  const copyLobbyCode = () => {
    navigator.clipboard.writeText('BK-9421');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="trip-planner" className="py-24 relative bg-topo-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Route Architecture</span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-light-text dark:text-dark-text mb-4">
            Multi-Step Trip Creator.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-crimson">
              From Garage to Tarmac.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted">
            Test the exact 5-step trip generation workflow found inside the Bikers mobile app. Build routes, dial in fuel waypoints, tag safety escort vehicles, and generate instant lobby codes.
          </p>
        </div>

        {/* 5-Step Stepper Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-5 gap-2 max-w-4xl mx-auto">
            {steps.map((s) => {
              const Icon = s.icon;
              const isActive = currentStep === s.number;
              const isPassed = currentStep > s.number;
              return (
                <button
                  key={s.number}
                  onClick={() => setCurrentStep(s.number)}
                  className={`flex flex-col items-center p-3 rounded-2xl border transition-all text-center ${
                    isActive
                      ? 'bg-light-surface dark:bg-dark-surface border-brand-blue shadow-glow-blue scale-105'
                      : isPassed
                      ? 'bg-light-surface/60 dark:bg-dark-surface/60 border-emerald-500/40'
                      : 'bg-light-input dark:bg-dark-surfaceAlt border-light-border dark:border-dark-border opacity-70'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 font-bold text-xs ${
                    isActive 
                      ? 'bg-brand-blue text-white' 
                      : isPassed 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-light-border dark:bg-zinc-700 text-light-muted dark:text-zinc-400'
                  }`}>
                    {isPassed ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">
                    Step 0{s.number}
                  </span>
                  <span className="text-xs font-bold text-light-text dark:text-dark-text hidden sm:block truncate w-full">
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Main Form Work Area */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-light-border dark:border-dark-border shadow-2xl">
            
            {/* STEP 1: Garage Bike Selection */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text">
                    Step 1: Choose Vehicle from Your Garage
                  </h3>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                    Select which machine from your synced garage you are riding for this adventure.
                  </p>
                </div>

                <div className="space-y-3">
                  {GARAGE_BIKES.filter(b => !b.isEscortVehicle).map((bike) => (
                    <div
                      key={bike.id}
                      onClick={() => setSelectedBike(bike.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-4 ${
                        selectedBike === bike.id
                          ? 'border-brand-blue bg-brand-blue/5 shadow-md ring-1 ring-brand-blue'
                          : 'border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-slate-400'
                      }`}
                    >
                      <img 
                        src={bike.image} 
                        alt={bike.name} 
                        className="w-16 h-12 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-montserrat font-bold text-sm text-light-text dark:text-dark-text">
                            {bike.name}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-light-input dark:bg-dark-surfaceAlt text-brand-blue">
                            {bike.category}
                          </span>
                        </div>
                        <div className="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                          {bike.engine} • {bike.horsepower} HP
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Trip Details & Schedule */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text">
                    Step 2: Trip Details & Schedule
                  </h3>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                    Set departure schedule, estimated duration, and pace discipline.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-light-muted dark:text-dark-muted mb-1">
                      Ride Title
                    </label>
                    <input 
                      type="text" 
                      value={tripName}
                      onChange={(e) => setTripName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-surface text-light-text dark:text-dark-text font-semibold text-sm focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-light-muted dark:text-dark-muted mb-1">
                        Date
                      </label>
                      <input 
                        type="date" 
                        value={tripDate}
                        onChange={(e) => setTripDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-surface text-light-text dark:text-dark-text text-sm font-semibold focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-light-muted dark:text-dark-muted mb-1">
                        Kickstands Up (Meet Time)
                      </label>
                      <input 
                        type="time" 
                        value={tripTime}
                        onChange={(e) => setTripTime(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-surface text-light-text dark:text-dark-text text-sm font-semibold focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-light-muted dark:text-dark-muted mb-2">
                      Riding Pace Discipline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Chilled', 'Spirited', 'Canyon Master'] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPace(p)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                            pace === p
                              ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                              : 'bg-light-input dark:bg-dark-surface border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Waypoint Route Builder */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text">
                    Step 3: Waypoint Route Builder
                  </h3>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                    Automated elevation mapping with designated fuel and coffee rally stops.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {waypoints.map((wp, idx) => {
                    const Icon = wp.icon;
                    return (
                      <div 
                        key={wp.id}
                        className="p-3 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-brand-blue/15 text-brand-blue flex items-center justify-center font-bold text-xs">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="font-bold text-xs text-light-text dark:text-dark-text">
                              {wp.name}
                            </div>
                            <div className="text-[11px] text-light-muted dark:text-dark-muted flex items-center gap-1">
                              <Icon className="w-3 h-3 text-brand-amber" />
                              <span>{wp.type}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          Waypoint Locked
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-xl bg-light-input dark:bg-dark-surfaceAlt border border-dashed border-light-border dark:border-dark-border text-center text-xs text-light-muted dark:text-dark-muted">
                  + Add Custom GPX Waypoint / Summit Coordinate
                </div>
              </div>
            )}

            {/* STEP 4: Safety Escort Vehicle Preferences */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text">
                    Step 4: Safety Escort Vehicle Preferences
                  </h3>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                    Designate chase cars, recovery ramps, and EMT equipment support for peace of mind.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-light-text dark:text-dark-text">
                      Assign Safety Chase Vehicle
                    </h4>
                    <p className="text-xs text-light-muted dark:text-dark-muted">
                      Tail truck monitors convoy from rear with spare fuel & tools.
                    </p>
                  </div>
                  <button
                    onClick={() => setHasEscort(!hasEscort)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      hasEscort ? 'bg-emerald-500' : 'bg-zinc-600'
                    }`}
                  >
                    <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                      hasEscort ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {hasEscort && (
                  <div className="space-y-3 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Selected Escort Asset:
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-6 h-6 text-emerald-400" />
                      <div>
                        <div className="font-bold text-sm text-light-text dark:text-dark-text">
                          Unit-01 Ford Ranger Raptor Support Chase
                        </div>
                        <div className="text-xs text-light-muted dark:text-dark-muted">
                          Hydraulic Ramp • 120L Spare Fuel • Trauma Medic Kit
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 5: Public / Private Publishing */}
            {currentStep === 5 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text">
                    Step 5: Publish & Generate Lobby PIN
                  </h3>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                    Choose lobby visibility and share your pass code with fellow riders.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsPublic(true)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isPublic 
                        ? 'border-brand-blue bg-brand-blue/10 text-light-text dark:text-dark-text ring-1 ring-brand-blue'
                        : 'border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface'
                    }`}
                  >
                    <Globe className="w-5 h-5 text-brand-blue mb-2" />
                    <div className="font-bold text-sm">Public Discovery</div>
                    <div className="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                      Visible in Explore Routes tab.
                    </div>
                  </button>

                  <button
                    onClick={() => setIsPublic(false)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      !isPublic 
                        ? 'border-brand-crimson bg-brand-crimson/10 text-light-text dark:text-dark-text ring-1 ring-brand-crimson'
                        : 'border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface'
                    }`}
                  >
                    <Lock className="w-5 h-5 text-brand-crimson mb-2" />
                    <div className="font-bold text-sm">Invite Only</div>
                    <div className="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                      Restricted to PIN holders.
                    </div>
                  </button>
                </div>

                {/* Generated PIN Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-crimson/10 border border-brand-blue/30 text-center">
                  <div className="text-xs font-bold uppercase text-light-muted dark:text-dark-muted mb-1">
                    Your 6-Digit Convoy PIN
                  </div>
                  <div className="font-mono font-black text-3xl tracking-widest text-brand-blue dark:text-white my-2">
                    #BK-9421
                  </div>
                  <button
                    onClick={copyLobbyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-xs font-bold text-light-text dark:text-dark-text hover:border-brand-blue transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Lobby PIN'}</span>
                  </button>
                </div>

                <button
                  onClick={handlePublish}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-crimson via-brand-purple to-brand-blue text-white font-montserrat font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-glow-crimson transition-all"
                >
                  🚀 Publish Trip & Open Muster Lobby
                </button>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-light-border dark:border-dark-border mt-6">
              <button
                disabled={currentStep === 1}
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                disabled={currentStep === 5}
                onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-brand-blue-hover disabled:opacity-30 disabled:pointer-events-none transition-all shadow-md"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Live Trip Preview Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 border border-light-border dark:border-dark-border shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-black text-brand-crimson bg-brand-crimson/10 px-2.5 py-0.5 rounded-full">
                  Trip Summary
                </span>
                <span className="text-xs font-mono font-bold text-light-muted dark:text-dark-muted">
                  PIN: #BK-9421
                </span>
              </div>

              <div>
                <h4 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text leading-tight">
                  {tripName}
                </h4>
                <div className="flex items-center gap-3 text-xs text-light-muted dark:text-dark-muted mt-1">
                  <span>📅 {tripDate}</span>
                  <span>⏰ {tripTime} AM</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border">
                <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted mb-1">
                  Host Machine
                </div>
                <div className="font-bold text-xs text-light-text dark:text-dark-text">
                  {GARAGE_BIKES.find(b => b.id === selectedBike)?.name}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <div className="text-[10px] text-light-muted dark:text-dark-muted font-bold">Planned Pace</div>
                  <div className="font-bold text-brand-blue">{pace}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <div className="text-[10px] text-light-muted dark:text-dark-muted font-bold">Escort Truck</div>
                  <div className="font-bold text-emerald-500">{hasEscort ? 'Linked & Ready' : 'None'}</div>
                </div>
              </div>

              <div className="border-t border-light-border dark:border-dark-border pt-3">
                <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted mb-2">
                  Waypoints ({waypoints.length})
                </div>
                <div className="space-y-1.5 text-xs text-light-muted dark:text-dark-muted">
                  {waypoints.map((w) => (
                    <div key={w.id} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      <span className="truncate">{w.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
