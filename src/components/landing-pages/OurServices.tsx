"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { arapey, jost } from "@/app/layout";

const services = [
  {
    title: "Home Interior Design",
    description:
      "Complete home interior solutions tailored to your lifestyle and budget.",
    image: "/LP/OurServices/Home-Interior.jpg",
    href: "/residential/home-interior",
  },
  {
    title: "Modular Kitchen",
    description:
      "Smart, functional kitchens with premium fittings and finishes.",
    image: "/LP/OurServices/Modular-Kitchen.jpg",
    href: "/modular-kitchen",
  },
  {
    title: "Modular Wardrobe",
    description: "Custom wardrobes that maximise storage with elegant designs.",
    image: "/LP/OurServices/Modular-Wardrobe.png",
    href: "/wardrobe",
  },
  {
    title: "Office Interiors",
    description: "Productive workspaces designed for modern businesses.",
    image: "/LP/OurServices/Office-Interiors.png",
    href: "/office",
  },
  {
    title: "Turnkey Interiors",
    description: "End-to-end interior execution — from concept to completion.",
    image: "/LP/OurServices/Turnkey-Interiors.jpg",
    href: "/turnkey",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#F6F3EE] py-12 lg:py-20">
      <div className="mx-auto max-w-400 px-3 lg:px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p
            className={`
              ${jost.className}
              text-[17px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#795547]
            `}
          >
            OUR SERVICES
          </p>

          <h2
            className={`
              ${arapey.className}
              mt-3
              text-[30px]
              lg:text-[45px]
              leading-[106%]
              font-normal
              text-[#38322E]
            `}
          >
            Complete Interior Solutions for Every Space
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={index * 0.08}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-10 flex-wrap">
          {services.slice(3).map((service, index) => (
            <div key={service.title} className="w-full max-w-md">
              <ServiceCard service={service} delay={(index + 3) * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="
        overflow-hidden
        rounded-[26px]
        bg-white
        shadow-[0_4px_14px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]
      "
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      <div className="p-5">
        <h3
          className={`
            ${arapey.className}
            text-[18px]
            font-bold
            text-[#38322E]
          `}
        >
          {service.title}
        </h3>

        <p
          className={`
    ${jost.className}
    mt-2
    min-h-12
    text-[16px]
    leading-[145%]
    text-[#555557]
  `}
        >
          {service.description}
        </p>

        {/* <Link
          href={service.href}
          className={`
            ${arapey.className}
            mt-2
            inline-flex
            items-center
            gap-2
            text-[16px]
            text-[#795547]
            transition-all
            duration-300
            hover:gap-3
          `}
        >
          Explore
          <ChevronRight size={20} strokeWidth={2} />
        </Link> */}
      </div>
    </motion.div>
  );
}
