import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aetherion Biosciences - Engineering a New Era for Neuroscience',
  description: 'AI-native biotechnology company designing intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.',
  metadataBase: new URL('https://aetherionbio.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://aetherionbio.com',
  },
  category: 'Biotechnology',
  classification: 'Business',
  other: {
    'Content-Type': 'text/html; charset=utf-8',
    'X-UA-Compatible': 'IE=edge',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aetherion Biosciences",
              "description": "AI-native biotechnology company designing intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.",
              "url": "https://aetherionbio.com",
              "industry": "Biotechnology",
              "foundingDate": "2024",
              "specializes": [
                "AI Drug Discovery",
                "Blood-Brain Barrier Transport",
                "Neurodegenerative Disease Therapeutics",
                "Bispecific Antibodies"
              ]
            })
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}