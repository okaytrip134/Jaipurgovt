import { useState } from "react";

/**
 * Colorable icon from an external SVG file using CSS mask.
 * Works best with monochrome/solid-shape SVGs.
 */
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
  const tabs = [
    { key: "do", label: "Event In Jaipur", icon: "/Festival.svg" },
    { key: "poll", label: "POLL/SURVEY", icon: "/questionnaire.svg" },
    { key: "blog", label: "BLOG", icon: "/blog.svg" },
    { key: "campaign", label: "Places to Visit", icon: "/Places.svg" },
    { key: "podcast", label: "PODCAST", icon: "/podcast.svg" },
  ];

  const content = {
    do: {
      title: "Recent event happend in jaipur",
      subtitle:
        "Find a variety of online & on ground skill-building tasks, activities & contests",
      items: [
        {
          img: "https://static.pib.gov.in/WriteReadData/userfiles/image/WhatsAppImage2025-02-27at4.46.01PMFLZ3.jpeg",
          text: "Jaipur 3R Decadal Declaration to be adopted for enabling a transition to a resource-efficient, circular economy in Asia-Pacific countries",
        },
        {
          img: "https://indianexpress.com/wp-content/uploads/2023/12/PTI12_15_2023_000186A.jpg",
          text: "Prime Minister Narendra Modi being greeted by new Rajasthan Chief Minister Bhajan Lal Sharma during the latter's swearing-in ceremony, in Jaipur",
        },
        {
          img: "https://media.assettype.com/freepressjournal/2025-08-21/o9dofbve/1500x500-2.jpg?width=1200",
          text: "Rising Rajasthan 2025': State Gears Up For Global Investors Meet In December",
        },
        {
          img: "https://pbs.twimg.com/media/G0JmazPWUAAqcWp.jpg",
          text: "Rajasthan CM Bhajanlal Sharma flags off 162 new roadways buses in Jaipur",
        },
      ],
    },
    blog: {
      title: "Blog",
      subtitle:
        "Get an insight on the citizen’s success stories, contest’s winner announcements, positive news.",
      items: [
        {
          img: "/blog1.png",
          text:
            "Winner Announcement for Comic Story competition on Unani Medicine for Innovative Health Solutions",
        },
        {
          img: "/blog2.png",
          text:
            "Winner Announcement for Poem Competition on Unani Medicine for Innovative Health Solutions",
        },
        {
          img: "/blog3.png",
          text:
            "Winner Announcement for Poster Competition on Unani Medicine for Innovative Health Solutions",
        },
        {
          img: "/blog4.png",
          text: "Winner Announcement for Delhi Book Fair 2025 Quiz",
        },
      ],
    },
    poll: {
      title: "Polls/Surveys",
      subtitle: "Share your opinion to help shape better policy.",
      items: [],
    },
    campaign: {
      title: "Campaigns",
      subtitle: "Participate and spread the word.",
      items: [],
    },
    podcast: {
      title: "Podcast",
      subtitle: "Listen to stories and updates.",
      items: [],
    },
  };

  const [activeTab, setActiveTab] = useState("do");

  // Colors
  const activeColor = "#C46340"; // orange
  const inactiveColor = "#6B7280"; // gray-500

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto bg-[url('https://urban.rajasthan.gov.in/body_bg.96d9d8f9d5f8ab54.png')] bg-repeat bg-left-top">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-600">GET INVOLVED</h2>
        <p className="text-gray-900 mt-2">Participate in nation-building activities</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-12 mb-12" role="tablist">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative p-4 flex flex-col items-center w-45 h-28 justify-center transition-all duration-200 rounded-xl focus:outline  focus:ring-[${activeColor}] ${
                active
                  ? "border-2 border-orange-600 bg-orange-50 text-orange-600 shadow-lg"
                  : "bg-gray-50 text-gray-500 shadow-sm hover:shadow-md"
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
          {content[activeTab]?.title}
        </h3>
        <p className="text-gray-900">{content[activeTab]?.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content[activeTab]?.items?.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-52 object-cover  "
            />
            <div className="p-3">
              <p className="text-sm text-gray-700 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
        {!content[activeTab]?.items?.length && (
          <div className="col-span-full text-center text-sm text-gray-500">
            No items yet.
          </div>
        )}
      </div>
    </section>
  );
}