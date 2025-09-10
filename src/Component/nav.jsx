import React from "react";
import { ChevronDown } from "lucide-react";
import "./nav.css";
import Topbar from "./topbar";

function Navbar() {
  return (
    <header className="w-full hidden md:block">
      <Topbar />

      {/* isolate => apna stacking context */}
      <nav className="w-full border-b sticky top-0 z-30 isolate">
        <div className="max-w-full mx-auto flex items-center justify-between px-0 py-3 navbar-bg">
          {/* Logo fully left */}
          <a href="/" className="flex items-center pl-4">
            <img
              src="https://indiapost.gov.in/images/home/ashok-thumb-logo.svg"
              alt="Gov. of Jaipur"
              className="h-16"
            />
          </a>

          {/* Nav links */}
          <ul className="hidden xl:flex flex-1 justify-center text-black font-medium gap-6 md:gap-8 lg:gap-12">
            <li>
              <a href="/" className="flex items-center gap-1 hover:text-blue-600">
                Home
              </a>
            </li>

            {/* About Us */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                About Us <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Local Produce</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Culinary Delights</a></li>
                <li className="relative group cursor-pointer">
                  <span className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                    Administrative Hierarchy <ChevronDown size={14} />
                  </span>
                  <ul className="dropdown-menu z-[10000]">
                    <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Sub Item 1</a></li>
                    <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Sub Item 2</a></li>
                  </ul>
                </li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Organization Chart</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">About District</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Location & Area</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Geographical & Physical Features</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">History</a></li>
              </ul>
            </li>

            {/* Contact Us */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Contact Us <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">District Administration</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">District Level Officers</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Block Level Officers</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Janaadhar Helpdesk</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Helpline</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">District War Room</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Right To Information</a></li>
              </ul>
            </li>

            {/* Business */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Business <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Business Opportunity</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Economy</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Infrastructure</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Special Economic Zones</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Supporting Institutions</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Tenders</a></li>
              </ul>
            </li>

            {/* Media Gallery */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Media Gallery <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Zila Darshan Pustika</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Poster</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Video-Awareness Material</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Audio Jingles</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Advertisement</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">District Photo Gallery</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Awards</a></li>
              </ul>
            </li>

            {/* Documents */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Documents <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Expenditure Statement</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Documents (All)</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Election Orders & Training</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">RTI Related</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Recruitment Related</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Orders</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Circular</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Act & Rules</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Annual Progress Report</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Notification</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Policy</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Guidelines</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Employees Related</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Reports</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Covid-19 Orders</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Roster Register</a></li>
              </ul>
            </li>

            {/* Citizen Corner */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Citizen Corner <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">E-Pledge</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">NFSA Application Form</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Download Admit Cards</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Election Department</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Smart City</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Farmer Registry Camp</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Download Forms</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Services</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Important Websites / Portals</a></li>
              </ul>
            </li>
          </ul>

          {/* CM Profile — koi z-index mat do */}
          <div className="hidden xl:flex items-center text-right pr-4">
            <img
              src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
              alt="Shri BhajanLal Sharma"
              className="h-18 w-18 rounded-full object-cover"
            />
            <div>
              <p className="m-0 font-medium text-sm">Shri BhajanLal Sharma</p>
              <small className="text-gray-800">Hon'ble Chief Minister</small>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;