"use client";

import { motion, useInView } from "framer-motion";
import {
  LampCeiling,
  Sofa,
  Trees,
  Compass,
  Sparkles,
  CircleCheck,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { jost, playfairDisplay } from "@/lib/fonts";

export default function About() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const processRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen lg:mt-20 mt-2">
      {/* ====== HERO ====== */}
      <section className="w-full overflow-hidden bg-[#F8F4EE]">
        <div className="mx-auto w-full max-w-full">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[46%_54%]
            "
          >
            {/* =====================================================
          LEFT — HERO CONTENT
      ====================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
  flex
  min-h-0
  flex-col
  justify-center
  mt-17
  lg:mt-0
  px-7
  py-8
  sm:min-h-[540px]
  sm:px-10
  sm:py-14
  md:min-h-[580px]
  md:px-14
  lg:min-h-[722px]
  lg:px-[60px]
  xl:px-[70px]
  max-sm:justify-start
  max-sm:py-7
"
            >
              <div className="w-full max-w-[540px]">
                {/* HEADING */}
                <h1
                  className={`${playfairDisplay.className}
                    font-display
                    text-[44px]
                    font-bold
                    italic
                    leading-[1.08]
                    tracking-[-0.02em]
                    text-[#795547]
                    sm:text-[50px]
                    md:text-[56px]
                    lg:text-[65px]
                    lg:leading-normal`}
                >
                  Crafting Spaces
                  <br />
                  with Soul
                </h1>

                {/* DESCRIPTION */}
                <p
                  className={`${jost.className}
              mt-6
              max-w-[510px]
              font-body
              text-[14px]
              font-medium
              leading-[1.6]
              text-[#545454]
              sm:text-[16px]
              md:text-[18px]
              lg:text-[25px]
              lg:leading-[1.75483]`}
                >
                  Over 9+ years of transforming spaces into stories - blending
                  craftsmanship with modern sensibility.
                </p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`
              ${playfairDisplay.className}
              mt-7
              flex
              h-[54px]
              w-[190px]
              items-center
              justify-center
              rounded-[3.57px]
              bg-[#1F1F1F]
              px-6
              text-[15px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#795547]
              active:scale-[0.98]

              sm:h-[58px]
              sm:w-[220px]
              sm:text-[17px]

              lg:h-[68.77px]
              lg:w-[269.572px]
              lg:text-[21.423px]
            `}
                >
                  Start Project
                </Link>
              </div>
            </motion.div>

            {/* =====================================================
          RIGHT — IMAGE COLLAGE
      ====================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                w-full
                px-3
                pb-3
                sm:px-4
                sm:pb-4
                lg:px-3
                lg:pb-3
              "
            >
              <div
                className="
                  grid
                  h-[420px]
                  w-full
                  grid-cols-2
                  gap-3
                  sm:h-[500px]
                  md:h-[560px]
                  lg:h-[722px]
                "
              >
                {/* LEFT COLUMN */}
                <div
                  className="
                    grid
                    min-h-0
                    grid-rows-[0.72fr_1.28fr]
                    gap-3
                  "
                >
                  {/* IMAGE 1 */}
                  <div
                    className="
                      relative
                      min-h-0
                      overflow-hidden
                      rounded-[9px]
                    "
                  >
                    <Image
                      src="/new/ab1.png"
                      alt="Earthvine interior"
                      fill
                      priority
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover"
                    />
                  </div>

                  {/* IMAGE 2 */}
                  <div
                    className="
                      relative
                      min-h-0
                      overflow-hidden
                      rounded-[9px]
                    "
                  >
                    <Image
                      src="/new/ab2.png"
                      alt="Earthvine interior"
                      fill
                      priority
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div
                  className="
                    grid
                    min-h-0
                    grid-rows-[1.08fr_0.92fr]
                    gap-3
                  "
                >
                  {/* IMAGE 3 */}
                  <div
                    className="
                      relative
                      min-h-0
                      overflow-hidden
                      rounded-[9px]
                    "
                  >
                    <Image
                      src="/new/ab3.png"
                      alt="Earthvine interior"
                      fill
                      priority
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover"
                    />
                  </div>

                  {/* IMAGE 4 */}
                  <div
                    className="
                      relative
                      min-h-0
                      overflow-hidden
                      rounded-[9px]
                    "
                  >
                    <Image
                      src="/new/ab4.png"
                      alt="Earthvine interior"
                      fill
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STORY================= */}
      <section className="w-full overflow-hidden lg:pt-10">
        {/* ================= DESKTOP ================= */}
        <div className="hidden w-full lg:block">
          <div className="relative mx-auto w-full max-w-[1530px]">
            {/* BACKGROUND / GRID IMAGE */}
            <Image
              src="/new/ab5.png"
              alt="Earthvine Interior Design"
              width={1442}
              height={775}
              priority
              className="block w-full h-[700px] object-fill"
            />

            {/* ================= STORY CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
              absolute
              left-[5%]
              top-[8%]
              w-[39%]
              pr-20
            "
            >
              {/* HEADING */}
              <h2
                className={`
                  ${playfairDisplay.className}
                  text-[45px]
                  font-normal
                  leading-normal
                  text-[#3C2A20]
                `}
              >
                Where Vision Meets Craft
              </h2>

              {/* BODY */}
              <div
                className={`
                  ${jost.className}
                  mt-4
                  space-y-6
                  text-[24px]
                  font-normal
                  leading-[160%]
                  text-[#504E4C]
                `}
              >
                {/* <p>
                  Earthvine Interiors was founded with a simple belief — that
                  every space has a story waiting to be told. With over 12 years
                  of experience in residential and commercial design, we&apos;ve
                  transformed more than 150 spaces across India.
                </p>

                <p>
                  Our team of passionate designers, architects, and artisans
                  work together to create environments that are not just
                  visually stunning but deeply functional.
                </p>

                <p>
                  From luxurious living rooms to modern corporate offices, from
                  serene bedrooms to vibrant restaurant interiors — we approach
                  each project with fresh eyes and unwavering attention to
                  detail.
                </p> */}
                <p>
                  Founded by Abhishek Pasari and Chanderkant Pasari in 2017,
                  Earthvine Design studio is a full-service interior design firm
                  located in Delhi NCR. Based on solid concepts, design thinking
                  and execution excellence, we provide stunning visuals coupled
                  with deeply functional, personalised interiors.
                </p>
                <p>
                  We respect great design—shape, colour, texture and all—but it
                  should do more than just lift the eye. We combine artistic
                  vision with technical expertise and functionality to deliver
                  timeless, efficient and elegant spaces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div className="px-6 py-14 sm:px-10 sm:py-16">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h2
                className={`
                  ${playfairDisplay.className}
                  text-[34px]
                  font-normal
                  leading-[1.15]
                  text-[#3C2A20]
                  sm:text-[40px]
                `}
              >
                Where Vision Meets Craft
              </h2>

              <div
                className={`
                  ${jost.className}
                  mt-5
                  space-y-6
                  text-[16px]
                  font-normal
                  leading-[160.2%]
                  text-[#504E4C]
                  sm:text-[18px]
                `}
              >
                {/* <p>
                  Earthvine Interiors was founded with a simple belief — that
                  every space has a story waiting to be told. With over 12 years
                  of experience in residential and commercial design, we&apos;ve
                  transformed more than 150 spaces across India.
                </p>

                <p>
                  Our team of passionate designers, architects, and artisans
                  work together to create environments that are not just
                  visually stunning but deeply functional.
                </p>

                <p>
                  From luxurious living rooms to modern corporate offices, from
                  serene bedrooms to vibrant restaurant interiors — we approach
                  each project with fresh eyes and unwavering attention to
                  detail.
                </p> */}
                <p>
                  Founded by Abhishek Pasari and Chanderkant Pasari in 2017,
                  Earthvine Design studio is a full-service interior design firm
                  located in Delhi NCR. Based on solid concepts, design thinking
                  and execution excellence, we provide stunning visuals coupled
                  with deeply functional, personalised interiors.
                </p>
                <p>
                  We respect great design—shape, colour, texture and all—but it
                  should do more than just lift the eye. We combine artistic
                  vision with technical expertise and functionality to deliver
                  timeless, efficient and elegant spaces.
                </p>
              </div>
            </motion.div>

            {/* MOBILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                mt-10
                aspect-square
                w-full
                overflow-hidden
                rounded-[4px]
              "
            >
              <Image
                src="/new/ab6.png"
                alt="Earthvine Interior Design"
                fill
                sizes="
                  (max-width: 640px) calc(100vw - 48px),
                  calc(100vw - 80px)
                "
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-[#F8F4EE]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1480px]
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
            md:py-16
            lg:px-16
            lg:py-[60px]
            xl:px-[70px]
            2xl:px-[80px]
          "
        >
          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              mb-10
              flex
              items-center
              gap-4
              sm:mb-12
              sm:gap-5
              lg:mb-[55px]
              lg:gap-[14px]
            "
          >
            {/* LINE */}
            <div
              className="
                h-[2px]
                w-[55px]
                shrink-0
                bg-[#3C2A20]
                sm:w-[70px]
                lg:w-[85.714px]
              "
            />

            {/* TITLE */}
            <h2
              className={`
                ${playfairDisplay.className}
                text-[34px]
                font-semibold
                leading-normal
                text-[#3C2A20]
                sm:text-[40px]
                md:text-[44px]
                lg:text-[49.714px]
              `}
            >
              Our Services
            </h2>
          </motion.div>

          {/* ================= SERVICES ================= */}
          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:gap-12
              md:grid-cols-3
              md:gap-8
              lg:gap-[55px]
              xl:gap-[70px]
              2xl:gap-[90px]
            "
          >
            {[
              {
                icon: "/new/icons/lighting.png",
                title: "Lighting Design",
                desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.",
              },
              {
                icon: "/new/icons/interior.png",
                title: "Interior Design",
                desc: "From concept to completion, we oversee every detail to bring your vision to life efficiently.",
              },
              {
                icon: "/new/icons/outdoor.png",
                title: "Outdoor Design",
                desc: "Celebrate the changing seasons with our seasonal outdoor decor services.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="
                  flex
                  items-start
                  gap-4
                  sm:gap-5
                  lg:gap-[20px]
                "
              >
                {/* ================= ICON ================= */}
                <div
                  className="
                    relative
                    h-[40px]
                    w-[40px]
                    shrink-0
                    sm:h-[46px]
                    sm:w-[46px]
                    lg:h-[52px]
                    lg:w-[52px]
                  "
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes="
                      (max-width: 640px) 48px,
                      (max-width: 1024px) 54px,
                      62px
                    "
                    className="object-contain"
                  />
                </div>

                {/* ================= TEXT ================= */}
                <div className="min-w-0 flex-1">
                  <h3
                    className={`
                      ${playfairDisplay.className}
                      text-[21px]
                      font-semibold
                      leading-normal
                      text-[#795547]
                      sm:text-[23px]
                      md:text-[22px]
                      lg:text-[25.714px]
                    `}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`
                      ${jost.className}
                      mt-2
                      max-w-[360px]
                      text-[14px]
                      font-medium
                      leading-[1.65]
                      text-[#545454]
                      sm:mt-3
                      sm:text-[15px]
                      md:text-[15px]
                      lg:mt-[10px]
                      lg:text-[18px]
                      lg:leading-[165%]
                    `}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full bg-[#F5F5F5] lg:py-10">
        <div
          className="
      mx-auto
      w-full
      max-w-[1550px]
      px-6
      py-10
      sm:px-10
      md:px-14
      lg:px-[40px]
      lg:pl-[88px]
      lg:pr-[40px]
      lg:py-[39px]
    "
        >
          <div
            className="
              grid
              w-full
              items-stretch
              gap-20
              lg:grid-cols-[40%_60%]
              lg:gap-0
              lg:min-h-[620px]
            "
          >
            {/*LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
          relative
          w-full
          overflow-hidden
          rounded-[2px]

          /* MOBILE */
          aspect-[4/5]

          /* DESKTOP
             Grid row is determined by right content,
             image stretches to exactly the same height.
          */
          lg:aspect-auto
          lg:h-full
          lg:min-h-0
          lg:self-stretch
        "
            >
              <Image
                src="/new/ab8.png"
                alt="Earthvine Living Room"
                fill
                priority
                sizes="
                  (max-width: 240px) 90vw,
                  (max-width: 624px) 80vw,
                  23vw
                "
                className="object-cover"
              />
            </motion.div>

            {/* =====================================================
          RIGHT — WHAT DRIVES US
      ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
          flex
          flex-col
          lg:pl-[80px]
          xl:pl-[90px]
        "
            >
              {/* HEADING */}
              <h2
                className="
            font-display
            text-[36px]
            font-semibold
            leading-normal
            text-[#3C2A20]

            sm:text-[40px]
            md:text-[42px]
            lg:text-[45px]
          "
              >
                What Drives Us
              </h2>

              {/* =================================================
            TIMELINE
        ================================================== */}
              <div
                className="
            mt-10
            sm:mt-12
            lg:mt-[55px]
          "
              >
                {[
                  {
                    icon: Compass,
                    title: "Vision",
                    desc: "We see potential where others see walls. Every space is a canvas waiting to be transformed into something extraordinary.",
                  },
                  {
                    icon: Sparkles,
                    title: "Craft",
                    desc: "Meticulous attention to detail in every material selection, finish, and placement. We believe the magic is in the details.",
                  },
                  {
                    icon: CircleCheck,
                    title: "Trust",
                    desc: "Transparent processes and honest communication from blueprint to reality. Your dream is our commitment.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === 2;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.18,
                        duration: 0.6,
                      }}
                      className={`
                  relative
                  grid
                  grid-cols-[61.714px_1fr]
                  gap-6

                  ${!isLast ? "mb-[36px]" : ""}
                `}
                    >
                      {/* =================================================
                    CIRCLE + CONNECTOR
                ================================================== */}
                      <div className="relative flex justify-center">
                        {/* CIRCLE */}
                        <div
                          className="
                      relative
                      z-10
                      flex
                      h-[61.714px]
                      w-[61.714px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#8A604D]
                    "
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        {/* CONNECTOR */}
                        {!isLast && (
                          <div
                            className="
                        absolute
                        left-1/2
                        top-[75px]
                        h-[calc(100%+21px)]
                        w-px
                        -translate-x-1/2
                        bg-[#795547]
                      "
                          />
                        )}
                      </div>

                      {/* =================================================
                    CONTENT
                ================================================== */}
                      <div className="min-w-0">
                        <h3
                          className="
                      font-body
                      text-[22px]
                      font-bold
                      leading-normal
                      text-[#795547]

                      sm:text-[24px]
                      lg:text-[25.714px]
                    "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                      mt-3
                      max-w-[620px]
                      font-body
                      text-[16px]
                      font-medium
                      leading-[1.652]
                      text-[#545454]

                      sm:text-[17px]
                      md:text-[18px]
                      lg:text-[20.571px]
                    "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FROM CONCEPT TO REALITY */}
      <section className="w-full overflow-hidden bg-[#F7F2EC]">
        <div
          className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-8
          sm:px-8
          sm:py-10
          md:px-10
          lg:px-12
          lg:py-6
          xl:px-0
        "
        >
          {/* =====================================================
        HEADING
    ====================================================== */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`
              ${playfairDisplay.className}
              text-center
              text-[32px]
              font-bold
              leading-[1.4]
              text-[#3C2A20]
              sm:text-[36px]
              md:text-[40px]
              lg:text-[45.211px]
            `}
          >
            From Concept to Reality
          </motion.h2>

          {/* =====================================================
        DESKTOP / TABLET PROCESS
    ====================================================== */}
          <div
            className="
              relative
              mx-auto
              mt-1
              w-full
              md:mt-2
              lg:mt-1
              lg:h-[850px]
              lg:max-w-[1200px]
              xl:h-[850px]
            "
          >
            {/* ===================================================
          CENTRAL FLOOR PLAN IMAGE
      ==================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                hidden
                lg:block
                mx-auto
                h-[520px]
                w-[255px]
                sm:h-[620px]
                sm:w-[305px]
                md:h-[700px]
                md:w-[344px]
                lg:absolute
                lg:left-1/2
                lg:top-0
                lg:h-[764.231px]
                lg:w-[374.861px]
                lg:-translate-x-1/2
              "
            >
              <Image
                src="/new/abb.png"
                alt="Earthvine interior design floor plan"
                fill
                priority
                sizes="
                  (max-width: 640px) 255px,
                  (max-width: 768px) 305px,
                  (max-width: 1024px) 344px,
                  375px
                "
                className="object-contain"
              />
            </motion.div>

            {/* ===================================================
          DISCOVER
      ==================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="
                hidden
                lg:absolute
                lg:left-0
                lg:top-[95px]
                lg:flex
                lg:h-[181px]
                lg:w-[349px]
                lg:items-center
                lg:rounded-r-[115px]
                lg:bg-[#FEF2E0]
              "
            >
              {/* NUMBER CIRCLE */}
              <div
                className="
            absolute
            right-[300px]
            top-1/2
            z-10
            flex
            h-[118px]
            w-[118px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border-[16.577px]
            border-[#FFFBF3]
            bg-[#795547]
          "
              >
                <span
                  className={`
              ${playfairDisplay.className}
              text-[38px]
              font-medium
              leading-none
              text-white
            `}
                >
                  1
                </span>
              </div>

              {/* CONTENT */}
              <div className="ml-[77px] w-[215px]">
                <h3
                  className={`
              ${playfairDisplay.className}
              text-[26px]
              font-medium
              leading-[22.605px]
              text-[#000]
            `}
                >
                  Discover
                </h3>

                <p
                  className={`
              ${jost.className}
              mt-[13px]
              text-[16.577px]
              font-normal
              leading-[24.112px]
              text-[#717171]
            `}
                >
                  We listen to your vision, understand your lifestyle, and study
                  the space.
                </p>
              </div>
            </motion.div>

            {/* ===================================================
          DESIGN
      ==================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
          hidden

          lg:absolute
          lg:right-0
          lg:top-[95px]
          lg:flex
          lg:h-[180.843px]
          lg:w-[348.876px]
          lg:items-center
          lg:rounded-l-[115.287px]
          lg:bg-[#FEF2E0]
        "
            >
              {/* CONTENT */}
              <div className="ml-[42px] w-[215px]">
                <h3
                  className={`
              ${playfairDisplay.className}
              text-[26px]
              font-medium
              leading-[22.605px]
              text-[#000]
            `}
                >
                  Design
                </h3>

                <p
                  className={`
              ${jost.className}
              mt-[13px]
              text-[16.577px]
              font-normal
              leading-[24.112px]
              text-[#717171]
            `}
                >
                  Our team creates detailed 3D visualizations and mood boards
                  for your approval.
                </p>
              </div>

              {/* NUMBER CIRCLE */}
              <div
                className="
            absolute
            left-[300px]
            top-1/2
            z-10
            flex
            h-[117.548px]
            w-[117.548px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border-[16.577px]
            border-[#FFFBF3]
            bg-[#795547]
          "
              >
                <span
                  className={`
              ${playfairDisplay.className}
              text-[38px]
              font-medium
              leading-none
              text-white
            `}
                >
                  2
                </span>
              </div>
            </motion.div>

            {/* ===================================================
          DEVELOP
      ==================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                hidden
                lg:absolute
                lg:left-0
                lg:top-[375px]
                lg:flex
                lg:h-[180.843px]
                lg:w-[348.876px]
                lg:items-center
                lg:rounded-r-[115.287px]
                lg:bg-[#FEF2E0]
              "
            >
              {/* CONTENT */}
              <div className="ml-[77px] w-[215px]">
                <h3
                  className={`
              ${playfairDisplay.className}
              text-[26px]
              font-medium
              leading-[22.605px]
              text-[#000]
            `}
                >
                  Develop
                </h3>

                <p
                  className={`
              ${jost.className}
              mt-[13px]
              text-[16.577px]
              font-normal
              leading-[24.112px]
              text-[#717171]
            `}
                >
                  Your space is revealed - on time, on budget, beyond
                  expectations.
                </p>
              </div>

              {/* NUMBER CIRCLE */}
              <div
                className="
            absolute
            right-[300px]
            top-1/2
            z-10
            flex
            h-[117.548px]
            w-[117.548px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border-[16.577px]
            border-[#FFFBF3]
            bg-[#795547]
          "
              >
                <span
                  className={`
              ${playfairDisplay.className}
              text-[38px]
              font-medium
              leading-none
              text-white
            `}
                >
                  3
                </span>
              </div>
            </motion.div>

            {/* ===================================================
          DELIVER
      ==================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
          hidden

          lg:absolute
          lg:right-0
          lg:top-[375px]
          lg:flex
          lg:h-[180.843px]
          lg:w-[348.876px]
          lg:items-center
          lg:rounded-l-[115.287px]
          lg:bg-[#FEF2E0]
        "
            >
              {/* CONTENT */}
              <div className="ml-[52px] w-[215px]">
                <h3
                  className={`
              ${playfairDisplay.className}
              text-[26px]
              font-medium
              leading-[22.605px]
              text-[#000]
            `}
                >
                  Deliver
                </h3>

                <p
                  className={`
              ${jost.className}
              mt-[13px]
              text-[16.577px]
              font-normal
              leading-[24.112px]
              text-[#717171]
            `}
                >
                  Your space is revealed - on time, on budget, beyond
                  expectations.
                </p>
              </div>

              {/* NUMBER CIRCLE */}
              <div
                className="
            absolute
            left-[300px]
            top-1/2
            z-10
            flex
            h-[117.548px]
            w-[117.548px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border-[16.577px]
            border-[#FFFBF3]
            bg-[#795547]
          "
              >
                <span
                  className={`
              ${playfairDisplay.className}
              text-[38px]
              font-medium
              leading-none
              text-white
            `}
                >
                  4
                </span>
              </div>
            </motion.div>
          </div>

          {/* MOBILE / TABLET - Alternating process layout*/}
          <div className="mt-5 lg:hidden">
            {/*DISCOVER*/}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                  relative
                  ml-[5%]
                  flex
                  min-h-[82px]
                  w-[75%]
                  items-center
                  rounded-r-[70px]
                  bg-[#FEF2E0]
                  pl-[68px]
                  pr-5
                  py-6
                  sm:min-h-[100px]
                  sm:ml-[5%]
                  sm:pl-[82px]
                  sm:pr-5
                "
            >
              {/* NUMBER */}
              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  z-10
                  flex
                  h-[64px]
                  w-[64px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[9px]
                  border-[#FFFBF3]
                  bg-[#795547]
                  sm:h-[78px]
                  sm:w-[78px]
                  sm:border-[11px]
                "
              >
                <span
                  className={`
                    ${playfairDisplay.className}
                    text-[26px]
                    font-medium
                    leading-none
                    text-white
                    sm:text-[29px]
                  `}
                >
                  1
                </span>
              </div>

              <div className="min-w-0">
                <h3
                  className={`
                    ${playfairDisplay.className}
                    text-[20px]
                    font-medium
                    leading-none
                    text-[#000]
                    sm:text-[22px]
                  `}
                >
                  Discover
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-2
                    text-[13px]
                    font-normal
                    leading-[1.35]
                    text-[#717171]
                    sm:text-[11px]
                  `}
                >
                  We listen to your vision, understand your lifestyle, and study
                  the space.
                </p>
              </div>
            </motion.div>

            {/*DESIGN*/}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                relative
                ml-auto
                mr-[5%]
                mt-2
                flex
                min-h-[82px]
                w-[75%]
                items-center
                rounded-l-[70px]
                bg-[#FEF2E0]
                pl-10
                pr-[68px]
                py-6
                sm:mr-[5%]
                sm:min-h-[100px]
                sm:pr-[82px]
              "
            >
              <div className="min-w-0">
                <h3
                  className={`
                    ${playfairDisplay.className}
                    text-[20px]
                    font-medium
                    leading-none
                    text-[#000]
                    sm:text-[22px]
                  `}
                >
                  Design
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-2
                    text-[13px]
                    font-normal
                    leading-[1.35]
                    text-[#717171]
                    sm:text-[11px]
                  `}
                >
                  Our team creates detailed 3D visualizations and mood boards
                  for your approval.
                </p>
              </div>

              {/* NUMBER */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  z-10
                  flex
                  h-[64px]
                  w-[64px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[9px]
                  border-[#FFFBF3]
                  bg-[#795547]
                  sm:h-[78px]
                  sm:w-[78px]
                  sm:border-[11px]
                "
              >
                <span
                  className={`
                    ${playfairDisplay.className}
                    text-[26px]
                    font-medium
                    leading-none
                    text-white
                    sm:text-[29px]
                  `}
                >
                  2
                </span>
              </div>
            </motion.div>

            {/*FLOOR PLAN*/}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                  relative
                  mx-auto
                  my-2
                  h-[320px]
                  w-[145px]
                  sm:my-3
                  sm:h-[390px]
                  sm:w-[190px]
                  md:h-[470px]
                  md:w-[225px]
                "
            >
              <Image
                src="/new/ab7.png"
                alt="Earthvine interior design floor plan"
                fill
                sizes="
                  (max-width: 640px) 145px,
                  (max-width: 768px) 190px,
                  225px
                "
                className="object-fill"
              />
            </motion.div>

            {/*DEVELOP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                relative
                ml-[5%]
                flex
                min-h-[82px]
                w-[75%]
                items-center
                rounded-r-[70px]
                bg-[#FEF2E0]
                pl-[68px]
                pr-4
                py-6
                sm:ml-[5%]
                sm:min-h-[100px]
                sm:pl-[82px]
              "
            >
              {/* NUMBER */}
              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  z-10
                  flex
                  h-[64px]
                  w-[64px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[9px]
                  border-[#FFFBF3]
                  bg-[#795547]
                  sm:h-[78px]
                  sm:w-[78px]
                  sm:border-[11px]
                "
              >
                <span
                  className={`
                    ${playfairDisplay.className}
                    text-[26px]
                    font-medium
                    leading-none
                    text-white
                    sm:text-[29px]
                  `}
                >
                  3
                </span>
              </div>

              <div className="min-w-0">
                <h3
                  className={`
                    ${playfairDisplay.className}
                    text-[20px]
                    font-medium
                    leading-none
                    text-[#000]
                    sm:text-[22px]
                  `}
                >
                  Develop
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-2
                    text-[13px]
                    font-normal
                    leading-[1.35]
                    text-[#717171]
                    sm:text-[11px]
                  `}
                >
                  Your space is revealed - on time, on budget, beyond
                  expectations.
                </p>
              </div>
            </motion.div>

            {/* DELIVER*/}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                relative
                ml-auto
                mr-[5%]
                mt-2
                flex
                min-h-[82px]
                w-[75%]
                items-center
                rounded-l-[70px]
                bg-[#FEF2E0]
                pl-4
                pr-[68px]
                py-6
                sm:mr-[5%]
                sm:min-h-[100px]
                sm:pr-[82px]
              "
            >
              <div className="min-w-0">
                <h3
                  className={`
                    ${playfairDisplay.className}
                    text-[20px]
                    font-medium
                    leading-none
                    text-[#000]
                    sm:text-[22px]
                  `}
                >
                  Deliver
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-2
                    text-[13px]
                    font-normal
                    leading-[1.35]
                    text-[#717171]
                    sm:text-[11px]
                  `}
                >
                  Your space is revealed - on time, on budget, beyond
                  expectations.
                </p>
              </div>

              {/* NUMBER */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  z-10
                  flex
                  h-[64px]
                  w-[64px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[9px]
                  border-[#FFFBF3]
                  bg-[#795547]
                  sm:h-[78px]
                  sm:w-[78px]
                  sm:border-[11px]
                "
              >
                <span
                  className={`
                    ${playfairDisplay.className}
                    text-[26px]
                    font-medium
                    leading-none
                    text-white
                    sm:text-[29px]
                  `}
                >
                  4
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";

// export default function About() {
//   const storyRef = useRef(null);
//   const valuesRef = useRef(null);
//   const processRef = useRef(null);

//   const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
//   const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
//   const processInView = useInView(processRef, { once: true, margin: "-100px" });

//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about`);

//         if (!res.ok) {
//           console.error("Public about fetch failed:", res.status);
//           return;
//         }

//         const json = await res.json();
//         setData(json.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchAbout();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
//       {/* ====== HERO ====== */}
//       <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.05 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={data?.hero?.image || "/about/hero.jpg"}
//             alt="Interior studio"
//             fill
//             priority
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent sm:hidden" />
//           <div className="absolute inset-0 bg-linear-to-r from-black/85 to-transparent" />
//         </motion.div>

//         <div className="relative z-10 max-w-7xl sm:pl-15 h-full flex flex-col justify-end">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-4"
//           >
//             <div className="w-10 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
//               About Us
//             </span>
//           </motion.div>

//           <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
//             {data?.hero?.title1 || "Crafting Spaces"}
//           </h1>

//           <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
//             {data?.hero?.title2 || "with Soul"}
//           </h1>

//           <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
//             {data?.hero?.subtitle ||
//               "Over 12 years of transforming spaces into stories — blending craftsmanship with modern sensibility."}
//           </p>
//         </div>
//       </section>

//       {/* ====== STORY ===== */}
//       <section ref={storyRef} className="section-padding">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={storyInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5 relative"
//           >
//             <div className="aspect-3/4 relative overflow-hidden">
//               <Image
//                 src={data?.story?.image || "/about/photo.jpg"}
//                 alt="Design materials"
//                 fill
//                 className="w-full h-full rounded-lg object-cover"
//               />
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={storyInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4 }}
//               className="absolute -bottom-6 -right-4 glass-strong rounded-lg backdrop-blur-md p-6 shadow-lg"
//             >
//               <p className="font-display text-4xl sm:text-5xl text-[hsl(var(--gold))]">
//                 {data?.story?.stats?.number || "150+"}
//               </p>
//               <p className="text-[hsl(var(--muted-foreground))] font-body text-xs tracking-widest uppercase mt-1">
//                 {data?.story?.stats?.label || "Projects Completed"}
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={storyInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//               <span className="text-[hsl(var(--secondary))] text-[11px] tracking-[0.4em] uppercase font-medium">
//                 Our Story
//               </span>
//             </div>

//             <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
//               {data?.story?.heading || "Where Vision Meets Craft"}
//             </h2>

//             <div className="space-y-4 text-[hsl(var(--charcoal)/0.7)]">
//               {(
//                 data?.story?.paragraphs || [
//                   "Default paragraph 1",
//                   "Default paragraph 2",
//                 ]
//               ).map((p: string, i: number) => (
//                 <p key={i}>{p}</p>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section
//         ref={valuesRef}
//         className="section-padding bg-[hsl(var(--charcoal))]"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase font-medium">
//               Our Values
//             </span>
//           </div>

//           <h2 className="font-display text-4xl md:text-5xl text-[hsl(var(--cream))] mb-16">
//             What Drives{" "}
//             <span className="italic text-[hsl(var(--gold))]">Us</span>
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//             {(data?.values || []).map((v: any, i: number) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={valuesInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 + i * 0.15 }}
//                 className="glass-dark rounded-lg p-8"
//               >
//                 <span className="font-display text-6xl text-[hsl(var(--gold)/0.2)]">
//                   0{i + 1}
//                 </span>
//                 <h3 className="font-display text-2xl text-[hsl(var(--cream))] mt-2 mb-4">
//                   {v.title}
//                 </h3>
//                 <p className="text-[hsl(var(--cream)/0.6)] text-sm">{v.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section
//         ref={processRef}
//         className="section-padding bg-[hsl(var(--background))]"
//       >
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
//             <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
//               Our Process
//             </span>
//             <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
//           </div>
//           <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--foreground))] mb-16">
//             From Concept to{" "}
//             <span className="italic text-[hsl(var(--secondary))]">Reality</span>
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {(data?.process || []).map((step: any, i: number) => (
//               <motion.div
//                 key={i} //key={step.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={processInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 + i * 0.12 }}
//                 className="relative glass rounded-lg p-8 hover-lift group text-left"
//               >
//                 <div className="w-12 h-12 rounded-full border border-[hsl(var(--secondary)/0.3)] flex items-center justify-center mb-6 group-hover:border-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary)/0.1)] transition-all duration-500">
//                   <span className="font-body text-sm text-[hsl(var(--secondary))] font-semibold">
//                     0{i + 1}
//                   </span>
//                 </div>

//                 <h3 className="font-display text-xl text-[hsl(var(--foreground))] mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-[hsl(var(--muted-foreground))] font-body text-sm leading-relaxed">
//                   {step.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
