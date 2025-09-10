'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutHeroSection() {
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
              src="/img/Tavotek_loop_blue.webp"
              alt="Tavotek background"
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
          src="Tavotek_loop_blue.mp4"
          poster="/Tavotek_loop_blue_poster.png"
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
          {/* Company Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-lg font-medium">
              <Lightbulb className="w-5 h-5 mr-2" />
              The Convergence of AI and Neurobiology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            From&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
              Algorithm
            </span>
            <br />
            to Asset
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Aetherion Biosciences was founded to solve one of the most formidable challenges in modern medicine: 
            <strong className="text-blue-300"> delivering large-molecule drugs to the brain</strong>. We were born at the 
            intersection of two scientific revolutions—<strong className="text-emerald-300">generative AI</strong> and a 
            deeper understanding of <strong className="text-purple-300">neurobiology</strong>—to finally break through this barrier.
          </p>

          {/* Key Milestones */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Founded 2024</h3>
              <p className="text-slate-400 text-center">Born from breakthrough AI research at Scripps</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">$23M Raised</h3>
              <p className="text-slate-400 text-center">Series A led by ARCH Venture Partners</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">World-Class Team</h3>
              <p className="text-slate-400 text-center">Leaders from Amgen, Genentech, and Scripps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}