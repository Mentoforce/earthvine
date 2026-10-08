// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { jost, playfairDisplay } from "@/lib/fonts";
// import { Archivo_Black } from "next/font/google";

// const archivoBlack = Archivo_Black({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// const HEADING =
//   "Find a bonsai that suits your space. Explore the collection at Earthvine Interior.";

// const EYEBROW = "Bonsai Plant in Delhi for Your Home & Workspace";

// export default function BonsaiHero() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   /*
//    * ------------------------------------------------------------
//    * FILLED TEXT
//    * ------------------------------------------------------------
//    *
//    * This is the actual effect from the reference.
//    *
//    * Start:
//    * inset(100% 0 0 0)
//    *
//    * = filled text is completely hidden.
//    *
//    * End:
//    * inset(0 0 0 0)
//    *
//    * = filled text is completely visible.
//    *
//    * Only the TOP inset changes.
//    *
//    * Therefore the fill travels:
//    *
//    *        TOP
//    *          ↓
//    *     hidden area
//    *          ↓
//    *   █████████████
//    *          ↓
//    *        BOTTOM
//    *
//    * i.e. the white fill rises from BOTTOM -> TOP.
//    */

//   // const filledClipPath = useTransform( // scrollYProgress, // [0, 0.95], // ["inset(45% 0px 0px 0px)", "inset(0% 0px 0px 0px)"], // );
//   const filledClipPath = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["inset(100% 0px 0px 0px)", "inset(0% 0px 0px 0px)"],
//   );
//   return (
//     <section ref={sectionRef} className="relative h-[180vh] w-full">
//       {/* ====================================================== */}
//       {/* STICKY HERO CONTENT */}
//       {/* ====================================================== */}

//       <div className="sticky top-0 h-screen w-full overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="relative z-10 w-full px-6 text-center text-white"
//             style={{
//               maxWidth: "1800px",
//             }}
//           >
//             {/* ================================================= */}
//             {/* EYEBROW */}
//             {/* ================================================= */}

//             <p
//               className={jost.className}
//               style={{
//                 marginBottom: "3px",

//                 color: "#FFFFFF",
//                 textAlign: "center",

//                 fontSize: "20px",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 lineHeight: "82.5px",

//                 letterSpacing: "0",
//               }}
//             >
//               {EYEBROW}
//             </p>

//             {/* ================================================= */}
//             {/* HEADING */}
//             {/* ================================================= */}

//             <div
//               className="relative mx-auto"
//               style={{ width: "90%", maxWidth: "1550px" }}
//             >
//               {/* --------------------------------------------- */}
//               {/* OUTLINE / UNFILLED COPY */}
//               {/* --------------------------------------------- */}
//               <h1
//                 className={archivoBlack.className}
//                 style={{
//                   position: "relative",
//                   zIndex: 1,
//                   margin: 0,
//                   width: "100%",
//                   fontSize: "clamp(40px, 5vw, 90px)",
//                   lineHeight: 1.1,
//                   letterSpacing: "-0.025em",
//                   fontWeight: 400,
//                   color: "transparent",
//                   WebkitTextStroke: "2px rgba(255,255,255,0.92)",
//                 }}
//               >
//                 {HEADING}
//               </h1>
//               {/* --------------------------------------------- */}
//               {/* FILLED COPY */}
//               {/* --------------------------------------------- */}
//               <motion.h1
//                 aria-hidden="true"
//                 className={archivoBlack.className}
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   zIndex: 2,
//                   margin: 0,
//                   width: "100%",
//                   fontSize: "clamp(40px, 5vw, 90px)",
//                   lineHeight: 1.1,
//                   letterSpacing: "-0.025em",
//                   fontWeight: 400,
//                   color: "#ffffff",
//                   clipPath: filledClipPath,
//                 }}
//               >
//                 {HEADING}
//               </motion.h1>
//             </div>

//             {/* ================================================= */}
//             {/* BUTTON — STATIC                                  */}
//             {/* ================================================= */}

//             <div className="mt-10 flex justify-center">
//               <a
//                 href="/bonsai/plants"
//                 style={{
//                   display: "flex",
//                   width: "181px",
//                   height: "50px",
//                   padding: "8px 16px",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: "15px",
//                   background: "#FFFFFF",
//                   color: "#1E1E1E",
//                   textDecoration: "none",
//                   boxSizing: "border-box",
//                   flexShrink: 0,
//                 }}
//               >
//                 <span
//                   className={playfairDisplay.className}
//                   style={{
//                     color: "#1E1E1E",
//                     textAlign: "center",
//                     fontSize: "19px",
//                     fontStyle: "normal",
//                     fontWeight: 700,
//                     lineHeight: "normal",
//                     letterSpacing: "0.95px",
//                     whiteSpace: "nowrap",
//                     flexShrink: 0,
//                   }}
//                 >
//                   Explore Now
//                 </span>

//                 <ArrowUpRight
//                   width={18}
//                   height={18}
//                   size={18}
//                   strokeWidth={1.8}
//                   style={{
//                     width: "18px",
//                     height: "18px",
//                     flexShrink: 0,
//                   }}
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { jost, playfairDisplay } from "@/lib/fonts";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const HEADING =
  "Find a bonsai that suits your space. Explore the collection at Earthvine Interior.";

const EYEBROW = "Bonsai Plant in UAE for Your Home & Workspace";

export default function BonsaiHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /*
   * ------------------------------------------------------------
   * FILLED TEXT
   * ------------------------------------------------------------
   *
   * Initial state:
   *
   * inset(50% 0px 0px 0px)
   *
   * The top 50% is clipped, leaving the BOTTOM 50%
   * of the heading filled.
   *
   * As the user scrolls:
   *
   * inset(50% 0px 0px 0px)
   *              ↓
   * inset(0% 0px 0px 0px)
   *
   * The clipping area moves upward, revealing more
   * of the filled text from BOTTOM -> TOP.
   */

  const filledClipPath = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["inset(50% 0px 0px 0px)", "inset(0% 0px 0px 0px)"],
  );
  return (
    <section ref={sectionRef} className="relative h-[180vh] w-full">
      {/* ====================================================== */}
      {/* STICKY HERO CONTENT */}
      {/* ====================================================== */}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative z-10 w-full px-6 text-center text-white"
            style={{
              maxWidth: "1800px",
            }}
          >
            {/* ================================================= */}
            {/* EYEBROW */}
            {/* ================================================= */}

            <p
              className={jost.className}
              style={{
                marginBottom: "3px",
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "82.5px",
                letterSpacing: "0",
              }}
            >
              {EYEBROW}
            </p>

            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

            <div
              className="relative mx-auto"
              style={{
                width: "90%",
                maxWidth: "1550px",
              }}
            >
              {/* --------------------------------------------- */}
              {/* OUTLINE / UNFILLED COPY */}
              {/* --------------------------------------------- */}

              <h1
                className={archivoBlack.className}
                style={{
                  position: "relative",
                  zIndex: 1,
                  margin: 0,
                  width: "100%",
                  fontSize: "clamp(40px, 5vw, 90px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontWeight: 400,
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(255,255,255,0.92)",
                }}
              >
                {HEADING}
              </h1>

              {/* --------------------------------------------- */}
              {/* FILLED COPY */}
              {/* --------------------------------------------- */}

              <motion.h1
                aria-hidden="true"
                className={archivoBlack.className}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  margin: 0,
                  width: "100%",
                  fontSize: "clamp(40px, 5vw, 90px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontWeight: 400,
                  color: "#ffffff",
                  clipPath: filledClipPath,
                }}
              >
                {HEADING}
              </motion.h1>
            </div>

            {/* ================================================= */}
            {/* BUTTON — STATIC */}
            {/* ================================================= */}

            <div className="mt-10 flex justify-center">
              <a
                href="/bonsai/plants"
                style={{
                  display: "flex",
                  width: "181px",
                  height: "50px",
                  padding: "8px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                  background: "#FFFFFF",
                  color: "#1E1E1E",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}
              >
                <span
                  className={playfairDisplay.className}
                  style={{
                    color: "#1E1E1E",
                    textAlign: "center",
                    fontSize: "19px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.95px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  Explore Now
                </span>

                <ArrowUpRight
                  width={18}
                  height={18}
                  size={18}
                  strokeWidth={1.8}
                  style={{
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//--------------------------------------
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { ArrowUpRight } from "lucide-react";

// const HERO_BG = "/bonsai/hero-bg.png";

// const eyebrow = "BONSAI PLANTS IN DUBAI • EARTHVINE INTERIOR";

// const heading =
//   "A rare collection of bonsai, thoughtfully selected for beautiful spaces.";

// const description =
//   "Discover timeless bonsai shaped with patience, craftsmanship and a deep appreciation for nature.";

// export default function BonsaiHero() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   /*
//    * The hero is intentionally taller than one viewport.
//    * This creates the scroll distance during which the
//    * background remains sticky.
//    */
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   /*
//    * Main text fill:
//    *
//    * 0%   -> outline
//    * 50%  -> partially filled
//    * 100% -> completely filled
//    */
//   const textFill = useTransform(
//     scrollYProgress,
//     [0.05, 0.48],
//     ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
//   );

//   /*
//    * Outline becomes slightly softer as the
//    * filled version comes in.
//    */
//   const outlineOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.35]);

//   /*
//    * Supporting content appears after the
//    * heading has started filling.
//    */
//   const contentOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

//   const contentY = useTransform(scrollYProgress, [0.35, 0.55], [35, 0]);

//   /*
//    * CTA appears slightly later.
//    */
//   const buttonOpacity = useTransform(scrollYProgress, [0.48, 0.68], [0, 1]);

//   const buttonY = useTransform(scrollYProgress, [0.48, 0.68], [20, 0]);

//   /*
//    * Background movement is intentionally subtle.
//    * The container itself remains sticky.
//    */
//   const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

//   /*
//    * Decorative foreground leaves.
//    */
//   const leftLeafX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

//   const rightLeafX = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

//   /*
//    * Small bottom scroll indicator fades away
//    * as the hero gets completed.
//    */
//   const scrollIndicatorOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.18],
//     [1, 0],
//   );

//   return (
//     <section ref={sectionRef} className="relative h-[240vh] bg-[#281b15]">
//       {/* ===================================================== */}
//       {/* STICKY HERO VIEWPORT */}
//       {/* ===================================================== */}

//       <div className="sticky top-0 h-screen overflow-hidden">
//         {/* =================================================== */}
//         {/* BACKGROUND */}
//         {/* =================================================== */}

//         <motion.div
//           className="absolute inset-0"
//           style={{
//             scale: backgroundScale,
//             y: backgroundY,
//           }}
//         >
//           <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
//         </motion.div>

//         {/* Cinematic dark overlay */}
//         <div className="absolute inset-0 bg-black/30" />

//         {/* Slight bottom gradient */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

//         {/* =================================================== */}
//         {/* DECORATIVE BOTANICAL ELEMENTS */}
//         {/* =================================================== */}

//         <motion.div
//           className="absolute top-0 right-[-4%] w-[32vw] max-w-[520px] pointer-events-none"
//           style={{
//             x: rightLeafX,
//           }}
//         >
//           <img src="/bonsai/hero-leaves-right.png" alt="" className="w-full" />
//         </motion.div>

//         <motion.div
//           className="absolute bottom-[-5%] left-[-5%] w-[30vw] max-w-[480px] pointer-events-none"
//           style={{
//             x: leftLeafX,
//           }}
//         >
//           <img src="/bonsai/hero-bonsai-left.png" alt="" className="w-full" />
//         </motion.div>

//         {/* =================================================== */}
//         {/* MAIN CONTENT */}
//         {/* =================================================== */}

//         <div className="relative z-10 h-full flex items-center justify-center px-6">
//           <div className="w-full max-w-6xl mx-auto">
//             <div className="max-w-5xl mx-auto text-center text-white">
//               {/* Eyebrow */}
//               <p className="mb-6 text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/75">
//                 {eyebrow}
//               </p>

//               {/* ================================================= */}
//               {/* HEADING */}
//               {/* ================================================= */}

//               <div className="relative max-w-5xl mx-auto">
//                 {/* Outline version */}
//                 <motion.h1
//                   className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] leading-[0.98] tracking-tight text-transparent"
//                   style={{
//                     opacity: outlineOpacity,
//                     WebkitTextStroke: "1px rgba(255,255,255,0.88)",
//                   }}
//                 >
//                   {heading}
//                 </motion.h1>

//                 {/* Filled version */}
//                 <motion.div
//                   className="absolute inset-0 overflow-hidden"
//                   style={{
//                     clipPath: textFill,
//                   }}
//                 >
//                   <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] leading-[0.98] tracking-tight text-[#f7f1e7]">
//                     {heading}
//                   </h1>
//                 </motion.div>
//               </div>

//               {/* ================================================= */}
//               {/* DESCRIPTION + CTA */}
//               {/* ================================================= */}

//               <motion.div
//                 className="mt-8 md:mt-10"
//                 style={{
//                   opacity: contentOpacity,
//                   y: contentY,
//                 }}
//               >
//                 <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-white/75">
//                   {description}
//                 </p>
//               </motion.div>

//               <motion.div
//                 className="mt-7"
//                 style={{
//                   opacity: buttonOpacity,
//                   y: buttonY,
//                 }}
//               >
//                 <button
//                   type="button"
//                   onClick={() => {
//                     document
//                       .getElementById("bonsai-collection")
//                       ?.scrollIntoView({
//                         behavior: "smooth",
//                       });
//                   }}
//                   className="inline-flex items-center gap-2 bg-white px-6 py-3 text-xs md:text-sm font-medium text-[#33231b] hover:bg-[#eee5d8] transition"
//                 >
//                   Explore Collection
//                   <ArrowUpRight size={15} />
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* =================================================== */}
//         {/* SCROLL INDICATOR */}
//         {/* =================================================== */}

//         <motion.div
//           className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
//           style={{
//             opacity: scrollIndicatorOpacity,
//           }}
//         >
//           <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
//             Scroll
//           </span>

//           <motion.div
//             animate={{
//               y: [0, 8, 0],
//             }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="h-10 w-px bg-white/60"
//           />
//         </motion.div>

//         {/* =================================================== */}
//         {/* PROGRESS LINE */}
//         {/* =================================================== */}

//         <motion.div
//           className="absolute bottom-0 left-0 z-30 h-[2px] origin-left bg-white"
//           style={{
//             width: "100%",
//             scaleX: scrollYProgress,
//           }}
//         />
//       </div>
//     </section>
//   );
// }
