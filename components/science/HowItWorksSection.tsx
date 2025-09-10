'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, Atom, Cpu, Target, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleLayer = (layer: number) => {
    setActiveLayer(activeLayer === layer ? null : layer);
  };

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Cognate-AI™</span> Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              A layered approach to understanding our platform, designed for diverse audiences from investors to AI/ML specialists
            </p>
          </div>

          {/* Layer Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeLayer === 1 ? "default" : "outline"}
              onClick={() => toggleLayer(1)}
              className={`px-6 py-3 rounded-full ${activeLayer === 1 ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white' : ''}`}
            >
              Layer 1: Generative Engine
            </Button>
            <Button
              variant={activeLayer === 2 ? "default" : "outline"}
              onClick={() => toggleLayer(2)}
              className={`px-6 py-3 rounded-full ${activeLayer === 2 ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white' : ''}`}
            >
              Layer 2: Scientific Workflow
            </Button>
            <Button
              variant={activeLayer === 3 ? "default" : "outline"}
              onClick={() => toggleLayer(3)}
              className={`px-6 py-3 rounded-full ${activeLayer === 3 ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white' : ''}`}
            >
              Layer 3: Under the Hood
            </Button>
          </div>

          {/* Layer 1: Generative Engine */}
          <Collapsible open={activeLayer === 1}>
            <CollapsibleContent>
              <Card className="p-8 mb-8 bg-gradient-to-r from-indigo-50 to-cyan-50 border-indigo-200">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Generative Engine</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Step 1 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">1. Define the Mission</h4>
                      <p className="text-sm text-slate-600">
                        We provide the AI with the 3D structures of two targets: a transport receptor on the blood-brain barrier 
                        and a disease-causing protein within the brain.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">2. Generate Solutions</h4>
                      <p className="text-sm text-slate-600">
                        The Cognate-AI™ model designs millions of novel bispecific protein sequences and structures from scratch, 
                        each computationally optimized to bind both targets effectively.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">3. Select the Best</h4>
                      <p className="text-sm text-slate-600">
                        We apply a suite of in silico filters to predict drug-like properties, selecting a small number of 
                        elite candidates with the highest probability of success for synthesis.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Atom className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">4. Build & Test</h4>
                      <p className="text-sm text-slate-600">
                        We produce the lead candidate proteins in our lab and conduct rigorous experimental validation to 
                        confirm their ability to cross the BBB and neutralize their target in vitro and in vivo.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* Layer 2: Scientific Workflow */}
          <Collapsible open={activeLayer === 2}>
            <CollapsibleContent>
              <Card className="p-8 mb-8 bg-gradient-to-r from-slate-50 to-indigo-50 border-slate-200">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Scientific Workflow</h3>
                
                <div className="space-y-8">
                  <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
                    The Cognate-AI™ platform executes a sophisticated workflow to generate and validate novel therapeutics. 
                    This process is grounded in a deep understanding of neurobiology and protein engineering, amplified by the power of generative AI.
                  </p>

                  {/* Step 1: Antigen-Conditioned Generation */}
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                        <h4 className="text-xl font-semibold text-slate-900">Antigen-Conditioned Generation</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        The process begins by defining the dual objectives for the final molecule. The Cognate-AI™ platform uses a 
                        sophisticated <strong className="text-indigo-600">diffusion-based generative model</strong>, which is computationally 
                        conditioned on the 3D atomic structures of two distinct targets simultaneously. For AET-101, these targets are the 
                        human transferrin receptor (TfR1) for transport across the BBB, and the pathogenic oligomeric form of alpha-synuclein 
                        inside the brain for therapy.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">🧬</div>
                      <p className="text-sm text-slate-600">3D Structure Conditioning</p>
                    </div>
                  </div>

                  {/* Step 2: Multi-Objective Optimization */}
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-xl p-6 text-center lg:order-1">
                      <div className="text-4xl mb-4">⚖️</div>
                      <p className="text-sm text-slate-600">Multi-Parameter Optimization</p>
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                        <h4 className="text-xl font-semibold text-slate-900">Multi-Objective Optimization</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        The generative model does not simply design for binding. It co-optimizes for a wide array of critical drug-like 
                        properties in parallel. These include <strong className="text-cyan-600">high-affinity binding</strong> to both targets 
                        with specific kinetic profiles, intrinsic structural stability to ensure a long shelf-life and proper folding, and 
                        primary sequence characteristics that are computationally predicted to result in low immunogenicity and a favorable 
                        manufacturing profile. This prevents the common trade-offs seen in traditional biologic design.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Receptor-Mediated Transcytosis */}
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                        <h4 className="text-xl font-semibold text-slate-900">Receptor-Mediated Transcytosis</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        The resulting bispecific biologic is engineered with a transport arm that first binds with high affinity to the 
                        transferrin receptor on the surface of brain endothelial cells. This binding event hijacks a natural physiological 
                        process called <strong className="text-emerald-600">receptor-mediated transcytosis</strong>. The cell internalizes 
                        the receptor-drug complex, actively ferries it in a vesicle across the cell, and releases it into the brain parenchyma, 
                        effectively bypassing the barrier.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <p className="text-sm text-slate-600">BBB Transport Mechanism</p>
                    </div>
                  </div>

                  {/* Step 4: Target Neutralization */}
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center lg:order-1">
                      <div className="text-4xl mb-4">🎯</div>
                      <p className="text-sm text-slate-600">Therapeutic Action</p>
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                        <h4 className="text-xl font-semibold text-slate-900">Target Neutralization</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        Once inside the brain, the therapeutic arm of the biologic is free to engage its pathogenic target. It is designed 
                        with <strong className="text-purple-600">atomic-level precision</strong> to bind and neutralize toxic protein aggregates, 
                        such as alpha-synuclein oligomers. This action is intended to prevent the cell-to-cell spread of pathology and mark 
                        these toxic species for clearance by the brain's natural disposal systems, such as microglia.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* Layer 3: Under the Hood */}
          <Collapsible open={activeLayer === 3}>
            <CollapsibleContent>
              <Card className="p-8 mb-8 bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
                <h3 className="text-3xl font-bold mb-8 text-center">Under the Hood</h3>
                
                <div className="space-y-8">
                  <p className="text-xl text-slate-200 leading-relaxed text-center max-w-4xl mx-auto mb-12">
                    Our platform is built on cutting-edge AI architectures that represent the state-of-the-art in machine learning.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Diffusion Models */}
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <Cpu className="h-8 w-8 text-indigo-400" />
                        <h4 className="text-xl font-semibold">Diffusion-Based Models</h4>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        The core generative model is a <strong className="text-indigo-300">diffusion-based model</strong>, an architecture 
                        similar to those revolutionizing image and language generation, but custom-trained and fine-tuned on vast datasets 
                        of protein structures and sequences to learn the physical "grammar\" of functional proteins. This allows for true 
                        <em className="text-cyan-300"> de novo</em> design.
                      </p>
                    </Card>

                    {/* Graph Neural Networks */}
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <Target className="h-8 w-8 text-emerald-400" />
                        <h4 className="text-xl font-semibold">Graph Neural Networks</h4>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        We leverage <strong className="text-emerald-300">Graph Neural Networks (GNNs)</strong> to interpret the intricate 
                        3D relationships within protein structures and predict their binding interactions with targets. GNNs are uniquely 
                        suited for learning from graph-structured data, making them ideal for modeling the complex, non-local interactions 
                        that govern protein function.
                      </p>
                    </Card>
                  </div>

                  {/* Technical Infrastructure */}
                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="h-8 w-8 text-purple-400" />
                      <h4 className="text-xl font-semibold">High-Performance Computing Infrastructure</h4>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      This multi-modal AI approach ensures our designs are not just novel but also functionally viable and optimized for 
                      therapeutic success. The entire platform is deployed on a <strong className="text-purple-300">high-performance computing 
                      infrastructure</strong>, enabling rapid iteration and large-scale <em className="text-cyan-300">in silico</em> screening campaigns.
                    </p>
                  </Card>

                  {/* Key Technical Advantages */}
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-400 mb-2">10⁶+</div>
                      <p className="text-slate-300">Protein sequences generated per run</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                      <p className="text-slate-300">Computational filtering efficiency</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                      <p className="text-slate-300">Continuous optimization cycles</p>
                    </div>
                  </div>
                </div>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}