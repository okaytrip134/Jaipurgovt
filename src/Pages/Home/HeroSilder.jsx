import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const slides = [
  { id: 1, image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0" },
  { id: 2, image: "https://www.livehindustan.com/lh-img/smart/img/2025/09/06/1200x900/Buses__1757156071931_1757156072359.jpeg" },
  { id: 3, image: "https://scontent.fdel1-3.fna.fbcdn.net/v/t39.30808-6/544899231_1115042140802279_3963050255515265691_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sBAgIvhf4uoQ7kNvwEIFPXw&_nc_oc=AdnxtbAc-MrjBnfw_-qvPFBA9mEpmo7kWHr7OihbqorACjIvD84JKO2i0FQiJpahC_Q&_nc_zt=23&_nc_ht=scontent.fdel1-3.fna&_nc_gid=48tvf7trK5tTAhwhSjWRig&oh=00_AfZVx4lxj9BlqnLvkxDuqjIcU93SEqTX87lSNEHki3LhfA&oe=68DD3AB0" },
  { id: 4, image: "https://images.unsplash.com/photo-1682830819991-3e100a80aa2e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0" },
  { id: 5, image: "https://images.unsplash.com/photo-1712166424478-eb9b7103e460?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0" },
];

// stats ko translation-keys ke saath define karo
const stats = [
  { value: "5,92,97,676", labelKey: "stats.labels.jaipur_tourism" },
  { value: "17.89", suffixKey: "stats.suffix.lakh", labelKey: "stats.labels.submissions_in_tasks" },
  { value: "55.89", suffixKey: "stats.suffix.lakh", labelKey: "stats.labels.comments_in_discussions" },
  { value: "38.76", suffixKey: "stats.suffix.lakh", labelKey: "stats.labels.votes_in_polls" },
  { value: "250.04", suffixKey: "stats.suffix.lakh", labelKey: "stats.labels.pledges_taken" },
];

// agar icon public/icons/whatsapp.png me rakha hai to yahi path sahi hai
const WHATSAPP_ICON = "/icons/whatsapp.png";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(p => (p === slides.length - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-[1000ms] ${i === current ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: "100% 100%", // stretch to fill
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
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
              aria-label={t("hero.slide_aria", { n: i + 1 })}
              className={`h-2 w-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/60"
                }`}
            />
          ))}
        </div>
      </section>


      {/* STATISTICS STRIP */}
      <div className="w-full bg-white border border-gray-200 shadow-sm z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 py-5">
            <div className="relative shrink-0">
              <div className="text-4xl sm:text-3xl font-semibold text-gray-800">
                {t("hero.statistics_title")}
              </div>
            </div>

            <div className="flex-1 overflow-hidden flex items-center">
              <div className="min-w-max mx-auto flex items-end gap-6 pr-3">
                {stats.map(st => (
                  <div key={st.labelKey} className="flex flex-col">
                    <div className="text-[20px] sm:text-[20px] font-extrabold text-gray-800 leading-none">
                      {st.value}
                      {st.suffixKey ? (
                        <span className="ml-1 text-gray-600 font-semibold text-[14px]">
                          {t(st.suffixKey)}
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-1 text-[11px] sm:text-[8px] uppercase tracking-wide text-gray-500">
                      {t(st.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp pill */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 shadow-sm hover:bg-emerald-100 transition"
              title={t("cta.join_whatsapp_title")}
            >
              <span className="text-[12px] text-emerald-700 font-semibold">
                {t("cta.join_prefix")}{" "}
                <span className="text-[#1d9b50] ms-2 me-1">{t("cta.city_name")}</span>
                <span className="text-[#1d9b50]">{t("cta.community")}</span>
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
