import React from 'react';
import { MessageSquare, Users, BarChart3, Mic, Facebook, Twitter, Share2, Mail, Phone } from 'lucide-react';

const GovernmentPortalSection = () => {
  return (
    <div className="w-full">
      {/* Blue Section */}
      <div 
        className="bg-blue-600 text-white px-6"
        style={{ backgroundImage: "url('/bg-noise.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Be Involved Section */}
            <div className="lg:col-span-5 py-6 border-r border-[#287ed9]">
              <h2 className="text-2xl font-bold mb-2">Be involved</h2>
              <p className="text-blue-100 mb-6">collaborate, share and influence government policy</p>
              
              <div className="space-y-4">
                {/* DO Button */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1 min-w-[70px] justify-center">
                    DO
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed">Real Context for Vikaspedia User Stories</p>
                  </div>
                </div>
                
                {/* Discuss Button */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-400 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1 min-w-[70px] justify-center">
                    <MessageSquare size={14} />
                    Discuss
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed">Inviting comments on the Draft Indian Language Standard "Akshar" for Hindi Language.</p>
                  </div>
                </div>
                
                {/* Poll Button */}
                <div className="flex items-start gap-3">
                  <div className="bg-teal-500 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1 min-w-[70px] justify-center">
                    <BarChart3 size={14} />
                    Poll
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed">Poll on Homeopathy - Harmony in Health</p>
                  </div>
                </div>
                
                {/* Talk Button */}
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1 min-w-[70px] justify-center">
                    <Mic size={14} />
                    Talk
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed">Tune in to 125th Episode of Mann Ki Baat by Prime Minister Narendra Modi on 31st...</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm transition-colors">
                View Details
              </button>
            </div>
            
            {/* Spotlight Section */}
            <div className="lg:col-span-5 border-r border-[#287ed9] py-6">
              <h2 className="text-2xl font-bold mb-4">Spotlight</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed">National Task Force</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed">PM-PRANAM (PM Programme for Restoration, Awareness Generation, Nourishment, and Amelioration of Mother Earth)</p>
                </div>
              </div>
              
              <button className="mt-6 border border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded text-sm transition-colors">
                View all
              </button>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Transparency</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="hover:text-blue-200 cursor-pointer">Right to Information</span>
                  <span className="text-blue-200">|</span>
                  <span className="hover:text-blue-200 cursor-pointer">Open Data</span>
                  <span className="text-blue-200">|</span>
                  <span className="hover:text-blue-200 cursor-pointer">Public Grievance</span>
                </div>
              </div>
            </div>
            
            {/* Right Side Icons */}
            <div className="lg:col-span-2 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer transition-colors">
                  <Mail size={20} />
                  <span>Feedback</span>
                </div>
                
                <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer transition-colors">
                  <Phone size={20} />
                  <span>Contact us</span>
                </div>
                
                <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer transition-colors">
                  <Share2 size={20} />
                  <span>Share this page</span>
                </div>
                
                <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer transition-colors">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </div>
                
                <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer transition-colors">
                  <Twitter size={20} />
                  <span>Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Icons Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
            
            {/* IGOD */}
            <div className="text-center">
              <div className="bg-teal-500 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Integrated Government Online Directory (IGOD)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A one-point source to access all Indian Government Websites at all levels and from all sectors.
              </p>
            </div>
            
            {/* Mobile App Directory */}
            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Mobile App Directory</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mobile Seva Appstore: National Mobile Governance Initiative by Dept. of Electronics & IT
              </p>
            </div>
            
            {/* Calendar */}
            <div className="text-center">
              <div className="bg-purple-500 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Calendar</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                View holidays as per the circular issued by the Ministry of Personnel, Public Grievances and Pensions.
              </p>
            </div>
            
            {/* MyGov */}
            <div className="text-center">
              <div className="bg-red-500 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">MyGov</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Be an active partner in nation-building. Participate in Groups, Tasks, Discussions, Polls, Blogs and Talks.
              </p>
            </div>
            
            {/* Webcast Services */}
            <div className="text-center">
              <div className="bg-blue-500 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h5v2h8v-2h5c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 12H3V5h18v10z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Webcast Services</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                View live and on demand Webcast of important Government events, activities and Live TV Channels
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentPortalSection;