"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/hero-living.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] sm:h-screen overflow-hidden bg-black text-[hsl(var(--cream))]">
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
        {/* <div className="absolute inset-0 bg-black/60" /> */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent sm:hidden" />

        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-black/10" />
      </motion.div>

      {/* Vertical Side Text */}
      {/* <motion.div
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
      </motion.div> */}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-end sm:pb-15 pb-5 w-full mx-auto md:px-28 px-8">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-px bg-[hsl(var(--gold))] hidden sm:inline-block" />
          <span className="font-body text-[11px] tracking-[0.4em] uppercase font-medium text-[hsl(var(--gold))]">
            EARTHVINE INTERIORS
          </span>
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className=" text-5xl md:text-7xl leading-[1.2] tracking-normal text-[hsl(var(--cream))]"
          >
            From Blueprint to
          </motion.h1>
        </div>
        {/* <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className=" italic text-5xl md:text-7xl leading-[1.15] tracking-tight text-[hsl(var(--gold))]"
          >
            Blueprint
          </motion.h1>
        </div> */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className=" text-5xl md:text-7xl tracking-tight text-[hsl(var(--gold))] italic leading-[1.2]"
          >
            Beautiful Reality
          </motion.h1>
        </div>
        {/* <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className=" text-5xl md:text-7xl tracking-tight text-[hsl(var(--cream))] pb-10 md:pb-0 leading-tight"
          >
            Reality
          </motion.h1>
        </div> */}

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
        >
          {/* Description + Buttons */}
          <div className="max-w-md">
            <p className="hidden md:block mb-10 font-body text-base leading-relaxed tracking-wide text-[hsl(var(--cream)/0.6)]">
              We craft spaces that tell your story — blending timeless elegance
              with modern sensibility. Every detail, intentional.
            </p>

            <div className="flex gap-4 mb-10 md:mb-0 md:mt-6">
              <Link
                href="/quotation"
                className="group flex items-center rounded-lg gap-2 px-6 sm:px-7 py-3 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-body font-semibold text-[11px] lg:text-[13px] tracking-wider uppercase transition-all duration-500 hover:bg-[hsl(var(--cream))]"
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
                className="px-6 sm:px-7 py-3 rounded-lg border border-[hsl(var(--gold))] text-[hsl(var(--cream))] font-body text-[11px] lg:text-[13px] tracking-wider uppercase transition-all duration-500 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
              >
                Our Work
              </Link>
            </div>
          </div>

          {/* Stats */}
        </motion.div>
        <div className="sm:flex gap-12 hidden mt-10">
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
      </div>
    </section>
  );
};

export default HeroSection;
