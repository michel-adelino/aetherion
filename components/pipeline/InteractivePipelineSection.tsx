'use client';

import { useEffect, useState } from 'react';
import { ChevronRight, FlaskRound as Flask, Microscope, Users, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PipelineProgram {
  id: string;
  name: string;
  targets: string;
  indication: string;
  stage: string;
  stageColor: string;
  description: string;
  keyFeatures: string[];
  timeline: string;
}

export default function InteractivePipelineSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>('AET-101');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('interactive-pipeline');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const programs: PipelineProgram[] = [
    {
      id: 'AET-101',
      name: 'AET-101',
      targets: 'Pathogenic α-Synuclein & Transferrin Receptor',
      indication: 'Parkinson\'s Disease',
      stage: 'Preclinical (IND-Enabling)',
      stageColor: 'bg-emerald-500',
      description: 'First-in-class bispecific antibody designed to cross the blood-brain barrier and neutralize toxic alpha-synuclein oligomers.',
      keyFeatures: [
        '30-fold increase in brain exposure vs. conventional antibodies',
        'Selective binding to pathogenic α-synuclein forms',
        'Favorable safety and PK profile in preclinical studies',
        'Designed for low immunogenicity and stable manufacturing'
      ],
      timeline: 'IND filing targeted for 2025'
    },
    {
      id: 'AET-102',
      name: 'AET-102',
      targets: 'Undisclosed CNS Target & BBB Receptor',
      indication: 'Undisclosed Neurodegenerative Disease',
      stage: 'Discovery',
      stageColor: 'bg-blue-500',
      description: 'Second-generation program targeting a validated CNS target with high unmet medical need.',
      keyFeatures: [
        'Novel target with strong genetic validation',
        'Co-optimized for BBB transport and therapeutic efficacy',
        'Leveraging advanced Cognate-AI™ capabilities',
        'Potential for multiple indications'
      ],
      timeline: 'Preclinical studies planned for 2025'
    }
  ];

  const developmentStages = [
    { name: 'Discovery', icon: Flask, color: 'bg-blue-500' },
    { name: 'Preclinical', icon: Microscope, color: 'bg-emerald-500' },
    { name: 'Phase I', icon: Users, color: 'bg-purple-500' },
    { name: 'Phase II', icon: Users, color: 'bg-orange-500' },
    { name: 'Phase III', icon: Users, color: 'bg-red-500' }
  ];

  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  return (
    <section id="interactive-pipeline" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">Pipeline Overview</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive view of our systematic approach to developing transformative CNS therapeutics
            </p>
          </div>

          {/* Development Stages Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Development Stages</h3>
            <div className="flex justify-center items-center space-x-4 overflow-x-auto pb-4">
              {developmentStages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.name} className="flex items-center space-x-4 flex-shrink-0">
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{stage.name}</span>
                    </div>
                    {index < developmentStages.length - 1 && (
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pipeline Table */}
          <div className="mb-12">
            <Card className="overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-900 to-purple-900">
                      <th className="px-6 py-4 text-left text-lg font-semibold text-white">Program</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-white">Target(s)</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-white">Indication</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-white">Development Stage</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-white">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program, index) => (
                      <tr 
                        key={program.id}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-slate-100 transition-colors duration-200 cursor-pointer ${selectedProgram === program.id ? 'ring-2 ring-purple-500' : ''}`}
                        onClick={() => setSelectedProgram(program.id)}
                      >
                        <td className="px-6 py-4 font-bold text-slate-900">{program.name}</td>
                        <td className="px-6 py-4 text-slate-700">{program.targets}</td>
                        <td className="px-6 py-4 text-slate-700">{program.indication}</td>
                        <td className="px-6 py-4">
                          <Badge className={`${program.stageColor} text-white hover:${program.stageColor}`}>
                            {program.stage}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProgram(program.id);
                            }}
                          >
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Program Details */}
          {selectedProgramData && (
            <Card className="p-8 bg-gradient-to-r from-purple-50 to-emerald-50 border-purple-200">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-3xl font-bold text-slate-900">{selectedProgramData.name}</h3>
                    <Badge className={`${selectedProgramData.stageColor} text-white`}>
                      {selectedProgramData.stage}
                    </Badge>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {selectedProgramData.description}
                  </p>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-slate-600 mb-2"><strong>Timeline:</strong> {selectedProgramData.timeline}</p>
                    <p className="text-sm text-slate-600"><strong>Indication:</strong> {selectedProgramData.indication}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {selectedProgramData.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}