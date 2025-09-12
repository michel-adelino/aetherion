'use client';

import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Building, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ContactInfoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-info');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-info" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Location</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Located in the heart of San Diego's premier life sciences innovation center
            </p>
          </div>

          {/* Contact Information and Map */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Company Address</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong>Aetherion Biosciences, Inc.</strong><br />
                      10835 Road to the Cure, Suite 250<br />
                      San Diego, CA 92121
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
                    <p className="text-lg text-slate-700">
                      <a href="tel:8883006730" className="hover:text-emerald-600 transition-colors">
                        888 300 6730
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Categories */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 text-center hover:shadow-md transition-all duration-300">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-slate-900 mb-1">Partnerships</h4>
                  <p className="text-sm text-slate-600">Strategic collaborations</p>
                </Card>
                
                <Card className="p-4 text-center hover:shadow-md transition-all duration-300">
                  <Building className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-slate-900 mb-1">Investors</h4>
                  <p className="text-sm text-slate-600">Investment opportunities</p>
                </Card>
                
                <Card className="p-4 text-center hover:shadow-md transition-all duration-300">
                  <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-slate-900 mb-1">Careers</h4>
                  <p className="text-sm text-slate-600">Join our mission</p>
                </Card>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="space-y-6">
              <Card className="overflow-hidden shadow-lg">
                <div className="h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8234567890123!2d-117.2234567890123!3d32.8901234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c4b8b8b8b8%3A0x1234567890abcdef!2s10835%20Road%20to%20the%20Cure%2C%20San%20Diego%2C%20CA%2092121!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aetherion Biosciences Location"
                  ></iframe>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-slate-900">Office Hours</h4>
                </div>
                <div className="space-y-1 text-slate-700">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Location Benefits */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12">
            <div className="text-center text-white mb-12">
              <h3 className="text-3xl font-bold mb-6">Why San Diego?</h3>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                San Diego's Torrey Pines corridor is one of the world's most concentrated life sciences innovation centers, 
                providing unparalleled access to talent, capital, and collaboration opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">600+</div>
                <p className="text-slate-300">Life sciences companies</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">Top 3</div>
                <p className="text-slate-300">Global biotech hub</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">$8B+</div>
                <p className="text-slate-300">Annual VC investment</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
                <p className="text-slate-300">Life sciences jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}