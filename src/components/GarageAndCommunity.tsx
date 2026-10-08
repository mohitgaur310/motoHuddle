import React, { useState } from 'react';
import { 
  Wrench, 
  Gauge, 
  Users, 
  Heart, 
  MessageSquare, 
  Share2, 
  CheckCircle, 
  Truck, 
  Calendar
} from 'lucide-react';
import { GARAGE_BIKES } from '../data/garageBikes';
import { COMMUNITY_POSTS } from '../data/communityFeed';

export const GarageAndCommunity: React.FC = () => {
  const [selectedBikeId, setSelectedBikeId] = useState(GARAGE_BIKES[0].id);
  const [postLikes, setPostLikes] = useState<{ [key: string]: number }>({
    'post-1': 342,
    'post-2': 512,
    'post-3': 678,
  });
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});

  const activeBike = GARAGE_BIKES.find(b => b.id === selectedBikeId) || GARAGE_BIKES[0];

  const handleLike = (id: string) => {
    if (likedPosts[id]) {
      setPostLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedPosts(prev => ({ ...prev, [id]: false }));
    } else {
      setPostLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLikedPosts(prev => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section id="digital-garage" className="py-24 relative bg-topo-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Counters Banner */}
        <div className="mb-24">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-light-border dark:border-dark-border shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-light-border dark:divide-dark-border">
              
              <div className="pt-4 md:pt-0">
                <div className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue tracking-tight">
                  50,000+
                </div>
                <div className="text-xs uppercase font-bold text-light-muted dark:text-dark-muted mt-2 tracking-wider">
                  Miles Logged
                </div>
                <div className="text-[11px] text-light-subtle dark:text-zinc-400 mt-0.5">
                  Across 38 Countries
                </div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-brand-crimson tracking-tight">
                  1,200+
                </div>
                <div className="text-xs uppercase font-bold text-light-muted dark:text-dark-muted mt-2 tracking-wider">
                  Motorbike Clubs
                </div>
                <div className="text-[11px] text-light-subtle dark:text-zinc-400 mt-0.5">
                  Hosting Weekly Huddles
                </div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-emerald-500 tracking-tight">
                  99.8%
                </div>
                <div className="text-xs uppercase font-bold text-light-muted dark:text-dark-muted mt-2 tracking-wider">
                  Safe Arrivals
                </div>
                <div className="text-[11px] text-light-subtle dark:text-zinc-400 mt-0.5">
                  Zero Lost Riders Standard
                </div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-brand-amber tracking-tight">
                  4.9 ★
                </div>
                <div className="text-xs uppercase font-bold text-light-muted dark:text-dark-muted mt-2 tracking-wider">
                  Store Ratings
                </div>
                <div className="text-[11px] text-light-subtle dark:text-zinc-400 mt-0.5">
                  14,000+ Verified Reviews
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 1: Digital Garage (AddBike module) */}
        <div className="mb-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Multi-Vehicle Fleet Management</span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-light-text dark:text-dark-text mb-4">
              Digital Garage.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson to-brand-blue">
                Bikes & Support Escort Cars.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted">
              Riders are rarely single-machine enthusiasts. Store your dual-sport, canyon superbike, and chase recovery truck all in one synchronized telemetry hub.
            </p>
          </div>

          {/* Bike Selection Tabs */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
            {GARAGE_BIKES.map((bike) => {
              const isSelected = selectedBikeId === bike.id;
              const isEscort = bike.isEscortVehicle;
              return (
                <button
                  key={bike.id}
                  onClick={() => setSelectedBikeId(bike.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs font-montserrat font-bold transition-all ${
                    isSelected
                      ? isEscort
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
                        : 'bg-brand-blue text-white border-brand-blue shadow-glow-blue'
                      : 'bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:border-slate-400'
                  }`}
                >
                  {isEscort ? <Truck className="w-4 h-4" /> : <Gauge className="w-4 h-4" />}
                  <span>{bike.name.split(':')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Bike Specs Card */}
          <div className="glass-card rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Bike Image Column */}
              <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
                <img 
                  src={activeBike.image} 
                  alt={activeBike.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                  <div className="text-xs uppercase font-bold text-brand-blue">
                    {activeBike.category}
                  </div>
                  <h3 className="font-montserrat font-black text-xl text-white">
                    {activeBike.name}
                  </h3>
                </div>
              </div>

              {/* Specs & Mod List Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="hidden lg:block">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[11px] uppercase tracking-wider mb-2">
                    {activeBike.isEscortVehicle ? 'Support Chase Vehicle' : `${activeBike.category} Division`}
                  </div>
                  <h3 className="font-montserrat font-black text-2xl text-light-text dark:text-dark-text">
                    {activeBike.name}
                  </h3>
                  <div className="text-xs text-light-muted dark:text-dark-muted mt-1">
                    Brand: <strong className="text-light-text dark:text-white">{activeBike.brand}</strong>
                  </div>
                </div>

                {/* Performance Metrics Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border text-center">
                    <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">Horsepower</div>
                    <div className="font-montserrat font-black text-lg text-brand-crimson mt-0.5">
                      {activeBike.horsepower} <span className="text-xs font-semibold">HP</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border text-center">
                    <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">Weight</div>
                    <div className="font-montserrat font-black text-lg text-brand-blue mt-0.5">
                      {activeBike.weightKg} <span className="text-xs font-semibold">KG</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border text-center">
                    <div className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">Tire Life</div>
                    <div className="font-montserrat font-black text-lg text-emerald-500 mt-0.5">
                      {activeBike.tireLifePercent}%
                    </div>
                  </div>
                </div>

                {/* Maintenance Due Alert */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-brand-amber/10 border border-brand-amber/30 text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-amber-dark dark:text-brand-amber" />
                    <span className="font-bold text-light-text dark:text-dark-text">Scheduled Service Due:</span>
                  </div>
                  <span className="font-bold text-brand-amber-dark dark:text-brand-amber">
                    In {activeBike.serviceDueDays} Days
                  </span>
                </div>

                {/* Installed Custom Modifications */}
                <div>
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                    Fitted Equipment & Performance Mods
                  </h4>
                  <div className="space-y-1.5">
                    {activeBike.mods.map((mod, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-light-text dark:text-dark-text">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] text-light-muted dark:text-dark-muted italic">
                    Engine: {activeBike.engine} • Peak Torque: {activeBike.torque}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Section 2: Rider Community Feed & In-App Chat */}
        <div id="community-feed">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Social Rider Network</span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-light-text dark:text-dark-text mb-4">
              Rider Feed &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-crimson">
                In-App Convoy Chat.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted">
              Share ride recaps, high-resolution action photos, live GPX telemetry downloads, and coordinate through trip-specific lobby channels.
            </p>
          </div>

          {/* Social Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMUNITY_POSTS.map((post) => (
              <div
                key={post.id}
                className="glass-card rounded-3xl p-6 border border-light-border dark:border-dark-border shadow-lg flex flex-col justify-between space-y-4"
              >
                {/* Post Author Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.avatar} 
                      alt={post.author} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-brand-blue"
                    />
                    <div>
                      <div className="font-montserrat font-bold text-sm text-light-text dark:text-dark-text">
                        {post.author}
                      </div>
                      <div className="text-[11px] text-light-muted dark:text-dark-muted">
                        {post.handle} • {post.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-brand-blue">
                  Riding: {post.bike}
                </div>

                <p className="text-xs text-light-text dark:text-zinc-300 leading-relaxed">
                  {post.content}
                </p>

                {/* Optional Telemetry Box */}
                {post.gpxStats && (
                  <div className="p-3 rounded-2xl bg-light-input dark:bg-dark-surfaceAlt border border-light-border dark:border-dark-border grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-[10px] text-light-muted dark:text-dark-muted font-bold">Dist</div>
                      <div className="font-bold text-light-text dark:text-white">{post.gpxStats.distance}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-light-muted dark:text-dark-muted font-bold">Elevation</div>
                      <div className="font-bold text-brand-blue">{post.gpxStats.elevation}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-light-muted dark:text-dark-muted font-bold">Curves</div>
                      <div className="font-bold text-brand-crimson">{post.gpxStats.curves}</div>
                    </div>
                  </div>
                )}

                {/* Action Interaction Bar */}
                <div className="pt-3 border-t border-light-border dark:border-dark-border flex items-center justify-between text-xs text-light-muted dark:text-dark-muted">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      likedPosts[post.id] ? 'text-brand-crimson font-bold' : 'hover:text-brand-crimson'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts[post.id] ? 'fill-current' : ''}`} />
                    <span>{postLikes[post.id]}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments} comments</span>
                  </div>

                  <button className="hover:text-light-text dark:hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
