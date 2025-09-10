'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Science', href: '/science' },
    { name: 'Pipeline', href: '/pipeline' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <span className={cn(
                'font-bold text-xl transition-colors duration-300',
                isScrolled ? 'text-slate-900' : 'text-white'
              )}>
                Aetherion
              </span>
              <span className={cn(
                'text-sm font-medium transition-colors duration-300',
                isScrolled ? 'text-blue-600' : 'text-blue-300'
              )}>
                Biosciences
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-medium transition-colors duration-200 hover:text-blue-600 relative',
                  pathname === item.href
                    ? isScrolled
                      ? 'text-blue-600'
                      : 'text-blue-300'
                    : isScrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors duration-200',
              isScrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            )}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-full font-medium"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}