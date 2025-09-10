'use client';

import { useEffect, useState } from 'react';
import { Target, Brain, Shield, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// Removed Radix Progress due to build issue; using simple progress bar instead

export default function LeadProgramSection() {
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

    const section = document.getElementById('lead-program');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const preclinicalData = [
    {
      metric: 'Brain Exposure',
      value: '30x',
      description: 'Increase vs. non-BBB-crossing antibody',
      icon: Brain,
      color: 'text-purple-600'
    },
    {
      metric: 'Target Engagement',
      value: '95%+',
      description: 'Reduction in α-synuclein pathology',
      icon: Target,
      color: 'text-emerald-600'
    },
    {
      metric: 'Safety Profile',
      value: 'Favorable',
      description: 'No adverse findings in tox studies',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      metric: 'Motor Function',
      value: 'Improved',
      description: 'Significant improvement in PD models',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="lead-program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Lead Program Deep Dive: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">AET-101</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A Novel Approach to Parkinson's Disease
            </p>
          </div>

          {/* Program Overview */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Molecule Visualization */}
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-purple-900 to-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-12 right-8 w-3 h-3 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="absolute bottom-8 left-12 w-5 h-5 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-3000"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Target className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">AET-101</h3>
                  <p className="text-purple-200 text-lg mb-4">First-in-Class Bispecific Antibody</p>
                  <Badge className="bg-emerald-500 text-white hover:bg-emerald-500">
                    IND-Enabling Studies
                  </Badge>
                </div>
              </Card>
            </div>

            {/* Program Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Unmet Need</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Parkinson's Disease (PD) is a progressive neurodegenerative disorder that affects millions of people worldwide, 
                  with prevalence expected to double in the coming decades. There are currently <strong className="text-red-600">no available 
                  treatments</strong> that can halt or reverse the underlying progression of the disease.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A primary pathological driver of PD is the misfolding, aggregation, and cell-to-cell spread of the protein 
                  <strong className="text-purple-600"> alpha-synuclein (α-synuclein)</strong>. Toxic oligomeric forms of this protein 
                  are believed to cause synaptic dysfunction and neuronal death, leading to the motor and non-motor symptoms of the disease.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-emerald-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Our Solution</h4>
                <p className="text-slate-700 leading-relaxed">
                  AET-101 is a <strong className="text-purple-600">first-in-class, humanized, bispecific IgG1 antibody</strong> designed 
                  entirely by the Cognate-AI™ platform. It is engineered to perform two critical functions: first, to efficiently cross 
                  the blood-brain barrier by targeting the transferrin receptor, and second, to selectively bind and neutralize the toxic 
                  oligomeric forms of α-synuclein that propagate disease within the brain.
                </p>
              </div>
            </div>
          </div>

          {/* Preclinical Data */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Preclinical Data Highlights</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {preclinicalData.map((data, index) => {
                const Icon = data.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${data.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <Icon className={`h-8 w-8 ${data.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${data.color} mb-2`}>{data.value}</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{data.metric}</h4>
                    <p className="text-sm text-slate-600">{data.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Detailed Results */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-purple-500">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                  <h4 className="text-xl font-semibold text-slate-900">Superior Brain Exposure</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Demonstrated a <strong className="text-purple-600">greater than 30-fold increase</strong> in brain exposure 
                  compared to a non-BBB-crossing monospecific anti-α-synuclein antibody in non-human primate studies. This level 
                  of brain penetration is critical for achieving a therapeutic effect.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-emerald-500">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                  <h4 className="text-xl font-semibold text-slate-900">Robust Target Engagement</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Effectively engaged and reduced <strong className="text-emerald-600">soluble and insoluble α-synuclein pathology</strong> 
                  in the brains of a transgenic mouse model of Parkinson's Disease, correlating with improved motor function.
                </p>
              </Card>
            </div>
          </div>

          {/* Development Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Current Status & Timeline</h3>
            
            <Card className="p-8 bg-gradient-to-r from-slate-50 to-purple-50 border-purple-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Preclinical Studies Completed</h4>
                    <p className="text-slate-600">Efficacy and safety demonstrated in multiple animal models</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900">IND-Enabling Studies (Current)</h4>
                    <p className="text-slate-600 mb-2">Formal toxicology and CMC studies in progress</p>
                    <div className="w-full h-4 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all" style={{ width: '75%' }} />
                    </div>
                    <p className="text-sm text-slate-500 mt-1">75% Complete</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IND</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">IND Filing Targeted</h4>
                    <p className="text-slate-600">FDA submission planned within 12-18 months</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Advantages */}
          <div className="bg-gradient-to-r from-slate-900 to-purple-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">AET-101 Key Advantages</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Brain-Penetrant</h4>
                <p className="text-slate-300 text-sm">Engineered for efficient BBB crossing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Selective Targeting</h4>
                <p className="text-slate-300 text-sm">Binds pathogenic α-synuclein forms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Favorable Safety</h4>
                <p className="text-slate-300 text-sm">Designed for low immunogenicity</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Disease Modifying</h4>
                <p className="text-slate-300 text-sm">Targets root cause, not just symptoms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}