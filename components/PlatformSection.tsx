'use client';

import { useEffect, useState } from 'react';
import { Brain, Cpu, Zap, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PlatformSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('platform');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="platform" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Solution, Designed from 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> First Principles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Aetherion is overcoming the blood-brain barrier challenge with our proprietary 
              <strong className="text-blue-600"> Cognate-AI™ Platform</strong>.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Platform Description */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-800 font-semibold">Cognate-AI™ Platform</span>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                This is not an incremental improvement on existing technology; it is a <strong className="text-slate-900">complete reimagining</strong> of how biologics for the brain are created. Unlike conventional methods that treat delivery and therapy as separate problems—often by "bolting on" a generic transport shuttle to an existing drug—our generative AI platform designs a single, cohesive biologic with co-optimized properties for both brain transport and therapeutic action.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                By learning the complex, multi-dimensional rules of protein language, structure, and function, Cognate-AI™ builds the ideal medicine from the ground up, with <strong className="text-emerald-600">atomic-level precision</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 rounded-xl text-white">
                <p className="text-lg font-medium">
                  This is not drug discovery; this is <strong>AI-native drug design</strong>.
                </p>
              </div>
            </div>

            {/* Platform Features */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <Brain className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Brain-First Design</h3>
                    <p className="text-slate-600">Co-optimizes therapeutic action and BBB transport from the molecular level up</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500">
                <div className="flex items-start space-x-4">
                  <Cpu className="h-8 w-8 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Generative AI Engine</h3>
                    <p className="text-slate-600">Learns protein language, structure, and function to generate novel biologics</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Atomic Precision</h3>
                    <p className="text-slate-600">Designs molecules with unprecedented accuracy and therapeutic potential</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Process Visualization */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">The Cognate-AI™ Advantage</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-400 text-2xl font-bold">X</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Conventional Approach</h4>
                <p className="text-slate-300">Separate drug and delivery systems with poor integration</p>
              </div>
              
              <div className="text-center">
                <ArrowRight className="h-8 w-8 text-blue-400 mx-auto mb-6" />
                <div className="text-blue-400 font-semibold">AI-Native Redesign</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-400 text-2xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Cognate-AI™</h4>
                <p className="text-slate-300">Unified biologic with co-optimized properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}