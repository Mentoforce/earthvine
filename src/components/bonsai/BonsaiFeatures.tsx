"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
// import { Leaf } from "lucide-react";
import { jost, playfairDisplay } from "@/lib/fonts";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const leftFeatures = [
  {
    number: "01",
    title: "Compact Size",
    description:
      "Easy to place on tables, desks, shelves, balconies, or other small spaces.",
  },
  {
    number: "02",
    title: "Easy To Display",
    description:
      "They are perfect for homes, offices, reception areas, study rooms, and workspaces.",
  },
  {
    number: "03",
    title: "Long Life Ease",
    description:
      "With proper care of sunlight and watering, pruning, they can last for years and be appreciated.",
  },
];

const rightFeatures = [
  {
    number: "04",
    title: "Natural Beauty",
    description:
      "No two bonsais have the same shape and structure. Each one is special!",
  },
  {
    number: "05",
    title: "Elegant Decor",
    description:
      "Bonsai plants can add class and a peppy touch to traditional and modern decor.",
  },
  {
    number: "06",
    title: "Thoughtful Gift",
    description:
      "Bonsai are an excellent choice as housewarming, birthday, or other event gifts.",
  },
];

const bottomFeature = {
  number: "07",
  title: "Living Artwork",
  description:
    "With its miniature form, a bonsai makes for an attractive piece.",
};

function FeatureItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        width: "100%",
      }}
    >
      {/* NUMBER BOX */}
      <div
        style={{
          display: "flex",
          width: "64px",
          height: "64px",
          flexShrink: 0,
          justifyContent: "center",
          alignItems: "center",
          background: "#F1E5D4",
        }}
      >
        <span
          className={inter.className}
          style={{
            color: "#3C2A20",
            fontSize: "29px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          {number}
        </span>
      </div>

      {/* TEXT */}
      <div
        style={{
          minWidth: 0,
          paddingTop: "1px",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#192B19",
            fontFamily: "var(--font-frank-ruhl)",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26.568px",
          }}
        >
          {title}
        </h3>

        <p
          className={jost.className}
          style={{
            margin: "7px 0 0",
            color: "#504E4C",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "25.904px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function DesktopFeature({
  feature,
  side,
  top,
}: {
  feature: {
    number: string;
    title: string;
    description: string;
  };
  side: "left" | "right";
  top: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}px`,
        [side]: "0px",
        width: "390px",
      }}
    >
      <FeatureItem {...feature} />
    </div>
  );
}

export default function BonsaiFeatures() {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-[#F7F2EC]">
      {/* =====================================================
          HEADING
      ====================================================== */}

      <div
        className="relative z-10 w-full px-6 text-center"
        style={{
          paddingTop: "48px",
          paddingBottom: "48px",
        }}
      >
        <h2
          className={`${playfairDisplay.className} m-0`}
          style={{
            color: "#3C2A20",
            fontSize: "45px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Features of Bonsai Plants
        </h2>

        <p
          className={`${jost.className} mx-auto`}
          style={{
            marginTop: "14px",
            maxWidth: "700px",
            color: "#504E4C",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "29px",
          }}
        >
          Bonsai plants are not just aesthetically attractive, but also
          attractive in terms of their utility. Some of them being
        </p>
      </div>

      {/* =====================================================
          DESKTOP / TABLET
      ====================================================== */}

      <div
        className="relative mx-auto hidden md:block"
        style={{
          width: "100%",
          maxWidth: "1250px",
          height: "530px",
        }}
      >
        {/* ===================================================
            CENTER BONSAI
        ==================================================== */}

        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            zIndex: 5,
            width: "430px",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="/bonsai/features-bonsai.png"
            alt="Bonsai plant"
            width={700}
            height={850}
            priority
            sizes="430px"
            className="block h-auto w-full object-contain"
          />
        </div>

        {/* ===================================================
            LEFT 01
        ==================================================== */}

        <DesktopFeature feature={leftFeatures[0]} side="left" top={20} />

        {/* ===================================================
            LEFT 02
        ==================================================== */}

        <DesktopFeature feature={leftFeatures[1]} side="left" top={145} />

        {/* ===================================================
            LEFT 03
        ==================================================== */}

        <DesktopFeature feature={leftFeatures[2]} side="left" top={270} />

        {/* ===================================================
            RIGHT 04
        ==================================================== */}

        <DesktopFeature feature={rightFeatures[0]} side="right" top={20} />

        {/* ===================================================
            RIGHT 05
        ==================================================== */}

        <DesktopFeature feature={rightFeatures[1]} side="right" top={145} />

        {/* ===================================================
            RIGHT 06
        ==================================================== */}

        <DesktopFeature feature={rightFeatures[2]} side="right" top={270} />

        {/* ===================================================
            07 — CENTERED BELOW IMAGE
        ==================================================== */}

        <div
          style={{
            position: "absolute",
            top: "405px",
            left: "50%",
            width: "430px",
            transform: "translateX(-50%)",
          }}
        >
          <FeatureItem {...bottomFeature} />
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="px-6 pb-12 md:hidden">
        {/* IMAGE */}

        <div className="flex justify-center">
          <Image
            src="/bonsai/features-bonsai.png"
            alt="Bonsai plant"
            width={700}
            height={850}
            sizes="80vw"
            className="block h-auto w-[75vw] max-w-[350px] object-contain"
          />
        </div>

        {/* FEATURES */}

        <div className="mt-8 space-y-7">
          {[...leftFeatures, ...rightFeatures].map((feature) => (
            <FeatureItem
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}

          <FeatureItem {...bottomFeature} />
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { jost, playfairDisplay } from "@/lib/fonts";

// const features = [
//   {
//     number: "01",
//     title: "Improves Air Quality",
//     description:
//       "Bonsai plants help freshen indoor spaces while adding a natural touch.",
//     side: "left",
//   },
//   {
//     number: "02",
//     title: "Reduces Stress",
//     description:
//       "The presence and care of bonsai plants can create a calm, relaxing environment.",
//     side: "left",
//   },
//   {
//     number: "03",
//     title: "Enhances Decor",
//     description:
//       "Their unique forms make bonsai an elegant decorative element for any space.",
//     side: "left",
//   },
//   {
//     number: "04",
//     title: "Creates Positive Energy",
//     description:
//       "Bonsai brings a sense of nature and balance into your surroundings.",
//     side: "right",
//   },
//   {
//     number: "05",
//     title: "Easy to Maintain",
//     description:
//       "With the right care, bonsai plants can thrive beautifully indoors and outdoors.",
//     side: "right",
//   },
//   {
//     number: "06",
//     title: "Long Lasting",
//     description:
//       "A well-maintained bonsai can stay with you for years and become part of your space.",
//     side: "right",
//   },
//   {
//     number: "07",
//     title: "Brings Nature Closer",
//     description:
//       "A bonsai lets you enjoy the beauty of nature even in an urban environment.",
//     side: "right",
//   },
// ];

// export default function BonsaiFeatures() {
//   const leftFeatures = features.filter((feature) => feature.side === "left");
//   const rightFeatures = features.filter((feature) => feature.side === "right");

//   return (
//     <section className="relative z-20 w-full overflow-hidden bg-[#F7F2EC]">
//       {/* =====================================================
//           HEADING
//       ====================================================== */}

//       <div className="relative z-10 px-6 pb-12 pt-20 text-center md:pb-16 md:pt-24">
//         <h2
//           className={`${playfairDisplay.className} m-0 text-[#3C2A20]`}
//           style={{
//             fontSize: "45px",
//             fontWeight: 700,
//             lineHeight: 1.1,
//           }}
//         >
//           Features of Bonsai Plants
//         </h2>

//         <p
//           className={`${jost.className} mx-auto mt-4 max-w-[760px] text-[#504E4C]`}
//           style={{
//             fontSize: "20px",
//             fontWeight: 400,
//             lineHeight: 1.45,
//           }}
//         >
//           Discover the beauty and benefits of bringing a bonsai plant into your
//           home or workspace.
//         </p>
//       </div>

//       {/* =====================================================
//           FEATURE LAYOUT
//       ====================================================== */}

//       <div className="mx-auto w-full max-w-[1500px] px-6 pb-24 sm:px-10 lg:px-16">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_380px_1fr] lg:gap-10 xl:grid-cols-[1fr_450px_1fr] xl:gap-16">
//           {/* =================================================
//               LEFT FEATURES
//           ================================================== */}

//           <div className="flex flex-col gap-10 lg:gap-14">
//             {leftFeatures.map((feature) => (
//               <div
//                 key={feature.number}
//                 className="flex items-start gap-5 text-left"
//               >
//                 <div
//                   className={`${playfairDisplay.className} flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#795547]/35 text-[#795547]`}
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {feature.number}
//                 </div>

//                 <div>
//                   <h3
//                     className={`${playfairDisplay.className} m-0 text-[#3C2A20]`}
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: 700,
//                       lineHeight: 1.15,
//                     }}
//                   >
//                     {feature.title}
//                   </h3>

//                   <p
//                     className={`${jost.className} mt-3 max-w-[400px] text-[#504E4C]`}
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: 400,
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* =================================================
//               CENTER BONSAI
//           ================================================== */}

//           <div className="relative flex items-center justify-center">
//             <div className="relative w-full max-w-[450px]">
//               <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5C79D]/40 blur-3xl" />

//               <Image
//                 src="/bonsai/features-bonsai.png"
//                 alt="Bonsai plant"
//                 width={700}
//                 height={850}
//                 sizes="(max-width: 1024px) 80vw, 450px"
//                 className="relative z-10 h-auto w-full object-contain"
//               />
//             </div>
//           </div>

//           {/* =================================================
//               RIGHT FEATURES
//           ================================================== */}

//           <div className="flex flex-col gap-10 lg:gap-14">
//             {rightFeatures.map((feature) => (
//               <div
//                 key={feature.number}
//                 className="flex items-start gap-5 text-left"
//               >
//                 <div
//                   className={`${playfairDisplay.className} flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#795547]/35 text-[#795547]`}
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {feature.number}
//                 </div>

//                 <div>
//                   <h3
//                     className={`${playfairDisplay.className} m-0 text-[#3C2A20]`}
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: 700,
//                       lineHeight: 1.15,
//                     }}
//                   >
//                     {feature.title}
//                   </h3>

//                   <p
//                     className={`${jost.className} mt-3 max-w-[400px] text-[#504E4C]`}
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: 400,
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
