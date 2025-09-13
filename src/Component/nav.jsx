/* eslint-disable no-unused-vars */
import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./nav.css";
import Topbar from "./topbar";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="w-full hidden md:block">
      <Topbar />

      <nav className="w-full border-b sticky top-0 z-30 isolate">
        <div className="max-w-full mx-auto flex items-center justify-between px-0 py-3 navbar-bg">
          {/* Logo */}
          <a href="/" className="flex items-center pl-4" aria-label={t("home")}>
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
                {t("media_gallery")} <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("zila_darshan_pustika")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("poster")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("video_awareness_material")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("audio_jingles")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("advertisement")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("district_photo_gallery")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("awards")}</a></li>
              </ul>
            </li>

            {/* Documents */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                {t("documents")} <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("expenditure_statement")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("documents_all")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("election_orders_training")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("rti_related")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("recruitment_related")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("orders")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("circular")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("act_rules")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("annual_progress_report")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("notification")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("policy")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("guidelines")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("employees_related")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("reports")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("covid_19_orders")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("roster_register")}</a></li>
              </ul>
            </li>

            {/* Citizen Corner */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-blue-600">
                {t("citizen_corner")} <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu z-[9999]">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("e_pledge")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("nfsa_application_form")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("download_admit_cards")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("election_department")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("smart_city")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("farmer_registry_camp")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("download_forms")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("services")}</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">{t("important_websites_portals")}</a></li>
              </ul>
            </li>
          </ul>

          {/* Right cluster: CM + Language Switcher */}
          <div className="hidden xl:flex items-center gap-4 text-right pr-4">
            <img
              src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
              alt={t("cm_name")}
              className="h-18 w-18 rounded-full object-cover"
            />
            <div>
              <p className="m-0 font-medium text-sm">{t("cm_name")}</p>
              <small className="text-gray-800">{t("cm_title")}</small>
            </div>

            {/* Language Switcher */}
            <label htmlFor="lang-switch" className="sr-only">
              {t("lang")}
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
