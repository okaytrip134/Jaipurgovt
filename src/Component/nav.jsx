import React from "react";
import {
  Globe,
  ArrowDownRight,
  Search,
  ChevronDown,
  House,
  List,
  X,
} from "lucide-react";

import "./nav.css";

function Navbar() {
  return (
    <header className="w-full shadow bg-white">
      {/* ---------- Topbar ---------- */}
      <div className="w-full bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          {/* Left side */}
          <div className="flex flex-wrap gap-4 items-center text-gray-700">
            <a href="#SkipContent" className="hover:text-blue-600">
              ⏭ Skip To Main Content
            </a>
            <a
              href="https://sso.rajasthan.gov.in/signin"
              target="_blank"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Globe size={16} /> SSO Sign In
            </a>
            <a
              href="https://emitra.rajasthan.gov.in/"
              target="_blank"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <ArrowDownRight size={16} /> Avail Services
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Language Switch */}
            <div className="flex gap-2">
              <a className="font-semibold text-blue-600 cursor-pointer">English</a>
              <a className="cursor-pointer hover:text-blue-600">हिन्दी</a>
            </div>

            {/* Font Resize */}
            <div className="flex gap-2">
              <a className="cursor-pointer hover:text-blue-600">A+</a>
              <a className="cursor-pointer hover:text-blue-600">A-</a>
              <a className="cursor-pointer hover:text-blue-600">A</a>
            </div>

            {/* Theme Buttons (dummy) */}
            <div className="flex gap-2">
              <button className="w-4 h-4 bg-gray-800 rounded-full"></button>
              <button className="w-4 h-4 bg-blue-500 rounded-full"></button>
              <button className="w-4 h-4 bg-yellow-500 rounded-full"></button>
            </div>

            {/* Search */}
            <form className="flex items-center border rounded px-2">
              <input
                type="text"
                placeholder="Search"
                className="outline-none px-1 py-0.5 text-sm"
              />
              <button type="submit">
                <Search size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ---------- Navbar ---------- */}
   <nav className="w-full border-b sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3  navbar-bg">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://rajasthan.gov.in/assets/images/raj-logo.png"
              alt="Gov. of Rajasthan"
              className="h-16"
            />
          </a>

          {/* Mobile toggle */}
          <button className="xl:hidden p-2">
            <List size={24} />
          </button>

          {/* Nav links */}
          <ul className="hidden xl:flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="/" className="flex items-center gap-1 hover:text-blue-600">
                <House size={18} />
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1">
                Government <ChevronDown size={16} />
              </span>
              {/* Dropdown */}
              <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg hidden group-hover:block w-48">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Governor
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Chief Minister
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Cabinet Ministers
                  </a>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">Sectors</li>
            <li className="cursor-pointer">Residents</li>
            <li className="cursor-pointer">Visiting</li>
            <li className="cursor-pointer">About Rajasthan</li>
          </ul>

          {/* CM Profile */}
          <div className="hidden xl:flex items-center gap-2 text-right">
            <img
              src="https://jankalyanFile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
              alt="Shri BhajanLal Sharma"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="m-0 font-medium text-sm">Shri BhajanLal Sharma</p>
              <small className="text-gray-500">Hon'ble Chief Minister</small>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
