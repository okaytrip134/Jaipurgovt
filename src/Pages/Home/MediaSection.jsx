import React from "react";

const MediaSection = () => {
  const suggestedVideos = [
    {
      id: 1,
      thumbnail: "/videos/thumb1.jpg",
      title:
        "From Villages to Japan | How Skill India Transformed Millions of Lives",
    },
    {
      id: 2,
      thumbnail: "/videos/thumb2.jpg",
      title:
        "How India Invests: Radhika Gupta on India's Financial Future & the...",
    },
    {
      id: 3,
      thumbnail: "/videos/thumb3.jpg",
      title:
        "How the National Research Foundation (NRF) Will Transform Research...",
    },
    {
      id: 4,
      thumbnail: "/videos/thumb4.jpg",
      title:
        "EXCLUSIVE: Rishab Rikhiram Sharma on the power of Sitar, My First...",
    },
  ];

  return (
    <section className="bg-[#fff7ef] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-sky-700">
        MyGov Media
      </h2>
      <p className="text-gray-600 mb-6">
        Connecting citizens and government through the power of media
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Video Player */}
        <div className="md:col-span-2">
          <div className="w-full rounded-lg overflow-hidden shadow-md">
            <video
              src="/videos/main.mp4"
              controls
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Video Info */}
          <h3 className="text-lg font-semibold mt-4">
            INSIDE India’s $500 Billion Tech Mission: Micromax Founder Rahul Sharma on AI, Chips & Building Big
          </h3>
          <div className="flex items-center gap-3 mt-2">
            <img src="/logos/mygov.png" alt="MyGov" className="h-6" />
            <span className="text-sm text-gray-600">MyGov India ✔</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="px-4 py-2 bg-orange-200 rounded-lg">
              Explore More
            </button>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">
              Share
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">
              Download
            </button>
          </div>

          {/* Video Meta */}
          <p className="text-sm text-gray-500 mt-3">
            Video Size: 535.2 MB | Video Resolution: 1920x1080
          </p>
        </div>

        {/* Suggested Videos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Suggested videos</h4>
          <div className="grid grid-cols-1 gap-4">
            {suggestedVideos.map((video) => (
              <div key={video.id} className="flex gap-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-40 h-24 object-cover rounded-md"
                />
                <p className="text-sm text-gray-700">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MediaSection;
