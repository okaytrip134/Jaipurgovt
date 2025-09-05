import React from 'react'
import {
  Globe,
  Search,
} from "lucide-react";
import "./nav.css";
const Topbar = () => {
  return (
    <>
      {/* ---------- Topbar ---------- */}
      <div className="w-full bg-white text-sm border-b">
        <div className="max-w-auto mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          {/* Left side */}
          <div className="flex flex-wrap gap-4 items-center text-gray-700">
            <a href="#SkipContent" className="hover:text-blue-600">
              ⏭ Skip To Main Content
            </a>
            {/* <a
              href="https://emitra.Jaipur.gov.in/"
              target="_blank"
              className="flex items-center gap-1 hover:text-blue-600"
              rel="noreferrer"
            >
              <ArrowDownRight size={16} /> Avail Services
            </a> */}
          </div>

          {/* --------- News Marquee --------- */}
          <div className="flex-1 mx-6 overflow-hidden">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              className="text-red-600 font-medium"
            >
              📰 Latest News: 3 Sep, 2025	सतलुज नदी के रसायनयुक्त पानी की रोकथाम के लिए किये जा रहे हैं हर संभव प्रयास - जन स्वास्थ्य अभियांत्रिकी मंत्री | |
              3 Sep, 2025	अंता विधानसभा उप चुनाव की तैयारियां शुरू- मतदाता सूचियों के विशेष संक्षिप्त पुनरीक्षण कार्यक्रम को लेकर राजनैतिक दलों के साथ बैठक आयोजित
            </marquee>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Language Switch */}
            <div className="flex gap-2 relative group">
              <a
                href="javascript:void(0)"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Globe size={16} /> Lang
              </a>

              {/* Dropdown */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 dropdown-menu
      w-72 bg-white border rounded shadow-lg z-50
      opacity-0 invisible translate-y-2 pointer-events-none"
              >
                <ul className="grid grid-cols-2 gap-2 p-3 text-sm">
                  <li>
                    <a
                      href="https://www.mygov.in/"
                      className="block px-3 py-2 bg-blue-100 hover:bg-blue-200 rounded text-center"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--11b3cgab9b4bm5d.xn--h2brj9c/hi/"
                      className="block px-3 py-2 bg-green-100 hover:bg-green-200 rounded text-center"
                    >
                      हिन्दी
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--p5bj3d4cc1c9scc.xn--45br5cyl/"
                      className="block px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded text-center"
                    >
                      অসমীয়া
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--p5b3cgab9b4be4e.xn--45brj9c/"
                      className="block px-3 py-2 bg-pink-100 hover:bg-pink-200 rounded text-center"
                    >
                      বাংলা
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--0dc3cgab9b4bm5d.xn--gecrj9c/"
                      className="block px-3 py-2 bg-purple-100 hover:bg-purple-200 rounded text-center"
                    >
                      ગુજરાતી
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--11b3cgab9b4bm5d.xn--h2brj9c/kn/"
                      className="block px-3 py-2 bg-orange-100 hover:bg-orange-200 rounded text-center"
                    >
                      ಕನ್ನಡ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--11b3cgab9b4bm5d.xn--h2brj9c/ml/"
                      className="block px-3 py-2 bg-red-100 hover:bg-red-200 rounded text-center"
                    >
                      മലയാളം
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--11bp4cjb9b0be1f.xn--h2brj9c/"
                      className="block px-3 py-2 bg-indigo-100 hover:bg-indigo-200 rounded text-center"
                    >
                      मराठी
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--ohc3cgab9b4be4e.xn--3hcrj9c/"
                      className="block px-3 py-2 bg-teal-100 hover:bg-teal-200 rounded text-center"
                    >
                      ଓଡ଼ିଆ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--d9b3cgab9b4bm5d.xn--s9brj9c/"
                      className="block px-3 py-2 bg-lime-100 hover:bg-lime-200 rounded text-center"
                    >
                      ਪੰਜਾਬੀ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--11b3cgab9b4bm5d.xn--h2brj9c/ta/"
                      className="block px-3 py-2 bg-cyan-100 hover:bg-cyan-200 rounded text-center"
                    >
                      தமிழ்
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://xn--zoc3cgab9b4be4e2cd.xn--fpcrj9c3d/"
                      className="block px-3 py-2 bg-rose-100 hover:bg-rose-200 rounded text-center"
                    >
                      తెలుగు
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            {/* Font Resize */}
            <div className="flex gap-2">
              <a className="cursor-pointer hover:text-blue-600">A+</a>
              <a className="cursor-pointer hover:text-blue-600">A-</a>
              <a className="cursor-pointer hover:text-blue-600">A</a>
            </div>

            {/* Theme Buttons */}
            <div className="flex gap-2">
              <button className="w-4 h-4 bg-gray-800 rounded-full"></button>
              <button className="w-4 h-4 bg-blue-500 rounded-full"></button>
              <button className="w-4 h-4 bg-yellow-500 rounded-full"></button>
            </div>

            {/* Search */}
            <form className="flex items-center border searchop rounded-2xl px-2">
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
    </>
  )
}

export default Topbar;