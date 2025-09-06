import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-contain bg-center text-white py-8 bg-[#FFAC00]" style={{ backgroundImage: "url('')" }}>
      {/* Black overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className=" mx-auto px-6 md:px-12 relative z-20">
        {/* Government Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://indiapost.gov.in/images/home/ashok-thumb-logo.svg"
              alt="Gov. of Jaipur"
              className="h-16 w-16 mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">Government of Jaipur</h3>
              <p className="text-gray-200">District Administration Portal</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links - Full Navbar Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">


          {/* About Us */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">About Us</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">Local Produce</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Culinary Delights</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Administrative Hierarchy</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Organization Chart</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">About District</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Location & Area</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Geographical Features</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">History</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">Contact Us</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">District Administration</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">District Level Officers</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Block Level Officers</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Janaadhar Helpdesk</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Helpline</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">District War Room</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Right To Information</a></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">Business</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">Business Opportunity</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Economy</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Infrastructure</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Special Economic Zones</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Supporting Institutions</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Tenders</a></li>
            </ul>
          </div>

          {/* Media Gallery */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">Media Gallery</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">Zila Darshan Pustika</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Poster</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Video-Awareness Material</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Audio Jingles</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Advertisement</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">District Photo Gallery</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Awards</a></li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">Documents</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">Expenditure Statement</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Documents (All)</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Election Orders & Training</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">RTI Related</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Recruitment Related</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Orders</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Circular</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Act & Rules</a></li>
            </ul>
          </div>

          {/* Citizen Corner */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">Citizen Corner</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">E-Pledge</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">NFSA Application Form</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Download Admit Cards</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Election Department</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Smart City</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Farmer Registry Camp</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Download Forms</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">Important Websites / Portals</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="bg-black/30 rounded-lg p-4 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <FaPhone className="mr-2 text-yellow-300" size={16} />
              <span>Helpline: 1077 | Emergency: 100</span>
            </div>
            <div className="flex items-center justify-center">
              <FaEnvelope className="mr-2 text-yellow-300" size={16} />
              <span>collector@Jaipur.gov.in</span>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-yellow-300" size={16} />
              <span>District Collectorate, Jaipur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;