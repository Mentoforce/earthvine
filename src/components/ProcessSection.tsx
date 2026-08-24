"use client";

import Image from "next/image";
import { jost, playfairDisplay } from "@/lib/fonts";

import process1 from "../../public/new/com/1.png";
import process2 from "../../public/new/com/2.png";
import process3 from "../../public/new/com/3.png";
import process4 from "../../public/new/com/4.png";

import mobileProcess1 from "../../public/new/com/mobile/1.png";
import mobileProcess2 from "../../public/new/com/mobile/2.png";
import mobileProcess3 from "../../public/new/com/mobile/3.png";
import mobileProcess4 from "../../public/new/com/mobile/4.png";

const processSteps = [
  {
    number: "01",
    title: (
      <>
        Space
        <br />
        Planning
      </>
    ),
    description:
      "Strategic layout design that maximizes functionality and flow in every room.",
    image: process1,
    mobileImage: mobileProcess1,
    side: "right",
  },
  {
    number: "02",
    title: (
      <>
        Interior
        <br />
        Styling
      </>
    ),
    description:
      "Curated furniture, art, and decor selections that bring your vision to life.",
    image: process2,
    mobileImage: mobileProcess2,
    side: "left",
  },
  {
    number: "03",
    title: <>Renovation</>,
    description:
      "Complete transformation of existing spaces with modern design sensibilities.",
    image: process3,
    mobileImage: mobileProcess3,
    side: "right",
  },
  {
    number: "04",
    title: (
      <>
        3D
        <br />
        Visualization
      </>
    ),
    description:
      "Photorealistic 3D renders to preview your space before construction begins.",
    image: process4,
    mobileImage: mobileProcess4,
    side: "left",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="relative w-full overflow-visible bg-[#F7F2EC]"
      aria-label="Our design process"
    >
      {/* =====================================================
          SECTION HEADING
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          bg-[#F7F2EC]
          px-6
          pb-[5px]
          pt-[5px]
          text-center
          md:pb-[52px]
          md:pt-[82px]
        "
      >
        <h2
          className={`
            ${playfairDisplay.className}
            m-0
            text-center
            font-bold
            leading-[1]
            text-[#795547]
            text-[30px]
            md:text-[45px]
            md:leading-[45px]
          `}
        >
          From Vision to Value
        </h2>

        <p
          className={`
            ${jost.className}
            m-0
            mt-[6px]
            max-w-[340px]
            text-center
            font-medium
            leading-[1.35]
            text-[#504E4C]
            text-[13px]

            md:mt-[8px]
            md:max-w-none
            md:text-[24px]
            md:leading-[30.923px]
          `}
        >
          How We Turn Your Ideas Into Reality in 4 Steps
        </p>
      </div>

      {/* =====================================================
          PROCESS STACK
          STICKY ON MOBILE + DESKTOP
      ====================================================== */}

      <div className="relative w-full">
        {processSteps.map((step, index) => (
          <article
            key={step.number}
            className="
              sticky
              top-[96px]
              w-full
            "
            style={{
              zIndex: index + 1,
            }}
          >
            {/* =================================================
                MOBILE
                TEXT IS NOW ON THE IMAGE
            ================================================== */}

            <div
              className="
                relative
                block
                w-full
                overflow-hidden
                bg-[#F7F2EC]

                md:hidden
              "
            >
              {/* -------------------------------------------------
                  MOBILE IMAGE
              -------------------------------------------------- */}

              <div className="relative w-full overflow-hidden">
                <Image
                  src={step.mobileImage}
                  alt={`${step.number} design process`}
                  priority={index === 0}
                  sizes="100vw"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                  "
                />

                {/* -------------------------------------------------
                    MOBILE TEXT OVER IMAGE
                -------------------------------------------------- */}

                <div
                  className={`
                    absolute
                    inset-x-0
                    top-0
                    z-20
                    flex
                    w-full
                    flex-col
                    px-[10px]
                    pt-[22px]

                    ${
                      step.side === "right"
                        ? "items-start text-left"
                        : "items-end text-right"
                    }
                  `}
                >
                  {/* NUMBER */}

                  <div
                    className={`
                      ${playfairDisplay.className}
                      italic
                      font-bold
                      leading-[0.9]
                      text-[#504E4C]
                      text-[52px]
                    `}
                  >
                    {step.number}
                  </div>

                  {/* TITLE */}

                  <h3
                    className={`
                      ${playfairDisplay.className}
                      mt-2
                      italic
                      font-bold
                      leading-[1.3]
                      text-[#795547]
                      text-[29px]
                    `}
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className={`
                      ${jost.className}
                      mt-4
                      mb-0
                      max-w-[300px]
                      font-normal
                      leading-[1.35]
                      text-[#504E4C]
                      text-[13px]

                      ${step.side === "right" ? "text-left" : "text-right"}
                    `}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                DESKTOP
            ================================================== */}

            <div
              className="
                relative
                mx-auto
                hidden
                h-[650px]
                w-full
                overflow-hidden
                bg-[#F7F2EC]
                shadow-[0_-1px_0_rgba(121,85,71,0.05)]

                md:block

                lg:h-[680px]
              "
            >
              {/* -------------------------------------------------
                  DESKTOP IMAGE
              -------------------------------------------------- */}

              <div
                className={`
                  absolute
                  inset-y-0
                  w-[62%]

                  ${step.side === "right" ? "left-0" : "right-0"}
                `}
              >
                <Image
                  src={step.image}
                  alt={`${step.number} ${
                    typeof step.title === "string"
                      ? step.title
                      : "Earthvine interior design process"
                  }`}
                  fill
                  priority={index === 0}
                  sizes="62vw"
                  className="
                    object-cover
                    object-center
                  "
                />

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-y-0
                    w-[30%]

                    ${step.side === "right" ? "right-0" : "left-0"}

                    ${
                      step.side === "right"
                        ? "bg-gradient-to-r from-transparent to-[#F7F2EC]"
                        : "bg-gradient-to-l from-transparent to-[#F7F2EC]"
                    }
                  `}
                />
              </div>

              {/* -------------------------------------------------
                  DESKTOP TEXT
              -------------------------------------------------- */}

              <div
                className={`
                  absolute
                  inset-y-0
                  flex
                  w-[43%]
                  items-center
                  px-[40px]

                  lg:px-[55px]

                  xl:px-[70px]

                  ${
                    step.side === "right"
                      ? "right-0 justify-end"
                      : "left-0 justify-start"
                  }
                `}
              >
                <div
                  className={`
                    relative
                    z-20
                    w-full
                    max-w-[580px]

                    ${step.side === "right" ? "text-right" : "text-left"}
                  `}
                >
                  {/* NUMBER */}

                  <div
                    className={`
                      ${playfairDisplay.className}
                      italic
                      font-bold
                      leading-[71.767px]
                      text-[#504E4C]
                    `}
                    style={{
                      fontSize: "92.89px",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* TITLE */}

                  <h3
                    className={`
                      ${playfairDisplay.className}
                      m-0
                      italic
                      font-bold
                      leading-[71.767px]
                      text-[#795547]
                    `}
                    style={{
                      fontSize: "58.893px",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className={`
                      ${jost.className}
                      mt-[20px]
                      mb-0
                      font-normal
                      leading-[32.7px]
                      text-[#504E4C]
                    `}
                    style={{
                      fontSize: "26px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =====================================================
          BOTTOM SPACE
      ====================================================== */}

      <div className="hidden lg:block h-19 w-full bg-[#F7F2EC]" />
    </section>
  );
}

//REAL CODE
// "use client";

// import Image from "next/image";
// import { jost, playfairDisplay } from "@/app/layout";
// import process1 from "../../public/new/com/1.png";
// import process2 from "../../public/new/com/2.png";
// import process3 from "../../public/new/com/3.png";
// import process4 from "../../public/new/com/4.png";

// // DATA

// const processSteps = [
//   {
//     number: "01",
//     title: (
//       <>
//         Space
//         <br />
//         Planning
//       </>
//     ),
//     description:
//       "Strategic layout design that maximizes functionality and flow in every room.",
//     image: process1,
//     side: "right",
//   },
//   {
//     number: "02",
//     title: (
//       <>
//         Interior
//         <br />
//         Styling
//       </>
//     ),
//     description:
//       "Curated furniture, art, and decor selections that bring your vision to life.",
//     image: process2,
//     side: "left",
//   },
//   {
//     number: "03",
//     title: <>Renovation</>,
//     description:
//       "Complete transformation of existing spaces with modern design sensibilities.",
//     image: process3,
//     side: "right",
//   },
//   {
//     number: "04",
//     title: (
//       <>
//         3D
//         <br />
//         Visualization
//       </>
//     ),
//     description:
//       "Photorealistic 3D renders to preview your space before construction begins.",
//     image: process4,
//     side: "left",
//   },
// ];
// // COMPONENT

// export default function ProcessSection() {
//   return (
//     <section
//       className="relative w-full overflow-visible bg-[#F7F2EC]"
//       aria-label="Our design process"
//     >
//       {/* SECTION HEADING */}

//       <div className="relative z-10 flex w-full flex-col items-center bg-[#F7F2EC] px-6 pb-[42px] pt-[70px] text-center md:pb-[52px] md:pt-[82px]">
//         <h2
//           className={`${playfairDisplay.className} m-0 text-center font-bold leading-[45px] text-[#795547]`}
//           style={{
//             fontSize: "45px",
//           }}
//         >
//           From Vision to Value
//         </h2>

//         <p
//           className={`${jost.className} m-0 mt-[8px] text-center font-medium leading-[30.923px] text-[#504E4C]`}
//           style={{
//             fontSize: "24px",
//           }}
//         >
//           How We Turn Your Ideas Into Reality in 4 Steps
//         </p>
//       </div>

//       {/* STICKY PROCESS STACK*/}

//       <div className="relative w-full">
//         {processSteps.map((step, index) => (
//           <article
//             key={step.number}
//             className="sticky top-[96px] w-full"
//             style={{
//               zIndex: index + 1,
//             }}
//           >
//             <div
//               className="
//                 relative
//                 mx-auto
//                 h-[650px]
//                 w-full
//                 overflow-hidden
//                 bg-[#F7F2EC]
//                 shadow-[0_-1px_0_rgba(121,85,71,0.05)]
//                 md:h-[650px]
//                 lg:h-[680px]
//               "
//             >
//               {/* IMAGE*/}

//               <div
//                 className={`
//                   absolute
//                   inset-y-0
//                   ${step.side === "right" ? "left-0" : "right-0"}
//                   w-full
//                   md:w-[62%]
//                 `}
//               >
//                 <Image
//                   src={step.image}
//                   alt={`${step.number} ${typeof step.title === "string" ? step.title : "Earthvine interior design process"}`}
//                   fill
//                   priority={index === 0}
//                   sizes="(max-width: 767px) 100vw, 62vw"
//                   className="object-cover object-center"
//                 />

//                 <div
//                   className={`
//                     pointer-events-none
//                     absolute
//                     inset-y-0
//                     w-[30%]
//                     ${step.side === "right" ? "right-0" : "left-0"}
//                     hidden
//                     md:block
//                     ${
//                       step.side === "right"
//                         ? "bg-gradient-to-r from-transparent to-[#F7F2EC]"
//                         : "bg-gradient-to-l from-transparent to-[#F7F2EC]"
//                     }
//                   `}
//                 />
//               </div>

//               {/*TEXT AREA*/}

//               <div
//                 className={`
//                   absolute
//                   inset-y-0
//                   flex
//                   w-full
//                   items-center
//                   px-[40px]
//                   md:w-[43%]
//                   lg:px-[55px]
//                   xl:px-[70px]
//                   ${
//                     step.side === "right"
//                       ? "right-0 justify-center md:justify-end"
//                       : "left-0 justify-center md:justify-start"
//                   }
//                 `}
//               >
//                 <div
//                   className={`
//                     relative
//                     z-20
//                     w-full
//                     max-w-[580px]
//                     ${
//                       step.side === "right"
//                         ? "text-center md:text-right"
//                         : "text-center md:text-left"
//                     }
//                   `}
//                 >
//                   {/* NUMBER */}

//                   <div
//                     className={`${playfairDisplay.className} italic font-bold leading-[71.767px] text-[#504E4C]`}
//                     style={{
//                       fontSize: "92.89px",
//                     }}
//                   >
//                     {step.number}
//                   </div>

//                   {/* TITLE */}

//                   <h3
//                     className={`${playfairDisplay.className} m-0 italic font-bold leading-[71.767px] text-[#795547]`}
//                     style={{
//                       fontSize: "58.893px",
//                     }}
//                   >
//                     {step.title}
//                   </h3>

//                   {/* DESCRIPTION */}

//                   <p
//                     className={`${jost.className} mt-[20px] mb-0 font-normal leading-[32.7px] text-[#504E4C]`}
//                     style={{
//                       fontSize: "26px",
//                     }}
//                   >
//                     {step.description}
//                   </p>
//                 </div>
//               </div>

//               {/*MOBILE TEXT BACKGROUND */}

//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#F7F2EC] via-[#F7F2EC]/90 to-transparent md:hidden" />

//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] md:hidden">
//                 <div className="absolute inset-0 bg-[#F7F2EC]/70" />
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* BOTTOM SPACE*/}

//       <div className="h-[76px] w-full bg-[#F7F2EC]" />
//     </section>
//   );
// }

//-----------------------------------------------------------------------------------
// "use client";

// import Image from "next/image";
// import { jost, playfairDisplay } from "@/app/layout";

// import com1 from "../../public/commercial/commercial10.png";
// import com2 from "../../public/commercial/commercial20.png";
// import com3 from "../../public/commercial/commercial3.png";
// import com4 from "../../public/commercial/commercial4.png";

// type Step = {
//   number: string;
//   title: string[];
//   description: string;
//   image: any;
//   align: "left" | "right";
// };

// const steps: Step[] = [
//   {
//     number: "01",
//     title: ["Space", "Planning"],
//     description:
//       "Strategic layout design that maximizes functionality and flow in every room.",
//     image: com1,
//     align: "right",
//   },
//   {
//     number: "02",
//     title: ["Interior", "Styling"],
//     description:
//       "Curated furniture, art, and decor selections that bring your vision to life.",
//     image: com2,
//     align: "left",
//   },
//   {
//     number: "03",
//     title: ["Renovation"],
//     description:
//       "Complete transformation of existing spaces with modern design sensibilities.",
//     image: com3,
//     align: "right",
//   },
//   {
//     number: "04",
//     title: ["3D", "Visualization"],
//     description:
//       "Photorealistic 3D renders to preview your space before construction begins.",
//     image: com4,
//     align: "left",
//   },
// ];

// function FrameContent({ step }: { step: Step }) {
//   return (
//     <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
//       {/* ================================
//           TEXT
//       ================================= */}

//       <div
//         className={`
//           flex
//           h-full
//           items-center
//           px-6
//           sm:px-8
//           md:px-12
//           lg:px-20
//           ${
//             step.align === "right"
//               ? "order-2 justify-end text-right"
//               : "order-1 justify-start text-left"
//           }
//         `}
//       >
//         <div
//           className={`
//             w-full
//             max-w-[560px]
//             ${step.align === "right" ? "text-right" : "text-left"}
//           `}
//         >
//           {/* NUMBER */}

//           <p
//             className={`
//               ${playfairDisplay.className}
//               text-[58px]
//               font-normal
//               italic
//               leading-none
//               text-[#504E4C]
//               sm:text-[68px]
//               md:text-[78px]
//             `}
//           >
//             {step.number}
//           </p>

//           {/* TITLE */}

//           <h3
//             className={`
//               ${playfairDisplay.className}
//               mt-2
//               text-[48px]
//               font-normal
//               italic
//               leading-[1]
//               text-[#795547]
//               sm:text-[58px]
//               md:text-[70px]
//               lg:text-[76px]
//             `}
//           >
//             {step.title.map((line) => (
//               <span key={line} className="block">
//                 {line}
//               </span>
//             ))}
//           </h3>

//           {/* DESCRIPTION */}

//           <p
//             className={`
//               ${jost.className}
//               mt-7
//               max-w-[500px]
//               text-[17px]
//               font-normal
//               leading-[1.5]
//               text-[#504E4C]
//               sm:text-[19px]
//               md:text-[21px]
//               ${step.align === "right" ? "ml-auto" : ""}
//             `}
//           >
//             {step.description}
//           </p>
//         </div>
//       </div>

//       {/* ================================
//           IMAGE
//       ================================= */}

//       <figure
//         className={`
//           relative
//           h-[50vh]
//           overflow-hidden
//           md:h-full
//           ${step.align === "right" ? "order-1" : "order-2"}
//         `}
//       >
//         <Image
//           src={step.image}
//           alt={`${step.title.join(" ")} interior design`}
//           fill
//           priority
//           sizes="(max-width: 767px) 100vw, 50vw"
//           className="h-full w-full object-cover"
//         />
//       </figure>
//     </div>
//   );
// }

// export default function ProcessSection() {
//   return (
//     <section className="relative w-full bg-[#F7F2EC]">
//       {/* =========================================
//           SECTION HEADER
//       ========================================== */}

//       <div
//         className="
//           bg-[#F7F2EC]
//           px-6
//           pb-12
//           pt-16
//           text-center
//           sm:pb-16
//           sm:pt-20
//           md:pb-20
//           md:pt-24
//         "
//       >
//         <p
//           className={`
//             ${jost.className}
//             text-[11px]
//             uppercase
//             tracking-[0.35em]
//             text-[#795547]
//           `}
//         >
//           Our Process
//         </p>

//         <h2
//           className={`
//             ${playfairDisplay.className}
//             mt-3
//             text-[36px]
//             font-bold
//             italic
//             leading-[1.1]
//             text-[#795547]
//             sm:text-[44px]
//             md:text-[52px]
//           `}
//         >
//           How We Turn Your Ideas Into
//           <br />
//           Reality in 4 Steps
//         </h2>
//       </div>

//       <div className="relative">
//         {steps.map((step, index) => (
//           <div
//             key={step.number}
//             className="
//               sticky
//               top-0
//               flex
//               h-screen
//               w-full
//               items-stretch
//               overflow-hidden
//               bg-[#F7F2EC]
//             "
//             style={{
//               zIndex: index + 1,
//             }}
//           >
//             <FrameContent step={step} />

//             {/* =================================
//                 FRAME INDICATOR
//             ================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-7
//                 left-1/2
//                 z-[100]
//                 flex
//                 -translate-x-1/2
//                 items-center
//                 gap-2
//               "
//             >
//               {steps.map((item, indicatorIndex) => (
//                 <div
//                   key={item.number}
//                   className={`
//                     h-[2px]
//                     transition-all
//                     duration-300
//                     ${
//                       indicatorIndex === index
//                         ? "w-10 bg-[#795547]"
//                         : "w-5 bg-[#795547]/30"
//                     }
//                   `}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
