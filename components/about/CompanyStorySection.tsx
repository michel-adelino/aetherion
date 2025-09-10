'use client';

import { useEffect, useState } from 'react';
import { Building, MapPin, TrendingUp, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CompanyStorySection() {
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

    const section = document.getElementById('company-story');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2023',
      title: 'Breakthrough Discovery',
      description: 'Dr. Marcus Thorne\'s lab at Scripps develops groundbreaking diffusion-based AI model for de novo protein design',
      icon: Award,
      color: 'text-blue-600'
    },
    {
      year: 'Early 2024',
      title: 'Company Formation',
      description: 'Aetherion founded with $8M seed round from Forward Ventures and Section 32',
      icon: Building,
      color: 'text-emerald-600'
    },
    {
      year: 'Mid 2024',
      title: 'Platform Validation',
      description: 'Critical in vivo proof-of-concept achieved for Cognate-AI™ platform',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      year: 'Late 2024',
      title: 'Series A Success',
      description: 'Oversubscribed $15M Series A led by ARCH Venture Partners',
      icon: MapPin,
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="company-story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Story: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">From Lab to Life</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          </div>

          {/* Origin Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                Our story began in the lab of our scientific co-founder, <strong className="text-blue-600">Dr. Marcus Thorne</strong>, 
                a leading computational biologist at The Scripps Research Institute. His group developed a groundbreaking 
                <strong className="text-emerald-600"> diffusion-based AI model</strong> capable of designing novel, functional 
                proteins from scratch.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed">
                His seminal work demonstrating the <em className="text-purple-600">in silico</em> creation of a functional 
                bispecific antibody caught the attention of San Diego's vibrant venture capital community, including 
                <strong className="text-blue-600"> Forward Ventures and Section 32</strong>, who recognized its transformative potential.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-lg font-medium text-slate-800">
                  "We realized we had the opportunity to fundamentally change how medicines for the brain are created—
                  not just discovered, but <strong>designed</strong> from first principles."
                </p>
                <p className="text-sm text-slate-600 mt-2">— Dr. Elena Vance, CEO & Co-Founder</p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-center space-x-4">
                  <Building className="h-12 w-12 text-blue-600" />
                  <div>
                    <div className="text-3xl font-bold text-blue-600">2024</div>
                    <div className="text-slate-700">Company Founded</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="h-12 w-12 text-emerald-600" />
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">$23M</div>
                    <div className="text-slate-700">Total Funding Raised</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-12 w-12 text-purple-600" />
                  <div>
                    <div className="text-3xl font-bold text-purple-600">San Diego</div>
                    <div className="text-slate-700">Torrey Pines innovation center</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Journey</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <Card className="p-6 hover:shadow-lg transition-all duration-300">
                          <div className={`flex items-center space-x-3 ${isEven ? 'flex-row-reverse' : 'flex-row'} mb-3`}>
                            <Icon className={`h-6 w-6 ${milestone.color}`} />
                            <span className="text-2xl font-bold text-slate-900">{milestone.year}</span>
                          </div>
                          <h4 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h4>
                          <p className="text-slate-600">{milestone.description}</p>
                        </Card>
                      </div>
                      
                      {/* Timeline node */}
                      <div className="relative z-10">
                        <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${milestone.color.replace('text-', 'bg-')}`}></div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Leadership Transition */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-6">Building for Impact</h3>
              <p className="text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto mb-8">
                To translate this powerful academic technology into a clinical-stage enterprise, we recruited 
                <strong className="text-blue-300"> Dr. Elena Vance</strong>, a seasoned executive with over 15 years 
                of experience leading neuroscience programs at Amgen, as our CEO. Together, our co-founders established 
                operations in the heart of the Torrey Pines Innovation Center.
              </p>
              <p className="text-lg text-slate-300">
                Just ten months after inception, having achieved critical <em>in vivo</em> proof-of-concept for our platform, 
                Aetherion closed an oversubscribed $23 million Series A financing round led by 
                <strong className="text-purple-300"> ARCH Venture Partners</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}