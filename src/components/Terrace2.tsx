"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { playfairDisplay, jost } from "@/app/layout";

import terraceDesktop from "../../public/new/Terraceb.png";
import terraceMobile from "../../public/new/terracemobile.jpg";

const TerraceBeyond = () => {
  return (
    <section className="w-full">
      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="relative hidden w-full md:block">
        <Image
          src={terraceDesktop}
          alt="Terrace and Beyond"
          width={1650}
          height={924}
          priority
          quality={100}
          className="
      block
      h-[52vw]
      max-h-[850px]
      w-full
      object-cover
      object-center
    "
          sizes="100vw"
        />

        {/* TEXT OVER IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
      absolute
      right-[3.5%]
      top-1/2
      flex
      w-[390px]
      -translate-y-1/2
      flex-col
      items-center
      text-center
      lg:w-[420px]
    "
        >
          <h2
            className={`
              ${playfairDisplay.className}
              m-0
              text-[52px]
              font-normal
              leading-[0.95]
              text-[#795547]
              lg:text-[64px]
            `}
          >
            Terrace
            <br />
            &amp; Beyond
          </h2>

          {/* DESCRIPTION */}

          <p
            className={`
              ${jost.className}
              m-0
              mt-8
              max-w-[390px]
              text-[18px]
              font-normal
              leading-[1.5]
              text-[#504E4C]
              lg:text-[20px]
            `}
          >
            Transform your terrace into a breathtaking retreat — where nature
            meets luxury design, and every sunset becomes an experience.
          </p>

          {/* BUTTON */}

          <a
            href="#consultations"
            className={`
              ${playfairDisplay.className}
              mt-8
              flex
              h-[47px]
              w-[176px]
              items-center
              justify-center
              bg-[#795547]
              text-[15px]
              font-normal
              text-white
              transition-all
              duration-300
              hover:bg-[#5f4338]
            `}
          >
            Connect now
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="block md:hidden">
        {/* MOBILE IMAGE */}

        <div className="w-full">
          <Image
            src={terraceMobile}
            alt="Terrace and Beyond"
            width={768}
            height={900}
            priority
            quality={100}
            className="block h-auto w-full"
            sizes="100vw"
          />
        </div>

        {/* TEXT BELOW IMAGE */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            flex
            w-full
            flex-col
            items-center
            px-6
            py-12
            text-center
          "
        >
          <h2
            className={`
              ${playfairDisplay.className}
              m-0
              text-[44px]
              font-normal
              leading-[0.95]
              text-[#795547]
            `}
          >
            Terrace
            <br />
            &amp; Beyond
          </h2>

          <p
            className={`
              ${jost.className}
              m-0
              mt-6
              max-w-[500px]
              text-[16px]
              font-normal
              leading-[1.55]
              text-[#504E4C]
            `}
          >
            Transform your terrace into a breathtaking retreat — where nature
            meets luxury design, and every sunset becomes an experience.
          </p>

          <a
            href="/services"
            className={`
              ${playfairDisplay.className}
              mt-7
              flex
              h-[44px]
              w-[170px]
              items-center
              justify-center
              bg-[#795547]
              text-[14px]
              font-normal
              text-white
            `}
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TerraceBeyond;
