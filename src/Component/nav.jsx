/* eslint-disable no-unused-vars */
import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./nav.css";
import Topbar from "./topbar";

function Navbar() {
  const { t, i18n } = useTranslation();

  // Change language function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="w-full hidden md:block">
      <Topbar />

      <nav className="w-full border-b sticky top-0 z-30 isolate">
        <div className="max-w-full mx-auto flex items-center justify-between px-0 py-3 navbar-bg">
          {/* Logo */}
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
                {t("home")}
              </a>
            </li>

            {/* About Us */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                {t("about_us")} <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("local_produce")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("culinary_delights")}</a></li>
                <li className="relative group cursor-pointer">
                  <span className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                    {t("administrative_hierarchy")} <ChevronDown size={14} />
                  </span>
                  <ul className="dropdown-menu z-[10000]">
                    <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("sub_item_1")}</a></li>
                    <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("sub_item_2")}</a></li>
                  </ul>
                </li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("organization_chart")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("about_district")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("location_area")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("geographical_features")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("history")}</a></li>
              </ul>
            </li>

            {/* Contact Us */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                {t("contact_us")} <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("district_administration")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("district_officers")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("block_officers")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("janaadhar_helpdesk")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("helpline")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("district_war_room")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("rti")}</a></li>
              </ul>
            </li>

{/* Business */}
        <li className="relative group cursor-pointer">
          <span className="flex items-center gap-1 hover:text-blue-600">
            {t("business")} <ChevronDown size={16} />
          </span>
          <ul className="dropdown-menu z-[9999]">
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("business_opportunity")}</a></li>
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("economy")}</a></li>
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("infrastructure")}</a></li>
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("special_economic_zones")}</a></li>
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("supporting_institutions")}</a></li>
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("tenders")}</a></li>
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

          {/* CM Profile */}
          <div className="hidden xl:flex items-center text-right pr-4">
            <img
              src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
              alt="Shri BhajanLal Sharma"
              className="h-18 w-18 rounded-full object-cover"
            />
            <div>
              <p className="m-0 font-medium text-sm">{t("cm_name")}</p>
              <small className="text-gray-800">{t("cm_title")}</small>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
