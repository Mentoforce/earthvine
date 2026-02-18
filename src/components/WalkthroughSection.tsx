"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import beforeImg from "../../public/walkthrough/pic1.jpg";
import afterImg from "../../public/walkthrough/pic2.jpg";

import resiBefore from "../../public/walkthrough/pic1.jpg";
import resiAfter from "../../public/walkthrough/pic2.jpg";
import comBefore from "../../public/walkthrough/pic1.jpg";
import comAfter from "../../public/walkthrough/pic2.jpg";
import terBefore from "../../public/walkthrough/pic1.jpg";
import terAfter from "../../public/walkthrough/pic2.jpg";

const slides = [
  {
    title: "Residential",
    before: resiBefore,
    after: resiAfter,
  },
  {
    title: "Commercial",
    before: comBefore,
    after: comAfter,
  },
  {
    title: "Terrace",
    before: terBefore,
    after: terAfter,
  },
];

const AUTO_DELAY = 7000;

export const WalkthroughSection1 = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const startDrag = () => (isDragging.current = true);
  const stopDrag = () => (isDragging.current = false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--cream))]">
      <div className="max-w-350 px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />

            <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
              Walkthrough
            </span>
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight">
            Before &{" "}
            <span className="italic text-[hsl(var(--gold))]">After</span>
          </h2>

          <p className="mt-6 font-body text-base md:text-lg max-w-2xl mx-auto text-[hsl(var(--charcoal)/0.6)] leading-relaxed">
            Drag the slider to reveal the transformation. A refined balance
            between vision and execution.
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-5xl mx-auto h-70 sm:h-87.5 md:h-130 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={handleMouseMove}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          onTouchMove={handleTouchMove}
        >
          {/* AFTER Image (Base Layer) */}
          <Image
            src={afterImg}
            alt="After interior design"
            fill
            priority
            className="object-cover"
          />

          {/* BEFORE Image (Clipped — No Resize Issue) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            }}
          >
            <Image
              src={beforeImg}
              alt="Before interior design"
              fill
              className="object-cover"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5s z-20"
            style={{
              left: `${sliderPos}%`,
              backgroundColor: "hsl(var(--gold))",
            }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] flex items-center justify-center shadow-[0_0_25px_rgba(186,159,119,0.35)]">
              <div className="flex gap-1">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-[hsl(var(--gold))]" />
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[hsl(var(--gold))]" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 bg-[hsl(var(--charcoal)/0.75)] backdrop-blur-md px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-body text-[hsl(var(--cream))] rounded-full border border-[hsl(var(--gold)/0.2)]">
            Before
          </div>

          <div className="absolute top-6 right-6 bg-[hsl(var(--charcoal)/0.75)] backdrop-blur-md px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-body text-[hsl(var(--cream))] rounded-full border border-[hsl(var(--gold)/0.2)]">
            After
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WalkthroughSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  /* ===============================
    AUTO CAROUSEL LOGIC
  =============================== */

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setCurrent((prev) => (prev + 1) % slides.length);
        setSliderPos(50); // reset slider
      }
    }, AUTO_DELAY);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setSliderPos(50);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setSliderPos(50);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setSliderPos(50);
  };

  /* ===============================
    BEFORE / AFTER SLIDER LOGIC
  =============================== */

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const startDrag = () => {
    isDragging.current = true;
    isPaused.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="section-padding bg-[hsl(var(--background))] overflow-hidden">
      <div className="max-w-350 mx-auto px-5 sm:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />

            <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
              Walkthrough
            </span>
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight">
            Before &{" "}
            <span className="italic text-[hsl(var(--gold))]">After</span>
          </h2>

          <p className="mt-4 font-body text-base max-w-2xl mx-auto text-[hsl(var(--charcoal)/0.6)] leading-relaxed">
            Drag the slider to reveal the transformation. A refined balance
            between vision and execution.
          </p>
        </motion.div>
        {/* CAROUSEL */}
        <div
          className="relative"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-lg w-full h-70 sm:h-90 md:h-130 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] select-none"
                ref={containerRef}
                onMouseDown={startDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onMouseMove={handleMouseMove}
                onTouchStart={startDrag}
                onTouchEnd={stopDrag}
                onTouchMove={handleTouchMove}
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  WebkitTouchCallout: "none",
                }}
              >
                {/* AFTER IMAGE */}
                <Image
                  src={slides[current].after}
                  alt="After"
                  fill
                  priority
                  draggable={false}
                  className="object-cover pointer-events-none"
                />

                {/* BEFORE IMAGE */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                >
                  <Image
                    src={slides[current].before}
                    alt="Before"
                    fill
                    draggable={false}
                    className="object-cover pointer-events-none"
                  />
                </div>

                {/* SLIDER LINE */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 z-20"
                  style={{
                    left: `${sliderPos}%`,
                    backgroundColor: "hsl(var(--gold))",
                  }}
                >
                  <div
                    className="absolute text-[hsl(var(--gold))] 
                top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                w-10 h-10 
                rounded-full 
                bg-[hsl(var(--cream))] 
                border border-[hsl(var(--gold))]
                flex items-center justify-center"
                  >
                    ‹ | ›
                  </div>
                </div>

                {/* TITLE BADGE */}
                <div className="absolute bottom-6 left-6 bg-[hsl(var(--charcoal)/0.75)] px-5 py-2 text-xs tracking-widest uppercase text-[hsl(var(--cream))] rounded-full border border-[hsl(var(--gold)/0.3)]">
                  {slides[current].title}
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 
            w-10 h-10 rounded-full 
            bg-[hsl(var(--charcoal)/0.6)] text-white
            hover:bg-[hsl(var(--charcoal)/0.8)] hover:text-[hsl(var(--cream))]
            items-center justify-center cursor-pointer transition-all duration-500"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 
            w-10 h-10 rounded-full 
            bg-[hsl(var(--charcoal)/0.6)] text-white
            hover:bg-[hsl(var(--charcoal)/0.8)] hover:text-[hsl(var(--cream))]
            items-center justify-center cursor-pointer transition-all duration-500"
            >
              ›
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={prevSlide}
              className="flex sm:hidden justify-center items-center w-8 h-8 rounded-full 
                           bg-[hsl(var(--charcoal)/0.6)] text-white
            hover:bg-[hsl(var(--charcoal)/0.8)] hover:text-[hsl(var(--cream))]             transition-all duration-500"
            >
              ‹
            </button>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-[hsl(var(--gold))] scale-110"
                    : "bg-black/30"
                }`}
              />
            ))}
            <button
              onClick={nextSlide}
              className="flex sm:hidden justify-center items-center w-8 h-8 rounded-full bg-[hsl(var(--charcoal)/0.6)] text-white
            hover:bg-[hsl(var(--charcoal)/0.8)] hover:text-[hsl(var(--cream))]
            transition-all duration-500"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalkthroughSection;
