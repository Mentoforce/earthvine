"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { arapey, jost } from "@/app/layout";

const categories = [
  "Dining Room",
  "Bedroom",
  "Bathroom",
  "Office",
  "Kitchen",
  "Hallway",
  "Other",
];

const projects = [
  {
    title: "Living Room",
    location: "Dwarka, Delhi",
    image: "/LP/RecentProjects/1.jpg",
  },
  {
    title: "Modular Kitchen",
    location: "Gurugram",
    image: "/LP/RecentProjects/2.jpg",
  },
  {
    title: "Master Bedroom",
    location: "Noida",
    image: "/LP/RecentProjects/3.jpg",
  },
  {
    title: "Kids Bedroom",
    location: "Faridabad",
    image: "/LP/RecentProjects/4.jpg",
  },
  {
    title: "Living + Dining",
    location: "Rohini, Delhi",
    image: "/LP/RecentProjects/5.jpg",
  },
  {
    title: "Full Home",
    location: "Vasant Kunj, Delhi",
    image: "/LP/RecentProjects/6.jpg",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1650px] px-4 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className={`${jost.className}
            text-[18px]
            uppercase
            tracking-[0.18em]
            font-semibold
            text-[#795547]`}
          >
            OUR RECENT PROJECTS
          </p>

          <h2
            className={`${arapey.className}
            mt-2
            text-[32px]
            md:text-[45px]
            leading-[1.15]
            text-[#3C2A20]`}
          >
            Explore Our Recently Completed
            <br />
            Interior Projects
          </h2>
        </motion.div>

        {/* Categories */}

        {/* <div className="mt-14 flex flex-wrap justify-center gap-x-14 gap-y-6">
          {categories.map((item, i) => (
            <button
              key={item}
              className={`
                ${arapey.className}
                text-[22px]
                transition-all
                ${
                  i === 1
                    ? "text-[#5A4337] underline underline-offset-8"
                    : "text-[#A89C92] hover:text-[#5A4337]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div> */}

        {/* Grid */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                h-68
                overflow-hidden
                rounded-[26px]
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-7 left-6">
                <h3
                  className={`${jost.className}
                  text-[16px]
                  font-semibold
                  text-white`}
                >
                  {project.title}
                </h3>

                <div
                  className={`${jost.className}
                  mt-1
                  flex
                  items-center
                  gap-2
                  text-[14px]
                  text-[#D1D5DC]`}
                >
                  <MapPin size={16} fill="white" strokeWidth={1.5} />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
