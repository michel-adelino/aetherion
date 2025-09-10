import { Metadata } from 'next';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import CompanyStorySection from '@/components/about/CompanyStorySection';
import LeadershipTeamSection from '@/components/about/LeadershipTeamSection';
import MissionValuesSection from '@/components/about/MissionValuesSection';

export const metadata: Metadata = {
  title: 'About Aetherion: From Algorithm to Asset | Aetherion Biosciences',
  description: 'Discover the story behind Aetherion Biosciences - from groundbreaking AI research at Scripps to a clinical-stage biotech company revolutionizing neurodegeneration therapy.',
  keywords: 'Aetherion leadership, biotech company story, AI drug discovery team, neuroscience executives, computational biology founders',
  openGraph: {
    title: 'About Aetherion: From Algorithm to Asset | Aetherion Biosciences',
    description: 'Discover the story behind Aetherion Biosciences - from groundbreaking AI research at Scripps to a clinical-stage biotech company revolutionizing neurodegeneration therapy.',
    type: 'website',
    url: 'https://aetherion-biosciences.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Aetherion: From Algorithm to Asset | Aetherion Biosciences',
    description: 'Discover the story behind Aetherion Biosciences - from groundbreaking AI research at Scripps to a clinical-stage biotech company revolutionizing neurodegeneration therapy.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <AboutHeroSection />
      <CompanyStorySection />
    </main>
  );
}