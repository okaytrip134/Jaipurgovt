import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-cover bg-center text-white py-12" style={{ backgroundImage: "url('footer.png')" }}>
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
        <div className="bg-black/30 rounded-lg p-4 mb-6">
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

        {/* Social Media Section */}
        <div className="border-t border-gray-500 pt-6 mb-6">
          <div className="text-center">
            <h5 className="text-lg font-semibold mb-4">Follow Us on Social Media</h5>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* CM Profile Section */}
        <div className="bg-gradient-to-r from-saffron-600/20 to-green-600/20 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center">
            <img
              src="https://jankalyanFile.Rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
              alt="Shri BhajanLal Sharma"
              className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-white"
            />
            <div className="text-center">
              <p className="font-semibold text-lg">Shri BhajanLal Sharma</p>
              <p className="text-gray-200">Hon'ble Chief Minister, Jaipur</p>
              <p className="text-xs text-gray-300 mt-1">"Committed to the development and prosperity of Jaipur"</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-200 mb-4 md:mb-0">
              <p>© 2025 Government of Jaipur. All Rights Reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <a href="/" className="hover:text-yellow-300 transition-colors">Terms & Conditions</a>
              <a href="/" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="/" className="hover:text-yellow-300 transition-colors">Disclaimer</a>
              <a href="/" className="hover:text-yellow-300 transition-colors">Accessibility</a>
              <a href="/" className="hover:text-yellow-300 transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Government Credits */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-300">
              Website Content Managed by District Administration | Technical Support by NIC Jaipur
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Last Updated: {new Date().toLocaleDateString()} | Best viewed in Chrome, Firefox, Safari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;