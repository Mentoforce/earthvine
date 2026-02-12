"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/hero-living.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-[hsl(var(--cream))]">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={heroImg}
          alt="Luxury interior"
          fill
          priority
          className="object-cover"
        />

        {/* Overlays using CSS variables */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Vertical Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20"
      >
        <div className="w-px h-16 bg-[hsl(var(--gold)/0.4)]" />
        <span className="font-body text-[10px] tracking-[0.4em] text-[hsl(var(--gold)/0.6)] uppercase [writing-mode:vertical-lr] rotate-180">
          Scroll to explore
        </span>
        <div className="w-px h-16 bg-[hsl(var(--gold)/0.4)]" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 max-w-[1400px] mx-auto px-8">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-[hsl(var(--gold))]" />
          <span className="font-body text-[11px] tracking-[0.4em] uppercase font-medium text-[hsl(var(--gold))]">
            Interior Design Studio
          </span>
        </motion.div>

        {/* Headline Line 1 */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] leading-[0.85] tracking-tight text-[hsl(var(--cream))]"
          >
            We Shape
          </motion.h1>
        </div>

        {/* Headline Line 2 */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] leading-[0.85] tracking-tight text-[hsl(var(--gold))]"
          >
            Emotions
          </motion.h1>
        </div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
        >
          {/* Description + Buttons */}
          <div className="max-w-md">
            <p className="font-body text-base leading-relaxed text-[hsl(var(--cream)/0.6)]">
              We craft spaces that tell your story — blending timeless elegance
              with modern sensibility. Every detail, intentional.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/quotation"
                className="group flex items-center gap-3 px-8 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-body font-bold text-[13px] tracking-wider uppercase transition-all duration-500 hover:bg-[hsl(var(--cream))]"
              >
                Get Quotation
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 border border-[hsl(var(--cream)/0.2)] text-[hsl(var(--cream))] font-body text-[13px] tracking-wider uppercase transition-all duration-500 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
              >
                Our Work
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-12">
            {[
              { num: "150+", label: "Projects" },
              { num: "12+", label: "Years" },
              { num: "98%", label: "Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <p className="font-display text-4xl lg:text-4xl text-[hsl(var(--gold))]">
                  {stat.num}
                </p>
                <p className=" text-[11px] mt-1 tracking-[0.2em] uppercase text-[hsl(var(--cream)/0.4)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
