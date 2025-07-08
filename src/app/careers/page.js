"use client"
import { Briefcase, MapPin, Users, Globe } from "lucide-react";
import { useState } from "react";

export default function DubaiRecruitment() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-600 p-3 rounded-full shadow-lg">
            <Briefcase className="text-white" size={40} />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          Join Our Team in Dubai!
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We are actively hiring talented professionals for our growing Dubai operations.
          Explore open positions and apply now to become part of a dynamic, international team at Techno Communications LLC.
        </p>

       
      </div>

      {/* Iframe Section */}
      <div className="max-w-12xl mx-auto">
        <div className="relative w-full h-[700px] rounded-xl overflow-hidden border shadow-lg bg-white">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading career opportunities...</p>
              </div>
            </div>
          )}
          
          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center max-w-md mx-auto p-8">
                <Briefcase className="text-gray-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Career Portal Temporarily Unavailable
                </h3>
                <p className="text-gray-600 mb-4">
                  We are experiencing technical difficulties with our career portal. 
                  Please try again later or contact our HR team directly.
                </p>
                <div className="space-y-2 text-sm">
                  <p>📧 info@techno-communications.com</p>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://hiring.techno-communications.com/dubai"
              title="Careers - Dubai Office - Apply for positions at Techno Communications Dubai"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-sm text-gray-500">
          Equal opportunity employer committed to diversity and inclusion. 
          All qualified applicants will receive consideration for employment.
        </p>
      </div>
    </div>
  );
}