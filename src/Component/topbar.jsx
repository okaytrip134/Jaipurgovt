import React, { useState } from 'react';
import { Globe, Search, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="w-full bg-white text-sm border-b">
        <div className="max-w-auto mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          {/* Left side */}
          <div className="flex flex-wrap gap-4 items-center text-gray-700">
            <a href="#SkipContent" className="hover:text-blue-600">
              ⏭ Skip To Main Content
            </a>
          </div>

          {/* News Marquee */}
          <div className="flex-1 mx-6 overflow-hidden">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              className="text-red-600 font-medium"
            >
              📰 Latest News: 3 Sep, 2025 सतलुज नदी के रसायनयुक्त पानी की रोकथाम के लिए किये जा रहे हैं हर संभव प्रयास - जन स्वास्थ्य अभियांत्रिकी मंत्री | |
              3 Sep, 2025 अंता विधानसभा उप चुनाव की तैयारियां शुरू- मतदाता सूचियों के विशेष संक्षिप्त पुनरीक्षण कार्यक्रम को लेकर राजनैतिक दलों के साथ बैठक आयोजित
            </marquee>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Language Switch */}
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Globe size={16} />
                <span>{t("lang")}</span>
                <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                  >
                    {t("english")}
                  </button>
                  <button
                    onClick={() => changeLanguage("hi")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                  >
                    {t("hindi")}
                  </button>
                  {/* Add other languages similarly */}
                </div>
              )}
            </div>

            {/* Font Resize */}
            {/* <div className="flex gap-2">
              <button className="cursor-pointer hover:text-blue-600">A+</button>
              <button className="cursor-pointer hover:text-blue-600">A-</button>
              <button className="cursor-pointer hover:text-blue-600">A</button>
            </div> */}

            {/* Theme Buttons */}
            {/* <div className="flex gap-2">
              <button className="w-4 h-4 bg-gray-800 rounded-full"></button>
              <button className="w-4 h-4 bg-blue-500 rounded-full"></button>
              <button className="w-4 h-4 bg-yellow-500 rounded-full"></button>
            </div> */}

            {/* Search */}
            <form className="hidden md:flex items-center border rounded-full px-1 py-1">
              <input
                type="text"
                placeholder={t("search_placeholder")}
                className="outline-none px-1 py-0.5 text-sm"
              />
              <button type="submit">
                <Search size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;