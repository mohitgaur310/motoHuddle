import React, { useState } from 'react';
import { 
  Users, 
  Truck, 
  CheckCircle, 
  Radio, 
  AlertTriangle, 
  Activity, 
  RadioTower
} from 'lucide-react';
import { LOBBY_RIDERS } from '../data/communityFeed';

export const LiveRideSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lobby' | 'live'>('lobby');
  const [sosSimulated, setSosSimulated] = useState(false);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('all');

  const filteredRiders = selectedRoleFilter === 'all' 
    ? LOBBY_RIDERS 
    : LOBBY_RIDERS.filter(r => r.role.toLowerCase().includes(selectedRoleFilter.toLowerCase()));

  const triggerSos = () => {
    setSosSimulated(true);
    setTimeout(() => {
      setSosSimulated(false);
    }, 4500);
  };

  return (
    <section id="live-ride" className="py-24 relative bg-light-surface/50 dark:bg-dark-bg/60 border-t border-b border-light-border dark:border-dark-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Convoy & Safety Architecture</span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-light-text dark:text-dark-text mb-4">
            Never Lose a Rider.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson to-brand-blue">
              HostRideLobby & RideLive.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted">
            Group rides often break apart at traffic lights and mountain hairpins. Bikers synchronizes the whole pack with real-time telemetry, automated convoy sweepers, and dedicated escort car oversight.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm">
            <button
              onClick={() => setActiveTab('lobby')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'lobby'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>HostRideLobby (Pre-Ride Muster)</span>
            </button>
            <button
              onClick={() => setActiveTab('live')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'live'
                  ? 'bg-brand-crimson text-white shadow-md'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>RideLive (Active Convoy)</span>
            </button>
          </div>
        </div>

        {/* Interactive Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Feature Column: Dynamic Card */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-light-border dark:border-dark-border shadow-2xl relative overflow-hidden">
              
              {/* Simulated SOS Toast Alert */}
              {sosSimulated && (
                <div className="absolute top-4 left-4 right-4 z-50 p-4 rounded-2xl bg-red-600 text-white shadow-2xl flex items-center justify-between animate-in slide-in-from-top-6 duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 animate-bounce">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-montserrat font-black text-sm uppercase tracking-wide">
                        CRITICAL CONVOY SOS BROADCAST
                      </div>
                      <div className="text-xs text-red-100">
                        Rider Devon (Sweeper) triggered SOS at KM 44.8 • Escort Car Unit-01 rerouted with trauma kit & trailer!
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-black/30 px-2.5 py-1 rounded-lg">
                    SAT-ACK 0.2s
                  </span>
                </div>
              )}

              {/* TAB 1: HostRideLobby View */}
              {activeTab === 'lobby' ? (
                <div className="space-y-6">
                  
                  {/* Lobby Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-light-border dark:border-dark-border">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-bold text-xs">
                          LOBBY OPEN
                        </span>
                        <span className="font-mono text-xs text-light-muted dark:text-dark-muted font-bold">
                          PIN: #BK-7892
                        </span>
                      </div>
                      <h3 className="font-montserrat font-black text-2xl text-light-text dark:text-dark-text mt-1">
                        High Alps Saturday Run
                      </h3>
                      <p className="text-xs text-light-muted dark:text-dark-muted">
                        Meet Point: Passo Sella Lookout • Rollout: 08:30 AM CET • 5 Confirmed
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-xl bg-light-surface dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text">
                        Pace: <strong className="text-brand-crimson">Spirited Twisties</strong>
                      </span>
                    </div>
                  </div>

                  {/* Pre-ride Checklist & Briefing */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                        <CheckCircle className="w-4 h-4" />
                        <span>Lead Scout Assigned</span>
                      </div>
                      <p className="text-[11px] text-light-muted dark:text-dark-muted">
                        Marco Rossi clears corners and checks gravel patches 500m ahead.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                        <CheckCircle className="w-4 h-4" />
                        <span>Sweeper Lock-in</span>
                      </div>
                      <p className="text-[11px] text-light-muted dark:text-dark-muted">
                        Devon anchors rear pack with tool kit to prevent any rider stranding.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border">
                      <div className="flex items-center gap-2 text-xs font-bold text-brand-blue mb-1">
                        <Truck className="w-4 h-4" />
                        <span>Support Escort Linked</span>
                      </div>
                      <p className="text-[11px] text-light-muted dark:text-dark-muted">
                        Ford Raptor chase vehicle loaded with 120L fuel, trailer, and trauma pack.
                      </p>
                    </div>
                  </div>

                  {/* Rider Roster List */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-montserrat font-bold text-sm text-light-text dark:text-dark-text uppercase tracking-wider">
                        Roster & Vehicle Assignment ({filteredRiders.length})
                      </h4>
                      <div className="flex gap-1">
                        {['all', 'Scout', 'Lead', 'Chase'].map(filter => (
                          <button
                            key={filter}
                            onClick={() => setSelectedRoleFilter(filter)}
                            className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                              selectedRoleFilter === filter 
                                ? 'bg-brand-blue text-white' 
                                : 'bg-light-input dark:bg-dark-surface text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white'
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="divide-y divide-light-border dark:divide-dark-border border border-light-border dark:border-dark-border rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface">
                      {filteredRiders.map((rider) => (
                        <div key={rider.id} className="p-3 sm:p-4 flex items-center justify-between hover:bg-light-input/50 dark:hover:bg-dark-surfaceAlt/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <img 
                              src={rider.avatar} 
                              alt={rider.name} 
                              className="w-10 h-10 rounded-full object-cover border-2 border-brand-blue/30"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-light-text dark:text-dark-text">
                                  {rider.name}
                                </span>
                                <span className="text-xs text-light-muted dark:text-dark-muted">
                                  {rider.handle}
                                </span>
                              </div>
                              <div className="text-xs text-light-muted dark:text-dark-muted flex items-center gap-2 mt-0.5">
                                <span className="font-medium text-brand-blue dark:text-dark-secondary">
                                  {rider.bike}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                              rider.role === 'Lead Scout' 
                                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400' 
                                : rider.role === 'Safety Escort Chase'
                                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                                : 'bg-brand-blue/15 text-brand-blue'
                            }`}>
                              {rider.role}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                              <CheckCircle className="w-3.5 h-3.5" /> Ready
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* TAB 2: RideLive View */
                <div className="space-y-6">
                  
                  {/* Telemetry Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-light-border dark:border-dark-border">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <div>
                        <div className="font-montserrat font-black text-lg text-light-text dark:text-dark-text">
                          ACTIVE CONVOY TELEMETRY
                        </div>
                        <div className="text-xs text-light-muted dark:text-dark-muted">
                          Passo Gardena Sector • All 5 Transmitters Broadcasting at 10Hz
                        </div>
                      </div>
                    </div>

                    {/* SOS Trigger button simulation */}
                    <button
                      onClick={triggerSos}
                      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-glow-crimson transition-all"
                    >
                      <AlertTriangle className="w-4 h-4" />
                      <span>Simulate Convoy SOS</span>
                    </button>
                  </div>

                  {/* Active Convoy Gap Monitor */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div className="p-4 rounded-2xl bg-light-input dark:bg-dark-surface border border-light-border dark:border-dark-border">
                      <div className="text-xs text-light-muted dark:text-dark-muted font-bold uppercase mb-1">
                        Lead-to-Tail Span
                      </div>
                      <div className="font-montserrat font-black text-2xl text-brand-blue">
                        800 <span className="text-sm font-semibold text-light-muted dark:text-dark-muted">meters</span>
                      </div>
                      <div className="text-xs text-emerald-500 font-semibold mt-1">
                        Optimal convoy spacing for hairpins
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-light-input dark:bg-dark-surface border border-light-border dark:border-dark-border">
                      <div className="text-xs text-light-muted dark:text-dark-muted font-bold uppercase mb-1">
                        Escort Distance
                      </div>
                      <div className="font-montserrat font-black text-2xl text-emerald-500">
                        350 <span className="text-sm font-semibold text-light-muted dark:text-dark-muted">meters tailing</span>
                      </div>
                      <div className="text-xs text-light-muted dark:text-dark-muted font-medium mt-1">
                        Raptor pace matched with rear sweeper
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-light-input dark:bg-dark-surface border border-light-border dark:border-dark-border">
                      <div className="text-xs text-light-muted dark:text-dark-muted font-bold uppercase mb-1">
                        Satellite Mesh Ping
                      </div>
                      <div className="font-montserrat font-black text-2xl text-light-text dark:text-dark-text">
                        18 <span className="text-sm font-semibold text-light-muted dark:text-dark-muted">ms</span>
                      </div>
                      <div className="text-xs text-brand-amber font-semibold mt-1">
                        Offline peer-to-peer relay enabled
                      </div>
                    </div>

                  </div>

                  {/* Live Formation Visualization */}
                  <div className="p-5 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <div className="font-montserrat font-bold text-xs uppercase tracking-wider text-light-muted dark:text-dark-muted mb-4">
                      Convoy Staggered Formation & Spacing
                    </div>

                    <div className="relative py-4 flex items-center justify-between">
                      {/* Trail Line */}
                      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-emerald-500 via-brand-blue to-amber-500 rounded" />
                      
                      {LOBBY_RIDERS.map((r) => (
                        <div key={r.id} className="relative z-10 flex flex-col items-center">
                          <img 
                            src={r.avatar} 
                            alt={r.name} 
                            className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg shadow-md object-cover"
                          />
                          <span className="font-bold text-[11px] text-light-text dark:text-dark-text mt-1.5 whitespace-nowrap">
                            {r.name.split(' ')[0]}
                          </span>
                          <span className="text-[9px] font-mono font-bold text-light-muted dark:text-dark-muted">
                            {r.speedKmh} km/h
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column: Support Vehicle Tagging Deep Dive */}
          <div id="safety-escort" className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Escort Highlight Card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-transparent to-transparent shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-black uppercase tracking-wider mb-2">
                Industry First Feature
              </div>

              <h3 className="font-montserrat font-black text-xl text-light-text dark:text-dark-text mb-2">
                Support Vehicle Tagging
              </h3>

              <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed mb-4">
                Assign four-wheeled chase trucks, vans, and family support vehicles directly into your motorcycle convoy with specialized dashboard views.
              </p>

              <div className="space-y-3 pt-3 border-t border-light-border dark:border-dark-border">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-light-text dark:text-dark-text">Hydraulic Recovery Ramp</h5>
                    <p className="text-[11px] text-light-muted dark:text-dark-muted">Quick loading for mechanical breakdowns or punctured bikes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-light-text dark:text-dark-text">Spare Fuel & Toolbox Registry</h5>
                    <p className="text-[11px] text-light-muted dark:text-dark-muted">Riders can see remaining reserve fuel and spare parts on the fly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-light-text dark:text-dark-text">Automated SOS Rerouting</h5>
                    <p className="text-[11px] text-light-muted dark:text-dark-muted">Instant GPS lock directly to any distressed motorcycle in the convoy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline Satellite Mesh Relay Card */}
            <div className="glass-card rounded-3xl p-6 border border-light-border dark:border-dark-border shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-blue flex items-center justify-center">
                  <RadioTower className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-light-text dark:text-dark-text">
                    Zero-Cellular Mesh Relay
                  </h4>
                  <div className="text-[11px] text-light-muted dark:text-dark-muted">
                    No signal? No problem.
                  </div>
                </div>
              </div>

              <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                When canyon passes lose 4G/5G, Bikers hops packet telemetry peer-to-peer between phone Bluetooth and Wi-Fi Direct antennas across all bikes in a 2km radius.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
