/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";  // Import useTranslation hook

const NewsSection = () => {
  const { t } = useTranslation();  // Initialize translation hook

  const pressReleases = [
    {
      date: "02 Sep, 2025",
      title: "PM inaugurates the 'Digital Bharat' campaign to boost AI adoption in governance."
    },
    {
      date: "28 Aug, 2025", 
      title: "Union Cabinet approves new Startup Support Scheme for emerging entrepreneurs."
    },
    {
      date: "21 Aug, 2025",
      title: "India signs MoU with Japan on renewable energy cooperation."
    },
    {
      date: "15 Aug, 2025",
      title: "Independence Day 2025: Government launches National Innovation Mission."
    }
  ];

  const quizzes = [
    {
      title: "National Space Day Quiz 2025 (Telugu)",
      image: "/quiz-telugu.jpg",
      deadline: "20/09/2025 18:15 (IST)",
      prize: true
    },
    {
      title: "National Space Day Quiz 2025 (Tamil)",
      image: "/quiz-tamil.jpg", 
      deadline: "20/09/2025 18:15 (IST)",
      prize: true
    },
    {
      title: "National Space Day Quiz 2025 (Punjabi)",
      image: "/quiz-punjabi.jpg",
      deadline: "20/09/2025 18:15 (IST)", 
      prize: true
    },
    {
      title: "National Space Day Quiz 2025 (Hindi)",
      image: "/quiz-hindi.jpg",
      deadline: "20/09/2025 18:15 (IST)",
      prize: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Press Releases Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#2E5984]">{t('newsSection.pressReleasesTitle')}</h2>
              <button className="text-[#D2737D] font-semibold hover:text-[#2E5984] transition-colors duration-300">
                {t('newsSection.viewAll')}
              </button>
            </div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 hover:bg-[#F4F3EE] rounded-lg p-6 transition-all duration-300 border-l-4 border-[#D2737D] group-hover:border-[#2E5984]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#D2737D] rounded-lg flex items-center justify-center group-hover:bg-[#2E5984] transition-colors duration-300">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#2E5984] transition-colors duration-300">
                          {release.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#D2737D] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular News/Quizzes Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#2E5984]">{t('newsSection.mostPopularNews')}</h2>
              <button className="text-[#D2737D] font-semibold hover:text-[#2E5984] transition-colors duration-300">
                {t('newsSection.viewAll')}
              </button>
            </div>
            
            <p className="text-gray-600 mb-8">{t('newsSection.lookOutForThese')}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {quizzes.map((quiz, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-[#D2737D]/20">
                    {/* Quiz Image Placeholder */}
                    <div className="h-32 bg-gradient-to-r from-[#D2737D] to-[#F4A261] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-white font-bold text-sm text-center px-4">
                          {quiz.title}
                        </h4>
                      </div>
                      {quiz.prize && (
                        <div className="absolute top-2 right-2 bg-[#F4A261] text-[#2E5984] px-2 py-1 rounded text-xs font-bold">
                          {t('newsSection.quizPrize')}
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Last Date: {quiz.deadline}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#2E5984] font-semibold text-sm">{t('newsSection.activeStatus')}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#D2737D] group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
