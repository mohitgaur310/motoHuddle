import React, { useState } from 'react';
import { 
  Compass, 
  Flame, 
  TrendingUp, 
  MapPin, 
  Download, 
  Clock, 
  Check, 
  Eye
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import type { RouteDestination } from '../types';

export const CuratedDestinations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeRouteModal, setActiveRouteModal] = useState<RouteDestination | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ['All', 'Mountain Passes', 'Coastal Cruises', 'Desert Trails', 'Weekend Escapes'];

  const filteredDestinations = selectedCategory === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === selectedCategory);

  const handleDownloadGpx = (route: RouteDestination) => {
    // Generate simulated GPX XML download
    const gpxData = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Bikers App - https://bikersapp.com">
  <metadata>
    <name>${route.title}</name>
    <desc>${route.description}</desc>
  </metadata>
  <trk>
    <name>${route.title}</name>
    <trkseg>
      <trkpt lat="46.5293" lon="10.4531"><ele>${route.elevationGainM}</ele></trkpt>
    </trkseg>
  </trk>
</gpx>`;
    const blob = new Blob([gpxData], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${route.id}-bikers-telemetry.gpx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(route.id);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  return (
    <section id="scenic-routes" className="py-24 relative bg-light-surface/40 dark:bg-dark-bg/80 border-t border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Crowdsourced Canyon Library</span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-light-text dark:text-dark-text">
              Curated Routes &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-crimson">
                Epic Tarmac.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted max-w-md mt-4 md:mt-0">
            Over 240,000 verified twisty kilometers logged and rated by local clubs. Filter by surface quality, twistiness index, and elevation gain.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-blue text-white shadow-glow-blue'
                  : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="glass-card rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full backdrop-blur-md bg-black/60 text-white font-bold text-[10px] uppercase tracking-wider border border-white/20">
                  {dest.category}
                </div>

                {/* Twistiness Score Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md bg-brand-crimson/90 text-white font-montserrat font-black text-xs shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{dest.twistinessScore} / 10 TWIST</span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] text-zinc-300 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-brand-blue" />
                    <span>{dest.region}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-white leading-tight mt-0.5">
                    {dest.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <p className="text-xs text-light-muted dark:text-dark-muted line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                {/* Route Stat Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-light-border dark:border-dark-border">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">Distance</div>
                    <div className="font-montserrat font-bold text-sm text-light-text dark:text-dark-text mt-0.5">
                      {dest.distanceKm} km
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">Elevation</div>
                    <div className="font-montserrat font-bold text-sm text-brand-blue mt-0.5 flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" />
                      +{dest.elevationGainM}m
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">Duration</div>
                    <div className="font-montserrat font-bold text-sm text-light-text dark:text-dark-text mt-0.5 flex items-center gap-0.5">
                      <Clock className="w-3 h-3 text-brand-amber" />
                      {dest.durationHours}h
                    </div>
                  </div>
                </div>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {dest.highlights.slice(0, 2).map((h, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded-md bg-light-input dark:bg-dark-surfaceAlt text-light-muted dark:text-zinc-300 text-[10px] font-medium"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => setActiveRouteModal(dest)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-light-border dark:border-dark-border text-xs font-bold text-light-text dark:text-dark-text hover:border-brand-blue transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Telemetry</span>
                  </button>

                  <button
                    onClick={() => handleDownloadGpx(dest)}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      downloadSuccess === dest.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-blue hover:bg-brand-blue-hover text-white'
                    }`}
                  >
                    {downloadSuccess === dest.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Saved GPX!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Export GPX</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Route Details Modal */}
        {activeRouteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-light-border dark:border-dark-border shadow-2xl relative">
              <button
                onClick={() => setActiveRouteModal(null)}
                className="absolute top-4 right-4 text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white text-lg font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>{activeRouteModal.category} • {activeRouteModal.region}</span>
              </div>

              <h3 className="font-montserrat font-black text-2xl text-light-text dark:text-dark-text mb-3">
                {activeRouteModal.title}
              </h3>

              <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted mb-4 leading-relaxed">
                {activeRouteModal.description}
              </p>

              <div className="p-4 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border mb-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-light-muted dark:text-dark-muted">Surface Type:</span>
                  <span className="font-bold text-light-text dark:text-dark-text">{activeRouteModal.surface}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-light-muted dark:text-dark-muted">Twistiness Benchmark:</span>
                  <span className="font-bold text-brand-crimson">{activeRouteModal.twistinessScore} / 10 Hairpin Rating</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-light-muted dark:text-dark-muted">Recommended Class:</span>
                  <span className="font-bold text-brand-blue">{activeRouteModal.recommendedBike}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleDownloadGpx(activeRouteModal)}
                  className="flex-1 py-3 rounded-xl bg-brand-blue text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Route Telemetry (.GPX)</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
