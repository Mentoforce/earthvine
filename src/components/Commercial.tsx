"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import com1 from "../../public/commercial/commercial1.jpg";
import com2 from "../../public/commercial/commercial2.jpg";

const projects = [
  {
    img: com1,
    title: "Corporate Workspace",
    location: "Bangalore",
    category: "Office",
    year: "2025",
  },
  {
    img: com2,
    title: "Fine Dining Restaurant",
    location: "Delhi",
    category: "Hospitality",
    year: "2024",
  },
];

const CommercialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-[hsl(var(--charcoal))] overflow-hidden"
    >
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex items-end order-2 lg:order-1"
          >
            <p className="text-[hsl(var(--cream)/0.6)] text-base leading-relaxed">
              Designing workspaces and commercial venues that inspire
              productivity, impress clients, and leave lasting impressions.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:col-start-7 text-right order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 justify-end mb-4">
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
                Commercial
              </span>
              <div className="w-8 h-px bg-[hsl(var(--gold))]" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
              Spaces That
              <br />
              <span className="italic text-[hsl(var(--gold))]">Perform</span>
            </h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.2 }}
              className="group relative overflow-hidden cursor-pointer hover-lift"
            >
              {/* Image */}
              <div className="aspect-4/5 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[hsl(var(--charcoal))] via-[hsl(var(--charcoal)/0.6)] to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[hsl(var(--gold))] text-[10px] tracking-[0.3em] uppercase">
                      {project.category}
                    </span>

                    <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--cream))] mt-2">
                      {project.title}
                    </h3>

                    <p className="text-[hsl(var(--cream)/0.4)] text-sm mt-1">
                      {project.location}, India
                    </p>
                  </div>

                  <span className="font-display text-5xl text-[hsl(var(--cream)/0.1)] font-bold">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
