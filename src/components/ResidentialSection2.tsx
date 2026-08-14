"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { jost, playfairDisplay } from "@/app/layout";

import res1 from "../../public/Res1.jpg";
import res2 from "../../public/Res2.png";
import res3 from "../../public/Res3.jpg";

const ResidentialSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="w-full overflow-hidden bg-[#F7F2EC]">
      <div
        className="
          mx-auto
          w-full
          max-w-360
          px-5
          py-18
          sm:px-9
          md:px-14
          lg:px-19
        "
      >
        {/* SECTION TITLE*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-13 flex justify-center"
        >
          <h2
            className={`
              ${playfairDisplay.className}
              w-55
              text-center
              text-[41px]
              font-bold
              italic
              leading-13
              text-[#795547]
            `}
          >
            Living
            <br />
            Redefined
          </h2>
        </motion.div>

        {/* MAIN ASYMMETRIC GRID */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-308
            grid-cols-1
            gap-8
            md:grid-cols-12
            md:gap-6
            lg:gap-6.5
          "
        >
          {/* LEFT COLUMN */}
          <div
            className="
              flex
              flex-col
              md:col-span-4
            "
          >
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                flex
                flex-col
                items-start
                pb-15
              "
            >
              <h3
                className={`
                  ${playfairDisplay.className}
                  w-87
                  text-[24px]
                  font-normal
                  leading-8
                  text-[#795547]
                `}
              >
                A better home for you and your family.
              </h3>

              <p
                className={`
                  ${jost.className}
                  mt-5
                  w-74
                  text-[15px]
                  font-normal
                  leading-[22.681px]
                  text-[#504E4C]
                `}
              >
                Crafting homes that reflect your personality — from cozy
                bedrooms to stunning kitchens. Each space, a masterpiece.
              </p>

              <Link
                href="#consultations"
                className={`
                  ${playfairDisplay.className}
                  mt-3
                  flex
                  h-7
                  w-27
                  shrink-0
                  items-center
                  justify-center
                  border-[0.642px]
                  border-[#3C2A20]
                  bg-[#F7F2EC]
                  px-4
                  py-2
                  text-center
                  text-[11px]
                  font-normal
                  text-nowrap
                  leading-[1.2]
                  text-[#3C2A20]
                  transition-all
                  duration-300
                  hover:bg-[#3C2A20]
                  hover:text-[#F7F2EC]
                `}
              >
                Consult Now
              </Link>
            </motion.div>

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
              className="
                relative
                w-full
                overflow-hidden
              "
            >
              <Image
                src={res1}
                alt="Modern residential interior"
                width={407}
                height={271}
                className="
                h-auto
                w-full
                scale-[1.06]
                object-cover
                transition-transform
                duration-[1.2s]
                ease-out
                hover:scale-[1.09]
              "
              />
            </motion.div>
          </div>

          {/* =====================================
              CENTER COLUMN
          ====================================== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className="
              relative
              w-full
              md:col-span-4
            "
          >
            <div
              className="
                relative
                aspect-[368.016/552.902]
                w-full
                overflow-hidden
              "
            >
              <Image
                src={res2}
                alt="Luxury residential interior"
                fill
                quality={100}
                className="
                object-cover
                transition-transform
                duration-[1.2s]
                ease-out
                hover:scale-[1.03]
              "
                sizes="
                (max-width: 767px) 100vw,
                (max-width: 1024px) 33vw,
                368px
              "
              />
            </div>
          </motion.div>

          {/* =====================================
              RIGHT COLUMN
          ====================================== */}

          <div
            className="
              flex
              flex-col
              md:col-span-4
            "
          >
            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.45,
              }}
              className="
                relative
                w-full
                overflow-hidden
              "
            >
              <Image
                src={res3}
                alt="Luxury living room interior"
                width={407}
                height={271}
                className="
                h-auto
                w-full
                scale-[1.06]
                object-cover
                transition-transform
                duration-[1.2s]
                ease-out
                hover:scale-[1.09]
              "
              />
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="
                flex
                flex-col
                items-start
                pt-8
              "
            >
              <h3
                className={`
                  ${playfairDisplay.className}
                  w-87
                  text-[24px]
                  font-normal
                  leading-8
                  text-[#795547]
                `}
              >
                Interior design from minimalist to maximalist lover
              </h3>

              <p
                className={`
                  ${jost.className}
                  mt-5
                  w-74
                  text-[15px]
                  font-normal
                  leading-[22.681px]
                  text-[#504E4C]
                `}
              >
                Crafting homes that reflect your personality — from cozy
                bedrooms to stunning kitchens. Each space, a masterpiece.
              </p>

              <Link
                href="#consultations"
                className={`
                  ${playfairDisplay.className}
                  mt-3
                  flex
                  h-7
                  w-27
                  shrink-0
                  items-center
                  justify-center
                  border-[0.642px]
                  border-[#3C2A20]
                  bg-[#F7F2EC]
                  px-4
                  py-2
                  text-center
                  text-[11px]
                  font-normal
                  text-nowrap
                  leading-[1.2]
                  text-[#3C2A20]
                  transition-all
                  duration-300
                  hover:bg-[#3C2A20]
                  hover:text-[#F7F2EC]
                `}
              >
                Consult Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSection;
