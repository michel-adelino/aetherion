'use client';

import { useEffect, useState } from 'react';
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  achievements: string[];
  previousRoles: string[];
}

export default function LeadershipTeamSection() {
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

    const section = document.getElementById('leadership-team');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Elena Vance',
      title: 'Chief Executive Officer & Co-Founder',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      shortBio: 'Over 15 years of industry experience in CNS drug development, corporate strategy, and venture financing.',
      fullBio: 'Dr. Vance brings over 15 years of industry experience in CNS drug development, corporate strategy, and venture financing. Prior to co-founding Aetherion, she served as Vice President of Neuroscience Clinical Development at Amgen, where she oversaw the progression of multiple therapeutic assets from preclinical stages through Phase II clinical trials. Her leadership was instrumental in advancing several breakthrough therapies for neurological disorders.',
      education: ['PhD in Neuroscience, Stanford University', 'MBA, Wharton School, University of Pennsylvania'],
      achievements: ['Led 5+ CNS programs through clinical development', 'Raised over $200M in biotech financing', 'Published 25+ peer-reviewed papers'],
      previousRoles: ['VP Neuroscience Clinical Development, Amgen', 'Senior Director, Biogen', 'Principal, McKinsey & Company']
    },
    {
      name: 'Dr. Marcus Thorne',
      title: 'Chief Scientific Officer & Co-Founder',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      shortBio: 'Scientific visionary and architect of the Cognate-AI™ platform with groundbreaking work in computational protein design.',
      fullBio: 'Dr. Thorne is the scientific visionary and architect of the Cognate-AI™ platform. Before co-founding Aetherion, he was a tenured professor at The Scripps Research Institute, where his laboratory was at the global forefront of computational protein design and the application of generative AI to biology. His pioneering work in diffusion-based protein generation has revolutionized the field.',
      education: ['PhD in Computational Biology, MIT', 'BS in Computer Science, Caltech'],
      achievements: ['NIH Director\'s New Innovator Award recipient', '50+ publications in Nature, Science, Cell', 'Pioneer in AI-driven protein design'],
      previousRoles: ['Professor, The Scripps Research Institute', 'Postdoc, Harvard Medical School', 'Research Scientist, DeepMind']
    },
    {
      name: 'Dr. Jian Li',
      title: 'Head of Computational Biology',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      shortBio: 'Leads AI/ML teams with expertise in machine learning models for biologic drug discovery and optimization.',
      fullBio: 'Dr. Li leads the AI/ML and computational teams driving the Cognate-AI™ platform. He was formerly a senior scientist at Genentech, where he specialized in developing and applying machine learning models for biologic drug discovery and optimization. His work has been instrumental in advancing multiple therapeutic programs through computational approaches.',
      education: ['PhD in Machine Learning, Carnegie Mellon University', 'MS in Bioinformatics, UC San Diego'],
      achievements: ['Developed ML models for 10+ drug programs', 'Expert in graph neural networks for biology', '30+ publications in top-tier journals'],
      previousRoles: ['Senior Scientist, Genentech', 'Research Scientist, Google DeepMind', 'Postdoc, Stanford University']
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Head of Protein Engineering & Expression',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      shortBio: 'Expert in antibody engineering and protein production with key role in advancing multiple clinical programs.',
      fullBio: 'Dr. Chen is an expert in antibody engineering, protein production, and biophysical characterization. She was recruited from AnaptysBio, a successful San Diego-based antibody therapeutics company, where she played a key role in advancing multiple programs into the clinic. Her expertise spans the entire spectrum of protein development from design to manufacturing.',
      education: ['PhD in Biochemistry, UC Berkeley', 'BS in Chemical Engineering, MIT'],
      achievements: ['Advanced 8+ antibody programs to clinic', 'Expert in bispecific antibody design', 'Holder of 15+ patents in protein engineering'],
      previousRoles: ['Principal Scientist, AnaptysBio', 'Senior Scientist, Amgen', 'Research Associate, Genentech']
    },
    {
      name: 'Dr. Ben Carter',
      title: 'Director of In Vivo Pharmacology',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      shortBio: 'Deep expertise in preclinical studies using sophisticated animal models of neurodegenerative disease.',
      fullBio: 'Dr. Carter leads all preclinical efficacy and safety studies. He has deep expertise in developing and executing studies using sophisticated animal models of neurodegenerative disease, ensuring our candidates are rigorously tested before entering human trials. His work is critical to translating computational designs into validated therapeutic candidates.',
      education: ['DVM, UC Davis School of Veterinary Medicine', 'PhD in Neuroscience, UCSF'],
      achievements: ['Led preclinical studies for 20+ CNS programs', 'Expert in neurodegeneration models', 'Published 40+ papers in neuropharmacology'],
      previousRoles: ['Senior Director, Denali Therapeutics', 'Principal Scientist, Biogen', 'Research Fellow, Harvard Medical School']
    }
  ];

  return (
    <section id="leadership-team" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              World-class leaders with deep expertise in AI, neuroscience, and drug development
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.shortBio}</p>
                  
                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Full Bio
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-slate-900">
                            {member.name}
                          </DialogTitle>
                          <p className="text-blue-600 font-medium">{member.title}</p>
                        </DialogHeader>
                        
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                          <div className="md:col-span-2 space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-slate-900 mb-3">Biography</h4>
                              <p className="text-slate-700 leading-relaxed">{member.fullBio}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                                <Award className="w-5 h-5 mr-2 text-emerald-600" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {member.achievements.map((achievement, idx) => (
                                  <li key={idx} className="text-slate-700 flex items-start">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                                <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                                Education
                              </h4>
                              <ul className="space-y-2">
                                {member.education.map((edu, idx) => (
                                  <li key={idx} className="text-slate-700 text-sm">{edu}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-slate-900 mb-3">Previous Roles</h4>
                              <ul className="space-y-2">
                                {member.previousRoles.map((role, idx) => (
                                  <li key={idx} className="text-slate-700 text-sm">{role}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Advisory Board Teaser */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                World-Class Advisory Board
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our leadership team is supported by an exceptional advisory board of renowned scientists, 
                clinicians, and industry veterans who provide strategic guidance and deep domain expertise 
                across neuroscience, AI/ML, and drug development.
              </p>
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                Meet Our Advisors
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}