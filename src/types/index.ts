export type Theme = 'light' | 'dark';

export interface RouteDestination {
  id: string;
  title: string;
  region: string;
  category: 'Mountain Passes' | 'Coastal Cruises' | 'Desert Trails' | 'Weekend Escapes';
  distanceKm: number;
  elevationGainM: number;
  twistinessScore: number; // 1 to 10
  surface: 'Smooth Asphalt' | 'Mixed Mountain Tarmac' | 'Twisty Switchbacks' | 'Gravel & Tar';
  durationHours: number;
  image: string;
  description: string;
  highlights: string[];
  recommendedBike: string;
}

export interface GarageBike {
  id: string;
  name: string;
  category: 'Adventure' | 'Superbike' | 'Cruiser' | 'Scrambler' | 'Escort Support';
  brand: string;
  engine: string;
  horsepower: number;
  torque: string;
  weightKg: number;
  mods: string[];
  tireLifePercent: number;
  serviceDueDays: number;
  image: string;
  isEscortVehicle?: boolean;
}

export interface LobbyRider {
  id: string;
  name: string;
  handle: string;
  role: 'Lead Scout' | 'Convoy Lead' | 'Midfield Rider' | 'Sweeper' | 'Safety Escort Chase';
  bike: string;
  batteryPercent: number;
  speedKmh: number;
  status: 'Ready' | 'Checking In' | 'Live Riding' | 'Pitstop';
  avatar: string;
  distanceAheadM?: number;
}

export interface CommunityPost {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  bike: string;
  timeAgo: string;
  content: string;
  gpxStats?: {
    distance: string;
    elevation: string;
    avgSpeed: string;
    curves: number;
  };
  image?: string;
  likes: number;
  comments: number;
}
