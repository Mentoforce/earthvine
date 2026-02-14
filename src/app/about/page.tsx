"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import aboutHero from "../../../public/about/hero.jpg";
import aboutTeam from "../../../public/about/photo.jpg";

export default function About() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const processRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
      {/* ================= HERO ================= */}
      <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={aboutHero}
            alt="Interior studio"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl pl-15 h-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
              About Us
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
            Crafting Spaces
          </h1>
          <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
            with Soul
          </h1>

          <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
            Over 12 years of transforming spaces into stories — blending
            craftsmanship with modern sensibility.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section
        ref={storyRef}
        className="section-padding bg-[hsl(var(--cream))]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-3/4 relative overflow-hidden rounded-2xl">
              <Image
                src={aboutTeam}
                alt="Design process"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 right-4 bg-[hsl(var(--charcoal)/0.9)] backdrop-blur-md rounded-2xl p-6 shadow-lg"
            >
              <p className="font-display text-4xl text-[hsl(var(--gold))]">
                150+
              </p>
              <p className="text-[hsl(var(--cream)/0.6)] text-xs tracking-widest uppercase">
                Projects Completed
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--gold))]" />
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
              Where{" "}
              <span className="italic text-[hsl(var(--gold))]">Vision</span>
              <br />
              Meets Craft
            </h2>

            <div className="space-y-4 text-[hsl(var(--charcoal)/0.7)]">
              <p>
                Earthvine Interiors was founded with a belief — every space has
                a story waiting to be told.
              </p>
              <p>
                With 12+ years of experience in residential and commercial
                design, we've transformed more than 150 spaces across India.
              </p>
              <p>
                We create environments that are not just visually stunning but
                deeply functional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section
        ref={valuesRef}
        className="section-padding bg-[hsl(var(--charcoal))]"
      >
        <div className="max-w-350 mx-auto px-6">
          <h2 className="font-display text-5xl text-[hsl(var(--cream))] mb-16">
            What Drives{" "}
            <span className="italic text-[hsl(var(--gold))]">Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                desc: "We see potential where others see walls.",
              },
              { title: "Craft", desc: "Meticulous attention to detail." },
              {
                title: "Trust",
                desc: "Transparent processes and honest communication.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="glass-dark rounded-3xl p-10 hover-lift"
              >
                <span className="font-display text-7xl text-[hsl(var(--gold)/0.2)]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl text-[hsl(var(--cream))] mt-2 mb-4">
                  {v.title}
                </h3>
                <p className="text-[hsl(var(--cream)/0.6)] font-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        ref={processRef}
        className="section-padding bg-[hsl(var(--background))]"
      >
        <div className="max-w-350 mx-auto px-6 text-center">
          <h2 className="font-display text-5xl mb-16">
            From Concept to{" "}
            <span className="italic text-[hsl(var(--secondary))]">Reality</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Discover", "Design", "Develop", "Deliver"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="glass rounded-3xl p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-full border border-[hsl(var(--secondary)/0.3)] flex items-center justify-center mx-auto mb-6">
                  <span className="font-body text-sm text-[hsl(var(--secondary))]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-3">{step}</h3>
                <p className="text-[hsl(var(--muted-foreground))] font-body text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
