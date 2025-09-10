import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import data from "../../data/involvedPosts.json";

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

export default function GetInvolved() {
  const tabs = data.tabs;
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.key || "do");

  const itemsByTab = useMemo(() => {
    const map = {};
    for (const item of data.items) {
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
      title: "Recent News & Events happend ",
      subtitle:
        "Find a variety of online & on ground skill-building tasks, activities & contests",
    },
    blog: {
      title: "Blog",
      subtitle:
        "Get an insight on citizen’s success stories, contest winner announcements, and positive news.",
    },
    poll: {
      title: "Polls/Surveys",
      subtitle: "Share your opinion to help shape better policy.",
    },
    campaign: {
      title: "Campaigns",
      subtitle: "Participate and spread the word.",
    },
    podcast: {
      title: "Podcast",
      subtitle: "Listen to stories and updates.",
    },
  };

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-600">GET INVOLVED</h2>
        <p className="text-gray-600">
          Participate in nation-building activities
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-12 mb-12" role="tablist">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative p-4 flex flex-col items-center w-45 h-28 justify-center transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                active
                  ? "border-0 border-[#C46340] bg-orange-50 text-[#C46340] shadow-xl focus:ring-[#C46340]"
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
              <p className="mt-2 text-sm font-semibold text-center">
                {tab.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Content header */}
      <div className="mb-10 text-center">
        <h3 className="text-xl mb-4 font-bold text-gray-800">
          {contentMeta[activeTab]?.title}
        </h3>
        <p className="text-gray-500">{contentMeta[activeTab]?.subtitle}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {(itemsByTab[activeTab] || []).map((item) => (
          <article
            key={item.id}
            className="h-full flex flex-col rounded-2xl bg-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/9] w-full bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-2 flex flex-col flex-1">
              <h3 className="text-sm text-gray-700 font-medium leading-6 line-clamp-2 min-h-[48px]">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                {item.excerpt}
              </p>

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
    </section>
  );
}
