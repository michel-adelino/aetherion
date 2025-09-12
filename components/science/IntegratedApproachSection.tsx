'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function IntegratedApproachSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Fallback for mobile devices - show content after a short delay
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1, // Lower threshold for better mobile detection
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    const section = document.getElementById('integrated-approach');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrated-approach" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Aetherion Advantage: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600"> An Integrated Approach</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
              One Molecule, Two Functions, Co-Optimized by AI
            </h3>
          </div>

          {/* Problem Statement */}
          <div className="mb-8 md:mb-16">
            <Card className="p-4 md:p-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">The Conventional Challenge</h4>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    The central challenge of CNS drug delivery is not simply crossing the blood-brain barrier, but doing so 
                    <strong className="text-red-600"> without compromising the therapeutic function</strong> of the molecule. 
                    Conventional approaches treat these as separate problems.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    They typically begin with a functional therapeutic antibody and then fuse or conjugate a generic BBB "shuttle" 
                    to it, hoping the resulting construct retains both activities. This post-hoc engineering process can lead to a 
                    host of problems, including <strong className="text-red-600">steric hindrance</strong> that blocks target binding, 
                    reduced stability, complex manufacturing and purification challenges (CMC), and an unpredictable immunogenicity profile.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Solution */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full">
                <span className="text-emerald-800 font-semibold">First Principles Solution</span>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900">
                The Cognate-AI™ Platform solves this from first principles.
              </h4>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                By conditioning our generative AI model on <strong className="text-indigo-600">both the BBB transport target 
                and the CNS disease target simultaneously</strong>, we create a single, integrated bispecific molecule from scratch.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Transport and therapy are not separate components bolted together; they are 
                <strong className="text-emerald-600"> interwoven properties of a single, elegant protein</strong>, 
                co-optimized from the very first step of the design process.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 p-6 rounded-xl text-white">
                <p className="text-lg font-medium">
                  This holistic approach is designed to yield molecules with superior 
                  <strong> efficacy, safety, and drug-like properties</strong>.
                </p>
              </div>
            </div>

            {/* Visual Comparison */}
            <div className="space-y-8">
              {/* Conventional Approach */}
              <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <div className="text-center mb-4">
                  <h5 className="text-lg font-semibold text-red-800 mb-2">Conventional "Shuttle" Approach</h5>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-12 h-8 bg-red-300 rounded flex items-center justify-center text-xs font-bold text-red-800">
                      Drug
                    </div>
                    <span className="text-red-600 font-bold">+</span>
                    <div className="w-12 h-8 bg-red-400 rounded flex items-center justify-center text-xs font-bold text-red-800">
                      Shuttle
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Post-hoc engineering
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Potential steric hindrance
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Complex CMC challenges
                  </li>
                </ul>
              </Card>

              {/* Cognate-AI Approach */}
              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 border-emerald-200">
                <div className="text-center mb-4">
                  <h5 className="text-lg font-semibold text-emerald-800 mb-2">Cognate-AI™ Approach</h5>
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded flex items-center justify-center text-xs font-bold text-white">
                      Unified Biologic
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-emerald-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    AI-native, de novo design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Co-optimized properties
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Streamlined manufacturing
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Co-Optimization Benefits</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-indigo-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Higher Efficacy</h4>
                <p className="text-slate-300">Optimized binding to both transport and therapeutic targets</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Improved Safety</h4>
                <p className="text-slate-300">Predictable immunogenicity and pharmacokinetic profile</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-emerald-400 text-xl font-bold">CMC</div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Streamlined Manufacturing</h4>
                <p className="text-slate-300">Single molecule with simplified purification process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}