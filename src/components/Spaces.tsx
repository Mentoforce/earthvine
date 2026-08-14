"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { jost, playfairDisplay } from "@/app/layout";

import kit from "../../public/new/Frame121.png";
import liv from "../../public/new/Frame120.png";
import bed from "../../public/new/Frame119.png";
import cor from "../../public/new/Frame118.png";
import war from "../../public/new/Frame117.png";
import ter from "../../public/new/Frame116.png";

const SpaceSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="w-full bg-[#F7F2EC] px-5 py-20 md:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1245.543px]">
        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div
          className="
            relative
            hidden
            md:block
            w-full
            h-[904px]
          "
        >
          {/* =====================================================
              TEXT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              absolute
              left-0
              top-0
              z-10
              w-[522px]
            "
          >
            <h2
              className={`
                ${playfairDisplay.className}
                m-0
                text-[45px]
                font-extrabold
                leading-[0.95]
                text-[#795547]
              `}
            >
              Spaces Designed to last
            </h2>

            <p
              className={`
                ${jost.className}
                m-0
                mt-4
                w-[522px]
                text-[15.314px]
                font-normal
                leading-[22.681px]
                text-[#504E4C]
              `}
            >
              Crafting homes that reflect your personality — from cozy bedrooms
              to stunning kitchens. Each space, a masterpiece. Crafting homes
              that reflect your personality — from cozy bedrooms to stunning
              kitchens. Each space, a masterpiece.
            </p>

            <Link
              href="#consultations"
              className={`
                ${playfairDisplay.className}
                mt-3
                flex
                h-[27px]
                w-[193px]
                items-center
                justify-center
                border-[0.642px]
                border-[#3C2A20]
                bg-[#F7F2EC]
                px-[15.415px]
                py-[6.423px]
                text-center
                text-[11px]
                font-normal
                leading-none
                text-[#3C2A20]
                transition-colors
                duration-300
                hover:bg-[#3C2A20]
                hover:text-[#F7F2EC]
              `}
            >
              Consult Now
            </Link>
          </motion.div>

          {/* =====================================================
              WARDROBE
              x: 534
              y: 0
              w: 300.543
              h: 276.454
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
            group
              absolute
              left-[534px]
              top-0
              w-[300.543px]
              h-[276.454px]
              overflow-hidden
            "
          >
            <Image
              src={war}
              alt="Wardrobe"
              width={300.543}
              height={276.454}
              quality={100}
              priority
              className="
                block
                w-full
                h-full
                object-fill
                transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]
              "
              sizes="301px"
            />
          </motion.div>

          {/* =====================================================
              TERRACE GARDEN
              x: right
              y: 0
              w: 393
              h: 904
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            className="
            group
              absolute
              right-0
              top-0
              w-[393px]
              h-[900px]
              overflow-hidden
            "
          >
            <Image
              src={ter}
              alt="Terrace Garden"
              width={393}
              height={904}
              quality={100}
              priority
              className="
                block
                w-full
                h-full
                object-fill
                transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]
              "
              sizes="393px"
            />
          </motion.div>

          {/* =====================================================
              BEDROOM
              x: 0
              y: 258px
              w: 522
              h: 351
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
            group
              absolute
              left-0
              top-[258px]
              w-[522px]
              h-[351px]
              overflow-hidden
            "
          >
            <Image
              src={bed}
              alt="Bedroom"
              width={522}
              height={351}
              quality={100}
              className="
                block
                w-full
                h-full
                object-fill
                transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]
              "
              sizes="522px"
            />
          </motion.div>

          {/* =====================================================
              CORPORATE

              IMPORTANT:
              Corporate bottom is aligned with Bedroom bottom.

              Bedroom:
              top 258 + height 351 = 609

              Corporate:
              top 300 + height 309 = 609
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="
            group
              absolute
              left-[534px]
              top-[300px]
              w-[300.543px]
              h-[309px]
              overflow-hidden
            "
          >
            <Image
              src={cor}
              alt="Corporate"
              width={300.543}
              height={309}
              quality={100}
              className="
                block
                w-full
                h-full
                object-fill
                transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]
              "
              sizes="301px"
            />
          </motion.div>

          {/* =====================================================
              BOTTOM ROW

              Bedroom bottom = 609

              Gap = 15px

              Bottom row = 624px
          ====================================================== */}

          {/* KITCHEN */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
            group
              absolute
              left-0
              top-[624px]
              w-[305px]
              h-[275px]
              overflow-hidden
            "
          >
            <Image
              src={kit}
              alt="Kitchen"
              width={305}
              height={275}
              quality={100}
              className="
                block
                w-full
                h-full
                object-fill
                transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]
              "
              sizes="305px"
            />
          </motion.div>

          {/* =====================================================
              LIVING ROOM

          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="
            group
              absolute
              left-[320px]
              top-[624px]
              w-[517px]
              h-[275px]
              overflow-hidden
            "
          >
            <Image
              src={liv}
              alt="Living Room"
              width={517}
              height={275}
              quality={100}
              className="
                block
                w-full
                h-full
                object-fill
                transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]
              "
              sizes="517px"
            />
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE
        ====================================================== */}

        <div className="flex flex-col gap-3 md:hidden">
          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h2
              className={`
                ${playfairDisplay.className}
                m-0
                text-[36px]
                font-extrabold
                leading-[0.95]
                text-[#795547]
              `}
            >
              Spaces Designed to last
            </h2>

            <p
              className={`
                ${jost.className}
                m-0
                mt-4
                w-full
                text-[15px]
                leading-[22.681px]
                text-[#504E4C]
              `}
            >
              Crafting homes that reflect your personality — from cozy bedrooms
              to stunning kitchens. Each space, a masterpiece. Crafting homes
              that reflect your personality — from cozy bedrooms to stunning
              kitchens. Each space, a masterpiece.
            </p>

            <Link
              href="/services"
              className={`
                ${playfairDisplay.className}
                mt-3
                flex
                h-[27px]
                w-[193px]
                items-center
                justify-center
                border-[0.642px]
                border-[#3C2A20]
                bg-[#F7F2EC]
                text-[11px]
                text-[#3C2A20]
              `}
            >
              View All Projects
            </Link>
          </motion.div>

          {/* WARDROBE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
            group
              relative
              w-full
              aspect-[300.543/276.454]
              overflow-hidden
            "
          >
            <Image
              src={war}
              alt="Wardrobe"
              fill
              quality={100}
              className="block object-fill transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
          </motion.div>

          {/* BEDROOM */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
            group
              relative
              w-full
              aspect-[522/351]
              overflow-hidden
            "
          >
            <Image
              src={bed}
              alt="Bedroom"
              fill
              quality={100}
              className="block object-fill transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
          </motion.div>

          {/* CORPORATE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
            group
              relative
              w-full
              aspect-[300.543/309]
              overflow-hidden
            "
          >
            <Image
              src={cor}
              alt="Corporate"
              fill
              quality={100}
              className="block object-fill transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
          </motion.div>

          {/* KITCHEN */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
            group
              relative
              w-full
              aspect-[305/275]
              overflow-hidden
            "
          >
            <Image
              src={kit}
              alt="Kitchen"
              fill
              quality={100}
              className="block object-fill transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
          </motion.div>

          {/* LIVING ROOM */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
            group
              relative
              w-full
              aspect-[517/275]
              overflow-hidden
            "
          >
            <Image
              src={liv}
              alt="Living Room"
              fill
              quality={100}
              className="block object-fill transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
          </motion.div>

          {/* TERRACE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="
            group
              relative
              w-full
              aspect-[393/904]
              overflow-hidden
            "
          >
            <Image
              src={ter}
              alt="Terrace Garden"
              fill
              quality={100}
              className="block object-fill transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
