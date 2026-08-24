// "use client";

// import { motion } from "framer-motion";
// import { playfairDisplay } from "@/app/layout";
// import Link from "next/link";

// const Banner = () => {
//   return (
//     <section
//       className="
//         relative
//         h-[565px]
//         w-full
//         bg-cover
//         bg-center
//         bg-no-repeat
//       "
//       style={{
//         backgroundImage: "url('/new/Banner.png')",
//       }}
//     >
//       <div className="absolute inset-0 flex flex-col items-center pt-[169px]">
//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             ease: "easeOut",
//           }}
//           className={`
//             ${playfairDisplay.className}
//             m-0
//             max-w-[900px]
//             text-center
//             text-[40px]
//             font-bold
//             leading-[1.08]
//             text-[#3C2A20]
//           `}
//         >
//           Transform Your Space With Timeless
//           <br />
//           Elegance And Creative Vision
//         </motion.h2>

//         {/* BUTTONS */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             delay: 0.15,
//             ease: "easeOut",
//           }}
//           className="mt-[52px] flex items-center justify-center gap-[49px]"
//         >
//           {/* CONTACT US */}
//           <Link
//             href="/contact"
//             className={`
//               ${playfairDisplay.className}
//               flex
//               h-[55px]
//               w-[205px]
//               items-center
//               justify-center
//               border
//               border-[#795547]
//               bg-[#3F2A20]
//               text-[26px]
//               text-[#FFFFFF]
//               transition-all
//               duration-300
//               hover:bg-[#4C3328]
//             `}
//           >
//             Contact Us
//           </Link>

//           {/* GET QUOTE */}
//           <Link
//             href="#consultations"
//             className={`
//               ${playfairDisplay.className}
//               flex
//               h-[55px]
//               w-[195px]
//               items-center
//               justify-center
//               border
//               border-[#3F2A20]
//               bg-transparent
//               text-[26px]
//               text-[#3F2A20]
//               transition-all
//               duration-300
//               hover:bg-[#3F2A20]
//               hover:text-[#FFFFFF]
//             `}
//           >
//             Get Quote
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

"use client";

import { motion } from "framer-motion";
import { playfairDisplay } from "@/lib/fonts";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F2EC]
      "
    >
      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div
        className="
          relative
          hidden
          h-[565px]
          w-full
          bg-cover
          bg-center
          bg-no-repeat
          sm:block
        "
        style={{
          backgroundImage: "url('/new/Banner.png')",
        }}
      >
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            pt-[169px]
          "
        >
          {/* HEADING */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`
              ${playfairDisplay.className}
              m-0
              max-w-[900px]
              text-center
              text-[40px]
              font-bold
              leading-[1.08]
              text-[#3C2A20]
            `}
          >
            Transform Your Space With Timeless
            <br />
            Elegance And Creative Vision
          </motion.h2>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              mt-[52px]
              flex
              items-center
              justify-center
              gap-[49px]
            "
          >
            <Link
              href="/contact"
              className={`
                ${playfairDisplay.className}
                flex
                h-[55px]
                w-[205px]
                items-center
                justify-center
                border
                border-[#795547]
                bg-[#3F2A20]
                text-[26px]
                text-white
                transition-all
                duration-300
                hover:bg-[#4C3328]
              `}
            >
              Contact Us
            </Link>

            <Link
              href="#consultations"
              className={`
                ${playfairDisplay.className}
                flex
                h-[55px]
                w-[195px]
                items-center
                justify-center
                border
                border-[#3F2A20]
                bg-transparent
                text-[26px]
                text-[#3F2A20]
                transition-all
                duration-300
                hover:bg-[#3F2A20]
                hover:text-white
              `}
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="block w-full sm:hidden">
        {/* =================================================
      SINGLE MOBILE BANNER IMAGE
      Text is positioned INSIDE the blank space
  ================================================== */}

        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full"
          >
            <img
              src="/new/BannerTop.png"
              alt="Interior design"
              className="block h-auto w-full"
            />
          </motion.div>

          {/* =================================================
        TEXT INSIDE THE IMAGE'S EMPTY SPACE
    ================================================== */}

          <div
            className="
        absolute
        left-0
        top-[47%]
        z-10
        flex
        w-full
        -translate-y-1/2
        flex-col
        items-center
        px-8
        text-center
      "
          >
            {/* HEADING */}

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className={`
          ${playfairDisplay.className}
          m-0
          w-full
          max-w-[360px]
          text-center
          text-[28px]
          font-bold
          leading-[1.08]
          text-[#3C2A20]
        `}
            >
              Transform Your Space
              <br />
              With Timeless Elegance
              <br />
              And Creative Vision
            </motion.h2>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
          mt-[27px]
          flex
          w-full
          items-center
          justify-center
          gap-3
        "
            >
              <Link
                href="/contact"
                className={`
            ${playfairDisplay.className}
            flex
            h-[48px]
            w-[145px]
            items-center
            justify-center
            border
            border-[#795547]
            bg-[#3F2A20]
            text-[18px]
            text-white
          `}
              >
                Contact Us
              </Link>

              <Link
                href="#consultation"
                className={`
            ${playfairDisplay.className}
            flex
            h-[48px]
            w-[145px]
            items-center
            justify-center
            border
            border-[#3F2A20]
            bg-[#F7F2EC]
            text-[18px]
            text-[#3F2A20]
          `}
              >
                Get Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
