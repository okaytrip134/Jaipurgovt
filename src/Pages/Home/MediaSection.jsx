import React, { useState } from "react";

const MediaSection = () => {
  const videos = [
    {
      id: 1,
      title: "From Villages to Japan | How Skill India Transformed Millions of Lives in Just 10 Years!",
      url: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/fromvillagestojapan.mp4",
      thumbnail: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/thumbnail/fromvillagestojapan.jpg",
      channel: "Jaipur rajsthan India",
    },
    {
      id: 2,
      title: "INSIDE India’s $500 Billion Tech Mission",
      url: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/billiontechmission.mp4",
      thumbnail: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/thumbnail/billiontechmission.jpg",
      channel: "Jaipur rajsthan India",
    },
    {
      id: 3,
      title: "How India Invests: Radhika Gupta on India's Financial Future",
      url: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/howindiainvestsmiddleclass.mp4",
      thumbnail: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/thumbnail/howindiainvestsmiddleclass.jpg",
      channel: "Jaipur rajsthan India",
    },
    {
      id: 4,
      title: "How the National Research Foundation Will Transform India's Research Landscape",
      url: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/howthenationalresearchlandscape.mp4",
      thumbnail: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/thumbnail/howthenationalresearchlandscape.jpg",
      channel: "Jaipur rajsthan India",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className="bg-amber-50 py-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-sky-700">Jaipur Media</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Main video player */}
          <div className="md:col-span-2">
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <video
                key={currentVideo.url} // force reload when url changes
                src={currentVideo.url}
                controls
                className="w-full h-[400px] bg-black"
              />
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
                      className="w-40 h-24 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-sm font-medium">{v.title}</p>
                      <p className="text-xs text-gray-500">{v.channel}</p>
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
