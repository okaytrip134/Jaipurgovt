import React from "react";
import backimg from "../../../public/bg-noise.png";
import im from "../../../public/ack.jpg";

const importantLinks = [
  {
    title: "NFSA Application Form",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://food.rajasthan.gov.in/NFSA_Application_Form",
  },
  {
    title: "Election Department",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://ceorajasthan.nic.in/",
  },
  {
    title: "Zila Darshan Pustika",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://jaipur.rajasthan.gov.in/zila-darshan",
  },
  {
    title: "Success Story",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://jaipur.rajasthan.gov.in/success-stories",
  },
  {
    title: "Tourist Places",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://tourism.rajasthan.gov.in/jaipur",
  },
  {
    title: "Business Opportunity",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://invest.rajasthan.gov.in/",
  },
  {
    title: "Awards",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://jaipur.rajasthan.gov.in/awards",
  },
  {
    title: "Services",
    img: "https://cdn-icons-png.flaticon.com/512/15876/15876463.png",
    url: "https://sso.rajasthan.gov.in/",
  },
];

export default function ImportantLinks() {
  return (
    <div
      className="w-full py-10"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "left top",
        backgroundColor: "#fff",
        backgroundAttachment: "fixed",
        backgroundSize: "auto",
      }}
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        __________Important Links__________
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {importantLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center text-center w-45 h-44 p-3 rounded-lg shadow-sm hover:shadow-lg transition-transform hover:scale-105 bg-cover bg-center"
              style={{
                backgroundImage: `url(${im})`,
              }}
            >
              <img
                src={link.img}
                alt={link.title}
                className="w-20 h-20 mx-auto mb-2"
              />
              <span className="text-lg font-medium text-gray-800 hover:text-blue-600 break-words whitespace-normal leading-tight">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
