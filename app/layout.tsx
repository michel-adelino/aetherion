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
  title: 'Aetherion Biosciences',
  description: 'AI-native biotechnology company designing intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.',
  metadataBase: new URL('https://aetherion-biosciences.com'),
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-site-verification',
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
              "url": "https://aetherion-biosciences.com",
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