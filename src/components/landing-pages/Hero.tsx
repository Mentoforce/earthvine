"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { arapey, jost } from "@/lib/fonts";
// import LeadForm from "./LeadForm";
import StatsCard from "./StatsCard";
import LeadForm from "./shared/LeadForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-360 px-6 sm:px-8 lg:px-10 py-14 md:py-20 lg:py-15">
        <div
          className="
            grid
            items-center
            gap-10
            lg:gap-20
            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-175"
          >
            <h1
              className={`
                ${arapey.className}
                text-[#3C2A20]
                font-normal
                leading-[1.2]
                text-5xl
                sm:text-6xl
                lg:text-[71px]
                [text-shadow:3px_3px_10px_#FFF]
                [-webkit-text-stroke:1px_#3C2A20]
              `}
            >
              Best Interior Designer
              <br />
              <span className="italic">in Delhi</span>
            </h1>

            <p
              className={`
                ${jost.className}
                mt-6
                max-w-155
                text-[#3C2A20]
                text-lg
                md:text-xl
                lg:text-[26px]
                font-medium
                leading-[1]
                [text-shadow:7px_0_75px_#E0C49E]
              `}
            >
              Transform Your Home into a Beautiful Living Space
            </p>

            <p
              className={`
                ${jost.className}
                mt-2
                max-w-155
                text-[#3C2A20]/90
                text-base
                md:text-lg
                lg:text-[21px]
                leading-[1.5]
              `}
            >
              Earthvine creates customised and functional interiors for homes,
              apartments, villas and offices using premium materials,
              transparent pricing and timely project delivery.
            </p>

            {/* CTA */}

            <a
              href="#getquote"
              className={`
                ${arapey.className}
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#795547]
                px-6
                py-3
                text-xl
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:bg-[#68493D]
                hover:-translate-y-1
                hover:shadow-xl
                mt-5
              `}
            >
              <Image
                src="/icons/send.svg"
                alt="Send"
                width={17}
                height={17}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

              <span>Get Free Quote</span>
            </a>

            {/* Stats */}

            <StatsCard />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex justify-center lg:justify-end"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
