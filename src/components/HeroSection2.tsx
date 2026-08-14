"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { playfairDisplay } from "@/app/layout";
import heroImg from "../../public/new/Hero.png";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        h-[600px]
        min-h-0
        w-full
        overflow-hidden
        sm:h-[560px]
        md:h-[680px]
        lg:h-[calc(100vh-87px)]
        lg:min-h-[870px]
      "
    >
      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}
      <motion.div
        initial={{ scale: 1.2 }}
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
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-start
          px-5
          pt-[400px]
          sm:px-8
          sm:pt-[110px]
          md:px-[60px]
          md:pt-[180px]
          lg:px-[96px]
          lg:pt-[270px]
        "
      >
        <div className="flex flex-col">
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
                max-w-[660px]
                text-[36px]
                font-bold
                leading-[115%]
                tracking-normal
                text-white
                sm:text-[48px]
                sm:leading-[120%]
                md:text-[64px]
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
              mt-[28px]
              flex
              flex-row
              items-center
              gap-[8px]
              sm:mt-[30px]
              md:mt-[34px]
            "
          >
            {/* Get Quote */}
            <Link
              href="/contact"
              className={`
                ${playfairDisplay.className}
                flex
                h-[52px]
                w-[145px]
                shrink-0
                items-center
                justify-center
                border
                border-white
                bg-[#3C2A20]
                px-3
                text-center
                text-[15px]
                leading-[120%]
                text-white
                transition-all
                duration-300
                hover:bg-[#F7F2EC]
                hover:text-[#3C2A20]
                sm:h-[56px]
                sm:w-[158px]
                sm:text-[16px]
                md:h-[59px]
                md:w-[168px]
                md:px-4
                md:text-[17px]
              `}
            >
              Get Quote
            </Link>

            {/* Book Consultation */}
            <Link
              href="#consultation"
              className={`
                ${playfairDisplay.className}
                flex
                h-[52px]
                w-[145px]
                shrink-0
                items-center
                justify-center
                border
                border-[#3C2A20]
                bg-[#F7F2EC]
                px-3
                text-center
                text-[15px]
                leading-[120%]
                text-[#3C2A20]
                transition-all
                duration-300
                hover:bg-[#3C2A20]
                hover:text-white
                sm:h-[56px]
                sm:w-[153px]
                sm:text-[16px]
                md:h-[59px]
                md:w-[163px]
                md:px-4
                md:text-[17px]
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
