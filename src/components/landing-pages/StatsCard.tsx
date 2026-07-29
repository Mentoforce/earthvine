"use client";

import { motion } from "framer-motion";
import { jost } from "@/app/layout";

const stats = [
  {
    value: "500+",
    label: "Happy Designs",
  },
  {
    value: "250+",
    label: "Projects Done",
  },
  {
    value: "4.9",
    label: "Google Rating",
  },
  {
    value: "7+",
    label: "Years Experience",
  },
];

export default function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
      lg:block
      hidden
        mt-12
        w-full
        max-w-135
        overflow-hidden
        rounded-[18px]
        bg-white
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
      "
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`
              ${jost.className}
              relative
              flex
              flex-col
              items-center
              justify-center
              gap-2
              px-3
              py-5
              text-center

              ${index < 2 ? "border-b border-[#F1ECE7] md:border-b-0" : ""}
            `}
          >
            {/* Desktop Divider */}
            {index !== stats.length - 1 && (
              <span
                className="
                  absolute
                  right-0
                  top-1/2
                  hidden
                  h-11
                  w-px
                  -translate-y-1/2
                  bg-[#D8C7BA]
                  md:block
                "
              />
            )}

            {/* Mobile Divider */}
            {index % 2 === 0 && (
              <span
                className="
                  absolute
                  right-0
                  top-1/2
                  h-11
                  w-px
                  -translate-y-1/2
                  bg-[#E8DFD7]
                  md:hidden
                "
              />
            )}

            <h3
              className="
                text-[17px]
                lg:text-[18px]
                font-bold
                leading-none
                tracking-tight
                text-[#795547]
              "
            >
              {item.value}
            </h3>

            <p
              className="
                text-[11px]
                lg:text-[12px]
                font-medium
                leading-[1.35]
                text-[#7A808B]
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
