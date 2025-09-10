import { Metadata } from 'next';
import PipelineHeroSection from '@/components/pipeline/PipelineHeroSection';
import InteractivePipelineSection from '@/components/pipeline/InteractivePipelineSection';
import LeadProgramSection from '@/components/pipeline/LeadProgramSection';
import DiscoveryEngineSection from '@/components/pipeline/DiscoveryEngineSection';

export const metadata: Metadata = {
  title: 'Our Pipeline: First-in-Class Medicines for Neurodegeneration | Aetherion Biosciences',
  description: 'Discover our portfolio of transformative CNS therapies targeting validated but historically "undruggable" targets, led by AET-101 for Parkinson\'s Disease.',
  keywords: 'AET-101, Parkinson\'s disease, alpha-synuclein, neurodegeneration pipeline, CNS therapeutics, undruggable targets, bispecific antibodies',
  openGraph: {
    title: 'Our Pipeline: First-in-Class Medicines for Neurodegeneration | Aetherion Biosciences',
    description: 'Discover our portfolio of transformative CNS therapies targeting validated but historically "undruggable" targets, led by AET-101 for Parkinson\'s Disease.',
    type: 'website',
    url: 'https://aetherionbio.com/pipeline',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Pipeline: First-in-Class Medicines for Neurodegeneration | Aetherion Biosciences',
    description: 'Discover our portfolio of transformative CNS therapies targeting validated but historically "undruggable" targets, led by AET-101 for Parkinson\'s Disease.',
  },
};

export default function PipelinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PipelineHeroSection />
      <InteractivePipelineSection />
      <LeadProgramSection />
      <DiscoveryEngineSection />
    </main>
  );
}