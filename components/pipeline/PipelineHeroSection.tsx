'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Dna, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PipelineHeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Poster Image - shows while video is loading */}
        {!isVideoReady && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/img/3.webp"
              alt="Pipeline Hero video"
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
          src="/3.mp4"
          poster="/img/3.webp"
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
          {/* Pipeline Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-lg font-medium">
              <Target className="w-5 h-5 mr-2" />
              Systematic Drug Development
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight break-all">
            A Pipeline of&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-400">
              First-in-Class
            </span>
            <br />
            Medicines for Neurodegeneration
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are systematically applying the power of the <strong className="text-purple-300">Cognate-AI™ platform</strong> to create 
            a portfolio of transformative therapies for diseases of the central nervous system. Our focus is on validated targets that have 
            historically been considered <strong className="text-emerald-300">"undruggable"</strong> with conventional biologics due to the 
            blood-brain barrier. Each program in our pipeline represents a potential breakthrough for patients and a significant 
            <strong className="text-blue-300"> value creation opportunity</strong>.
          </p>

          {/* Key Pipeline Metrics */}
          {/* <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Dna className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Lead Program</h3>
              <p className="text-slate-400 text-center">AET-101 advancing to IND-enabling studies</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Undruggable Targets</h3>
              <p className="text-slate-400 text-center">Addressing historically inaccessible CNS targets</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Microscope className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Discovery Engine</h3>
              <p className="text-slate-400 text-center">Continuously generating new therapeutic candidates</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}