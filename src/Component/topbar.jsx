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

    {/* Desktop News Marquee */}
    <div className="hidden md:flex flex-1 mx-6 overflow-hidden">
<marquee
  behavior="scroll"
  direction="left"
  scrollamount="5"
  className="text-red-600 font-medium"
>
  📰 Latest News:&nbsp;&nbsp;&nbsp;
  27 Sep, 2025 जयपुर में विकास कार्यों की समीक्षा बैठक की अध्यक्षता मुख्यमंत्री भजनलाल शर्मा ने की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  27 Sep, 2025 मुख्यमंत्री भजनलाल शर्मा ने शहर में यातायात सुधार और स्वच्छता पर अधिकारियों को दिए निर्देश&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  26 Sep, 2025 मुख्यमंत्री भजनलाल शर्मा ने शिक्षा सुधार योजनाओं की प्रगति पर की समीक्षा बैठक&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  25 Sep, 2025 मुख्यमंत्री भजनलाल शर्मा ने जयपुर में स्वास्थ्य सेवाओं को सुदृढ़ बनाने के लिए नई योजनाओं की घोषणा की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  
  27 Sep, 2025 उपमुख्यमंत्री ने ग्रामीण विकास कार्यक्रमों की प्रगति की समीक्षा की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  26 Sep, 2025 उपमुख्यमंत्री ने जयपुर शहर में जल प्रबंधन परियोजनाओं का निरीक्षण किया&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  25 Sep, 2025 उपमुख्यमंत्री ने किसानों की समस्याओं पर अधिकारियों के साथ बैठक की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  24 Sep, 2025 उपमुख्यमंत्री ने महिला सुरक्षा को लेकर नए कदम उठाने की घोषणा की&nbsp;&nbsp;&nbsp;
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

  {/* Mobile News Marquee below Skip + Language */}
  <div className="md:hidden mt-1 w-full px-4">
<marquee
  behavior="scroll"
  direction="left"
  scrollamount="5"
  className="text-red-600 font-medium"
>
  📰 Latest News:&nbsp;&nbsp;&nbsp;
  27 Sep, 2025 जयपुर में विकास कार्यों की समीक्षा बैठक की अध्यक्षता मुख्यमंत्री भजनलाल शर्मा ने की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  27 Sep, 2025 मुख्यमंत्री भजनलाल शर्मा ने शहर में यातायात सुधार और स्वच्छता पर अधिकारियों को दिए निर्देश&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  26 Sep, 2025 मुख्यमंत्री भजनलाल शर्मा ने शिक्षा सुधार योजनाओं की प्रगति पर की समीक्षा बैठक&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  25 Sep, 2025 मुख्यमंत्री भजनलाल शर्मा ने जयपुर में स्वास्थ्य सेवाओं को सुदृढ़ बनाने के लिए नई योजनाओं की घोषणा की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  
  27 Sep, 2025 उपमुख्यमंत्री ने ग्रामीण विकास कार्यक्रमों की प्रगति की समीक्षा की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  26 Sep, 2025 उपमुख्यमंत्री ने जयपुर शहर में जल प्रबंधन परियोजनाओं का निरीक्षण किया&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  25 Sep, 2025 उपमुख्यमंत्री ने किसानों की समस्याओं पर अधिकारियों के साथ बैठक की&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  24 Sep, 2025 उपमुख्यमंत्री ने महिला सुरक्षा को लेकर नए कदम उठाने की घोषणा की&nbsp;&nbsp;&nbsp;
</marquee>

  </div>
</div>
    </>
  );
}

export default Topbar;

