import { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/privacy/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aetherion Biosciences',
  description: 'Privacy Policy for Aetherion Biosciences - Learn how we collect, use, and protect your information when you visit our website.',
  keywords: 'privacy policy, data protection, cookies, GDPR, CCPA, Aetherion Biosciences',
  openGraph: {
    title: 'Privacy Policy | Aetherion Biosciences',
    description: 'Privacy Policy for Aetherion Biosciences - Learn how we collect, use, and protect your information when you visit our website.',
    type: 'website',
    url: 'https://aetherion-biosciences.com/privacy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Aetherion Biosciences',
    description: 'Privacy Policy for Aetherion Biosciences - Learn how we collect, use, and protect your information when you visit our website.',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PrivacyPolicyContent />
    </main>
  );
}