'use client';

import { useEffect, useState } from 'react';
import { Shield, AlertTriangle, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function UnmetNeedSection() {
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

    const section = document.getElementById('unmet-need');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="unmet-need" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Barrier to a <span className="text-red-600">Cure</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                For decades, the blood-brain barrier (BBB) has stood as the <strong className="text-slate-900">single greatest obstacle</strong> to treating neurodegenerative diseases. This highly selective, protective membrane is essential for brain health, but it also blocks more than <strong className="text-red-600">98% of potential large-molecule drugs</strong> from reaching their intended targets.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed">
                As a result, millions of patients with Parkinson's, Alzheimer's, and other devastating conditions have been left waiting for therapies that can address the root cause of their illness, not just the symptoms. The history of CNS drug development is littered with promising candidates that failed because they could not overcome this fundamental delivery challenge.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <div className="flex items-center space-x-4">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                  <div>
                    <div className="text-3xl font-bold text-red-600">98%</div>
                    <div className="text-slate-700">of large-molecule drugs blocked by BBB</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-center space-x-4">
                  <Shield className="h-12 w-12 text-blue-600" />
                  <div>
                    <div className="text-3xl font-bold text-blue-600">55M</div>
                    <div className="text-slate-700">people worldwide with dementia</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-center space-x-4">
                  <Target className="h-12 w-12 text-emerald-600" />
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">10M</div>
                    <div className="text-slate-700">people with Parkinson's disease</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
              To halt the progression of devastating neurodegenerative diseases by engineering a new class of 
              <strong className="text-blue-300"> intelligent, brain-penetrant biologics</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}