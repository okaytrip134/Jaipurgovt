import React from "react";

const InfoSection = () => {
  const pressReleases = [
    {
      date: "02 Sep, 2025",
      text: "PM inaugurates the ‘Digital Bharat’ campaign to boost AI adoption in governance.",
    },
    {
      date: "28 Aug, 2025",
      text: "Union Cabinet approves new Startup Support Scheme for emerging entrepreneurs.",
    },
    {
      date: "21 Aug, 2025",
      text: "India signs MoU with Japan on renewable energy cooperation.",
    },
    {
      date: "15 Aug, 2025",
      text: "Independence Day 2025: Government launches National Innovation Mission.",
    },
  ];

  const documents = [
    {
      date: "01 Sep, 2025",
      text: "Guidelines for State-level implementation of Clean Energy Policy.",
    },
    {
      date: "24 Aug, 2025",
      text: "Annual Report 2024–25: Ministry of Education.",
    },
    {
      date: "10 Aug, 2025",
      text: "Policy framework for National Cyber Security preparedness.",
    },
    {
      date: "30 Jul, 2025",
      text: "White Paper on Smart Cities and Urban Planning.",
    },
  ];

  const tenders = [
    {
      date: "29 Aug, 2025",
      text: "Tender for supply of electric buses under Green Mobility Project.",
    },
    {
      date: "20 Aug, 2025",
      text: "Procurement of solar panels for government buildings.",
    },
    {
      date: "11 Aug, 2025",
      text: "Bids invited for AI-based citizen grievance redressal system.",
    },
    {
      date: "01 Aug, 2025",
      text: "Tender for construction of rural health centres in Tier-2 cities.",
    },
  ];

  const Card = ({ title, color, items }) => (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className={`flex justify-between items-center px-5 py-3 ${color}`}>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <button className="bg-white text-gray-900 text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition">
          View All
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group border-b pb-3 last:border-0 hover:bg-gray-50 rounded-md px-2 transition"
          >
            <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-md">
              {item.date}
            </span>
            <p className="text-sm text-gray-800 mt-2 group-hover:text-blue-600 transition">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="relative py-16 px-6 md:px-12"
      style={{
        backgroundImage: "url('https://www.mygov.in/sites/all/themes/mygov/images/paralex-bg.png')", // 👈 apna background image path yaha do
        backgroundSize: "contain",
        backgroundPosition: "center", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-9">
        <Card title="Press Releases" color="bg-red-600" items={pressReleases} />
        <Card
          title="Government Documents"
          color="bg-indigo-600"
          items={documents}
        />
        <Card title="Tender" color="bg-purple-700" items={tenders} />
      </div>
    </section>
  );
};

export default InfoSection;
