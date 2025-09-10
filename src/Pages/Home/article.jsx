import React from "react";
import Card from "../../Component/card";

const Article = () => {
  return (
    <section className="w-full px-6 sm:px-8 py-9 z-40 mt-2 bg-white/70">
      {/* Section Eyebrow + Title */}
      <div className="max-w-[1400px] mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
          Deep Insights
        </span>

        <div className="mt-4 flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Insights of Jaipur’s
          </h2>

          <a
            href="#"
            className="hidden sm:inline-block text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            View all
          </a>
        </div>

        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
      </div>

      {/* Grid: Left feature + Right list */}
      <div className="max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Featured Article (custom overlay card) */}
        <article className="group relative overflow-hidden rounded-2xl shadow-md">
          <img
            src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/S526.jpg"
            alt="Jaipur hand block print workshop"
            className="h-80 sm:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block text-[11px] tracking-wide uppercase bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">
                Tourism
              </span>
              <span className="inline-block text-[11px] tracking-wide uppercase bg-white/10 text-white px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">
                Jaipur
              </span>
            </div>

            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-white leading-snug">
              Discover the Hideen Jaipur Tourism Places experience
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://www.tourism.rajasthan.gov.in/jaipur.html" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-white transition"
              >
                Read More
              </a>
              <span className="text-xs text-white/80">6 min read</span>
            </div>
          </div>
        </article>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-6">
          <div className="group rounded-2xl border border-gray-100 p-3 hover:shadow-md transition bg-white">
            <Card
              image="https://maverickbird.com/wp-content/uploads/2019/05/29064314_2088915684458801_6697876526559831881_o.jpg"
              title="Jaipur hand block print: a hands-on experience"
              className="w-full h-44 rounded-xl object-cover"
              description="Unveiling the enigmatic world of giant pandas and conservation challenges"
              tag="Craft & Culture"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">4 min read</span>
              <a
                href="#"
                className="text-sm font-semibold text-gray-800 hover:text-orange-600"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-gray-100 p-3 hover:shadow-md transition bg-white">
            <Card
              image="https://i0.wp.com/travelshoebum.com/wp-content/uploads/2020/09/IMG_20200718_212254_280.jpg?fit=1200%2C900&ssl=1"
              title="Crafted in Jaipur: The Artisans Behind Pots, Clayware & More"
              className="w-full h-44 rounded-xl object-cover"
              description="Fauna & Flora has been using the collective knowledge and experience to protect nature."
              tag="Artisans"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">5 min read</span>
              <a
                href="#"
                className="text-sm font-semibold text-gray-800 hover:text-orange-600"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile “view all” link */}
      <div className="max-w-[1400px] mx-auto mt-8 sm:hidden">
        <a
          href="#"
          className="inline-block text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          View all
        </a>
      </div>
    </section>
  );
};

export default Article;
