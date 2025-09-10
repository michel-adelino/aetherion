'use client';
import { useEffect, useState } from 'react';
import { Shield, FileText, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function PrivacyPolicyContent() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Privacy Policy</h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">Effective Date: Tuesday, October 9, 2024</span>
            </div>
          </div>
          {/* Company Header */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Aetherion Biosciences, Inc.</h2>
              <p className="text-lg text-slate-700">
                We respect your privacy and are committed to protecting it through compliance with this Privacy Policy.
              </p>
            </div>
          </Card>
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                1. Introduction
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Aetherion Biosciences, Inc. ("Aetherion," "we," "us," or "our") respects your privacy and is committed to protecting it through compliance with this Privacy Policy. This Privacy Policy describes our practices regarding information collection through our website located at <strong>www.aetherionbio.com</strong> (the "Website").
                </p>
                <p>
                  This Website is an informational resource about our company, our science, and our mission to develop transformative therapies for neurodegenerative diseases. <strong>We do not collect personal contact information through this Website.</strong>
                </p>
                <p>
                  By accessing or using our Website, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our Website.
                </p>
              </div>
            </Card>
            {/* Section 2 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Information Collected Automatically</h3>
              <p className="text-slate-700 mb-4">When you visit our Website, we automatically collect certain information about your device and your visit, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                <li><strong>Log Information:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform</li>
                <li><strong>Usage Information:</strong> Pages visited, time and date of visit, time spent on pages, click patterns, and other diagnostic data</li>
                <li><strong>Device Information:</strong> Information about your computer or mobile device, including device type, unique device identifiers, and technical information about your device</li>
              </ul>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Information We Do Not Collect</h3>
              <p className="text-slate-700 mb-4">This Website does not:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Collect personal contact information (names, email addresses, phone numbers)</li>
                <li>Provide contact forms or newsletter sign-ups</li>
                <li>Require user registration or account creation</li>
                <li>Process any financial transactions</li>
                <li>Collect sensitive personal information</li>
              </ul>
            </Card>
            {/* Section 3 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies and Similar Technologies</h2>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 What Are Cookies</h3>
              <p className="text-slate-700 mb-4">
                Cookies are small data files placed on your device when you visit a website. We use cookies and similar tracking technologies to track activity on our Website and enhance your user experience.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                <li><strong>Strictly Necessary Cookies:</strong> Required for the Website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Website</li>
                <li><strong>Performance Cookies:</strong> Allow us to measure and improve Website performance</li>
              </ul>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.3 Managing Cookies</h3>
              <p className="text-slate-700">
                Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our Website. To learn more about cookies and how to manage them, visit <a href="https://www.aboutcookies.org" className="text-blue-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
              </p>
            </Card>
            {/* Section 4 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Information</h2>
              <p className="text-slate-700 mb-4">We use the automatically collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Provide, maintain, and improve our Website</li>
                <li>Understand and analyze how you use our Website</li>
                <li>Develop new features and functionality</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Ensure the security and integrity of our Website</li>
              </ul>
            </Card>
            {/* Section 5 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Legal Basis for Processing (For EEA and UK Visitors)</h2>
              <p className="text-slate-700">
                If you are visiting from the European Economic Area (EEA) or United Kingdom (UK), our legal basis for collecting and using the information described above depends on the specific information and context in which we collect it. We typically rely on our legitimate interests to collect information from you, except where such interests are overridden by your data protection interests or fundamental rights and freedoms.
              </p>
            </Card>
            {/* Section 6 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Information Sharing and Disclosure</h2>
              <p className="text-slate-700 mb-4">We do not sell, trade, or rent any information collected through this Website. We may share automatically collected, non-personal information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Service Providers:</strong> Third-party companies that provide website analytics services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of others</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </Card>
            {/* Section 7 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Security</h2>
              <p className="text-slate-700">
                We implement appropriate technical and organizational security measures to protect against unauthorized access, alteration, disclosure, or destruction of information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Card>
            {/* Section 8 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
              <p className="text-slate-700">
                We retain automatically collected information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </Card>
            {/* Section 9 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. International Data Transfers</h2>
              <p className="text-slate-700">
                Our Website is hosted in the United States. If you access our Website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.
              </p>
            </Card>
            {/* Section 10 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Your Rights and Choices</h2>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">10.1 Access and Control</h3>
              <p className="text-slate-700 mb-4">Depending on your location, you may have certain rights regarding your information, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                <li>The right to access information we hold about you</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to our processing</li>
                <li>The right to data portability</li>
              </ul>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">10.2 Do Not Track Signals</h3>
              <p className="text-slate-700 mb-6">
                Our Website does not currently respond to Do Not Track signals. However, you can configure your browser settings to decline cookies or alert you when cookies are being sent.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">10.3 California Privacy Rights</h3>
              <p className="text-slate-700">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). For more information about your rights, please contact us using the information provided below.
              </p>
            </Card>
            {/* Section 11 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Children's Privacy</h2>
              <p className="text-slate-700">
                Our Website is not intended for individuals under the age of 18. We do not knowingly collect information from children under 18. If you become aware that a child has provided us with information, please contact us using the contact information below.
              </p>
            </Card>
            {/* Section 12 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Third-Party Links</h2>
              <p className="text-slate-700">
                Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </Card>
            {/* Section 13 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-slate-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any changes on this page with an updated "Last Updated" date. Your continued use of our Website after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </Card>
            {/* Section 14 - Contact Information */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">14. Contact Information</h2>
              <p className="text-slate-700 mb-6">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Aetherion Biosciences, Inc.</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p>10835 Road to the Cure, Suite 250</p>
                      <p>San Diego, CA 92121</p>
                      <p className="text-slate-700">United States</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <a href="tel:8883006730" className="text-slate-700 hover:text-emerald-600 transition-colors">
                      888 300 6730
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <a href="mailto:privacy@aetherionbio.com" className="text-slate-700 hover:text-purple-600 transition-colors">
                      privacy@aetherionbio.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            {/* Section 15 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Additional Information for Specific Jurisdictions</h2>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">15.1 European Economic Area and United Kingdom</h3>
              <p className="text-slate-700 mb-6">
                If you are located in the EEA or UK, you have the right to lodge a complaint with your local data protection supervisory authority if you believe we have not complied with applicable data protection laws.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">15.2 Nevada Residents</h3>
              <p className="text-slate-700 mb-6">
                Nevada residents may opt out of the sale of certain "covered information" collected by operators of websites or online services. We currently do not sell covered information, as "sale" is defined by Nevada law.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">15.3 Accessibility</h3>
              <p className="text-slate-700">
                We are committed to ensuring this Privacy Policy is accessible to individuals with disabilities. If you need to access this Privacy Policy in an alternative format, please contact us using the information provided above.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
