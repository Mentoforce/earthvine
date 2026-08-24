// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../public/new/newlogo2.png";

// const Footer = () => {
//   return (
//     <footer className="w-full overflow-hidden bg-[#1C1410]">
//       {/* =====================================================
//           TOP
//       ====================================================== */}
//       <div className="mx-auto w-full max-w-[1514px] px-[70px]">
//         <div className="grid min-h-[320px] grid-cols-[1fr_190px_245px] items-start justify-between">
//           {/* =================================================
//               BRAND
//           ================================================== */}
//           <div className="pt-[38px]">
//             <Image
//               src={logo}
//               alt="Earthvine Design Studio"
//               width={206}
//               height={99}
//               className="h-[99.017px] w-[206px] object-contain object-left"
//             />

//             <p
//               className="
//                 mt-[30px]
//                 max-w-[380px]
//                 text-[14px]
//                 font-light
//                 leading-[135%]
//                 text-[#FFF9F1]
//               "
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               From Blueprint to Beautiful Reality. We craft spaces
//               <br />
//               that tell your story.
//             </p>
//           </div>

//           {/* =================================================
//               NAVIGATE
//           ================================================== */}
//           <div className="pt-[86px]">
//             <h4
//               className="
//                 m-0
//                 text-[20px]
//                 font-normal
//                 leading-[135%]
//                 text-[#F7F2EC]
//               "
//               style={{
//                 fontFamily: "Playfair Display",
//               }}
//             >
//               Navigate
//             </h4>

//             <div
//               className="
//                 mt-[18px]
//                 flex
//                 flex-col
//                 gap-[4px]
//                 text-[17px]
//                 font-normal
//                 leading-[41px]
//                 text-[#F7F2EC]
//               "
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               <Link
//                 href="/"
//                 className="transition-colors duration-300 hover:text-white"
//               >
//                 Home
//               </Link>

//               <Link
//                 href="/about"
//                 className="transition-colors duration-300 hover:text-white"
//               >
//                 About us
//               </Link>

//               <Link
//                 href="/services"
//                 className="transition-colors duration-300 hover:text-white"
//               >
//                 Services
//               </Link>

//               <Link
//                 href="/contact"
//                 className="transition-colors duration-300 hover:text-white"
//               >
//                 Contact us
//               </Link>
//             </div>
//           </div>

//           {/* =================================================
//               GET IN TOUCH
//           ================================================== */}
//           <div className="pt-[86px]">
//             <h4
//               className="
//                 m-0
//                 text-[20px]
//                 font-normal
//                 leading-[135%]
//                 text-[#F7F2EC]
//               "
//               style={{
//                 fontFamily: "Playfair Display",
//               }}
//             >
//               Get In Touch
//             </h4>

//             <div
//               className="
//                 mt-[18px]
//                 flex
//                 flex-col
//                 text-[17px]
//                 font-normal
//                 leading-[41px]
//                 text-[#F7F2EC]
//               "
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               <span>infoearthvine@gmail.com</span>

//               <span>+91 93103 33265</span>

//               <Link
//                 href="/contact"
//                 className="
//                   mt-[10px]
//                   flex
//                   w-fit
//                   items-center
//                   justify-center
//                   gap-[10px]
//                   px-[24px]
//                   py-[10px]
//                   text-[17px]
//                   font-normal
//                   leading-normal
//                   text-[#1C1410]
//                   bg-[#F7F2EC]
//                   transition-opacity
//                   duration-300
//                   hover:opacity-90
//                 "
//                 style={{
//                   fontFamily: "Playfair Display",
//                 }}
//               >
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             DIVIDER
//         ====================================================== */}
//         <div className="h-px w-full bg-[#6A7282]/20" />

//         {/* =====================================================
//             BOTTOM
//         ====================================================== */}
//         <div
//           className="
//             flex
//             h-[62px]
//             items-center
//             justify-between
//             text-[14.34px]
//             font-normal
//             leading-[19.12px]
//             text-[#6A7282]
//           "
//           style={{
//             fontFamily: "Inter",
//           }}
//         >
//           <p className="m-0">
//             © 2025 Earthvine Design Studio. All rights reserved.
//           </p>

//           <p className="m-0">
//             designed by{" "}
//             <a
//               href="https://mentoforce.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-colors duration-300 hover:text-white"
//             >
//               Mentoforce
//             </a>
//           </p>

//           <div className="flex items-center gap-[24px]">
//             <Link
//               href="/privacy-policy"
//               className="transition-colors duration-300 hover:text-white"
//             >
//               Privacy Policy
//             </Link>

//             <span className="h-[20px] w-px bg-[#6A7282]" />

//             <Link
//               href="/terms-and-conditions"
//               className="transition-colors duration-300 hover:text-white"
//             >
//               Terms and Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../../public/new/newlogo2.png";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#1C1410]">
      {/* =====================================================
          TOP
      ====================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1514px]
          px-[70px]

          /* MOBILE */
          max-sm:px-6
        "
      >
        <div
          className="
            grid
            min-h-[320px]
            grid-cols-[1fr_190px_245px]
            items-start
            justify-between

            /* MOBILE */
            max-sm:min-h-0
            max-sm:grid-cols-1
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}
          <div
            className="
              pt-[38px]

              /* MOBILE */
              max-sm:pt-[38px]
            "
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Earthvine Design Studio"
                width={206}
                height={99}
                className="
                  h-[99.017px]
                  w-[206px]
                  object-contain
                  object-left

                  /* MOBILE */
                  max-sm:h-auto
                  max-sm:w-[170px]
                "
              />
            </Link>

            <p
              className="
                mt-[30px]
                max-w-[380px]
                text-[14px]
                font-light
                leading-[135%]
                text-[#FFF9F1]

                /* MOBILE */
                max-sm:mt-5
                max-sm:max-w-[320px]
                max-sm:text-[13px]
                max-sm:leading-[150%]
              "
              style={{
                fontFamily: "Jost",
              }}
            >
              From Blueprint to Beautiful Reality. We craft spaces
              <br className="max-sm:hidden" />
              <span className="max-sm:inline"> that tell your story.</span>
            </p>

            {/* =================================================
                SOCIAL LINKS - ADDED ONLY
            ================================================== */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/earthvinein"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earthvine on Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  hover:bg-[#9b867d]
                "
              >
                <Facebook size={19} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.instagram.com/_earthvine_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earthvine on Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  hover:bg-[#9b867d]
                "
              >
                <Instagram size={19} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.youtube.com/@earthvineinteriors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earthvine on YouTube"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  hover:bg-[#9b867d]
                "
              >
                <Youtube size={19} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* =================================================
              NAVIGATE
          ================================================== */}
          <div
            className="
              pt-[86px]

              /* MOBILE */
              max-sm:pt-[42px]
            "
          >
            <h4
              className="
                m-0
                text-[20px]
                font-normal
                leading-[135%]
                text-[#F7F2EC]
              "
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              Navigate
            </h4>

            <div
              className="
                mt-[18px]
                flex
                flex-col
                gap-[4px]
                text-[17px]
                font-normal
                leading-[41px]
                text-[#F7F2EC]

                /* MOBILE */
                max-sm:mt-3
                max-sm:gap-0
                max-sm:text-[15px]
                max-sm:leading-[34px]
              "
              style={{
                fontFamily: "Jost",
              }}
            >
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition-colors duration-300 hover:text-white"
              >
                About us
              </Link>

              <Link
                href="/services"
                className="transition-colors duration-300 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="transition-colors duration-300 hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* =================================================
              GET IN TOUCH
          ================================================== */}
          <div
            className="
              pt-[86px]

              /* MOBILE */
              max-sm:pt-[36px]
            "
          >
            <h4
              className="
                m-0
                text-[20px]
                font-normal
                leading-[135%]
                text-[#F7F2EC]
              "
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              Get In Touch
            </h4>

            <div
              className="
                mt-[18px]
                flex
                flex-col
                text-[17px]
                font-normal
                leading-[41px]
                text-[#F7F2EC]

                /* MOBILE */
                max-sm:mt-3
                max-sm:text-[14px]
                max-sm:leading-[32px]
              "
              style={{
                fontFamily: "Jost",
              }}
            >
              <a
                href="mailto:info@earthvine.in"
                className="break-all transition-colors duration-300 hover:text-white"
              >
                info@earthvine.in
              </a>

              <a
                href="tel:+919888322220"
                className="transition-colors duration-300 hover:text-white"
              >
                +91 93103 33265
              </a>

              <Link
                href="/contact"
                className="
                  mt-[10px]
                  flex
                  w-fit
                  items-center
                  justify-center
                  gap-[10px]
                  px-[24px]
                  py-[10px]
                  text-[17px]
                  font-normal
                  leading-normal
                  text-[#1C1410]
                  bg-[#F7F2EC]
                  transition-opacity
                  duration-300
                  hover:opacity-90

                  /* MOBILE */
                  max-sm:mt-4
                  max-sm:px-5
                  max-sm:py-2.5
                  max-sm:text-[15px]
                "
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="h-px w-full bg-[#6A7282]/20" />

        {/* =====================================================
            BOTTOM
        ====================================================== */}
        <div
          className="
            flex
            h-[62px]
            items-center
            justify-between
            text-[14.34px]
            font-normal
            leading-[19.12px]
            text-[#6A7282]

            /* MOBILE */
            max-sm:h-auto
            max-sm:flex-col
            max-sm:items-center
            max-sm:justify-center
            max-sm:gap-3
            max-sm:py-5
            max-sm:text-center
            max-sm:text-[12px]
            max-sm:leading-[18px]
          "
          style={{
            fontFamily: "Inter",
          }}
        >
          <p className="m-0">
            © 2026 Earthvine Design Studio. All rights reserved.
          </p>

          <p className="m-0">
            Designed and Developed by{" "}
            <a
              href="https://mentoforce.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              Mentoforce
            </a>
          </p>

          <div
            className="
              flex
              items-center
              gap-[24px]

              /* MOBILE */
              max-sm:flex-wrap
              max-sm:justify-center
              max-sm:gap-3
            "
          >
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="h-[20px] w-px bg-[#6A7282] max-sm:h-[16px]" />

            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
