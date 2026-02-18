"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import res1 from "../../public/residential-1.jpg";
import res2 from "../../public/residential-2.jpg";

const ResidentialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 sm:gap-8 mb-12 sm:mb-15">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
              <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                Residential
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--foreground))] leading-[1.1] ">
              Living
              <br />
              <span className="italic text-[hsl(var(--secondary))]">
                Redefined
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 lg:col-start-8 flex items-end"
          >
            <p className="text-[hsl(var(--muted-foreground))] font-body text-base leading-relaxed text-right">
              Crafting homes that reflect your personality — from cozy bedrooms
              to stunning kitchens. Each space, a masterpiece.
            </p>
          </motion.div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 rounded-lg relative overflow-hidden group cursor-pointer"
          >
            <div className="h-full aspect-4/5 lg:aspect-auto lg:h-full relative">
              <Image
                src={res1}
                alt="Modern Bedroom Suite"
                fill
                className="object-cover rounded-lg transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 pt-30 bg-linear-to-t from-black/60 via-black/50 to-transparent">
              <span className="text-[hsl(var(--gold))] text-[10px] tracking-[0.3em] uppercase">
                Bedroom
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--cream))] mt-2">
                Modern Bedroom Suite
              </h3>
              <p className="text-[hsl(var(--cream)/0.5)] text-sm mt-1">
                Mumbai, India
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Button (Top Right) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="lg:flex hidden mb-20 -mt-4 justify-end"
            >
              <Link
                href="/services"
                className="group flex items-center border px-6 py-3 border-[hsl(var(--foreground))] rounded-lg gap-3 text-[hsl(var(--foreground))] text-[13px] tracking-[0.15em] uppercase hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--cream))] transition-colors duration-300"
              >
                View All Projects
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Spacer pushes image to bottom */}
            <div className="mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="rounded-lg relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-4/5 relative">
                  <Image
                    src={res2}
                    alt="Gourmet Kitchen Design"
                    fill
                    className="object-cover rounded-lg transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 pt-60 bg-linear-to-t from-black/70 via-black/60 to-transparent">
                  <span className="text-[hsl(var(--gold))] text-[10px] tracking-[0.3em] uppercase">
                    Kitchen
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--cream))] mt-2">
                    Gourmet Kitchen Design
                  </h3>
                  <p className="text-[hsl(var(--cream)/0.5)] text-sm mt-1">
                    Pune, India
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex lg:hidden justify-end"
        >
          <Link
            href="/services"
            className="group flex items-center border px-6 sm:px-7 py-3 border-[hsl(var(--foreground))] rounded-lg gap-3 text-[hsl(var(--foreground))] text-[13px] tracking-[0.15em] uppercase hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--cream))] transition-colors duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ResidentialSection2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 sm:gap-8 mb-12 sm:mb-15">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
              <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                Residential
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--foreground))] leading-[1.1] ">
              Living
              <br />
              <span className="italic text-[hsl(var(--secondary))]">
                Redefined
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 lg:col-start-8 flex items-end"
          >
            <p className="text-[hsl(var(--muted-foreground))] font-body text-base leading-relaxed text-right">
              Crafting homes that reflect your personality — from cozy bedrooms
              to stunning kitchens. Each space, a masterpiece.
            </p>
          </motion.div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-15 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-8 group relative overflow-hidden cursor-pointer"
          >
            <div className="aspect-4/5 lg:aspect-3/4 overflow-hidden relative">
              <Image
                src={res1}
                alt="Modern Bedroom Suite"
                fill
                className="object-cover rounded-lg transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-[hsl(var(--charcoal)/0.9)] via-[hsl(var(--charcoal)/0.4)] to-transparent">
              <span className="text-[hsl(var(--gold))] text-[10px] font-body tracking-[0.3em] uppercase">
                Bedroom
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--cream))] mt-2">
                Modern Bedroom Suite
              </h3>
              <p className="text-[hsl(var(--cream)/0.5)] text-sm font-body mt-1">
                Mumbai, India
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="lg:col-span-7 lg:mt-45 group relative overflow-hidden cursor-pointer"
          >
            <div className="aspect-4/5 rounded-lg overflow-hidden relative">
              <Image
                src={res2}
                alt="Gourmet Kitchen Design"
                fill
                objectFit="cover"
                className="object-cover rounded-lg transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>

            <div className="absolute  bottom-0 left-0 right-0 bg-linear-to-t from-black via-black to-black">
              <span className="text-[hsl(var(--gold))] text-[10px] font-body tracking-[0.3em] uppercase">
                Kitchen
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--cream))] mt-2">
                Gourmet Kitchen Design
              </h3>
              <p className="text-[hsl(var(--cream)/0.5)] text-sm font-body mt-1">
                Pune, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-end"
        >
          <Link
            href="/services"
            className="group flex items-center gap-3 text-[hsl(var(--foreground))] font-body text-[13px] tracking-[0.15em] uppercase hover:text-[hsl(var(--secondary))] transition-colors duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default ResidentialSection;
