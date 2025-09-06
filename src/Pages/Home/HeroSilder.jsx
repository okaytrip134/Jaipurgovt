import React, { useEffect, useState } from "react";

const slides = [
  { id: 1, image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0" },
  { id: 2, image: "https://images.unsplash.com/photo-1682830819991-3e100a80aa2e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0" },
  { id: 3, image: "https://images.unsplash.com/photo-1712166424478-eb9b7103e460?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0" },
];

const stats = [
  { value: "5,92,97,676", label: "Jaipur Tourism" },
  { value: "17.89", suffix: " + Lakh", label: "SUBMISSIONS IN TASKS" },
  { value: "55.89", suffix: " + Lakh", label: "COMMENTS IN DISCUSSIONS" },
  { value: "38.76", suffix: " + Lakh", label: "VOTES IN POLLS" },
  { value: "303.77", suffix: " + Lakh", label: "PARTICIPATION IN QUIZ" },
  { value: "250.04", suffix: " + Lakh", label: "PLEDGES TAKEN" },
];

// 👇 Update this path to where you placed the icon
const WHATSAPP_ICON = "/icons/whatsapp.png"; // e.g. public/icons/whatsapp.png

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO (reduced height) */}
      <section className="relative overflow-hidden h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px]">
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[1000ms] ${i === current ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="absolute inset-0 bg-black/25" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* STATISTICS STRIP */}
      <div className="w-full bg-white border rounded-xl border-gray-200 shadow-sm mt-4 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 py-5">
            <div className="relative shrink-0">
              <div className="text-4xl sm:text-3xl font-semibold text-gray-800">Statistics:</div>
              {/* <svg className="absolute -bottom-4 left-3 w-20 h-8 text-gray-700/60" viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <path d="M5 20c25 25 55 0 85 0" />
                <path d="M90 20l-8-8M90 20l-8 8" />
              </svg> */}
            </div>

            <div className="flex-1 overflow-hidden flex items-center">
              <div className="min-w-max mx-auto flex items-end gap-6 pr-3">
                {stats.map((st) => (
                  <div key={st.label} className="flex flex-col">
                    <div className="text-[20px] sm:text-[20px] font-extrabold text-gray-800 leading-none">
                      {st.value}
                      {st.suffix ? <span className="ml-1 text-gray-600 font-semibold text-[14px]">{st.suffix}</span> : null}
                    </div>
                    <div className="mt-1 text-[11px] sm:text-[8px] uppercase tracking-wide text-gray-500">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp pill using your downloaded icon */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 shadow-sm hover:bg-emerald-100 transition"
              title="Join on WhatsApp"
            >
              <span className="text-[12px] text-emerald-700 font-semibold">
                JOIN <span className="text-[#1d9b50] ms-2 me-1">Jaipur</span>
                <span className="text-[#1d9b50]">Comunnity
                </span>
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                  alt="WhatsApp"
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                />
                <span className="text-emerald-700 font-extrabold text-lg">WhatsApp</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
