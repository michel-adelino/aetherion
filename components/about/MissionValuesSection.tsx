'use client';

import { useEffect, useState } from 'react';
import { Heart, Target, Users, Lightbulb, Shield, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function MissionValuesSection() {
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

    const section = document.getElementById('mission-values');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Every decision we make is guided by our commitment to bringing transformative therapies to patients with devastating neurological diseases.',
      color: 'text-red-600'
    },
    {
      icon: Lightbulb,
      title: 'Scientific Excellence',
      description: 'We pursue the highest standards of scientific rigor, innovation, and intellectual honesty in all our research and development efforts.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe the greatest breakthroughs come from diverse teams working together with shared purpose and mutual respect.',
      color: 'text-emerald-600'
    },
    {
      icon: Target,
      title: 'Bold Ambition',
      description: 'We tackle the most challenging problems in medicine with courage, persistence, and an unwavering belief in the power of innovation.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Ethical Leadership',
      description: 'We conduct our business with the highest ethical standards, transparency, and accountability to all our stakeholders.',
      color: 'text-orange-600'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We envision a world where neurodegenerative diseases are no longer a death sentence, and we work tirelessly to make that vision reality.',
      color: 'text-cyan-600'
    }
  ];

  return (
    <section id="mission-values" className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Mission & Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-12"></div>
            
            <Card className="p-12 bg-gradient-to-r from-slate-900 to-blue-900 text-white max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-2xl leading-relaxed text-slate-200">
                To halt the progression of devastating neurodegenerative diseases by engineering a new class of 
                <strong className="text-blue-300"> intelligent, brain-penetrant biologics</strong>.
              </p>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Core Values</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${value.color.replace('text-', 'bg-').replace('-600', '-100')} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 text-center mb-3">{value.title}</h4>
                    <p className="text-slate-600 text-center leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
            <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
              We envision a future where the blood-brain barrier is no longer an insurmountable obstacle to treating 
              neurological diseases. Through the power of AI-native drug design, we will unlock a new era of precision 
              medicine for the brain, transforming the lives of millions of patients and their families worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2030</div>
                <p className="text-slate-600">First approved brain-penetrant biologic</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                <p className="text-slate-600">Programs in clinical development</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
                <p className="text-slate-600">Patients potentially impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}