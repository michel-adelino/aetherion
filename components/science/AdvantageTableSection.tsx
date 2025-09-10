'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AdvantageTableSection() {
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

    const section = document.getElementById('advantage-table');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const comparisonData = [
    {
      feature: "Design Philosophy",
      cognateAI: "AI-native, de novo generation of a single, cohesive molecule",
      conventional: "Post-hoc engineering; \"bolting on\" a shuttle to an existing antibody",
      advantage: true
    },
    {
      feature: "Optimization",
      cognateAI: "Simultaneous, multi-objective co-optimization for transport, therapy, stability, and manufacturability",
      conventional: "Sequential optimization, risking compromised function or stability of one or both components",
      advantage: true
    },
    {
      feature: "Molecular Profile",
      cognateAI: "Single, streamlined bispecific biologic with a predictable structure",
      conventional: "Larger, more complex fusion proteins or multi-part constructs with potential for misfolding or aggregation",
      advantage: true
    },
    {
      feature: "Potential Benefit",
      cognateAI: "Higher brain penetration efficacy, improved safety and immunogenicity profile, and streamlined manufacturing (CMC)",
      conventional: "Potential for steric hindrance, lower efficacy, unpredictable pharmacokinetics, and complex CMC challenges",
      advantage: true
    }
  ];

  return (
    <section id="advantage-table" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Aetherion Advantage</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A direct comparison of our integrated approach versus conventional "shuttle" methodologies
            </p>
          </div>

          {/* Comparison Table */}
          <Card className="overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-indigo-900">
                    <th className="px-6 py-6 text-left text-lg font-semibold text-white border-r border-slate-700">
                      Feature
                    </th>
                    <th className="px-6 py-6 text-left text-lg font-semibold text-white border-r border-slate-700">
                      <div className="flex items-center space-x-2">
                        <span className="text-emerald-400">Cognate-AI™ Platform</span>
                        <span className="text-slate-400">(Aetherion)</span>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-left text-lg font-semibold text-white">
                      <span className="text-red-400">Conventional "Shuttle" Approaches</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-slate-100 transition-colors duration-200`}
                    >
                      <td className="px-6 py-6 font-semibold text-slate-900 border-r border-slate-200 align-top">
                        {row.feature}
                      </td>
                      <td className="px-6 py-6 text-slate-700 border-r border-slate-200 align-top">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{row.cognateAI}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-slate-700 align-top">
                        <div className="flex items-start space-x-3">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{row.conventional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Summary */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-emerald-50 to-cyan-50 border-emerald-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Bottom Line
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                While conventional approaches struggle with the inherent compromises of combining separate components, 
                the Cognate-AI™ Platform creates <strong className="text-emerald-600">unified biologics</strong> that are 
                optimized from the ground up for both brain delivery and therapeutic efficacy. This fundamental difference 
                in approach translates to <strong className="text-indigo-600">superior drug candidates</strong> with 
                better safety profiles and streamlined development pathways.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}