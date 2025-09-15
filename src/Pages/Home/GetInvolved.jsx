import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import data from "../../data/involvedPosts.json";
import Card from "../../Component/card";
import ResponsiveCardsCarousel from "../../Component/ResponsiveCardsCarousel";

function IconMasked({ src, alt = "", size = 32, color = "#6B7280" }) {
  if (!src) return null;
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    WebkitMask: `url(${src}) no-repeat center / contain`,
    mask: `url(${src}) no-repeat center / contain`,
    display: "inline-block",
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

function MobileTabsCarousel({ tabs, activeTab, setActiveTab, activeColor, inactiveColor }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    skipSnaps: false,
    inViewThreshold: 0.6,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const idx = Math.max(0, tabs.findIndex((t) => t.key === activeTab));
    emblaApi.scrollTo(idx, true);
  }, [activeTab, emblaApi, tabs]);

  return (
    <div className="relative md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-2 pr-2">
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-1/2 flex-shrink-0 relative p-4 flex flex-col items-center justify-center transition-all duration-300 rounded-xl focus:outline-none focus:ring focus:ring-offset hover:shadow-xl ${
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
                  size={28}
                  color={active ? activeColor : inactiveColor}
                />
                <p className="mt-2 text-sm font-semibold text-center">{tab.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous tabs"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 ml-1"
      >
        ◀
      </button>
      <button
        type="button"
        aria-label="Next tabs"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 mr-1"
      >
        ▶
      </button>
    </div>
  );
}

export default function GetInvolved() {
  const { t } = useTranslation();
  const tabs = data.tabs || [];
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.key || "do");

  const itemsByTab = useMemo(() => {
    const map = {};
    for (const item of data.items || []) {
      const k = item.categoryKey;
      if (!map[k]) map[k] = [];
      map[k].push(item);
    }
    return map;
  }, []);

  const activeColor = "#C46340";
  const inactiveColor = "#6B7280";

  const contentMeta = {
    do: {
      title: t("content.do.title"),
      subtitle: t("content.do.subtitle"),
    },
    blog: {
      title: t("content.blog.title"),
      subtitle: t("content.blog.subtitle"),
    },
    poll: {
      title: t("content.poll.title"),
      subtitle: t("content.poll.subtitle"),
    },
    campaign: {
      title: t("content.campaign.title"),
      subtitle: t("content.campaign.subtitle"),
    },
    podcast: {
      title: t("content.podcast.title"),
      subtitle: t("content.podcast.subtitle"),
    },
  };

  const visibleItems = itemsByTab[activeTab] || [];

  const itemsForCarousel = useMemo(
    () =>
      visibleItems.map((item) => ({
        image: item.image,
        title: item.title,
        description: item.description,
        tag: item.category,
        slug: item.slug,
      })),
    [visibleItems]
  );

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-600">{t("get_involved_title")}</h2>
        <p className="text-gray-600">{t("get_involved_subtitle")}</p>
      </div>

      {/* Tabs: Mobile carousel (2 per view) */}
      <MobileTabsCarousel
        tabs={tabs.map((tab) => ({
          ...tab,
          label: t(`${tab.label}`),
        }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />

      {/* Tabs: Desktop static grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 mb-12" role="tablist">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`bg-gray-50 relative p-4 flex flex-col items-center w-45 h-28 justify-center transition-all duration-300 rounded-xl focus:outline-none focus:ring focus:ring-offset hover:shadow-xl ${
                active
                  ? "border border-[#C46340] bg-orange-50 text-[#C46340] shadow-lg focus:ring-[#C46340]"
                  : "bg-gray-50 text-gray-500 shadow-lg hover:shadow-md focus:ring-gray-300"
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

      {/* Content */}
      <div className="mb-10 text-center">
        <h3 className="text-xl mb-4 font-bold text-gray-800">
          {contentMeta[activeTab]?.title}
        </h3>
        <p className="text-gray-500">{contentMeta[activeTab]?.subtitle}</p>
      </div>

      {/* Cards: Mobile carousel */}
      <div className="md:hidden">
        {itemsForCarousel.length ? (
          <ResponsiveCardsCarousel items={itemsForCarousel} interval={3000} />
        ) : (
          <div className="text-center text-sm text-gray-500">No items yet.</div>
        )}
      </div>

      {/* Cards: Desktop grid */}
      {activeTab === "CM Desk" ? (
        <div className="space-y-6">
          {visibleItems.map((item) => (
            <div key={item.id}>
              {/* CM Desk Table */}
              <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
                <tbody>
                  <tr>
                    <td className="border p-2 w-1/3 align-top">
                      <img
                        src={item.image}
                        alt="CM"
                        className="w-48 h-auto rounded-lg shadow"
                      />
                    </td>
                    <td className="border p-2 align-top">
                      <h3 className="text-xl font-bold mb-3 text-blue-700">
                        {t("involvedPosts.cmdesk.designation")}
                      </h3>
                      <table className="w-full">
                        <tbody>
                          {Object.entries(item.details).map(([key]) => (
                            <tr key={key}>
                              <td className="font-semibold border px-2 py-1 w-1/3">
                                {t(`involvedPosts.cmdesk.details.${key}`)}
                              </td>
                              <td className="border px-2 py-1">
                                {t(`involvedPosts.cmdesk.details.${key}`)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Deputy CMs */}
              <h3 className="text-lg font-semibold mt-6 mb-2">
                {t("involvedPosts.cmdesk.deputyChiefMinistersTitle", "Deputy Chief Ministers")}
              </h3>
              <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-2 w-1/3">
                      {t("involvedPosts.cmdesk.tableHeaders.image", "Image")}
                    </th>
                    <th className="border px-2 py-2 w-1/3">
                      {t("involvedPosts.cmdesk.tableHeaders.name", "Name")}
                    </th>
                    <th className="border px-2 py-2 w-1/3">
                      {t("involvedPosts.cmdesk.tableHeaders.designation", "Designation")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.deputyChiefMinisters.map((dep, i) => (
                    <tr key={i}>
                      <td className="border p-2 text-center">
                        <img
                          src={dep.image}
                          alt={dep.name}
                          className="w-35 h-40 object-cover rounded-full mx-auto"
                        />
                      </td>
                      <td className="border px-2 py-2 text-center">
                        {t(`involvedPosts.cmdesk.deputyChiefMinisters.${i}.name`)}
                      </td>
                      <td className="border px-2 py-2 text-center">
                        {t(`involvedPosts.cmdesk.deputyChiefMinisters.${i}.designation`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {visibleItems.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={t(`involvedPosts.items.${item.id}.title`)}
              description={t(`involvedPosts.items.${item.id}.excerpt`)}
              tag={item.category}
              slug={item.slug}
            />
          ))}
          {!visibleItems.length && (
            <div className="col-span-full text-center text-sm text-gray-500">
              {t("involvedPosts.noItems", "No items yet.")}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
