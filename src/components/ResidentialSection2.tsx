"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { jost, playfairDisplay } from "@/lib/fonts";

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
          max-w-[1440px]
          px-0
          py-12
          sm:px-8
          sm:py-16
          lg:px-16
          lg:py-24
          xl:px-20
        "
      >
        {/* =====================================================
            SECTION TITLE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-8
            flex
            justify-center
            sm:mb-12
            lg:mb-16
          "
        >
          <h2
            className={`
              ${playfairDisplay.className}
              text-center
              font-bold
              italic
              text-[#795547]
              text-[30px]
              leading-[1.3]
              sm:text-[32px]
              lg:text-[41px]
              lg:leading-[1.27]
            `}
          >
            Living
            <br />
            Redefined
          </h2>
        </motion.div>

        {/* =====================================================
            MOBILE / TABLET LAYOUT
        ====================================================== */}
        <div className="block lg:hidden">
          {/* -------------------------------------------------
              FIRST TEXT
          -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              mx-auto
              flex
              max-w-[300px]
              flex-col
              items-center
              text-center
              mb-7
              sm:mb-9
            "
          >
            <h3
              className={`
                ${playfairDisplay.className}
                text-[#795547]
                w-full
                max-w-[350px]
                text-[21px]
                font-normal
                leading-[1.28]
                sm:text-[22px]
              `}
            >
              A better home for you and your family.
            </h3>

            <p
              className={`
                ${jost.className}
                mt-3
                w-full
                max-w-[290px]
                text-[15px]
                font-normal
                leading-[1.45]
                text-[#504E4C]
                sm:mt-4
                sm:text-[13px]
              `}
            >
              Create spaces that strike a perfect balance of aesthetics,
              functionality, and comfort.
            </p>
            {/* Crafting homes that reflect your personality — from cozy bedrooms
              to stunning kitchens. Each space, a masterpiece. */}
            <Link
              href="#consultation"
              className={`
                ${jost.className}
                mt-2.5
                inline-flex
                h-[17px]
                min-w-[63px]
                items-center
                justify-center
                border-[0.6px]
                border-[#3C2A20]
                bg-[#F7F2EC]
                px-2
                text-[10px]
                font-normal
                leading-none
                text-[#3C2A20]
                transition-colors
                duration-300
                hover:bg-[#3C2A20]
                hover:text-[#F7F2EC]
                sm:mt-4
                sm:h-7
                sm:min-w-[100px]
                sm:px-4
                sm:text-[10px]
              `}
            >
              Contact Now
            </Link>
          </motion.div>

          {/* -------------------------------------------------
              FIRST IMAGE
          -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              relative
              w-full
              overflow-hidden
              mb-6
              sm:mb-10
            "
          >
            <Image
              src={res1}
              alt="Modern residential interior"
              width={1200}
              height={800}
              priority
              className="
                block
                h-auto
                w-full
                object-cover
              "
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 100vw
              "
            />
          </motion.div>

          {/* -------------------------------------------------
              SECOND TEXT
          -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mx-auto
              flex
              max-w-[320px]
              flex-col
              items-center
              text-center
              mb-6
              sm:mb-9
            "
          >
            <h3
              className={`
                ${playfairDisplay.className}
                text-[#795547]
                w-full
                max-w-[300px]
                text-[21px]
                font-normal
                leading-[1.28]
                sm:text-[22px]
              `}
            >
              Interior design from minimalist to maximalist lover
            </h3>

            <p
              className={`
                ${jost.className}
                mt-3
                w-full
                max-w-[290px]
                text-[15px]
                font-normal
                leading-[1.45]
                text-[#504E4C]
                sm:mt-4
                sm:text-[13px]
              `}
            >
              Delivering projects with Transparency, Efficiency & On-Time
              Execution — always.
            </p>

            <Link
              href="#consultation"
              className={`
                ${jost.className}
                mt-2.5
                inline-flex
                h-[17px]
                min-w-[63px]
                items-center
                justify-center
                border-[0.6px]
                border-[#3C2A20]
                bg-[#F7F2EC]
                px-2
                text-[10px]
                font-normal
                leading-none
                text-[#3C2A20]
                transition-colors
                duration-300
                hover:bg-[#3C2A20]
                hover:text-[#F7F2EC]
                sm:mt-4
                sm:h-7
                sm:min-w-[100px]
                sm:px-4
                sm:text-[10px]
              `}
            >
              Contact Now
            </Link>
          </motion.div>

          {/* -------------------------------------------------
              SECOND IMAGE
          -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
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
              width={1200}
              height={800}
              className="
                block
                h-auto
                w-full
                object-cover
              "
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 100vw
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP LAYOUT
        ====================================================== */}
        <div
          className="
            mx-auto
            hidden
            w-full
            max-w-[1232px]
            lg:grid
            lg:grid-cols-12
            lg:gap-6
            xl:gap-7
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================= */}
          <div className="col-span-4 flex flex-col">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                flex
                flex-col
                items-start
                pb-12
                xl:pb-16
              "
            >
              <h3
                className={`
                  ${playfairDisplay.className}
                  w-full
                  max-w-[348px]
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
                  w-full
                  max-w-[296px]
                  text-[15px]
                  font-normal
                  leading-[22.68px]
                  text-[#504E4C]
                `}
              >
                Create spaces that strike a perfect balance of aesthetics,
                functionality, and comfort.
              </p>

              <Link
                href="#consultation"
                className={`
                  ${jost.className}
                  mt-3
                  flex
                  h-7
                  min-w-[108px]
                  items-center
                  justify-center
                  border-[0.642px]
                  border-[#3C2A20]
                  bg-[#F7F2EC]
                  px-4
                  text-center
                  text-[10px]
                  font-normal
                  leading-none
                  text-[#3C2A20]
                  text-nowrap
                  transition-all
                  duration-300
                  hover:bg-[#3C2A20]
                  hover:text-[#F7F2EC]
                `}
              >
                Contact Now
              </Link>
            </motion.div>

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.3,
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
                height={291}
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-[1.2s]
                  ease-out
                  hover:scale-[1.03]
                "
                sizes="
                  (max-width: 1279px) 32vw,
                  407px
                "
              />
            </motion.div>
          </div>

          {/* =================================================
              CENTER COLUMN
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            className="
              relative
              col-span-4
              w-full
              overflow-hidden
            "
          >
            <div
              className="
                relative
                h-full
                min-h-[550px]
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
                  (max-width: 1279px) 32vw,
                  368px
                "
              />
            </div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}
          <div className="col-span-4 flex flex-col">
            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
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
                src={res3}
                alt="Luxury living room interior"
                width={407}
                height={271}
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-[1.2s]
                  ease-out
                  hover:scale-[1.03]
                "
                sizes="
                  (max-width: 1279px) 32vw,
                  407px
                "
              />
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="
                flex
                flex-col
                items-start
                pt-10

                xl:pt-12
              "
            >
              <h3
                className={`
                  ${playfairDisplay.className}
                  w-full
                  max-w-[348px]

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
                  w-full
                  max-w-[296px]

                  text-[15px]
                  font-normal
                  leading-[22.68px]
                  text-[#504E4C]
                `}
              >
                Delivering projects with Transparency, Efficiency & On-Time
                Execution — always.
              </p>

              <Link
                href="#consultation"
                className={`
                  ${jost.className}
                  mt-3
                  flex
                  h-7
                  min-w-[108px]
                  items-center
                  justify-center
                  border-[0.642px]
                  border-[#3C2A20]
                  bg-[#F7F2EC]
                  px-4

                  text-center
                  text-[10px]
                  font-normal
                  leading-none
                  text-[#3C2A20]
                  text-nowrap

                  transition-all
                  duration-300

                  hover:bg-[#3C2A20]
                  hover:text-[#F7F2EC]
                `}
              >
                Contact Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSection;

// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { jost, playfairDisplay } from "@/app/layout";

// import res1 from "../../public/Res1.jpg";
// import res2 from "../../public/Res2.png";
// import res3 from "../../public/Res3.jpg";

// const ResidentialSection = () => {
//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-100px",
//   });

//   return (
//     <section ref={ref} className="w-full overflow-hidden bg-[#F7F2EC]">
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-360
//           px-5
//           py-18
//           sm:px-9
//           md:px-14
//           lg:px-19
//         "
//       >
//         {/* SECTION TITLE*/}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-13 flex justify-center"
//         >
//           <h2
//             className={`
//               ${playfairDisplay.className}
//               w-55
//               text-center
//               text-[41px]
//               font-bold
//               italic
//               leading-13
//               text-[#795547]
//             `}
//           >
//             Living
//             <br />
//             Redefined
//           </h2>
//         </motion.div>

//         {/* MAIN ASYMMETRIC GRID */}
//         <div
//           className="
//             mx-auto
//             grid
//             w-full
//             max-w-308
//             grid-cols-1
//             gap-8
//             md:grid-cols-12
//             md:gap-6
//             lg:gap-6.5
//           "
//         >
//           {/* LEFT COLUMN */}
//           <div
//             className="
//               flex
//               flex-col
//               md:col-span-4
//             "
//           >
//             {/* LEFT TEXT */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2,
//               }}
//               className="
//                 flex
//                 flex-col
//                 items-start
//                 pb-15
//               "
//             >
//               <h3
//                 className={`
//                   ${playfairDisplay.className}
//                   w-87
//                   text-[24px]
//                   font-normal
//                   leading-8
//                   text-[#795547]
//                 `}
//               >
//                 A better home for you and your family.
//               </h3>

//               <p
//                 className={`
//                   ${jost.className}
//                   mt-5
//                   w-74
//                   text-[15px]
//                   font-normal
//                   leading-[22.681px]
//                   text-[#504E4C]
//                 `}
//               >
//                 Crafting homes that reflect your personality — from cozy
//                 bedrooms to stunning kitchens. Each space, a masterpiece.
//               </p>

//               <Link
//                 href="/services"
//                 className={`
//                   ${playfairDisplay.className}
//                   mt-3
//                   flex
//                   h-7
//                   w-27
//                   shrink-0
//                   items-center
//                   justify-center
//                   border-[0.642px]
//                   border-[#3C2A20]
//                   bg-[#F7F2EC]
//                   px-4
//                   py-2
//                   text-center
//                   text-[11px]
//                   font-normal
//                   text-nowrap
//                   leading-[1.2]
//                   text-[#3C2A20]
//                   transition-all
//                   duration-300
//                   hover:bg-[#3C2A20]
//                   hover:text-[#F7F2EC]
//                 `}
//               >
//                 View All Projects
//               </Link>
//             </motion.div>

//             {/* LEFT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.35,
//               }}
//               className="
//                 relative
//                 w-full
//                 overflow-hidden
//               "
//             >
//               <Image
//                 src={res1}
//                 alt="Modern residential interior"
//                 width={407}
//                 height={271}
//                 className="
//                 h-auto
//                 w-full
//                 scale-[1.06]
//                 object-cover
//                 transition-transform
//                 duration-[1.2s]
//                 ease-out
//                 hover:scale-[1.09]
//               "
//               />
//             </motion.div>
//           </div>

//           {/* =====================================
//               CENTER COLUMN
//           ====================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{
//               duration: 0.9,
//               delay: 0.3,
//             }}
//             className="
//               relative
//               w-full
//               md:col-span-4
//             "
//           >
//             <div
//               className="
//                 relative
//                 aspect-[368.016/552.902]
//                 w-full
//                 overflow-hidden
//               "
//             >
//               <Image
//                 src={res2}
//                 alt="Luxury residential interior"
//                 fill
//                 quality={100}
//                 className="
//                 object-cover
//                 transition-transform
//                 duration-[1.2s]
//                 ease-out
//                 hover:scale-[1.03]
//               "
//                 sizes="
//                 (max-width: 767px) 100vw,
//                 (max-width: 1024px) 33vw,
//                 368px
//               "
//               />
//             </div>
//           </motion.div>

//           {/* =====================================
//               RIGHT COLUMN
//           ====================================== */}

//           <div
//             className="
//               flex
//               flex-col
//               md:col-span-4
//             "
//           >
//             {/* RIGHT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.45,
//               }}
//               className="
//                 relative
//                 w-full
//                 overflow-hidden
//               "
//             >
//               <Image
//                 src={res3}
//                 alt="Luxury living room interior"
//                 width={407}
//                 height={271}
//                 className="
//                 h-auto
//                 w-full
//                 scale-[1.06]
//                 object-cover
//                 transition-transform
//                 duration-[1.2s]
//                 ease-out
//                 hover:scale-[1.09]
//               "
//               />
//             </motion.div>

//             {/* RIGHT TEXT */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.55,
//               }}
//               className="
//                 flex
//                 flex-col
//                 items-start
//                 pt-8
//               "
//             >
//               <h3
//                 className={`
//                   ${playfairDisplay.className}
//                   w-87
//                   text-[24px]
//                   font-normal
//                   leading-8
//                   text-[#795547]
//                 `}
//               >
//                 Interior design from minimalist to maximalist lover
//               </h3>

//               <p
//                 className={`
//                   ${jost.className}
//                   mt-5
//                   w-74
//                   text-[15px]
//                   font-normal
//                   leading-[22.681px]
//                   text-[#504E4C]
//                 `}
//               >
//                 Crafting homes that reflect your personality — from cozy
//                 bedrooms to stunning kitchens. Each space, a masterpiece.
//               </p>

//               <Link
//                 href="/services"
//                 className={`
//                   ${playfairDisplay.className}
//                   mt-3
//                   flex
//                   h-7
//                   w-27
//                   shrink-0
//                   items-center
//                   justify-center
//                   border-[0.642px]
//                   border-[#3C2A20]
//                   bg-[#F7F2EC]
//                   px-4
//                   py-2
//                   text-center
//                   text-[11px]
//                   font-normal
//                   text-nowrap
//                   leading-[1.2]
//                   text-[#3C2A20]
//                   transition-all
//                   duration-300
//                   hover:bg-[#3C2A20]
//                   hover:text-[#F7F2EC]
//                 `}
//               >
//                 View All Projects
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResidentialSection;
