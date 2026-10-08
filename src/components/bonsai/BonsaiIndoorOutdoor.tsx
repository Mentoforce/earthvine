"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { jost } from "@/lib/fonts";

const CARD_WIDTH = 540;
const CARD_HEIGHT = 290;
const IMAGE_PANEL_WIDTH = 180;

function PlantCard({
  type,
  title,
  description,
  image,
  href,
}: {
  type: "INDOOR" | "OUTDOOR";
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        flexShrink: 0,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.35)",
      }}
    >
      {/* =====================================================
          GLASS TEXT PANEL
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 20,
          width: `${CARD_WIDTH - IMAGE_PANEL_WIDTH}px`,
          height: "100%",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "30px",
          paddingRight: "30px",
          boxSizing: "border-box",
          background: "rgba(255,255,255,0.001)",
          borderRight: "1px solid rgba(255,255,255,0.20)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Additional soft glass layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* =================================================
              TYPE PILL
          ================================================== */}

          <div
            className={jost.className}
            style={{
              display: "inline-flex",
              width: "fit-content",
              height: "38.048px",
              padding: "7.115px 19.814px 6.933px 19.8px",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
              borderRadius: "9999px",
              border: "1.237px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.20)",
              backdropFilter: "blur(12.373px)",
              WebkitBackdropFilter: "blur(12.373px)",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Jost",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "23.2px",
                letterSpacing: "0.773px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {type}
            </span>
          </div>

          {/* =================================================
              TITLE
          ================================================== */}

          <h3
            className="m-0"
            style={{
              marginTop: "18px",
              color: "#FFFFFF",
              fontFamily: "var(--font-frank-ruhl)",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25.2px",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h3>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className={`${jost.className} m-0`}
            style={{
              marginTop: "18px",
              maxWidth: "300px",
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25.5px",
            }}
          >
            {description}
          </p>

          {/* =================================================
              BUTTON
          ================================================== */}

          <a
            href={href}
            className="inline-flex"
            style={{
              marginTop: "20px",
              padding: "9px 18px",
              alignItems: "center",
              gap: "7.2px",
              border: "0.72px solid rgba(255,255,255,0.50)",
              background: "#795547",
              color: "#FFFFFF",
              textDecoration: "none",
              boxSizing: "border-box",
              width: "fit-content",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontFamily: "var(--font-frank-ruhl)",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "14.4px",
                whiteSpace: "nowrap",
              }}
            >
              Explore Now
            </span>

            <ArrowUpRight
              width={12.6}
              height={12.6}
              strokeWidth={1.5}
              style={{
                width: "12.6px",
                height: "12.6px",
                flexShrink: 0,
              }}
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          IMAGE PANEL
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 30,
          width: `${IMAGE_PANEL_WIDTH}px`,
          height: "100%",
          flexShrink: 0,
          overflow: "hidden",
          background: "transparent",
        }}
      >
        <Image
          src={image}
          alt={`${type.toLowerCase()} bonsai plant`}
          fill
          priority
          sizes={`${IMAGE_PANEL_WIDTH}px`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export default function BonsaiIndoorOutdoor() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        minHeight: "520px",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/bonsai/indoor-outdoor-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(30,15,8,0.12)",
          }}
        />
      </div>

      {/* =====================================================
          CARD WRAPPER
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "28px",
          padding: "45px 30px",
          boxSizing: "border-box",
        }}
      >
        <PlantCard
          type="INDOOR"
          title="Low-Maintenance Greens"
          description="Bring life to your home with zero stress. These resilient plants thrive with minimal attention — perfect for beginners and busy lifestyles."
          image="/bonsai/indoor-bonsai.png"
          href="/bonsai/plants"
        />

        <PlantCard
          type="OUTDOOR"
          title="Garden-Ready Plants"
          description="Level up your outdoor space with our curated garden picks. Hardy, vibrant, and beautiful — built for patios, backyards, and balconies."
          image="/bonsai/outdoor-bonsai.png"
          href="/bonsai/plants"
        />
      </div>
    </section>
  );
}

//---------------------------------------------------
// "use client";

// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import { jost, playfairDisplay } from "@/lib/fonts";

// export default function BonsaiIndoorOutdoor() {
//   return (
//     <section className="relative z-10 w-full overflow-hidden bg-[#4A2C1D]">
//       {/* =====================================================
//           FULL SECTION BACKGROUND
//       ====================================================== */}

//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/bonsai/indoor-outdoor-bg.png"
//           alt=""
//           fill
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-[#3E2418]/30" />
//       </div>

//       {/* =====================================================
//           SECTION CONTENT
//       ====================================================== */}

//       <div className="relative z-10 mx-auto flex min-h-[580px] w-full max-w-[1500px] items-center justify-center px-6 py-16 lg:px-12">
//         <div className="grid w-full max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-2 lg:gap-24">
//           {/* =================================================
//               INDOOR
//           ================================================== */}

//           <div className="relative flex min-h-[300px] overflow-hidden border border-white/30 bg-[#4A2C1D]/55">
//             {/* IMAGE */}
//             <div className="absolute inset-y-0 right-0 z-10 w-[48%]">
//               <Image
//                 src="/bonsai/indoor-bonsai.png"
//                 alt="Indoor bonsai plants"
//                 fill
//                 sizes="400px"
//                 className="object-contain object-right"
//               />
//             </div>

//             {/* TEXT */}
//             <div className="relative z-20 flex w-[58%] flex-col justify-center px-8 py-10 lg:px-10">
//               <span
//                 className={`${jost.className} inline-flex w-fit rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-white`}
//               >
//                 Indoor
//               </span>

//               <h3
//                 className={`${playfairDisplay.className} mt-5 text-white`}
//                 style={{
//                   fontSize: "38px",
//                   fontWeight: 700,
//                   lineHeight: 1.15,
//                 }}
//               >
//                 Low-Maintenance Greens
//               </h3>

//               <p
//                 className={`${jost.className} mt-4 max-w-[330px] text-white`}
//                 style={{
//                   fontSize: "15px",
//                   fontWeight: 400,
//                   lineHeight: 1.55,
//                 }}
//               >
//                 Bring life to your home with zero stress. These indoor plants
//                 thrive with minimal attention — perfect for beginners and busy
//                 lifestyles.
//               </p>

//               <a
//                 href="/bonsai/plants?category=indoor"
//                 className={`${playfairDisplay.className} mt-7 inline-flex w-fit items-center gap-2 border border-white/70 px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-[#3E2418]`}
//               >
//                 Explore Now
//                 <ArrowUpRight size={16} strokeWidth={1.7} />
//               </a>
//             </div>
//           </div>

//           {/* =================================================
//               OUTDOOR
//           ================================================== */}

//           <div className="relative flex min-h-[300px] overflow-hidden border border-white/30 bg-[#4A2C1D]/55">
//             {/* IMAGE */}
//             <div className="absolute inset-y-0 right-0 z-10 w-[48%]">
//               <Image
//                 src="/bonsai/outdoor-bonsai.png"
//                 alt="Outdoor bonsai plants"
//                 fill
//                 sizes="400px"
//                 className="object-contain object-right"
//               />
//             </div>

//             {/* TEXT */}
//             <div className="relative z-20 flex w-[58%] flex-col justify-center px-8 py-10 lg:px-10">
//               <span
//                 className={`${jost.className} inline-flex w-fit rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-white`}
//               >
//                 Outdoor
//               </span>

//               <h3
//                 className={`${playfairDisplay.className} mt-5 text-white`}
//                 style={{
//                   fontSize: "38px",
//                   fontWeight: 700,
//                   lineHeight: 1.15,
//                 }}
//               >
//                 Garden-Ready Plants
//               </h3>

//               <p
//                 className={`${jost.className} mt-4 max-w-[330px] text-white`}
//                 style={{
//                   fontSize: "15px",
//                   fontWeight: 400,
//                   lineHeight: 1.55,
//                 }}
//               >
//                 Level up your outdoor space with our curated garden picks.
//                 Hardy, vibrant, and beautiful — built for patios, backyards, and
//                 balconies.
//               </p>

//               <a
//                 href="/bonsai/plants?category=outdoor"
//                 className={`${playfairDisplay.className} mt-7 inline-flex w-fit items-center gap-2 border border-white/70 px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-[#3E2418]`}
//               >
//                 Explore Now
//                 <ArrowUpRight size={16} strokeWidth={1.7} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
