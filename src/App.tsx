import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveRideSpotlight } from './components/LiveRideSpotlight';
import { TripCreatorShowcase } from './components/TripCreatorShowcase';
import { CuratedDestinations } from './components/CuratedDestinations';
import { GarageAndCommunity } from './components/GarageAndCommunity';
import { ThemeComparison } from './components/ThemeComparison';
import { DownloadModal } from './components/DownloadModal';
import { PublicRidesDrawer } from './components/PublicRidesDrawer';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [publicRidesOpen, setPublicRidesOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Sticky Blurred Glass Navigation */}
      <Navbar 
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenPublicRides={() => setPublicRidesOpen(true)}
      />

      {/* Main Marketing Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Phone Mockup */}
        <Hero 
          onOpenDownload={() => setDownloadModalOpen(true)}
          onOpenPublicRides={() => setPublicRidesOpen(true)}
        />

        {/* 2. Live Ride & Safety Escort Spotlight (HostRideLobby & RideLive) */}
        <LiveRideSpotlight />

        {/* 3. Multi-Step Trip Creator Showcase */}
        <TripCreatorShowcase />

        {/* 4. Curated Categories & Popular Scenic Destinations */}
        <CuratedDestinations />

        {/* 5. Digital Garage, Metric Counters & Rider Community Feed */}
        <GarageAndCommunity />

        {/* 6. Dedicated Dual Ergonomic Theme Switcher Showcase Card */}
        <ThemeComparison />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadModal 
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <PublicRidesDrawer 
        isOpen={publicRidesOpen}
        onClose={() => setPublicRidesOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
