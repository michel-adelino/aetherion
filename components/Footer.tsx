'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Science', href: '/science' },
      { name: 'Pipeline', href: '/pipeline' },
    ],
    resources: [
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/aetherionbio', icon: Linkedin },
      { name: 'Twitter', href: 'https://x.com/aetherionbio', icon: Twitter }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white">Aetherion</span>
                <span className="text-blue-300 font-medium">Biosciences</span>
              </div>
            </Link>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              Engineering a new era for neuroscience through AI-native drug design. 
              Creating intelligent biologics to cross the blood-brain barrier and halt neurodegenerative disease.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">
                  10835 Road to the Cure, Suite 250<br />
                  San Diego, CA 92121
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a 
                  href="tel:8883006730" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  888 300 6730
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:info@aetherionbio.com" 
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  info@aetherionbio.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Aetherion Biosciences, Inc. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600"></div>
    </footer>
  );
}