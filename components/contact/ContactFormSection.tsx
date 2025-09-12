'use client';

import { useEffect, useState } from 'react';
import { Send, User, Mail, Building, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function ContactFormSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact-form');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.inquiryType || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you within 24-48 hours.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          inquiryType: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Message</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're interested in partnerships, investment opportunities, or joining our team, 
              we'd love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                      First Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="pl-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                      Last Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="pl-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Email and Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                      Company/Organization
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="pl-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="text-sm font-medium text-slate-700">
                    Type of Inquiry *
                  </Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger id="inquiryType" className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select the type of inquiry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                      <SelectItem value="investment">Investment Opportunity</SelectItem>
                      <SelectItem value="career">Career Inquiry</SelectItem>
                      <SelectItem value="media">Media/Press</SelectItem>
                      <SelectItem value="academic">Academic Collaboration</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message *
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="pl-10 min-h-[120px] border-slate-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white h-12 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className={`ml-2 h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </Button>
                </div>

                {/* Privacy Notice */}
                <div className="pt-4 text-center">
                  <p className="text-sm text-slate-600">
                    By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties.
                  </p>
                </div>
              </form>
            </Card>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Prefer to Connect Directly?
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For urgent matters or specific inquiries, feel free to reach out to us directly via phone or visit our offices 
                in San Diego's vibrant Torrey Pines innovation center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="tel:8883006730">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us: 888 300 6730
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Visit Our Office
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}