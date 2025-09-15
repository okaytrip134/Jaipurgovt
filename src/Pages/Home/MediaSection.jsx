import React, { useState } from "react";

// ✅ Helper function must be defined
const getYouTubeThumbnail = (url) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return "";
  }
};

const MediaSection = () => {
  const videos = [
    {
      id: 1,
      title: "From Villages to Japan",
      url: "https://www.youtube.com/watch?v=byI4u0HJlpw",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=byI4u0HJlpw"),
      channel: "Jaipur Rajasthan India",
    },
    {
      id: 2,
      title: "INSIDE India’s $500 Billion Tech Mission",
      url: "https://www.youtube.com/watch?v=5v0QHpc91sg",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=5v0QHpc91sg"),
      channel: "Jaipur Rajasthan India",
    },
    {
      id: 3,
      title: "How India Invests",
      url: "https://www.youtube.com/watch?v=e9ZXNU1lPio",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=e9ZXNU1lPio"),
      channel: "Jaipur Rajasthan India",
    },
    {
      id: 4,
      title: "National Research Foundation",
      url: "https://www.youtube.com/watch?v=c6AYk4U6xaY",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=c6AYk4U6xaY"),
      channel: "Jaipur Rajasthan India",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className=" mix-blend-overlay inset-0 py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-sky-700 underline">Jaipur News Media</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Main video player */}
          <div className="md:col-span-2">
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              {/* ❌ YouTube URLs don't play in <video>, need iframe */}
              <iframe
                key={currentVideo.url}
                src={currentVideo.url.replace("watch?v=", "embed/")}
                className="w-full  md:h-[400px] lg:h-[500px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-lg font-semibold mt-4">{currentVideo.title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={currentVideo.thumbnail}
                alt="thumb"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">{currentVideo.channel}</span>
            </div>
          </div>

          {/* Suggested videos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suggested videos</h4>
            <div className="grid grid-cols-1 gap-4">
              {videos
                .filter((v) => v.id !== currentVideo.id)
                .map((v) => (
                  <div
                    key={v.id}
                    className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => setCurrentVideo(v)}
                  >
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-50 h-32 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-sm font-medium">{v.title}</p>
                      <p className="text-sm text-gray-500">{v.channel}</p>
                    </div>
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
