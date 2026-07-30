"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { arapey, jost } from "@/app/layout";

const steps = [
  {
    title: "Consultation",
    description: "We understand your needs and requirements.",
    image: "/LP/howwework/consultation.svg",
  },
  {
    title: "Design / 3D Planning",
    description:
      "Visualize your space before execution. Our designers create customized plans.",
    image: "/LP/howwework/design.svg",
  },
  {
    title: "Material Selection",
    description: "Chosen from premium materials to give best quality.",
    image: "/LP/howwework/material.svg",
  },
  {
    title: "Execution",
    description: "Expert team brings your vision to life.",
    image: "/LP/howwework/execution.svg",
  },
  {
    title: "Handover",
    description: "We deliver your dream home on time.",
    image: "/LP/howwework/handover.svg",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#F6F3EE] py-11 lg:py-19">
      <div className="mx-auto max-w-412 px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className={`
              ${jost.className}
              uppercase
              tracking-[0.18em]
              text-[#795547]
              font-semibold
              text-[16px]
            `}
          >
            OUR 8-STEP PROCESS
          </p>

          <h2
            className={`
              ${arapey.className}
              mt-2
              text-[45px]
              text-[#3C2A20]
              leading-none
              font-normal
            `}
          >
            How We Work
          </h2>
        </motion.div>

        {/* Process */}

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3
                className={`
                  ${arapey.className}
                  mt-8
                  text-[22px]
                  font-bold
                  text-[#3C2A20]
                `}
              >
                {step.title}
              </h3>

              <p
                className={`
                  ${jost.className}
                  mt-4
                  text-[18px]
                  leading-[145%]
                  text-[#2E2E2F]
                  max-w-62
                `}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots (Static like Figma) */}
        {/* 
        <div className="mt-16 flex justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#795547]" />
          <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" />
          <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" />
        </div> */}
      </div>
    </section>
  );
}
