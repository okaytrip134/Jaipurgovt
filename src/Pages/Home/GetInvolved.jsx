import React, { useState, useMemo } from "react";
import data from "../../data/involvedPosts.json";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Colorable icon via CSS mask. Keep your exact look intact. */
function IconMasked({ src, alt = "", size = 32, color = "#6B7280" }) {
  if (!src) return null;
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    WebkitMask: `url(${src}) no-repeat center / contain`,
    mask: `url(${src}) no-repeat center / contain`,
    display: "inline-block"
  };
  return (
    <span
      style={style}
      aria-hidden={alt === ""}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    />
  );
}

export default function GetInvolved() {
  const tabs = data.tabs; // [{key,label,icon}]
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.key || "do");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCardSlide, setCurrentCardSlide] = useState(0);

  // itemsByTab: { do: [..], blog: [..] ... }
  const itemsByTab = useMemo(() => {
    const map = {};
    for (const item of data.items) {
      const k = item.categoryKey;
      if (!map[k]) map[k] = [];
      map[k].push(item);
    }
    return map;
  }, []);

  // Reset card slide when tab changes
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentCardSlide(0);
  };

  // Colors (same as your design)
  const activeColor = "#C46340"; // orange
  const inactiveColor = "#6B7280"; // gray-500

  // Content meta (title/subtitle) per tab, so your existing text stays same
  const contentMeta = {
    do: {
      title: "Events happend in past",
      subtitle:
        "Find a variety of online & on ground skill-building tasks, activities & contests"
    },
    blog: {
      title: "Blog",
      subtitle:
        "Get an insight on the citizen's success stories, contest's winner announcements, positive news."
    },
    poll: {
      title: "Polls/Surveys",
      subtitle: "Share your opinion to help shape better policy."
    },
    campaign: {
      title: "Campaigns",
      subtitle: "Participate and spread the word."
    },
    podcast: {
      title: "Podcast",
      subtitle: "Listen to stories and updates."
    }
  };

  // Carousel navigation for tabs
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(tabs.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(tabs.length / 3)) % Math.ceil(tabs.length / 3));
  };

  // Carousel navigation for cards
  const activeItems = itemsByTab[activeTab] || [];
  const maxCardSlides = Math.max(0, activeItems.length - 1);

  const nextCardSlide = () => {
    setCurrentCardSlide((prev) => Math.min(prev + 1, maxCardSlides));
  };

  const prevCardSlide = () => {
    setCurrentCardSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-600">GET INVOLVED</h2>
        <p className="text-gray-600">Participate in nation-building activities</p>
      </div>

      {/* Desktop Tabs - Exactly same as before */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 mb-12" role="tablist">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
<<<<<<< HEAD
              onClick={() => setActiveTab(tab.key)}
              className={`relative p-4 flex flex-col items-center w-45 h-28 justify-center transition-all duration-200 rounded-xl focus:outline-none focus:ring focus:ring-offset ${
=======
              onClick={() => handleTabChange(tab.key)}
              className={`relative p-4 flex flex-col items-center w-45 h-28 justify-center transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
>>>>>>> 5cb0b6e68c5e15a7169af22c87b129ee1fa7d788
                active
                  ? "border border-[#C46340] bg-orange-50 text-[#C46340] shadow-lg focus:ring-[#C46340]"
                  : "bg-gray-50 text-gray-500 shadow-sm hover:shadow-md focus:ring-gray-300"
              }`}
              role="tab"
              aria-selected={active}
            >
              <IconMasked
                src={tab.icon}
                alt={tab.label}
                size={32}
                color={active ? activeColor : inactiveColor}
              />
              <p className="mt-2 text-sm font-semibold text-center">{tab.label}</p>
            </button>
          );
        })}
      </div>

      {/* Mobile Carousel Tabs */}
      <div className="md:hidden mb-12">
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(tabs.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-2 px-4">
                    {tabs.slice(slideIndex * 3, slideIndex * 3 + 3).map((tab) => {
                      const active = activeTab === tab.key;
                      return (
                        <button
                          key={tab.key}
                          onClick={() => handleTabChange(tab.key)}
                          className={`p-3 flex flex-col items-center justify-center h-20 transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                            active
                              ? "border-2 border-[#C46340] bg-orange-50 text-[#C46340] shadow-md focus:ring-[#C46340]"
                              : "bg-gray-50 text-gray-500 shadow-sm hover:shadow-md focus:ring-gray-300"
                          }`}
                          role="tab"
                          aria-selected={active}
                        >
                          <IconMasked
                            src={tab.icon}
                            alt={tab.label}
                            size={20}
                            color={active ? activeColor : inactiveColor}
                          />
                          <p className="mt-1 text-xs font-medium text-center leading-tight">
                            {tab.label}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {tabs.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={16} className="text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={16} className="text-gray-600" />
              </button>
            </>
          )}
        </div>

        {tabs.length > 3 && (
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(tabs.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#C46340]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mb-10 text-center">
        <h3 className="text-xl mb-4 font-bold text-gray-800">
          {contentMeta[activeTab]?.title}
        </h3>
        <p className="text-gray-500">{contentMeta[activeTab]?.subtitle}</p>
      </div>

<<<<<<< HEAD
      {/* Cards */}
{/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
  {(itemsByTab[activeTab] || []).map((item) => (
    <article
      key={item.id}
        className="h-full flex flex-col rounded-2xl bg-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Fixed aspect image wrapper so sab ki height same */}
      <div className="aspect-[4/3] w-full bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content area grows, button sticks to bottom */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title with fixed min-height so rows align */}
    <h3 className="text-sm text-gray-700 font-medium leading-6 line-clamp-2 px-2 rounded">
      {item.title}
    </h3>


        {/* Spacer pushes button down */}
        <div className="mt-auto pt-4">
          <Link
            to={`/involved/${item.slug}`}
            className="inline-block text-sm font-semibold text-[#C46340] border border-[#C46340] hover:bg-[#C46340] hover:text-white px-4 py-2 rounded-lg transition-colors"
=======
      {/* Cards - Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {(itemsByTab[activeTab] || []).map((item) => (
          <article
            key={item.id}
            className="h-full flex flex-col rounded-2xl bg-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
>>>>>>> 5cb0b6e68c5e15a7169af22c87b129ee1fa7d788
          >
            <div className="aspect-[16/9] w-full bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-sm text-gray-700 font-medium leading-6 line-clamp-3 min-h-[72px]">
                {item.title}
              </h3>

              <div className="mt-auto pt-4">
                <Link
                  to={`/involved/${item.slug}`}
                  className="inline-block text-sm font-semibold text-[#C46340] border border-[#C46340] hover:bg-[#C46340] hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}

        {!itemsByTab[activeTab]?.length && (
          <div className="col-span-full text-center text-sm text-gray-500">
            No items yet.
          </div>
        )}
      </div>

      {/* Cards - Mobile Carousel */}
      <div className="md:hidden">
        {activeItems.length > 0 ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCardSlide * 100}%)` }}
              >
                {activeItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-2">
                    <article className="h-full flex flex-col rounded-2xl bg-gray-200 overflow-hidden shadow-lg">
                      <div className="aspect-[16/9] w-full bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm text-gray-700 font-medium leading-6 line-clamp-3 min-h-[72px]">
                          {item.title}
                        </h3>

                        <div className="mt-auto pt-4">
                          <Link
                            to={`/involved/${item.slug}`}
                            className="inline-block text-sm font-semibold text-[#C46340] border border-[#C46340] hover:bg-[#C46340] hover:text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {activeItems.length > 1 && (
              <>
                <button
                  onClick={prevCardSlide}
                  disabled={currentCardSlide === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} className="text-gray-600" />
                </button>
                
                <button
                  onClick={nextCardSlide}
                  disabled={currentCardSlide === maxCardSlides}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center text-sm text-gray-500">
            No items yet.
          </div>
        )}

        {/* Card indicators for mobile */}
        {activeItems.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {activeItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentCardSlide === index ? 'bg-[#C46340]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}