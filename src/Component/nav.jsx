import React from "react";
import { ChevronDown, List } from "lucide-react";
import "./nav.css";
import Topbar from "./topbar";

function Navbar() {
  return (
    <header className="w-full">
      <Topbar />
      {/* ---------- Navbar ---------- */}
      <nav className="w-full border-b sticky top-0 z-20">
        <div className="max-w-full mx-auto flex items-center justify-between px-0 py-3 navbar-bg">
          {/* Logo fully left */}
          <a href="/" className="flex items-center pl-4">
            <img
              src="https://indiapost.gov.in/images/home/ashok-thumb-logo.svg"
              alt="Gov. of Jaipur"
              className="h-16"
            />
          </a>

          {/* Mobile toggle */}
          <button className="xl:hidden p-2 flex-shrink-0">
            <List size={24} />
          </button>

          {/* Nav links */}
          <ul className="hidden xl:flex flex-1 justify-center text-black font-medium gap-6 md:gap-8 lg:gap-12">
            {/* Home */}
            <li>
              <a href="/home/dptHome/37" className="flex items-center gap-1 hover:text-blue-600">
                Home
              </a>
            </li>

            {/* About Us */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                About Us <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Local Produce</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Culinary Delights</a></li>
                <li className="relative group cursor-pointer">
                  <span className="px-4 py-2 hover:bg-gray-300 flex justify-between items-center">
                    Administrative Hierarchy <ChevronDown size={14} />
                  </span>
                  {/* Add further nested items here if needed */}
                </li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Organization Chart</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">About District</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Location & Area</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Geographical & Physical Features</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">History</a></li>
              </ul>
            </li>

            {/* Contact Us */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Contact Us <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">District Administration</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">District Level Officers</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Block Level Officers</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Janaadhar Helpdesk</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Helpline</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">District War Room</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Right To Information</a></li>
              </ul>
            </li>

            {/* Business */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Business <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Business Opportunity</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Economy</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Infrastructure</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Special Economic Zones</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Supporting Institutions</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Tenders</a></li>
              </ul>
            </li>

            {/* Media Gallery */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Media Gallery <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Zila Darshan Pustika</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Poster</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Video-Awareness Material</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Audio Jingles</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Advertisement</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">District Photo Gallery</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Awards</a></li>
              </ul>
            </li>

            {/* Documents */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Documents <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Expenditure Statement</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Documents (All)</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Election Orders & Training</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">RTI Related</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Recruitment Related</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Orders</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Circular</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Act & Rules</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Annual Progress Report</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Notification</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Policy</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Guidelines</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Employees Related</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Reports</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Covid-19 Orders</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Roster Register</a></li>
              </ul>
            </li>

            {/* Citizen Corner */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Citizen Corner <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">E-Pledge</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">NFSA Application Form</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Download Admit Cards</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Election Department</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Smart City</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Farmer Registry Camp</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Download Forms</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Services</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-300">Important Websites / Portals</a></li>
              </ul>
            </li>
          </ul>

          {/* CM Profile */}
          <div className="hidden xl:flex items-center gap-2 text-right pr-4">
            <img
              src="https://jankalyanFile.Jaipur.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
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
