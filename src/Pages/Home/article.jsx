import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Card from "../../Component/card1";
import { ArrowRight } from "lucide-react";

const Article = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section className="w-full px-6 sm:px-8 py-9 z-40 mt-2 bg-white/70">
      {/* Section Eyebrow + Title */}
      <div className="max-w-[1400px] mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
          {t('article.deep_insights')}
        </span>

        <div className="mt-4 flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('article.insights_jaipur')}
          </h2>
          <button 
            className="text-[#D2737D] font-semibold hover:text-[#2E5984] transition-colors duration-300" 
            onClick={() => window.location.href = '#'}
          >
            {t('article.view_all')}
          </button>
        </div>

        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
      </div>

      {/* Grid: Left feature + Right list */}
      <div className="max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Featured Article (custom overlay card) */}
        <article className="group relative overflow-hidden rounded-2xl shadow-md">
          <img
            src="/tour.jpg"
            alt={t('article.jaipur_workshop')}
            className="h-80 sm:h-full w-full object-fill transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block text-[11px] tracking-wide uppercase bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">
                {t('article.tourism')}
              </span>
              <span className="inline-block text-[11px] tracking-wide uppercase bg-white/10 text-white px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">
                {t('article.jaipur')}
              </span>
            </div>

            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-white leading-snug">
              {t('article.discover_hidden_places')}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://www.tourism.rajasthan.gov.in/jaipur.html" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-white transition"
              >
                {t('article.read_more')}
              </a>
              <span className="text-xs text-white/80">6 min read</span>
            </div>
          </div>
        </article>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-6">
          <div className="group rounded-2xl border border-gray-200 p-3 hover:shadow-md bg-gray-50 transform transition-transform duration-500 hover:scale-[1.01]">
            <Card
              image="https://maverickbird.com/wp-content/uploads/2019/05/29064314_2088915684458801_6697876526559831881_o.jpg"
              title={t('article.hand_block_print_title')}
              className="w-full h-44 rounded-xl object-cover"
              description={t('article.hand_block_print_desc')}
              tag="Craft & Culture"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">4 min read</span>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D2737D] hover:text-gradient-to-r from-[#2E5984] to-[#D2737D] px-4 py-2 rounded-lg transition-all duration-300 group"
              >
                {t('article.read_more')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-gray-200 p-3 hover:shadow-md  bg-gray-50 transform transition-transform duration-500 hover:scale-[1.01]">
            <Card
              image="https://i0.wp.com/travelshoebum.com/wp-content/uploads/2020/09/IMG_20200718_212254_280.jpg?fit=1200%2C900&ssl=1"
              title={t('article.crafted_in_jaipur_title')}
              className="w-full h-44 rounded-xl object-cover"
              description={t('article.crafted_in_jaipur_desc')}
              tag="Artisans"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">5 min read</span>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D2737D] hover:text-gradient-to-r from-[#2E5984] to-[#D2737D] px-4 py-2 rounded-lg transition-all duration-300 group"
              >
                {t('article.read_more')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile “view all” link */}
      <div className="max-w-[1400px] mx-auto mt-8 sm:hidden">
        <button className="text-[#D2737D] font-semibold hover:text-[#2E5984] transition-colors duration-300" onClick={() => window.location.href = '#'}>
          {t('article.view_all')}
        </button>
      </div>
    </section>
  );
};

export default Article;
