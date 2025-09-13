import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation

function Footer() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <footer className="relative bg-contain bg-center text-white py-8" style={{background: "var(--gradient-primary)"}}>
      {/* Black overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="mx-auto px-6 md:px-12 relative z-20">
        {/* Government Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://indiapost.gov.in/images/home/ashok-thumb-logo.svg"
              alt="Gov. of Jaipur"
              className="h-16 w-16 mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">{t('footer.government_of_jaipur')}</h3>
              <p className="text-gray-200">{t('footer.district_administration_portal')}</p>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-sm text-gray-200">
            {t('footer.portal_description')}
          </p>
        </div>

        {/* Main Footer Links - Full Navbar Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
          {/* About Us */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">{t('footer.about_us')}</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.local_produce')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.culinary_delights')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.administrative_hierarchy')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.organization_chart')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.about_district')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.location_area')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.geographical_features')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.history')}</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">{t('footer.contact_us')}</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.district_administration')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.district_officers')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.block_officers')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.janaadhar_helpdesk')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.helpline')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.district_war_room')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.rti')}</a></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">{t('footer.business')}</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.business_opportunity')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.economy')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.infrastructure')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.special_economic_zones')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.supporting_institutions')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.tenders')}</a></li>
            </ul>
          </div>

          {/* Media Gallery */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">{t('footer.media_gallery')}</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.zila_darshan_pustika')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.poster')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.video_awareness_material')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.audio_jingles')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.advertisement')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.district_photo_gallery')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.awards')}</a></li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">{t('footer.documents')}</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.expenditure_statement')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.documents_all')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.election_orders_training')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.rti_related')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.recruitment_related')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.orders')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.circular')}</a></li>
            </ul>
          </div>

          {/* Citizen Corner */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-yellow-300 border-b border-yellow-300 pb-1">{t('footer.citizen_corner')}</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.e_pledge')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.nfsa_application_form')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.download_admit_cards')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.election_department')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.smart_city')}</a></li>
              <li><a href="/" className="hover:text-blue-300 transition-colors">{t('footer.farmer_registry_camp')}</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="bg-black/30 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <FaPhone className="mr-2 text-yellow-300" size={16} />
              <span>{t('footer.helpline')}: 1077 | {t('footer.emergency')}: 100</span>
            </div>
            <div className="flex items-center justify-center">
              <FaEnvelope className="mr-2 text-yellow-300" size={16} />
              <span>collector@Jaipur.gov.in</span>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-yellow-300" size={16} />
              <span>{t('footer.district_office')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-300 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-200">
          <p className="mb-2 md:mb-0">{t('footer.copy_rights')}</p>
          <div className="flex space-x-4">
            <a href="/terms" className="hover:text-blue-300 transition-colors">{t('footer.terms_conditions')}</a>
            <a href="/privacy" className="hover:text-blue-300 transition-colors">{t('footer.privacy_policy')}</a>
            <a href="/disclaimer" className="hover:text-blue-300 transition-colors">{t('footer.disclaimer')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
