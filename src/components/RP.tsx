"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { playfairDisplay, jost } from "@/app/layout";

import bedroom from "../../public/new/RP1.png";
import commercial from "../../public/new/RP4.png";
import kitchen from "../../public/new/RP2.png";
import terrace from "../../public/new/RP3.png";

const projects = [
  {
    title: "Modern Bedroom",
    image: bedroom,
    rotate: -2,
    textRotate: -16,
    hoverRotate: -8,
    className: "left-[10%] top-[195px] w-[360px]",
  },
  {
    title: "Commercial Spaces",
    image: commercial,
    rotate: 4,
    textRotate: 9,
    hoverRotate: 9,
    className: "left-[29%] top-[225px] w-[350px]",
  },
  {
    title: "Modular kitchen",
    image: kitchen,
    rotate: -4,
    textRotate: -6,
    hoverRotate: -7,
    className: "left-[49%] top-[200px] w-[350px]",
  },
  {
    title: "Terrace Garden",
    image: terrace,
    rotate: 6,
    textRotate: 8,
    hoverRotate: 8,
    className: "left-[69%] top-[225px] w-[350px]",
  },
];

const RecentProjects = () => {
  return (
    <section className="relative w-full bg-[#F7F2EC]">
      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="relative hidden h-[690px] w-full md:block">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            absolute
            left-1/2
            top-[50px]
            z-20
            -translate-x-1/2
            text-center
          "
        >
          <h2
            className={`
              ${playfairDisplay.className}
              m-0
              whitespace-nowrap
              text-[41px]
              font-bold
              leading-none
              text-[#795547]
              lg:text-[45px]
            `}
          >
            OUR RECENT PROJECTS
          </h2>

          <p
            className={`
              ${jost.className}
              m-0
              mt-[14px]
              whitespace-nowrap
              text-[20px]
              font-medium
              leading-[1.45]
              text-[#504E4C]
              lg:text-[24px]
            `}
          >
            Explore Our Recently Completed
            <br />
            Interior Projects
          </p>
        </motion.div>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 35,
              rotate: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: project.rotate,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15 + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.015,
              rotate: project.hoverRotate,
              zIndex: 50,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className={`
      absolute
      cursor-pointer
      border-0
      p-0
      ${project.className}
    `}
          >
            <div
              className="
        relative
        aspect-square
        w-full
        overflow-visible
        border-0
        p-0
        m-0
      "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={100}
                priority={index < 2}
                sizes="360px"
                className="
          block
          h-full
          w-full
          border-0
          object-cover
          p-0
          m-0
        "
              />
            </div>

            <div
              className={`
    ${playfairDisplay.className}
    mt-[-8px]
    w-full
    text-center
    text-[20px]
    font-bold
    leading-none
    text-[#795547]
    lg:text-[24px]
  `}
              style={{
                transform: `rotate(${project.textRotate}deg)`,
              }}
            >
              {project.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="px-5 pb-16 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="pt-12 text-center"
        >
          <h2
            className={`
              ${playfairDisplay.className}
              m-0
              text-[34px]
              font-bold
              leading-[1.05]
              text-[#795547]
            `}
          >
            OUR RECENT PROJECTS
          </h2>

          <p
            className={`
              ${jost.className}
              m-0
              mt-4
              text-[17px]
              font-medium
              leading-[1.45]
              text-[#504E4C]
            `}
          >
            Explore Our Recently Completed
            <br />
            Interior Projects
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
                rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: project.rotate,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileTap={{
                scale: 1.02,
              }}
              className="w-[88%]"
            >
              <div
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  border-0
                  p-0
                  m-0
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  sizes="90vw"
                  className="
                    block
                    h-full
                    w-full
                    border-0
                    object-cover
                    p-0
                    m-0
                  "
                />
              </div>

              <div
                className={`
                  ${playfairDisplay.className}
                  mt-3
                  text-center
                  text-[20px]
                  font-bold
                  leading-none
                  text-[#795547]
                `}
              >
                {project.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
