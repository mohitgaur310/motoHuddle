import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  Clock, 
  Truck, 
  CheckCircle, 
  Compass, 
  Search 
} from 'lucide-react';

interface PublicRidesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicRidesDrawer: React.FC<PublicRidesDrawerProps> = ({ isOpen, onClose }) => {
  const [joinedRides, setJoinedRides] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const publicRides = [
    {
      id: 'ride-1',
      title: 'Grossglockner High Alpine Dawn Run',
      host: 'Bavarian Alpine Riders Club',
      date: 'Saturday, Oct 3, 2026',
      time: '07:00 AM',
      meet: 'Ferleiten Toll Station, Austria',
      pace: 'Spirited Twisties',
      ridersCount: 16,
      maxRiders: 20,
      escortCar: 'Volkswagen Amarok 4Motion (Chase + Medic)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'ride-2',
      title: 'Pacific Coast Highway Sunset Sweep',
      host: 'SoCal Canyon Huddle',
      date: 'Sunday, Oct 4, 2026',
      time: '03:30 PM',
      meet: 'Neptune’s Net, Malibu, CA',
      pace: 'Chilled Cruise',
      ridersCount: 28,
      maxRiders: 35,
      escortCar: 'Ford F-150 Raptor (Fuel Tank + Recovery Ramp)',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'ride-3',
      title: 'Dragon’s Tail 318 Hairpins Breakfast Rally',
      host: 'Smoky Mountains Apex Club',
      date: 'Saturday, Oct 10, 2026',
      time: '06:30 AM',
      meet: 'Deals Gap Motorcycle Resort, NC',
      pace: 'Canyon Master',
      ridersCount: 12,
      maxRiders: 15,
      escortCar: 'Chevy Colorado ZR2 Chase Unit',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filtered = publicRides.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.meet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJoin = (id: string) => {
    setJoinedRides(prev => ({ ...prev, [id]: true }));
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#4B70F5', '#F0535C', '#EBC307']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-card rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-light-border dark:border-dark-border shadow-2xl relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-light-border dark:border-dark-border">
          <div>
            <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Public Ride Explorer</span>
            </div>
            <h3 className="font-montserrat font-black text-2xl text-light-text dark:text-dark-text">
              Upcoming Community Huddles
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white hover:bg-light-input dark:hover:bg-dark-surfaceAlt transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="pt-4 pb-2">
          <div className="relative">
            <Search className="w-4 h-4 text-light-muted dark:text-dark-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by pass, club name, or meet city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-surface text-light-text dark:text-dark-text text-xs font-semibold focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>

        {/* Rides List */}
        <div className="overflow-y-auto space-y-4 py-3 flex-1 pr-1">
          {filtered.map((ride) => {
            const isJoined = joinedRides[ride.id];
            return (
              <div
                key={ride.id}
                className="p-4 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-brand-blue/50 transition-all flex flex-col sm:flex-row gap-4"
              >
                <img 
                  src={ride.image} 
                  alt={ride.title} 
                  className="w-full sm:w-36 h-28 rounded-xl object-cover"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                        {ride.host}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-crimson/10 text-brand-crimson">
                        {ride.pace}
                      </span>
                    </div>
                    <h4 className="font-montserrat font-bold text-base text-light-text dark:text-dark-text mt-0.5">
                      {ride.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-light-muted dark:text-dark-muted mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {ride.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {ride.time}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-light-border dark:border-dark-border mt-2">
                    <div className="text-[11px] text-light-muted dark:text-dark-muted flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="truncate max-w-[220px]">{ride.escortCar}</span>
                    </div>

                    <button
                      onClick={() => handleJoin(ride.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-montserrat font-bold transition-all ${
                        isJoined
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-md'
                      }`}
                    >
                      {isJoined ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Lobby Joined!</span>
                        </span>
                      ) : (
                        <span>Join Lobby ({ride.ridersCount}/{ride.maxRiders})</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
