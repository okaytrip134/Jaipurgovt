import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./card"; // re-use your existing JS Card component

/**
 * ResponsiveCardsCarousel (pure JS, not TS)
 * - Mobile: carousel that auto-slides and supports manual swipe
 * - Desktop: simple responsive grid
 *
 * Usage:
 *   <ResponsiveCardsCarousel
 *     items={[{ image, title, description, tag, slug }, ...]}
 *     interval={3000}
 *   />
 *
 * Install once:
 *   npm i embla-carousel-react
 */
export default function ResponsiveCardsCarousel({ items = [], interval = 3000 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    inViewThreshold: 0.6,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi && emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay: advances every `interval` ms; pauses on hover/touch
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!isPaused) emblaApi.scrollNext();
    }, interval);
    return () => clearInterval(id);
  }, [emblaApi, interval, isPaused]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="w-full">
      {/* Mobile: carousel */}
      <div
        className="md:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {items.map((item, idx) => (
                <div key={idx} className="min-w-0 flex-[0_0_100%] pl-4 pr-4">
                  <Card {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 shadow p-2 hover:bg-white active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 shadow p-2 hover:bg-white active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (i === selectedIndex ? "w-6 bg-gray-800" : "w-2.5 bg-gray-300")
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
