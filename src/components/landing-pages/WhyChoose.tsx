"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { arapey, jost } from "@/lib/fonts";

const features = [
  "Personalized Design Approach",
  "Skilled Designers & Execution Team",
  "Budget-Friendly Packages",
  "Transparent Costing",
  "100% Satisfaction Guarantee",
  "Complete Customer Support",
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-15 lg:py-19">
      <div className="mx-auto max-w-[1441px] px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.08fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Heading */}

            <p
              className={`
                ${jost.className}
                text-[16px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#795547]
              `}
            >
              WHY CHOOSE US
            </p>

            {/* Heading */}

            <h2
              className={`
                ${arapey.className}
                mt-2
                text-[38px]
                leading-[119%]
                text-[#3C2A20]
                lg:text-[45px]
              `}
            >
              We Design Spaces That
              <br />
              <span className="italic text-[#795547]">Reflect Your Style</span>
            </h2>

            {/* Paragraph */}

            <p
              className={`
                ${jost.className}
                mt-5
                max-w-155
                text-[20px]
                leading-[155%]
                text-[#4A5565]
              `}
            >
              At Earthvine, we blend aesthetics, functionality and comfort to
              create spaces that resonate with your lifestyle and budget. Our
              team of expert designers delivers exceptional results every time.
            </p>

            {/* Features */}

            <div className="mt-7 space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex w-full max-w-132 items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-[15px]
                      w-[15px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E8DBD2]
                      shrink-0
                    "
                  >
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-[#795547]"
                    />
                  </div>

                  <span
                    className={`
                      ${jost.className}
                      text-[17px]
                      font-medium
                      text-[#303339]
                    `}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[30px]">
              <Image
                src="/icons/Why2.jpg"
                alt="Earthvine Interior"
                width={800}
                height={500}
                className="h-95.5 w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -left-5
                -bottom-5.5
                w-43
                rounded-[14px]
                border
                border-[#F3F4F6]
                bg-white
                px-6
                py-4
                shadow-[0_12px_18px_rgba(0,0,0,0.30)]
              "
            >
              <h3
                className="
                  font-serif
                  text-[30px]
                  font-bold
                  leading-none
                  text-[#3C2A20]
                "
                style={{
                  fontFamily: "Crimson Text",
                }}
              >
                250+
              </h3>

              <p
                className={`
                  ${jost.className}
                  mt-2
                  text-[14px]
                  leading-[19px]
                  text-[#6A7282]
                `}
              >
                Projects Completed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
