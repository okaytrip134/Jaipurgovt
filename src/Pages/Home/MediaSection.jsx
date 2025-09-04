import React, { useEffect, useMemo, useState } from "react";

const MediaSection = () => {
  // Put all URLs here and memoize so the reference won't change each render
  const videos = useMemo(
    () => [
      { id: 1, url: "https://www.youtube.com/live/fMsD_qevmmQ?si=BKBr_smAM1W7eNLq" },
      { id: 2, url: "https://www.youtube.com/live/kC6MMxNdsGQ?si=pyjB9D7epHY66PmX" },
      { id: 3, url: "https://www.youtube.com/live/fMsD_qevmmQ?si=BKBr_smAM1W7eNLq" },
      { id: 4, url: "https://www.youtube.com/live/i4MiCcXHeUM?si=K8ZluO-Uf74xVOtB" },
    ],
    []
  );

  const [videoData, setVideoData] = useState({});

  // useEffect runs once (videos is memoized)
  useEffect(() => {
    let cancelled = false;

    const extractYouTubeId = (url) => {
      try {
        const u = new URL(url);
        // youtu.be short link
        if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
        // watch?v=...
        if (u.searchParams.get("v")) return u.searchParams.get("v");
        // other forms: /embed/ID or /live/ID or /v/ID
        const parts = u.pathname.split("/").filter(Boolean);
        return parts.length ? parts[parts.length - 1] : null;
      } catch {
        return null;
      }
    };

    const fetchVideoData = async () => {
      const requests = videos.map(async (video) => {
        try {
          // IMPORTANT: use the original video.url (from the videos const) for oEmbed
          const res = await fetch(
            `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`
          );
          if (!res.ok) throw new Error(`oEmbed fetch failed (${res.status})`);
          const data = await res.json();
          const vid = extractYouTubeId(video.url);
          return {
            id: video.id,
            title: data.title,
            channel: data.author_name,
            channelUrl: data.author_url,
            // oEmbed returns thumbnail_url for most videos/live links; fallback to ytimg if needed
            thumbnail: data.thumbnail_url || (vid ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg` : null),
            videoId: vid,
          };
        } catch (err) {
          console.error("Error fetching oEmbed for", video.url, err);
          return { id: video.id, error: true };
        }
      });

      const results = await Promise.all(requests);
      if (cancelled) return;

      const map = {};
      results.forEach((r) => {
        if (!r.error) map[r.id] = r;
      });

      setVideoData(map);
    };

    fetchVideoData();

    return () => {
      cancelled = true;
    };
  }, [videos]);

  const mainVideo = videoData[videos[0].id];

  if (!mainVideo) return <p className="p-4">Loading videos...</p>;

  return (
    <section className="bg-[#fff7ef] py-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-sky-700">MyGov Media</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Main video */}
          <div className="md:col-span-2">
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-[400px]"
                src={`https://www.youtube.com/embed/${mainVideo.videoId}`}
                title={mainVideo.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{mainVideo.title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <img src={mainVideo.thumbnail} alt="thumb" className="h-8 w-8 rounded-full" />
              <a href={mainVideo.channelUrl} target="_blank" rel="noreferrer" className="text-sm text-gray-600">
                {mainVideo.channel}
              </a>
            </div>
          </div>

          {/* Suggested */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suggested videos</h4>
            <div className="grid grid-cols-1 gap-4">
              {videos.slice(1).map((v) => {
                const d = videoData[v.id];
                if (!d) return <div key={v.id}>Loading...</div>;
                return (
                  <div key={v.id} className="flex gap-3">
                    <img src={d.thumbnail} alt={d.title} className="w-40 h-24 object-cover rounded-md" />
                    <div>
                      <p className="text-sm font-medium">{d.title}</p>
                      <p className="text-xs text-gray-500">{d.channel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
