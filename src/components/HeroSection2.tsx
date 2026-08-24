"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { playfairDisplay } from "@/lib/fonts";
import heroImg from "../../public/new/Hero.png";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        h-[720px]
        w-full
        overflow-hidden
        sm:h-[760px]
        md:h-[820px]
        lg:h-[calc(100vh-87px)]
        lg:min-h-[870px]
      "
    >
      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${heroImg.src})`,
        }}
      />

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/5
          via-black/5
          to-black/55

          lg:hidden
        "
      />

      {/* =====================================================
          DESKTOP OVERLAY
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-black/10
          lg:block
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-end
          px-5
          pb-[368px]

          sm:px-8
          sm:pb-[65px]

          md:px-[60px]
          md:pb-[75px]

          lg:items-start
          lg:px-[96px]
          lg:pb-0
          lg:pt-[270px]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-center

            md:items-start
            lg:w-auto
          "
        >
          {/* =================================================
              HEADING
          ================================================== */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${playfairDisplay.className}
                m-0
                max-w-[350px]
                text-center
                text-[40px]
                font-bold
                leading-[112%]
                tracking-normal
                text-white

                sm:max-w-[470px]
                sm:text-[44px]
                sm:leading-[115%]

                md:max-w-[600px]
                md:text-left
                md:text-[60px]

                lg:max-w-[660px]
                lg:text-left
                lg:text-[77px]
                lg:leading-[135%]
              `}
            >
              From <span className="italic">Blueprint</span> to
              <br />
              <span className="italic">Beautiful Reality</span>
            </motion.h1>
          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="
              mt-[22px]
              flex
              flex-row
              items-center
              justify-center
              gap-[8px]

              sm:mt-[26px]
              sm:gap-[10px]

              md:mt-[30px]
              md:justify-start

              lg:mt-[28px]
              lg:gap-[8px]
            "
          >
            {/* =================================================
                GET QUOTE
            ================================================== */}
            <Link
              href="/contact"
              className={`
                ${playfairDisplay.className}

                flex
                h-[48px]
                w-[132px]
                shrink-0
                items-center
                justify-center

                border
                border-white
                bg-[#3C2A20]

                px-2
                text-center
                text-[14px]
                leading-[120%]
                text-white

                transition-all
                duration-300

                hover:bg-[#F7F2EC]
                hover:text-[#3C2A20]

                sm:h-[52px]
                sm:w-[145px]
                sm:text-[15px]

                md:h-[57px]
                md:w-[160px]
                md:text-[16px]

                lg:h-[52px]
                lg:w-[145px]
                lg:px-3
                lg:text-[15px]

                xl:h-[59px]
                xl:w-[168px]
                xl:text-[17px]
              `}
            >
              Get Quote
            </Link>

            {/* =================================================
                BOOK CONSULTATION
            ================================================== */}
            <Link
              href="#consultation"
              className={`
                ${playfairDisplay.className}

                flex
                h-[48px]
                w-[132px]
                shrink-0
                items-center
                justify-center

                border
                border-[#3C2A20]
                bg-[#F7F2EC]

                px-2
                text-center
                text-[14px]
                leading-[120%]
                text-[#3C2A20]

                transition-all
                duration-300

                hover:bg-[#3C2A20]
                hover:text-white

                sm:h-[52px]
                sm:w-[145px]
                sm:text-[15px]

                md:h-[57px]
                md:w-[160px]
                md:text-[16px]

                lg:h-[52px]
                lg:w-[145px]
                lg:px-3
                lg:text-[15px]

                xl:h-[59px]
                xl:w-[163px]
                xl:text-[17px]
              `}
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { playfairDisplay } from "@/app/layout";
// import heroImg from "../../public/new/Hero.png";

// const HeroSection = () => {
//   return (
//     <section
//       className="
//         relative
//         h-[calc(100vh-87px)]
//         min-h-[870px]
//         w-full
//         overflow-hidden
//       "
//     >
//       {/* =====================================================
//           HERO BACKGROUND
//       ====================================================== */}
//       <motion.div
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{
//           duration: 2,
//           ease: "easeOut",
//         }}
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           bg-cover
//           bg-center
//           bg-no-repeat
//         "
//         style={{
//           backgroundImage: `url(${heroImg.src})`,
//         }}
//       />

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}
//       <div
//         className="
//           relative
//           z-10
//           flex
//           h-full
//           w-full
//           items-start
//           px-6
//           pt-[222px]
//           sm:px-10
//           sm:pt-[242px]
//           md:px-[60px]
//           md:pt-[252px]
//           lg:px-[96px]
//           lg:pt-[270px]
//         "
//       >
//         <div className="flex flex-col">
//           {/* =================================================
//               HEADING
//           ================================================== */}
//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{ y: 150 }}
//               animate={{ y: 0 }}
//               transition={{
//                 duration: 1,
//                 delay: 0.5,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className={`
//                 ${playfairDisplay.className}
//                 m-0
//                 max-w-[660px]
//                 text-[42px]
//                 font-bold
//                 leading-[120%]
//                 tracking-normal
//                 text-white
//                 sm:text-[52px]
//                 md:text-[64px]
//                 lg:text-[77px]
//                 lg:leading-[135%]
//               `}
//             >
//               From <span className="italic">Blueprint</span> to
//               <br />
//               <span className="italic">Beautiful Reality</span>
//             </motion.h1>
//           </div>

//           {/* =================================================
//               BUTTONS
//           ================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 1.2,
//             }}
//             className="
//               mt-[34px]
//               flex
//               flex-row
//               items-center
//               gap-[8px]
//             "
//           >
//             {/* Get Quote */}
//             <Link
//               href="/contact"
//               className={`
//                 ${playfairDisplay.className}
//                 flex
//                 h-[59px]
//                 w-[168px]
//                 shrink-0
//                 items-center
//                 justify-center
//                 border
//                 border-white
//                 bg-[#3C2A20]
//                 px-4
//                 text-center
//                 text-[17px]
//                 leading-[120%]
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:bg-[#F7F2EC]
//                 hover:text-[#3C2A20]
//               `}
//             >
//               Get Quote
//             </Link>

//             {/* Our Work */}
//             <Link
//               href="#consultation"
//               className={`
//                 ${playfairDisplay.className}
//                 flex
//                 h-[59px]
//                 w-[163px]
//                 shrink-0
//                 items-center
//                 justify-center
//                 border
//                 border-[#3C2A20]
//                 bg-[#F7F2EC]
//                 px-4
//                 text-center
//                 text-[17px]
//                 leading-[120%]
//                 text-[#3C2A20]
//                 transition-all
//                 duration-300
//                 hover:bg-[#3C2A20]
//                 hover:text-white
//               `}
//             >
//               Book Consultation
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
