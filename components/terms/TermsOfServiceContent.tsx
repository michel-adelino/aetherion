'use client';

import { useEffect, useState } from 'react';
import { Scale, FileText, Mail, Phone, MapPin, Calendar, AlertTriangle, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function TermsOfServiceContent() {
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
              <Scale className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Terms of Service</h1>
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
                These Terms of Service govern your use of our website and access to our information.
              </p>
            </div>
          </Card>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                1. ACCEPTANCE OF TERMS
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Welcome to the website of Aetherion Biosciences, Inc. ("Aetherion," "we," "us," or "our"). By accessing or using this website (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </Card>

            {/* Section 2 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. USE OF THE SITE</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Informational Purposes Only</h3>
              <p className="text-slate-700 mb-4">
                This Site is provided for informational purposes only. The information contained on this Site is not intended to provide specific medical, scientific, or investment advice, or to serve as a recommendation for any specific product, service, or treatment.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 No Medical Advice</h3>
              <p className="text-slate-700 mb-4">
                The content on this Site, including information about our research, development programs, and investigational products, is not intended as medical advice or as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Permitted Use</h3>
              <p className="text-slate-700 mb-4">You may access and use the Site for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Use the Site in any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>Attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site</li>
                <li>Introduce any viruses, malware, or other harmful code</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
              </ul>
            </Card>

            {/* Section 3 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. INTELLECTUAL PROPERTY RIGHTS</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 Ownership</h3>
              <p className="text-slate-700 mb-4">
                The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, design, selection, and arrangement) are owned by Aetherion Biosciences, Inc., its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 Limited License</h3>
              <p className="text-slate-700 mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for your personal, non-commercial use only. This license does not include any right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                <li>Reproduce, distribute, modify, or create derivative works from the Site content</li>
                <li>Use the Site for any commercial purpose</li>
                <li>Use any data mining, robots, or similar data gathering and extraction tools</li>
                <li>Download (other than page caching) any portion of the Site except as expressly permitted</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.3 Trademarks</h3>
              <p className="text-slate-700">
                "Aetherion Biosciences," "Cognate-AI," and our logos are trademarks or registered trademarks of Aetherion Biosciences, Inc. You may not use these marks without our prior written permission.
              </p>
            </Card>

            {/* Section 4 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. FORWARD-LOOKING STATEMENTS</h2>
              <p className="text-slate-700">
                This Site may contain forward-looking statements within the meaning of the Private Securities Litigation Reform Act of 1995. These statements may include, but are not limited to, statements about our research and development programs, clinical trials, regulatory submissions, and business prospects. Forward-looking statements are subject to risks and uncertainties that could cause actual results to differ materially from those projected. We undertake no obligation to publicly update or revise any forward-looking statements.
              </p>
            </Card>

            {/* Section 5 */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
                5. INVESTIGATIONAL PRODUCTS
              </h2>
              <p className="text-slate-700">
                Any products or product candidates described on this Site are investigational and have not been approved for marketing by the U.S. Food and Drug Administration (FDA) or any other regulatory authority. No representation is made as to the safety or effectiveness of these investigational products for the uses for which they are being studied.
              </p>
            </Card>

            {/* Section 6 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. PRIVACY</h2>
              <p className="text-slate-700">
                As this Site does not collect personal information through contact forms or similar mechanisms, we do not maintain a separate Privacy Policy for online data collection. Any personal information voluntarily sent to us through other means (such as email or postal mail) will be handled in accordance with applicable privacy laws.
              </p>
            </Card>

            {/* Section 7 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. THIRD-PARTY LINKS</h2>
              <p className="text-slate-700">
                The Site may contain links to third-party websites or resources. We provide these links for your convenience only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </Card>

            {/* Section 8 */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. DISCLAIMER OF WARRANTIES</h2>
              <p className="text-slate-700 mb-4">
                <strong>THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, AETHERION BIOSCIENCES DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</strong>
              </p>
              <p className="text-slate-700 mb-4"><strong>WE DO NOT WARRANT THAT:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>The Site will be uninterrupted, secure, or error-free</li>
                <li>The information on the Site is accurate, complete, or current</li>
                <li>Any defects or errors will be corrected</li>
                <li>The Site is free of viruses or other harmful components</li>
              </ul>
            </Card>

            {/* Section 9 */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. LIMITATION OF LIABILITY</h2>
              <p className="text-slate-700 mb-4">
                <strong>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AETHERION BIOSCIENCES, INC., ITS AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SITE.</strong>
              </p>
              <p className="text-slate-700">
                <strong>IN NO EVENT SHALL OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATED TO THE SITE EXCEED ONE HUNDRED DOLLARS ($100).</strong>
              </p>
            </Card>

            {/* Section 10 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. INDEMNIFICATION</h2>
              <p className="text-slate-700">
                You agree to indemnify, defend, and hold harmless Aetherion Biosciences, Inc., its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
              </p>
            </Card>

            {/* Section 11 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. GOVERNING LAW AND JURISDICTION</h2>
              <p className="text-slate-700">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in San Diego County, California.
              </p>
            </Card>

            {/* Section 12 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. DISPUTE RESOLUTION</h2>
              <p className="text-slate-700">
                Any dispute arising out of or relating to these Terms or the Site shall be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association. The arbitration shall be conducted in San Diego, California, and judgment on the award may be entered in any court having jurisdiction.
              </p>
            </Card>

            {/* Section 13 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. SEVERABILITY</h2>
              <p className="text-slate-700">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </Card>

            {/* Section 14 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. ENTIRE AGREEMENT</h2>
              <p className="text-slate-700">
                These Terms constitute the entire agreement between you and Aetherion Biosciences, Inc. regarding the use of the Site and supersede all prior and contemporaneous agreements and understandings.
              </p>
            </Card>

            {/* Section 15 */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. WAIVER</h2>
              <p className="text-slate-700">
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition.
              </p>
            </Card>

            {/* Section 16 - Contact Information */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-emerald-50 border-blue-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">16. CONTACT INFORMATION</h2>
              <p className="text-slate-700 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Aetherion Biosciences, Inc.</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700">10835 Road to the Cure, Suite 250</p>
                      <p className="text-slate-700">San Diego, CA 92121</p>
                      <p className="text-slate-700">United States</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <a href="tel:8883006730" className="text-slate-700 hover:text-emerald-600 transition-colors">
                      888 300 6730
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}