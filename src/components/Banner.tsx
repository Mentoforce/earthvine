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
import { playfairDisplay } from "@/app/layout";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="
        relative
        h-[565px]
        w-full
        bg-cover
        bg-center
        bg-no-repeat

        /* MOBILE ONLY */
        max-sm:h-[430px]
        max-sm:bg-[center_center]
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

          /* MOBILE ONLY */
          max-sm:pt-[105px]
          max-sm:px-5
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

            /* MOBILE ONLY */
            max-sm:max-w-[340px]
            max-sm:text-[28px]
            max-sm:leading-[1.15]
          `}
        >
          Transform Your Space With Timeless
          <br className="max-sm:hidden" />
          <span className="max-sm:inline"> Elegance And Creative Vision</span>
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

            /* MOBILE ONLY */
            max-sm:mt-[35px]
            max-sm:w-full
            max-sm:gap-3
          "
        >
          {/* CONTACT US */}
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
              text-[#FFFFFF]
              transition-all
              duration-300
              hover:bg-[#4C3328]

              /* MOBILE ONLY */
              max-sm:h-[50px]
              max-sm:w-[145px]
              max-sm:px-2
              max-sm:text-[19px]
            `}
          >
            Contact Us
          </Link>

          {/* GET QUOTE */}
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
              hover:text-[#FFFFFF]

              /* MOBILE ONLY */
              max-sm:h-[50px]
              max-sm:w-[145px]
              max-sm:px-2
              max-sm:text-[19px]
            `}
          >
            Get Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
