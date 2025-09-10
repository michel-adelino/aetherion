import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import UnmetNeedSection from '@/components/UnmetNeedSection';
import PlatformSection from '@/components/PlatformSection';
import PipelineSection from '@/components/PipelineSection';

export const metadata: Metadata = {
  title: 'Aetherion Biosciences - Engineering a New Era for Neuroscience',
  description: 'AI-native biotechnology company designing intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.',
  keywords: 'biotech, AI drug discovery, blood-brain barrier, neurodegenerative disease, bispecific antibodies, Parkinson\'s disease',
  openGraph: {
    title: 'Aetherion Biosciences - Engineering a New Era for Neuroscience',
    description: 'AI-native biotechnology company designing intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.',
    type: 'website',
    url: 'https://aetherion-biosciences.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aetherion Biosciences - Engineering a New Era for Neuroscience',
    description: 'AI-native biotechnology company designing intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <UnmetNeedSection />
      <PlatformSection />
      <PipelineSection />
    </main>
  );
}