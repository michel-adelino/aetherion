import { Metadata } from 'next';
import ScienceHeroSection from '@/components/science/ScienceHeroSection';
import IntegratedApproachSection from '@/components/science/IntegratedApproachSection';
import AdvantageTableSection from '@/components/science/AdvantageTableSection';
import HowItWorksSection from '@/components/science/HowItWorksSection';

export const metadata: Metadata = {
  title: 'Our Science: The Cognate-AI™ Platform | Aetherion Biosciences',
  description: 'Discover how the Cognate-AI™ Platform revolutionizes biologic engineering with AI-native, de novo design of brain-penetrant therapeutics.',
  keywords: 'Cognate-AI Platform, AI drug design, bispecific antibodies, blood-brain barrier, de novo protein design, generative AI, biotech platform',
  openGraph: {
    title: 'Our Science: The Cognate-AI™ Platform | Aetherion Biosciences',
    description: 'Discover how the Cognate-AI™ Platform revolutionizes biologic engineering with AI-native, de novo design of brain-penetrant therapeutics.',
    type: 'website',
    url: 'https://aetherion-biosciences.com/science',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Science: The Cognate-AI™ Platform | Aetherion Biosciences',
    description: 'Discover how the Cognate-AI™ Platform revolutionizes biologic engineering with AI-native, de novo design of brain-penetrant therapeutics.',
  },
};

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ScienceHeroSection />
      <IntegratedApproachSection />
      <AdvantageTableSection />
      <HowItWorksSection />
    </main>
  );
}