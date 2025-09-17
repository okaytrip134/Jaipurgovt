import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const getYouTubeThumbnail = (url) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return "";
  }
};

const MediaSection = () => {
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=byI4u0HJlpw",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=byI4u0HJlpw"),
      channel: "Jaipur Rajasthan India",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=5v0QHpc91sg",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=5v0QHpc91sg"),
      channel: "Jaipur Rajasthan India",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=e9ZXNU1lPio",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=e9ZXNU1lPio"),
      channel: "Jaipur Rajasthan India",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=c6AYk4U6xaY",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=c6AYk4U6xaY"),
      channel: "Jaipur Rajasthan India",
    },
  ];

  // ✅ Only keep current video ID in state
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

  const currentVideo = videos.find((v) => v.id === currentVideoId);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-sky-700 underline">{t("media.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="md:col-span-2">
            <iframe
              key={currentVideo.url}
              src={currentVideo.url.replace("watch?v=", "embed/")}
              className="w-full md:h-[400px] lg:h-[500px]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* ✅ Title translated dynamically */}
            <h3 className="text-lg font-semibold mt-4">
              {t(`media.videos.${currentVideo.id}`)}
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={currentVideo.thumbnail}
                alt="thumb"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">{currentVideo.channel}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("media.suggested")}</h4>
            <div className="grid grid-cols-1 gap-4">
              {videos
                .filter((v) => v.id !== currentVideo.id)
                .map((v) => (
                  <div
                    key={v.id}
                    className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => setCurrentVideoId(v.id)}
                  >
                    <img
                      src={v.thumbnail}
                      alt={t(`media.videos.${v.id}`)}
                      className="w-50 h-32 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-sm font-medium">{t(`media.videos.${v.id}`)}</p>
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
