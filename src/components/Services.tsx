"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Space Planning",
    desc: "Strategic layout design that maximizes functionality and flow in every room.",
  },
  {
    num: "02",
    title: "Interior Styling",
    desc: "Curated furniture, art, and decor selections that bring your vision to life.",
  },
  {
    num: "03",
    title: "Renovation",
    desc: "Complete transformation of existing spaces with modern design sensibilities.",
  },
  {
    num: "04",
    title: "3D Visualization",
    desc: "Photorealistic 3D renders to preview your space before construction begins.",
  },
];

const ServicesPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[hsl(var(--background))]">
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--gold))]" />
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
                What We Do
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--foreground))] leading-[0.9]">
              Our
              <br />
              <span className="italic text-[hsl(var(--gold))]">Services</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:col-start-10 lg:col-span-3 my-auto hidden lg:flex justify-center"
          >
            <Link
              href="/services"
              className="px-6 sm:px-7 py-3 rounded-lg border border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] text-[12px] sm:text-[13px] tracking-[0.15em] uppercase transition-all duration-500 hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] group flex items-center gap-3"
            >
              View All Services
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

        {/* Service List */}
        <div className="border-t border-[hsl(var(--foreground)/0.1)]">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group border-b border-[hsl(var(--foreground)/0.1)] py-6 sm:py-8 lg:py-10 cursor-pointer"
            >
              <div className="grid grid-cols-12 gap-4 items-start lg:items-center">
                {/* Number */}
                <span className="col-span-2 lg:col-span-1 font-display text-2xl lg:text-3xl text-[hsl(var(--foreground)/0.25)] group-hover:text-[hsl(var(--gold))] transition-colors duration-500">
                  {s.num}
                </span>

                {/* Title */}
                <h3 className="col-span-10 lg:col-span-4 font-display text-2xl lg:text-3xl text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--gold))] transition-colors duration-500">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="col-span-12 lg:col-span-5 lg:col-start-6 text-[hsl(var(--foreground)/0.6)] text-sm leading-relaxed mt-2 lg:mt-0">
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className="col-span-12 lg:col-span-2 lg:col-start-11 flex justify-end mt-4 lg:mt-0">
                  <svg
                    className="w-6 h-6 text-[hsl(var(--foreground)/0.25)] group-hover:text-[hsl(var(--gold))] group-hover:translate-x-2 transition-all duration-500"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 lg:hidden flex justify-center"
        >
          <Link
            href="/services"
            className="px-6 sm:px-7 py-3 rounded-lg border border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] text-[12px] sm:text-[13px] tracking-[0.15em] uppercase transition-all duration-500 hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] group flex items-center gap-3"
          >
            View All Services
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

export default ServicesPreview;
