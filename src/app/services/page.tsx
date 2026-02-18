"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import servicesHero from "../../../public/services/servicesHero.png";
import res1 from "../../../public/services/res.jpg";
import com1 from "../../../public/services/commercial.jpg";
import terrace1 from "../../../public/services/terrace.png";

const servicesList = [
  {
    title: "Residential Design",
    desc: "Complete home interiors — living rooms, bedrooms, kitchens, and bathrooms designed for comfort and elegance.",
    features: [
      "Space Planning",
      "Custom Furniture",
      "Lighting Design",
      "Color Consultation",
    ],
    image: res1,
  },
  {
    title: "Commercial Spaces",
    desc: "Offices, restaurants, retail stores, and hospitality venues designed to impress and perform.",
    features: [
      "Office Layouts",
      "Restaurant Design",
      "Retail Interiors",
      "Hotel Spaces",
    ],
    image: com1,
  },
  {
    title: "Terrace & Outdoor",
    desc: "Transform your outdoor spaces into stunning retreats with rooftop gardens, pergolas, and landscape design.",
    features: [
      "Rooftop Design",
      "Landscape Planning",
      "Pergolas",
      "Outdoor Kitchens",
    ],
    image: terrace1,
  },
  {
    title: "Renovation & Remodeling",
    desc: "Breathe new life into existing spaces with our comprehensive renovation services.",
    features: [
      "Structural Updates",
      "Modern Upgrades",
      "Space Optimization",
      "Material Selection",
    ],
  },
  {
    title: "3D Visualization",
    desc: "See your dream space before it's built with photorealistic 3D renders and virtual walkthroughs.",
    features: [
      "3D Renders",
      "Virtual Tours",
      "Material Mockups",
      "Design Iterations",
    ],
  },
  {
    title: "Turnkey Projects",
    desc: "End-to-end project management from concept to completion — we handle everything.",
    features: [
      "Project Management",
      "Vendor Coordination",
      "Quality Control",
      "Timely Delivery",
    ],
  },
];

const ServiceRow = ({ service, index }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${
        index > 0 ? "mt-24" : ""
      }`}
    >
      {service.image && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative w-full rounded-lg aspect-4/3 overflow-hidden border border-[hsl(var(--border))]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`lg:col-span-5 ${
          isEven ? "lg:order-2 lg:col-start-8" : "lg:order-1 lg:col-start-1"
        } flex flex-col justify-center`}
      >
        <span className="font-display text-7xl text-[hsl(var(--gold)/0.4)]">
          {(index + 1).toString().padStart(2, "0")}
        </span>

        <h3 className="font-display text-3xl md:text-5xl text-[hsl(var(--foreground))] mt-2 mb-4 leading-tight">
          {service.title}
        </h3>

        <p className="font-body text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
          {service.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((f: string) => (
            <span
              key={f}
              className="px-4 py-1.5 border border-[hsl(var(--border))] rounded-full text-xs font-body text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {f}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
      {/* Hero */}
      <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={servicesHero}
            alt="Interior studio"
            fill
            priority
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/60" /> */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent sm:hidden" />

          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl sm:pl-15 h-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
              What We Do
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
            Our{" "}
          </h1>
          <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
            Services
          </h1>

          <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
            From concept to completion, we offer a full spectrum of interior
            design and build services.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto">
          {servicesList.slice(0, 3).map((service, index) => (
            <ServiceRow key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* More Services */}
      <section
        ref={gridRef}
        className="section-padding bg-[hsl(var(--charcoal))]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
            <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
              More Services
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[hsl(var(--cream))]">
              Beyond{" "}
              <span className="italic text-[hsl(var(--gold))]">Design</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.slice(3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group glass rounded-lg p-8 hover-lift bg-[hsl(var(--charcoal))] text-[hsl(var(--cream))]"
              >
                <span className="font-display text-5xl text-[hsl(var(--gold)/0.3)] group-hover:text-[hsl(var(--gold)/0.6)]">
                  0{index + 4}
                </span>

                <h3 className="font-display text-2xl mt-3 mb-3 ">
                  {service.title}
                </h3>

                <p className="font-body text-sm text-[hsl(var(--cream)/0.4)] leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f: string) => (
                    <span
                      key={f}
                      className="px-3 py-1 border border-[hsl(var(--muted-foreground)/0.4)] rounded-full text-xs font-body text-[hsl(var(--cream)/0.4)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
