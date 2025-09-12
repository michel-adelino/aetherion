'use client';

import { useEffect, useState } from 'react';
import { Cpu, Target, Users, ArrowRight, Zap, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DiscoveryEngineSection() {
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

    const section = document.getElementById('discovery-engine');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const futureTargets = [
    {
      disease: "Alzheimer's Disease",
      target: "Amyloid-β & Tau",
      description: "Targeting multiple pathological proteins simultaneously",
      icon: "🧠"
    },
    {
      disease: "ALS",
      target: "TDP-43 & SOD1",
      description: "Addressing protein aggregation in motor neurons",
      icon: "⚡"
    },
    {
      disease: "Huntington's Disease",
      target: "Huntingtin Protein",
      description: "Preventing toxic protein accumulation",
      icon: "🎯"
    }
  ];

  return (
    <section id="discovery-engine" className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">Discovery Engine</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
              Building the Future of Neuroscience Therapeutics
            </h3>
          </div>

          {/* Platform Productivity */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-16">
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                AET-101 is the <strong className="text-purple-600">first of many candidates</strong> to emerge from our discovery engine. 
                The modularity, speed, and precision of the Cognate-AI™ platform allow us to rapidly prosecute new targets for a range 
                of proteinopathies and other neurological disorders.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed">
                We are actively expanding our internal pipeline to address the root causes of diseases like 
                <strong className="text-emerald-600"> Alzheimer's, Amyotrophic Lateral Sclerosis (ALS), and Huntington's Disease</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-purple-600 to-emerald-600 p-6 rounded-xl text-white">
                <p className="text-lg font-medium">
                  Our systematic approach transforms <strong>validated but "undruggable" targets</strong> into 
                  accessible therapeutic opportunities.
                </p>
              </div>
            </div>

            {/* Platform Metrics */}
            <div className="space-y-6">
              <Card className="p-4 md:p-6 bg-gradient-to-r from-purple-50 to-emerald-50 border-purple-200">
                <div className="flex items-center space-x-4">
                  <Cpu className="h-12 w-12 text-purple-600" />
                  <div>
                    <div className="text-3xl font-bold text-purple-600">12</div>
                    <div className="text-slate-700">Months from target to lead candidate</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 border-emerald-200">
                <div className="flex items-center space-x-4">
                  <Zap className="h-12 w-12 text-emerald-600" />
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">98%</div>
                    <div className="text-slate-700">Reduction in traditional screening time</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-center space-x-4">
                  <Target className="h-12 w-12 text-blue-600" />
                  <div>
                    <div className="text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-slate-700">Programs in active development</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Future Pipeline */}
          <div className="mb-8 md:mb-16">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-8 md:mb-12">Expanding Our Therapeutic Reach</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {futureTargets.map((target, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{target.icon}</div>
                    <h4 className="text-xl font-semibold text-slate-900">{target.disease}</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-purple-800">Target: {target.target}</p>
                    </div>
                    <p className="text-slate-600 text-sm">{target.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnership Strategy */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Strategic Partnerships</h3>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                We believe that <strong className="text-blue-600">collaboration is key</strong> to maximizing the impact of our technology. 
                We are actively seeking strategic partnerships with global pharmaceutical leaders to accelerate the development of our 
                internal programs and apply our platform to partner-nominated targets.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                This dual strategy of <strong className="text-emerald-600">internal development and external collaboration</strong> is 
                designed to bring a new generation of medicines to patients as quickly as possible.
              </p>

              <div className="flex space-x-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full"
                >
                  Partnership Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-center space-x-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Global Reach</h4>
                    <p className="text-slate-600">Partnering with leading pharma companies worldwide</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-center space-x-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Target Flexibility</h4>
                    <p className="text-slate-600">Platform adaptable to partner-nominated targets</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Shared Expertise</h4>
                    <p className="text-slate-600">Combining AI innovation with clinical development experience</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-slate-900 to-purple-900 rounded-2xl p-6 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Neuroscience?</h3>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Join us in our mission to engineer a new era of brain-penetrant therapeutics. Whether you're a potential partner, 
              investor, or talented individual looking to make an impact, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 bg-transparent border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}