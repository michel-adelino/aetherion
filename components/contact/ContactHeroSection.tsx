'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactHeroSection() {
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
              src="/img/Sinapse_Purple_loop_poster.webp"
              alt="Sinapse background"
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
          src="/Sinapse_Purple_loop.mp4"
          poster="/Sinapse_Purple_loop_poster.png"
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
          {/* Contact Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-lg font-medium">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Contact
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
              Aetherion
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to explore <strong className="text-blue-300">partnerships</strong>, discuss 
            <strong className="text-emerald-300"> investment opportunities</strong>, or learn more about 
            <strong className="text-purple-300"> career possibilities</strong>? We'd love to hear from you.
          </p>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Visit Us</h3>
              <p className="text-slate-400 text-center">San Diego, CA<br />Torrey Pines Innovation Center</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Call Us</h3>
              <p className="text-slate-400 text-center">888 300 6730</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Email Us</h3>
              <p className="text-slate-400 text-center">Get in touch below</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}