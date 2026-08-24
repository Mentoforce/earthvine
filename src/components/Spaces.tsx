"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { jost, playfairDisplay } from "@/lib/fonts";

import kit from "../../public/new/Frame121.png";
import liv from "../../public/new/Frame120.png";
import bed from "../../public/new/Frame119.png";
import cor from "../../public/new/Frame118.png";
import war from "../../public/new/Frame117.png";
import ter from "../../public/new/Frame116.png";

import kitMobile from "../../public/new/10.png";
import livMobile from "../../public/new/20.png";
import bedMobile from "../../public/new/30.png";
import corMobile from "../../public/new/40.png";
import warMobile from "../../public/new/50.png";
import terMobile from "../../public/new/60.png";

const SpaceSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="w-full bg-[#F7F2EC] px-5 py-12 md:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1245.543px]">
        {/*DESKTOP*/}

        <div
          className="
            relative
            hidden
            md:block
            w-full
            h-[904px]
          "
        >
          {/* TEXT*/}

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
              Each project that we undertake has a story to tell - one that is
              brought to life through our expertise, refined aesthetics, and
              attention to detail.
            </p>

            <Link
              href="/contact"
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
              Get Quote
            </Link>
          </motion.div>

          {/* WARDROBE*/}

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

          {/* TERRACE GARDEN */}

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

          {/* BEDROOM */}

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

          {/* CORPORATE */}

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

          {/* BOTTOM ROW*/}

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

          {/*LIVING ROOM*/}

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

        {/* MOBILE*/}

        <div className="md:hidden w-full">
          {/* MOBILE TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full text-center"
          >
            <h2
              className={`
                ${playfairDisplay.className}
                m-0
                text-[30px]
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
              Each project that we undertake has a story to tell - one that is
              brought to life through our expertise, refined aesthetics, and
              attention to detail.
            </p>

            <Link
              href="/contact"
              className={`
                ${playfairDisplay.className}
                mx-auto
                mt-5
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
              Get Quote
            </Link>
          </motion.div>

          {/* MOBILE CAROUSEL */}
          <div className="mt-5 w-full overflow-hidden">
            <div
              className="
                flex
                gap-3
                overflow-x-auto
                snap-x
                snap-mandatory
                pb-1
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {/* WARDROBE */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="
                  relative
                  h-[300px]
                  w-[88vw]
                  min-w-[88vw]
                  shrink-0
                  snap-center
                  overflow-hidden
                "
              >
                <Image
                  src={warMobile}
                  alt="Wardrobe"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="88vw"
                />
              </motion.div>

              {/* BEDROOM */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="
                  relative
                  h-[300px]
                  w-[88vw]
                  min-w-[88vw]
                  shrink-0
                  snap-center
                  overflow-hidden
                "
              >
                <Image
                  src={bedMobile}
                  alt="Bedroom"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="88vw"
                />
              </motion.div>

              {/* CORPORATE */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="
                  relative
                  h-[300px]
                  w-[88vw]
                  min-w-[88vw]
                  shrink-0
                  snap-center
                  overflow-hidden
                "
              >
                <Image
                  src={corMobile}
                  alt="Corporate"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="88vw"
                />
              </motion.div>

              {/* KITCHEN */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="
                  relative
                  h-[300px]
                  w-[88vw]
                  min-w-[88vw]
                  shrink-0
                  snap-center
                  overflow-hidden
                "
              >
                <Image
                  src={kitMobile}
                  alt="Kitchen"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="88vw"
                />
              </motion.div>

              {/* LIVING ROOM */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="
                  relative
                  h-[300px]
                  w-[88vw]
                  min-w-[88vw]
                  shrink-0
                  snap-center
                  overflow-hidden
                "
              >
                <Image
                  src={livMobile}
                  alt="Living Room"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="88vw"
                />
              </motion.div>

              {/* TERRACE */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="
                  relative
                  h-[300px]
                  w-[88vw]
                  min-w-[88vw]
                  shrink-0
                  snap-center
                  overflow-hidden
                "
              >
                <Image
                  src={terMobile}
                  alt="Terrace Garden"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="88vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
