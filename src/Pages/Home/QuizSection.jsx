import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const quizzes = [
  {
    id: 1,
    title: "National Space Day Quiz 2025 (Telugu)",
    image: "/quiz-telugu.jpg",
    lastDate: "20/09/2025 18:15 (IST)",
    prize: "Cash Prize",
  },
  {
    id: 2,
    title: "National Space Day Quiz 2025 (Tamil)",
    image: "/quiz-tamil.jpg",
    lastDate: "20/09/2025 18:15 (IST)",
    prize: "Cash Prize",
  },
  {
    id: 3,
    title: "National Space Day Quiz 2025 (Punjabi)",
    image: "/quiz-punjabi.jpg",
    lastDate: "20/09/2025 18:15 (IST)",
    prize: "Cash Prize",
  },
  {
    id: 4,
    title: "National Space Day Quiz 2025 (Hindi)",
    image: "/quiz-hindi.jpg",
    lastDate: "20/09/2025 18:15 (IST)",
    prize: "Cash Prize",
  },
];

const QuizSection = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Most Popular News From Jaipur!
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              You may have to look out for these news.
            </p>
          </div>
          <button className="hidden md:block border border-gray-300 rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-100">
            View All
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {quizzes.map((quiz) => (
            <SwiperSlide key={quiz.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition m-7">
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {quiz.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Last Date: {quiz.lastDate}
                  </p>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    {quiz.prize} 🎁
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View All Button */}
        <div className="mt-6 text-center md:hidden">
          <button className="border border-gray-300 rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
