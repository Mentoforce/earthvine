"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { arapey, jost } from "@/app/layout";

const uspItems = [
  {
    icon: "/icons/first.png",
    title: "Premium Materials",
    subtitle: "Sourced with care",
  },
  {
    icon: "/icons/second.png",
    title: "100% Customized designs",
    subtitle: "Made to last",
  },
  {
    icon: "/icons/third.png",
    title: "On-time Delivery",
    subtitle: "You will never wait",
  },
  {
    icon: "/icons/forth.png",
    title: "Transparent Pricing",
    subtitle: "No hidden charges",
  },
];

export default function USPSection() {
  return (
    <section className="bg-[#FFF1E5]">
      <div className="mx-auto max-w-8xl px-6 mb-5 lg:px-18">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-10
            lg:gap-14
            py-8
            lg:py-10
          "
        >
          {uspItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                flex
                items-start
                gap-5
              "
            >
              {/* Icon */}

              <div className="shrink-0 mt-1">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Text */}

              <div>
                <h3
                  className={`
                    ${arapey.className}
                    text-[#795547]
                    text-[22px]
                    leading-none
                    font-normal
                  `}
                >
                  {item.title}
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-3
                    text-[#504E4C]
                    text-[15px]
                    font-medium
                    leading-[1.3]
                  `}
                >
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
