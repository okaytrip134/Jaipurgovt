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
              className="flex flex-col items-center justify-center text-center w-45  h-44 p-3 rounded-lg shadow-sm hover:shadow-lg transition-transform hover:scale-105 bg-cover bg-center"
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



// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, FileText, Vote, MapPin, Award, Building, Briefcase, Settings } from "lucide-react";

// const ImportantLinks = () => {
//   const links = [
//     {
//       title: "NFSA Application Form",
//       icon: FileText,
//       url: "https://food.rajasthan.gov.in/NFSA_Application_Form",
//       color: "from-[#2E5984] to-[#264653]"
//     },
//     {
//       title: "Election Department", 
//       icon: Vote,
//       url: "https://ceorajasthan.nic.in/",
//       color: "from-[#D2737D] to-[#A8585A]"
//     },
//     {
//       title: "Zila Darshan Pustika",
//       icon: FileText,
//       url: "https://jaipur.rajasthan.gov.in/zila-darshan",
//       color: "from-[#F4A261] to-[#E76F51]"
//     },
//     {
//       title: "Success Story",
//       icon: Award, 
//       url: "https://jaipur.rajasthan.gov.in/success-stories",
//       color: "from-[#E9C46A] to-[#F4A261]"
//     },
//     {
//       title: "Tourist Places",
//       icon: MapPin,
//       url: "https://tourism.rajasthan.gov.in/jaipur",
//       color: "from-[#E6A47B] to-[#D2737D]"
//     },
//     {
//       title: "Business Opportunity", 
//       icon: Briefcase,
//       url: "https://invest.rajasthan.gov.in/",
//       color: "from-[#264653] to-[#2E5984]"
//     },
//     {
//       title: "Awards",
//       icon: Award,
//       url: "https://jaipur.rajasthan.gov.in/awards", 
//       color: "from-[#A8585A] to-[#D2737D]"
//     },
//     {
//       title: "Services",
//       icon: Settings,
//       url: "https://sso.rajasthan.gov.in/",
//       color: "from-[#E76F51] to-[#F4A261]"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-[#2E5984] to-[#D2737D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Important Links
//           </h2>
//           <div className="w-24 h-1 bg-[#F4A261] mx-auto rounded-full"></div>
//         </motion.div>

//         {/* Links Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {links.map((link, index) => (
//             <motion.a
//               key={index}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group block"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-white/40 h-full">
//                 {/* Icon */}
//                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} p-4 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
//                   <link.icon className="w-full h-full text-white" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-white text-lg font-semibold text-center mb-3 group-hover:text-[#F4A261] transition-colors duration-300">
//                   {link.title}
//                 </h3>

//                 {/* External Link Icon */}
//                 <div className="flex justify-center">
//                   <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
//                 </div>

//                 {/* Hover Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-white/80 text-lg mb-6">
//             Access all government services and stay connected with Jaipur's development
//           </p>
//           <motion.button 
//             className="bg-[#F4A261] text-[#2E5984] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#D2737D] transition-all duration-300 shadow-lg hover:shadow-xl"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore All Services
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ImportantLinks;