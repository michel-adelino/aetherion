import { Metadata } from 'next';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactFormSection from '@/components/contact/ContactFormSection';

export const metadata: Metadata = {
  title: 'Contact Aetherion Biosciences | Get in Touch',
  description: 'Contact Aetherion Biosciences for partnerships, investment opportunities, or career inquiries. Located in San Diego\'s Torrey Pines innovation cluster.',
  keywords: 'contact Aetherion, biotech partnerships, investment opportunities, San Diego biotech, Torrey Pines, Alexandria GradLabs',
  openGraph: {
    title: 'Contact Aetherion Biosciences | Get in Touch',
    description: 'Contact Aetherion Biosciences for partnerships, investment opportunities, or career inquiries. Located in San Diego\'s Torrey Pines innovation cluster.',
    type: 'website',
    url: 'https://aetherion-biosciences.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Aetherion Biosciences | Get in Touch',
    description: 'Contact Aetherion Biosciences for partnerships, investment opportunities, or career inquiries. Located in San Diego\'s Torrey Pines innovation cluster.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  );
}