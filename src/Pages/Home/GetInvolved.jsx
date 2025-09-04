import { useState } from "react";

export default function GetInvolved() {
  const tabs = [
    { key: "do", label: "DO/TASK", icon: "/icons/do.png" },
    { key: "discuss", label: "DISCUSS", icon: "/icons/discuss.png" },
    { key: "poll", label: "POLL/SURVEY", icon: "/icons/poll.png" },
    { key: "blog", label: "BLOG", icon: "/icons/blog.png" },
    { key: "talk", label: "TALK", icon: "/icons/talk.png" },
    { key: "quiz", label: "QUIZ", icon: "/icons/quiz.png" },
    { key: "mgprime", label: "MG PRIME", icon: "/icons/mgprime.png" },
    { key: "campaign", label: "CAMPAIGN", icon: "/icons/campaign.png" },
    { key: "pledge", label: "PLEDGE", icon: "/icons/pledge.png" },
    { key: "podcast", label: "PODCAST", icon: "/icons/podcast.png" },
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
    // Add more tab data as required
  };

  const [activeTab, setActiveTab] = useState("do");

  return (
    <section className="py-10 px-6 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-600">GET INVOLVED</h2>
        <p className="text-gray-600">Participate in nation-building activities</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`p-4 shadow-xs flex flex-col items-center cursor-pointer w-28 h-28 justify-center transition-all duration-200 ${
              activeTab === tab.key ? "border-2 border-orange-600 bg-orange-50" : "bg-gray-50"
            }`}
          >
            <img src={tab.icon} alt={tab.label} className="w-8 h-8" />
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
