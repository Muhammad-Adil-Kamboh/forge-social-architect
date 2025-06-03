
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Hero } from '@/components/marketing/Hero';
import { StatsBar } from '@/components/marketing/StatsBar';
import { FeaturesGrid } from '@/components/marketing/FeaturesGrid';
import { FAQ } from '@/components/marketing/FAQ';
import { FinalCTA } from '@/components/marketing/FinalCTA';

const Home: React.FC = () => {
  return (
    <AppShell>
      <Hero />
      <StatsBar />
      <FeaturesGrid />
      <FAQ />
      <FinalCTA />
    </AppShell>
  );
};

export default Home;
