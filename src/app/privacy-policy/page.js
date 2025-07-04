import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Config for reusable company details
const companyConfig = {
  name: 'Techno Communications LLC',
  email: 'info@techno-communications.com',
  address: '6464 Savoy Dr, Suite 215, Houston, TX 77036',
  effectiveDate: 'May 1, 2025',
};

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | {companyConfig.name}</title>
        <meta
          name="description"
          content="Learn how Techno Communications LLC, operating over 350 T-Mobile stores, collects, uses, and protects your personal information."
        />
        <meta name="keywords" content="Techno Communications, T-Mobile, privacy policy, accessories, retail, data protection" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.technocomms.com/privacy-policy" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center mb-10">
            <div className="inline-block mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <div className="bg-pink-600 h-1 w-20 mx-auto mt-2"></div>
            </div>
            <p className="text-sm text-gray-600">Effective Date: {companyConfig.effectiveDate}</p>
          </header>

          <div className="bg-transparent rounded-lg  overflow-hidden">
            <div className="p-6 md:p-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Introduction</h2>
                <p className="text-gray-700">
                  Techno Communications LLC partners with T-Mobile to operate over 350+ T-Mobile retail stores, offering accessories, devices, and wireless services. This Privacy Policy explains how we collect, use, share, and protect your personal information when you visit our website, shop at our stores, or engage with our T-Mobile services. By using our services, you agree to these practices.
                </p>
              </div>

             

              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Sharing Your Information</h2>
                <p className="text-gray-700 mb-2">
                  We do <span className="font-bold">not sell</span> or rent your personal data. 
                </p>
             
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700">
                  We use cookies and similar technologies to improve your website experience, track usage, and deliver personalized content. You can manage cookie preferences through your browser settings.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Data Security</h2>
                <p className="text-gray-700">
                  We implement industry-standard security measures, including encryption and secure servers, to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal data only as long as necessary to provide our services, process transactions, or meet legal obligations. Data is securely deleted or anonymized when no longer needed.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Your Rights</h2>
                <p className="text-gray-700 mb-2">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="space-y-2 text-gray-700 pl-5">
                  <li className="list-disc">Access, correct, or delete your personal data.</li>
                  <li className="list-disc">Opt out of marketing communications.</li>
                  <li className="list-disc">Request data portability or object to certain processing.</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  To exercise these rights, contact us at{' '}
                  <a href={`mailto:${companyConfig.email}`} className="text-pink-600 hover:text-pink-800 font-medium">
                    {companyConfig.email}
                  </a>.
                </p>
              </div>
              
             
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website or services may include links to third-party sites,  We are not responsible for their privacy practices or content.
                </p>
              </div>
              
              
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this policy to reflect changes in our practices or legal requirements. Updates will be posted here with the revised effective date.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-pink-700 mb-3">Contact Us</h2>
                <p className="text-gray-700 mb-2">
                  For questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-2 border border-gray-200">
                  <p className="text-gray-700">
                    <span className="font-bold">{companyConfig.name}</span>
                    <br />
                    <span className="block mt-1">
                      Email:{' '}
                      <a href={`mailto:${companyConfig.email}`} className="text-pink-600 hover:text-pink-800 font-medium">
                        {companyConfig.email}
                      </a>
                    </span>
                    <span className="block mt-1">
                      Address: {companyConfig.address}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="inline-block text-sm font-medium text-pink-600 hover:text-pink-800">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;