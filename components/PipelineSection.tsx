'use client';

import { useEffect, useState } from 'react';
import { Beaker, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function PipelineSection() {
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

    const section = document.getElementById('pipeline');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pipeline" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Pipeline: From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Algorithm to Asset</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advancing Our Lead Program for Parkinson's Disease
            </p>
          </div>

          {/* Lead Program Showcase */}
          <div className="mb-16">
            <Card className="overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-blue-200">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Molecule Visualization */}
                <div className="p-12 bg-gradient-to-br from-blue-900 to-emerald-900 text-white flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-12 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <div className="absolute bottom-8 left-12 w-4 h-4 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-3000"></div>
                  </div>
                  
                  <div className="text-center z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Beaker className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">AET-101</h3>
                    <p className="text-blue-200 text-lg">First-in-Class Bispecific Antibody</p>
                  </div>
                </div>

                {/* Program Details */}
                <div className="p-12">
                  <div className="space-y-6">
                    <div>
                      <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                        Lead Program
                      </Badge>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Targeting Parkinson's Disease
                      </h3>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      The power of the Cognate-AI™ platform is demonstrated by the rapid advancement of our pipeline. Our discovery engine has generated <strong className="text-blue-600">AET-101</strong>, a first-in-class bispecific antibody engineered to neutralize pathogenic alpha-synuclein, a primary driver of neurodegeneration in Parkinson's Disease.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      By designing AET-101 for efficient BBB transport and potent target engagement from the outset, we have created a promising therapeutic candidate that is currently advancing through <strong className="text-emerald-600">IND-enabling studies</strong>.
                    </p>

                    {/* Key Features */}
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-slate-700">Targets pathogenic alpha-synuclein</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-slate-700">Engineered for BBB penetration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-slate-700">First-in-class bispecific design</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-slate-700">IND-enabling studies in progress</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200"
                        asChild
                      >
                        <Link href="/pipeline">
                          Explore Our Pipeline
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Platform Proof Points */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Platform Productivity</h3>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Leading AI-driven biotechnology companies understand that a platform's credibility 
                is ultimately measured by its productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
                <p className="text-slate-300">Months from target to lead candidate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                <p className="text-slate-300">Reduction in traditional screening time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <p className="text-slate-300">Programs in active development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}