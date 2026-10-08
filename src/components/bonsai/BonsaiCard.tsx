"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export type BonsaiImage = {
  url: string;
  publicId?: string;
};

export type Bonsai = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category: "mature" | "outdoor" | "indoor";
  price?: number;
  species?: string;
  age?: string;
  height?: string;
  potInfo?: string;
  dimensions?: string;
  careLevel?: string;
  sunlight?: string;
  watering?: string;
  images: BonsaiImage[];
  featured?: boolean;
  status?: "draft" | "published";
  isDeleted?: boolean;
};

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getMetaText(bonsai: Bonsai) {
  const parts = ["Tree"];

  if (bonsai.species?.trim()) {
    parts.push(bonsai.species.trim());
  }

  parts.push(capitalize(bonsai.category), "Bonsai");

  return parts.join(" | ");
}

export default function BonsaiCard({ bonsai }: { bonsai: Bonsai }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = bonsai.images?.[0]?.url;

  return (
    <Link
      href={`/bonsai/${bonsai.slug}`}
      style={{
        display: "block",
        width: "287px",
        height: "327px",
        flexShrink: 0,
        textDecoration: "none",
        overflow: "visible",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article
        style={{
          display: "flex",
          width: "287px",
          height: "327px",
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
          overflow: "hidden",
          borderRadius: "18.499px",
          background: "#FFFFFF",
          boxSizing: "border-box",

          boxShadow: isHovered
            ? "4px 4px 12.47px 6px rgba(0, 0, 0, 0.18), 0 1.156px 2.312px -1.156px rgba(0, 0, 0, 0.10)"
            : "none",

          transition: "box-shadow 300ms ease",
        }}
      >
        {/* =====================================================
            IMAGE CONTAINER
        ====================================================== */}
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "209.137px",
            padding: "0 51.199px 0 50.916px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            flexShrink: 0,
            boxSizing: "border-box",
            overflow: "hidden",
            background: "rgba(243, 208, 160, 0.37)",
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={bonsai.name}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                color: "#795547",
                fontFamily: "Jost, sans-serif",
                fontSize: "12px",
              }}
            >
              No image
            </div>
          )}

          {/* =================================================
              CATEGORY PILL
          ================================================== */}
          <span
            style={{
              position: "absolute",
              left: "11.25px",
              top: "11.883px",
              display: "flex",
              padding: "4.625px 11.562px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "31036664px",
              background: "rgba(255, 255, 255, 0.90)",
              boxShadow:
                "0 1.156px 3.469px 0 rgba(0, 0, 0, 0.10), 0 1.156px 2.312px -1.156px rgba(0, 0, 0, 0.10)",
              color: "#795547",
              fontFamily: "Jost, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "17.343px",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
          >
            {capitalize(bonsai.category)}
          </span>
        </div>

        {/* =====================================================
            CARD CONTENT
        ====================================================== */}
        <div
          style={{
            display: "flex",
            width: "100%",
            flex: 1,
            minHeight: 0,
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "7px 14px 9px 17px",
          }}
        >
          {/* Meta */}
          <p
            style={{
              width: "100%",
              margin: 0,
              color: "#3C2A20",
              fontFamily: '"Playfair Display", serif',
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "23.124px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {getMetaText(bonsai)}
          </p>

          {/* Title */}
          <h3
            style={{
              width: "100%",
              margin: 0,
              color: "#3C2A20",
              fontFamily: '"Playfair Display", serif',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "23.124px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {bonsai.name}
          </h3>

          {/* Price + Plus */}
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "auto",
              alignItems: "flex-end",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <span
              className={plusJakartaSans.className}
              style={{
                width: "117px",
                flexShrink: 0,
                color: "#795547",
                fontSize: "16.187px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "23.124px",
              }}
            >
              {typeof bonsai.price === "number"
                ? `${bonsai.price} AED`
                : "Price on request"}
            </span>

            {/* Plus button */}
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                width: "36px",
                height: "36px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                borderRadius: "31036664px",
                background: "#795547",
                boxShadow:
                  "0 1.156px 3.469px 0 rgba(0, 0, 0, 0.10), 0 1.156px 2.312px -1.156px rgba(0, 0, 0, 0.10)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                style={{
                  width: "18px",
                  height: "19.013px",
                  flexShrink: 0,
                }}
              >
                <path
                  d="M3.75 9.50629H14.25"
                  stroke="white"
                  strokeWidth="1.54161"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 3.96103V15.0517"
                  stroke="white"
                  strokeWidth="1.54161"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

//------------------------------New-------------------
// "use client";

// import Link from "next/link";

// export type BonsaiImage = {
//   url: string;
//   publicId?: string;
// };

// export type Bonsai = {
//   _id: string;
//   name: string;
//   slug: string;
//   description: string;
//   category: "mature" | "outdoor" | "indoor";
//   price?: number;
//   species?: string;
//   age?: string;
//   height?: string;
//   potInfo?: string;
//   dimensions?: string;
//   careLevel?: string;
//   sunlight?: string;
//   watering?: string;
//   images: BonsaiImage[];
//   featured?: boolean;
//   status?: "draft" | "published";
//   isDeleted?: boolean;
// };

// function capitalize(value?: string) {
//   if (!value) return "";

//   return value.charAt(0).toUpperCase() + value.slice(1);
// }

// function buildMeta(bonsai: Bonsai) {
//   const parts = ["Tree"];

//   if (bonsai.species?.trim()) {
//     parts.push(bonsai.species.trim());
//   }

//   parts.push(capitalize(bonsai.category), "Bonsai");

//   return parts.join(" | ");
// }

// export default function BonsaiCard({ bonsai }: { bonsai: Bonsai }) {
//   const imageUrl = bonsai.images?.[0]?.url;

//   return (
//     <Link
//       href={`/bonsai/${bonsai.slug}`}
//       className="group block w-[287px] shrink-0"
//     >
//       <article
//         className="
//           flex
//           h-[327px]
//           w-[287px]
//           flex-col
//           items-start
//           overflow-hidden
//           rounded-[18.499px]
//           bg-white
//           transition-shadow
//           duration-300
//           hover:shadow-[4px_4px_12.47px_6px_rgba(0,0,0,0.18),0_1.156px_2.312px_-1.156px_rgba(0,0,0,0.10)]
//         "
//       >
//         {/* =====================================================
//             IMAGE AREA
//         ====================================================== */}
//         <div
//           className="relative w-full shrink-0 overflow-hidden"
//           style={{
//             height: "209.137px",
//             background: "#F3EDD2",
//           }}
//         >
//           {imageUrl ? (
//             <img
//               src={imageUrl}
//               alt={bonsai.name}
//               className="
//                 absolute
//                 inset-0
//                 h-full
//                 w-full
//                 object-contain
//               "
//               style={{
//                 paddingLeft: "50.916px",
//                 paddingRight: "51.199px",
//                 boxSizing: "border-box",
//               }}
//             />
//           ) : (
//             <div
//               className="flex h-full w-full items-center justify-center"
//               style={{
//                 color: "#795547",
//                 fontFamily: "Jost",
//                 fontSize: "12px",
//               }}
//             >
//               No image
//             </div>
//           )}

//           {/* ===================================================
//               CATEGORY PILL
//           ==================================================== */}
//           <span
//             className="absolute left-[11.25px] top-[11.883px]"
//             style={{
//               display: "flex",
//               padding: "4.625px 11.562px",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               borderRadius: "31036664px",
//               background: "rgba(255,255,255,0.90)",
//               boxShadow:
//                 "0 1.156px 3.469px 0 rgba(0,0,0,0.10), 0 1.156px 2.312px -1.156px rgba(0,0,0,0.10)",
//               color: "#795547",
//               fontFamily: "Jost",
//               fontSize: "12px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "17.343px",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {capitalize(bonsai.category)}
//           </span>
//         </div>

//         {/* =====================================================
//             CONTENT
//         ====================================================== */}
//         <div
//           className="flex min-h-0 w-full flex-1 flex-col"
//           style={{
//             padding: "7px 16px 9px 17px",
//             boxSizing: "border-box",
//           }}
//         >
//           {/* Meta */}
//           <p
//             style={{
//               margin: 0,
//               color: "#3C2A20",
//               fontFamily: '"Playfair Display", serif',
//               fontSize: "12px",
//               fontStyle: "normal",
//               fontWeight: 500,
//               lineHeight: "23.124px",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//           >
//             {buildMeta(bonsai)}
//           </p>

//           {/* Name */}
//           <h3
//             style={{
//               margin: 0,
//               color: "#3C2A20",
//               fontFamily: '"Playfair Display", serif',
//               fontSize: "16px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "23.124px",
//               display: "-webkit-box",
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//               overflow: "hidden",
//             }}
//           >
//             {bonsai.name}
//           </h3>

//           {/* Price + Plus */}
//           <div
//             className="mt-auto flex w-full items-end justify-between"
//             style={{
//               paddingTop: "3px",
//             }}
//           >
//             <span
//               style={{
//                 color: "#795547",
//                 fontFamily: '"Plus Jakarta Sans", sans-serif',
//                 fontSize: "16.187px",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 lineHeight: "23.124px",
//               }}
//             >
//               {typeof bonsai.price === "number"
//                 ? `${bonsai.price} AED`
//                 : "Price on request"}
//             </span>

//             <span
//               aria-hidden="true"
//               style={{
//                 display: "flex",
//                 width: "36px",
//                 height: "36px",
//                 flexShrink: 0,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: "31036664px",
//                 background: "#795547",
//                 boxShadow:
//                   "0 1.156px 3.469px 0 rgba(0,0,0,0.10), 0 1.156px 2.312px -1.156px rgba(0,0,0,0.10)",
//               }}
//             >
//               <span
//                 style={{
//                   width: "18px",
//                   height: "19.013px",
//                   flexShrink: 0,
//                   color: "#FFFFFF",
//                   fontFamily: "Arial, sans-serif",
//                   fontSize: "22px",
//                   fontWeight: 300,
//                   lineHeight: "19.013px",
//                   textAlign: "center",
//                 }}
//               >
//                 +
//               </span>
//             </span>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// }

//------------------------old------------------
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export type BonsaiImage = {
//   url: string;
//   publicId?: string;
// };

// export type Bonsai = {
//   _id: string;
//   name: string;
//   slug: string;
//   description: string;
//   category: "mature" | "outdoor" | "indoor";
//   price?: number;
//   species?: string;
//   age?: string;
//   height?: string;
//   potInfo?: string;
//   dimensions?: string;
//   careLevel?: string;
//   sunlight?: string;
//   watering?: string;
//   images: BonsaiImage[];
//   featured?: boolean;
// };

// function getCategoryLabel(category: Bonsai["category"]) {
//   return category.charAt(0).toUpperCase() + category.slice(1);
// }

// function getCardMeta(bonsai: Bonsai) {
//   const parts = ["Tree"];

//   if (bonsai.species) {
//     parts.push(bonsai.species);
//   }

//   parts.push(getCategoryLabel(bonsai.category));
//   parts.push("Bonsai");

//   return parts.join(" | ");
// }

// export default function BonsaiCard({ bonsai }: { bonsai: Bonsai }) {
//   const image = bonsai.images?.[0]?.url;

//   return (
//     <Link href={`/bonsai/${bonsai.slug}`} className="group block w-full">
//       <article
//         className="overflow-hidden rounded-[14px] border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
//         style={{
//           boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
//         }}
//       >
//         {/* =================================================
//             IMAGE
//         ================================================== */}
//         <div
//           className="relative w-full overflow-hidden"
//           style={{
//             height: "145px",
//             background: "#F3EED6",
//           }}
//         >
//           {image ? (
//             <Image
//               src={image}
//               alt={bonsai.name}
//               fill
//               sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 235px"
//               className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
//             />
//           ) : (
//             <div className="flex h-full items-center justify-center text-sm text-[#806D62]">
//               No image
//             </div>
//           )}

//           {/* Category badge */}
//           <span
//             className="absolute left-[9px] top-[9px] rounded-full bg-white px-[9px] py-[4px] text-[10px] font-medium text-[#624A3E] shadow-sm"
//             style={{
//               fontFamily: "Jost",
//             }}
//           >
//             {getCategoryLabel(bonsai.category)}
//           </span>
//         </div>

//         {/* =================================================
//             CONTENT
//         ================================================== */}
//         <div className="relative px-[13px] pb-[11px] pt-[8px]">
//           <p
//             className="m-0 text-[8px] leading-[12px] text-[#776F67]"
//             style={{
//               fontFamily: "Jost",
//             }}
//           >
//             {getCardMeta(bonsai)}
//           </p>

//           <h3
//             className="mt-[3px] line-clamp-2 pr-[8px] text-[12px] font-semibold leading-[17px] text-[#39251C]"
//             style={{
//               fontFamily: '"Frank Ruhl Libre", serif',
//             }}
//           >
//             {bonsai.name}
//           </h3>

//           <div className="mt-[6px] flex items-center justify-between">
//             <span
//               className="text-[11px] font-semibold text-[#795547]"
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               {bonsai.price !== undefined
//                 ? `${bonsai.price} AED`
//                 : "Price on request"}
//             </span>

//             <span
//               className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#795547] text-white"
//               aria-hidden="true"
//             >
//               <span
//                 style={{
//                   fontSize: "16px",
//                   lineHeight: "16px",
//                   fontWeight: 300,
//                   transform: "translateY(-1px)",
//                 }}
//               >
//                 +
//               </span>
//             </span>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// }
