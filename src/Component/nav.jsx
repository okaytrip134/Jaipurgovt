import React from "react";
import {
  Globe,
  ArrowDownRight,
  Search,
  ChevronDown,
  House,
  List,
} from "lucide-react";

import "./nav.css";

import Topbar from './topbar'

function Navbar() {
  return (
  
  <header className="w-full">
    <Topbar/>
      {/* ---------- Navbar ---------- */}
      <nav className="w-full border-b sticky top-0 z-2">
        <div className="max-w-full mx-auto flex items-center justify-between px-0 py-3 navbar-bg">
          {/* Logo fully left */}
          <a href="/" className="flex items-center pl-4">
            <img
              src="https://indiapost.gov.in/images/home/ashok-thumb-logo.svg"
              alt="Gov. of Rajasthan"
              className="h-16"
            />
          </a>

          {/* Mobile toggle */}
          <button className="xl:hidden p-2 flex-shrink-0">
            <List size={24} />
          </button>

          {/* Nav links */}
          <ul className="hidden xl:flex flex-1 justify-center  text-black font-medium gap-6 md:gap-8 lg:gap-12 ">
            <li>
              <a href="/" className="flex items-center gap-1 hover:text-blue-600">
                Home
              </a>
            </li>

            {/* Dropdown with smooth fade-up */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Government <ChevronDown size={16} />
              </span>

              <ul
                className="
                  absolute left-1/2 transform -translate-x-1/2 mt-1 w-50 bg-white rounded shadow-lg
                  opacity-0 invisible translate-y-2 pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                  transition-all duration-300 ease-out will-change-transform
                  ring-1 ring-black/5
                "
              >
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Governor
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Chief Minister
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Cabinet Ministers
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Sectors <ChevronDown size={16} />
              </span>

              <ul
                className="
                  absolute left-1/2 transform -translate-x-1/2 mt-1 w-50 bg-white rounded shadow-lg
                  opacity-0 invisible translate-y-2 pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                  transition-all duration-300 ease-out will-change-transform
                  ring-1 ring-black/5
                "
              >
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Governor
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Chief Minister
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Cabinet Ministers
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Residents <ChevronDown size={16} />
              </span>

              <ul
                className="
                  absolute left-1/2 transform -translate-x-1/2 mt-1 w-50 bg-white rounded shadow-lg
                  opacity-0 invisible translate-y-2 pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                  transition-all duration-300 ease-out will-change-transform
                  ring-1 ring-black/5
                "
              >
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Governor
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Chief Minister
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Cabinet Ministers
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                Visiting <ChevronDown size={16} />
              </span>

              <ul
                className="
                  absolute left-1/2 transform -translate-x-1/2 mt-1 w-50 bg-white rounded shadow-lg
                  opacity-0 invisible translate-y-2 pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                  transition-all duration-300 ease-out will-change-transform
                  ring-1 ring-black/5
                "
              >
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Jaipur Tourism
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Chief Minister
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-300">
                    Cabinet Ministers
                  </a>
                </li>
              </ul>
            </li>

            <li className="cursor-pointer hover:text-blue-600">
              About Rajasthan
            </li>
          </ul>

          {/* CM Profile */}
          <div className="hidden xl:flex items-center gap-2 text-right pr-4">
            <img
              src="https://jankalyanFile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
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
