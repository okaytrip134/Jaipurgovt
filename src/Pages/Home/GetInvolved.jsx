import { useState } from "react";

export default function GetInvolved() {
  const tabs = [
    {
      key: "do",
      label: "Event In Jaipur",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    // {
    //   key: "discuss",
    //   label: "DISCUSS",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    //     </svg>
    //   ),
    // },
    {
      key: "poll",
      label: "POLL/SURVEY",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 114 0v6m-4 0h4m6 0a2 2 0 10-4 0h4z" />
        </svg>
      ),
    },
    {
      key: "blog",
      label: "BLOG",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h5l2-2h7a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    // {
    //   key: "talk",
    //   label: "TALK",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    //     </svg>
    //   ),
    // },
    // {
    //   key: "quiz",
    //   label: "QUIZ",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4m6 6H6a2 2 0 01-2-2V6a2 2 0 012-2h8l6 6v8a2 2 0 01-2 2z" />
    //     </svg>
    //   ),
    // },
    // {
    //   key: "mgprime",
    //   label: "MG PRIME",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    //     </svg>
    //   ),
    // },
    {
      key: "campaign",
      label: "CAMPAIGN",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m-6 0l-4.553 2.276A2 2 0 012 14.382V9.618a2 2 0 012.447-1.894L9 10m6 0L9 10m0 0V4m6 6v6" />
        </svg>
      ),
    },
    // {
    //   key: "pledge",
    //   label: "PLEDGE",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    //     </svg>
    //   ),
    // },
    {
      key: "podcast",
      label: "PODCAST",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
        </svg>
      ),
    },
  ];

  const content = {
    do: {
      title: "Do/Task",
      subtitle: "Find a variety of online & on ground skill-building tasks, activities & contests",
      items: [
        { img: "/contest1.png", text: "Artha Chitra – Online Poster Making Competition on Financial Literacy" },
        { img: "/contest2.png", text: "Logo Making Contest for the World’s Oldest Living City - Kashi" },
        { img: "/contest3.png", text: "Reel Making Contest for Engaging Youth in Emerging STI for Viksit Bharat" },
        { img: "/contest4.png", text: "Poster Making Contest on Emerging STI for National Priorities towards Viksit Bharat" },
      ],
    },
    blog: {
      title: "Blog",
      subtitle: "Get an insight on the citizen’s success stories, contest’s winner announcements, positive news.",
      items: [
        { img: "/blog1.png", text: "Winner Announcement for Comic Story competition on Unani Medicine for Innovative Health Solutions" },
        { img: "/blog2.png", text: "Winner Announcement for Poem Competition on Unani Medicine for Innovative Health Solutions" },
        { img: "/blog3.png", text: "Winner Announcement for Poster Competition on Unani Medicine for Innovative Health Solutions" },
        { img: "/blog4.png", text: "Winner Announcement for Delhi Book Fair 2025 Quiz" },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("do");

  return (
    <section className="py-10 px-6 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-600">GET INVOLVED</h2>
        <p className="text-gray-600">Participate in nation-building activities</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-12 mb-12">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`p-4 flex flex-col items-center cursor-pointer w-45 h-28 justify-center transition-all duration-200 rounded-xl
    ${activeTab === tab.key
                ? "border-2 border-orange-600 bg-orange-50 text-orange-600 shadow-lg"
                : "bg-gray-50 text-gray-500 shadow-sm hover:shadow-md"
              }`}
          >
            {tab.icon}
            <p className="mt-2 text-sm font-semibold text-center">{tab.label}</p>
          </div>

        ))}
      </div>

      {/* Content */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{content[activeTab]?.title}</h3>
        <p className="text-gray-500">{content[activeTab]?.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content[activeTab]?.items?.map((item, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img src={item.img} alt={item.text} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-700 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
