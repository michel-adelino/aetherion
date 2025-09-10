'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Atom, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScienceHeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Poster Image - shows while video is loading */}
        {!isVideoReady && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/img/2.webp"
              alt="Science Hero video"
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
          src="/2.mp4"
          poster="/2.png"
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
        
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Platform Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-full text-indigo-300 text-lg font-medium">
              <Cpu className="w-5 h-5 mr-2" />
              Cognate-AI™ Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            From Discovery to Design:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              A Paradigm Shift
            </span>
            <br />
            in Biologic Engineering
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            The Cognate-AI™ Platform is an <strong className="text-indigo-300">end-to-end generative engine</strong> that designs 
            novel, brain-penetrant biologics <em className="text-cyan-300">de novo</em>. We are moving beyond the limits of 
            screening and modification to create medicines with <strong className="text-emerald-300">atomic-level precision</strong>, 
            turning the art of drug discovery into an engineering discipline.
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <Atom className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">De Novo Design</h3>
              <p className="text-slate-400 text-center">Creating entirely new biologics from first principles</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI-Native</h3>
              <p className="text-slate-400 text-center">Built on cutting-edge generative AI architectures</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Co-Optimized</h3>
              <p className="text-slate-400 text-center">Simultaneous optimization for transport and therapy</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="#integrated-approach">
                Explore the Science
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}