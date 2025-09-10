import React from "react";

const importantLinks = [
  {
    title: "NFSA Application Form",
    img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://food.rajasthan.gov.in/NFSA_Application_Form",
  },
  {
    title: "Election Department",
    img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://ceorajasthan.nic.in/",
  },
  {
    title: "Zila Darshan Pustika",
       img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://jaipur.rajasthan.gov.in/zila-darshan",
  },
  {
    title: "Success Story",
    img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://jaipur.rajasthan.gov.in/success-stories",
  },
  {
    title: "Tourist Places",
    img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://tourism.rajasthan.gov.in/jaipur",
  },
  {
    title: "Business Opportunity",
       img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://invest.rajasthan.gov.in/",
  },
  {
    title: "Awards",
    img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://jaipur.rajasthan.gov.in/awards",
  },
  {
    title: "Services",
    img: "   https://cdn-icons-png.flaticon.com/512/15876/15876463.png ",
    url: "https://sso.rajasthan.gov.in/",
  },
];

export default function ImportantLinks() {
  return (
    <div className="w-full py-10"style={{ backgroundImage: 'url("../../../public/bg-noise.png")' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-center mb-20 text-gray-800">
         ___________Important Links____________
        </h2>

        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {importantLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center w-36 transition-transform hover:scale-105 shadow-lg  bg-[#f7f7f7] rounded-lg"
            >
              <img
                src={link.img}
                alt={link.title}
                className="w-26 h-26 mb-2 justify-center"
              />
              <span className="text-sm font-medium text-gray-700 hover:text-blue-600">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
