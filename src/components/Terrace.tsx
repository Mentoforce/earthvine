"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import terraceImg from "../../public/terrace-1.jpg";

const TerraceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-black">
      <div className="relative min-h-[70vh] md:min-h-screen flex items-end sm:items-center">
        {/* Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={terraceImg}
            alt="Luxury terrace design"
            fill
            priority={false}
            className="object-cover"
          />

          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black/60" /> */}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent sm:hidden" />

          <div className="absolute inset-0 bg-linear-to-r from-black/85 to-black/10" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-350 mx-auto w-full section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="lg:col-span-7"
            >
              {/* Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[hsl(var(--gold))]" />
                <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
                  Outdoor Living
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[hsl(var(--cream))] leading-[1.1]">
                Terrace
                <br />
                <span className="italic text-[hsl(var(--gold))]">
                  &amp; Beyond
                </span>
              </h2>

              {/* Paragraph (hidden on small mobile if needed) */}
              <p className="mt-6 sm:mt-8 text-[hsl(var(--cream)/0.6)] text-sm sm:text-base max-w-lg leading-relaxed">
                Transform your terrace into a breathtaking retreat — where
                nature meets luxury design, and every sunset becomes an
                experience.
              </p>

              {/* Feature Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 sm:mt-10 flex flex-wrap gap-3"
              >
                {[
                  "Rooftop Gardens",
                  "Outdoor Lounges",
                  "Landscape Design",
                  "Pergolas",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg border border-[hsl(var(--cream)/0.2)] text-[hsl(var(--cream))] text-[11px] sm:text-[12px] tracking-widest uppercase transition-all duration-300 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraceSection;
