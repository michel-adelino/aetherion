'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Fallback: if video doesn't load within 3 seconds, show it anyway
    const fallbackTimer = setTimeout(() => {
      setIsVideoReady(true);
    }, 3000);
    
    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoCanPlay = () => {
    setIsVideoReady(true);
  };

  const handleVideoLoadedData = () => {
    setIsVideoReady(true);
  };

  const handleVideoCanPlayThrough = () => {
    setIsVideoReady(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Poster Image - shows while video is loading */}
        {!isVideoReady && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/img/1.webp"
              alt="Home Page Hero video"
              className="w-full h-full object-cover"
              style={{ 
                width: '100%', 
                height: '100%', 
                border: 'none'
              }}
            />
          </div>
        )}
        
        {/* Video Element */}
        <video
          src="/1.mp4"
          poster="/img/1.webp"
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            pointerEvents: 'none'
          }}
          autoPlay loop muted playsInline
          onLoad={handleVideoLoad}
          onCanPlay={handleVideoCanPlay}
          onLoadedData={handleVideoLoadedData}
          onCanPlayThrough={handleVideoCanPlayThrough}
          onLoadedMetadata={handleVideoLoadedData}
        />
        
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Tagline */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
              Designing Biologics Beyond the Barrier
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            <span className="relative">
              Engineering a New Era
              <div className="absolute inset-0 bg-black/30 blur-sm -z-10"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 drop-shadow-2xl">
              for Neuroscience
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are an <strong className="text-blue-300">AI-native biotechnology company</strong> designing 
            a new class of intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/science">
                Explore Our Science
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}