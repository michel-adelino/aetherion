import { Metadata } from 'next';
import TermsOfServiceContent from '@/components/terms/TermsOfServiceContent';

export const metadata: Metadata = {
  title: 'Terms of Service | Aetherion Biosciences',
  description: 'Terms of Service for Aetherion Biosciences - Learn about the terms and conditions for using our website and accessing our information.',
  keywords: 'terms of service, terms and conditions, website terms, legal terms, Aetherion Biosciences',
  openGraph: {
    title: 'Terms of Service | Aetherion Biosciences',
    description: 'Terms of Service for Aetherion Biosciences - Learn about the terms and conditions for using our website and accessing our information.',
    type: 'website',
    url: 'https://aetherionbio.com/terms',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Aetherion Biosciences',
    description: 'Terms of Service for Aetherion Biosciences - Learn about the terms and conditions for using our website and accessing our information.',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <TermsOfServiceContent />
    </main>
  );
}