
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { HeroSection } from '@/components/marketing/HeroSection';
import { StatsBar } from '@/components/marketing/StatsBar';
import { FeaturesGrid } from '@/components/marketing/FeaturesGrid';
import { SocialProofCarousel } from '@/components/marketing/SocialProofCarousel';
import { PricingPreviewBanner } from '@/components/marketing/PricingPreviewBanner';
import { FAQ } from '@/components/marketing/FAQ';
import { FinalCTA } from '@/components/marketing/FinalCTA';

const Home: React.FC = () => {
  return (
    <AppShell>
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <SocialProofCarousel />
      <PricingPreviewBanner />
      <FAQ />
      <FinalCTA />
    </AppShell>
  );
};

export default Home;
