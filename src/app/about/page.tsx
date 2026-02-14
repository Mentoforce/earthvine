"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Image Imports as specified
import aboutHero from "../../../public/about-hero.jpg";
import aboutTeam from "../../../public/about-team.jpg";

const About = () => {
  const storyRef = useRef<HTMLDivElement | null>(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });

  const valuesRef = useRef<HTMLDivElement | null>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] overflow-hidden bg-[hsl(var(--charcoal))]">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={aboutHero}
            alt="Our design studio"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay using charcoal token */}
          <div className="absolute inset-0 bg-[hsl(var(--charcoal))]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--charcoal))]/50 via-transparent to-[hsl(var(--charcoal))]" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-24 max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
              About Us
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[44px] sm:text-6xl md:text-8xl lg:text-[110px] text-[hsl(var(--cream))] leading-[0.85] tracking-tight"
            >
              Crafting Spaces
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[44px] sm:text-6xl md:text-8xl lg:text-[110px] italic text-[hsl(var(--gold))] leading-[0.85] tracking-tight"
            >
              with Soul
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="max-w-md text-[hsl(var(--cream))]/60 font-body text-base leading-relaxed mt-8"
          >
            Over 12 years of transforming spaces into stories — blending
            craftsmanship with modern sensibility.
          </motion.p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section
        ref={storyRef}
        className="py-16 sm:py-28 lg:py-40 bg-background overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                <Image
                  src={aboutTeam}
                  alt="Design materials and process"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stat card with glass-strong class */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:right-6 glass-strong rounded-2xl p-6 sm:p-8"
              >
                <p className="font-display text-4xl sm:text-5xl text-[hsl(var(--secondary))]">
                  150+
                </p>
                <p className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase mt-1">
                  Projects Completed
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
                <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                  Our Story
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.9] mb-8">
                Where{" "}
                <span className="italic text-[hsl(var(--secondary))]">
                  Vision
                </span>
                <br />
                Meets Craft
              </h2>

              <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
                <p>
                  Earthvine Interiors was founded with a simple belief — that
                  every space has a story waiting to be told...
                </p>
                <p>
                  Our team of passionate designers, architects, and artisans
                  work together...
                </p>
                <p>
                  From luxurious living rooms to modern corporate offices...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section
        ref={valuesRef}
        className="py-16 sm:py-28 bg-[hsl(var(--charcoal))] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 sm:mb-20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--gold))]" />
              <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                Our Values
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--cream))] leading-[0.9]">
              What Drives{" "}
              <span className="italic text-[hsl(var(--gold))]">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Vision",
                desc: "We see potential where others see walls...",
              },
              { title: "Craft", desc: "Meticulous attention to detail..." },
              {
                title: "Trust",
                desc: "Transparent processes and honest communication...",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="glass-dark rounded-3xl p-8 sm:p-10 hover-lift group"
              >
                <span className="font-display text-6xl sm:text-7xl text-[hsl(var(--gold))]/20 group-hover:text-[hsl(var(--gold))]/40 transition-colors duration-500">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--cream))] mt-2 mb-4">
                  {v.title}
                </h3>
                <p className="text-[hsl(var(--cream))]/50 font-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
