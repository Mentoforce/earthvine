"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import com1 from "../../public/commercial/commercial1.jpg";
import com2 from "../../public/commercial/commercial2.jpg";
import Link from "next/link";

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
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              {" "}
              <div className="w-8 h-px bg-[hsl(var(--gold))]" />
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
                Commercial
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
              Spaces that
              <br />
              <span className="italic text-[hsl(var(--gold))]">Perform</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9 flex items-end flex-col sm:mt-20"
          >
            <p className="text-[hsl(var(--cream)/0.6)] text-base leading-relaxed text-right">
              Designing workspaces and commercial venues that inspire
              productivity, impress clients, and leave lasting impressions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 lg:flex hidden justify-end"
            >
              <Link
                href="/services"
                className="group flex items-center px-6 sm:px-7 py-3 border border-[hsl(var(--background))] rounded-lg gap-3 text-[hsl(var(--background))] font-body text-[13px] tracking-[0.15em] uppercase hover:text-[hsl(var(--charcoal))] hover:bg-[hsl(var(--background))] transition-colors duration-300"
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
              className="group rounded-lg relative overflow-hidden cursor-pointer hover-lift"
            >
              {/* Image */}
              <div className=" overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full rounded-lg h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
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

                  {/* <span className="font-display text-5xl text-[hsl(var(--cream)/0.1)] font-bold">
                    {project.year}
                  </span> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 lg:hidden flex justify-end"
        >
          <Link
            href="/services"
            className="group flex items-center px-6 sm:px-7 py-3 border border-[hsl(var(--background))] rounded-lg gap-3 text-[hsl(var(--background))] font-body text-[13px] tracking-[0.15em] uppercase hover:text-[hsl(var(--secondary))] transition-colors duration-300"
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

export default CommercialSection;
