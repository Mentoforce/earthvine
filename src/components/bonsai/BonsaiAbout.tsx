"use client";

import Image from "next/image";
import { jost, playfairDisplay } from "@/lib/fonts";

export default function BonsaiAbout() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className="relative flex w-full justify-center"
        style={{
          marginBottom: "calc(-3.02vw)",
        }}
      >
        <Image
          src="/bonsai/about-bonsai2.png"
          alt=""
          width={1912}
          height={960}
          sizes="100vw"
          priority
          className="block h-auto w-[65%] max-w-[1250px]"
          style={{
            transform: "scaleY(0.9)",
            transformOrigin: "center center",
          }}
        />

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div className="absolute inset-0">
          <div
            className="
              absolute
              inset-y-0
              left-1/2
              flex
              w-1/2
              items-center
            "
          >
            <div className="w-full max-w-[620px]">
              <h2
                className={`${playfairDisplay.className} mb-8 text-[#3C2A20]`}
                style={{
                  fontSize: "45px",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                About Us
              </h2>

              <div
                className={`${jost.className} text-[#504E4C]`}
                style={{
                  fontSize: "26px",
                  fontWeight: 400,
                  lineHeight: 1.42,
                }}
              >
                <p className="mb-8">
                  Bring a little piece of nature into your home or workspace
                  with a beautiful Bonsai Plant in UAE from Earthvine Interior.
                  Bonsai Plants are tiny trees which are grown and shaped to fit
                  a particular unique form. Having a bonsai puts a fun spin on
                  the design element of your space with a minimalist approach.
                  Bonsai plants are perfect for homes, workspaces, and offices.
                </p>

                <p>
                  At Earthvine Interior, we feel that home decor should be the
                  extension of warmth and nature. A bonsai checks both. With its
                  trunk, foliage, and shape, providing an excellent piece of art
                  for your space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//============Latest Code==================
// "use client";

// import Image from "next/image";
// import { jost, playfairDisplay } from "@/lib/fonts";

// export default function BonsaiAbout() {
//   return (
//     <section
//       className="
//         relative
//         z-20
//         -mt-[100vh]
//         w-full
//         overflow-hidden
//       "
//     >
//       {/* =====================================================
//           COMPLETE ABOUT ARTWORK
//           The PNG itself contains the entire visual composition.
//       ====================================================== */}

//       <div className="relative w-full">
//         <Image
//           src="/bonsai/about-bonsai.png"
//           alt=""
//           width={1912}
//           height={960}
//           sizes="100vw"
//           priority
//           className="block h-auto w-full"
//         />

//         {/* ===================================================
//             ABOUT CONTENT — RIGHT SIDE
//         ==================================================== */}

//         <div className="absolute inset-0">
//           <div
//             className="
//               absolute
//               right-0
//               top-0
//               flex
//               h-full
//               w-[48%]
//               items-center
//             "
//           >
//             <div className="w-full max-w-[650px] px-8 lg:px-12 xl:px-16">
//               <h2
//                 className={`${playfairDisplay.className} mb-8 text-[#4D3728]`}
//                 style={{
//                   fontSize: "clamp(36px, 3vw, 52px)",
//                   fontWeight: 700,
//                   lineHeight: 1.1,
//                 }}
//               >
//                 About Us
//               </h2>

//               <div
//                 className={`${jost.className} text-[#5B5148]`}
//                 style={{
//                   fontSize: "clamp(15px, 1.15vw, 20px)",
//                   fontWeight: 400,
//                   lineHeight: 1.42,
//                 }}
//               >
//                 <p className="mb-8">
//                   Bring a little piece of nature into your home or workspace
//                   with a beautiful Bonsai Plant in Delhi from Earthvine
//                   Interior. Bonsai Plants are tiny trees which are grown and
//                   shaped to fit a particular unique form. Having a bonsai puts a
//                   fun spin on the design element of your space with a minimalist
//                   approach. Bonsai plants are perfect for homes, workspaces, and
//                   offices.
//                 </p>

//                 <p>
//                   At Earthvine Interior, we feel that home decor should be the
//                   extension of warmth and nature. A bonsai checks both. With its
//                   trunk, foliage, and shape, providing an excellent piece of art
//                   for your space.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//-------------------------------------------------
// "use client";

// import Image from "next/image";
// import { jost, playfairDisplay } from "@/lib/fonts";

// export default function BonsaiAbout() {
//   return (
//     <section className="relative z-10 w-full overflow-hidden bg-[#E5C79D]">
//       {/* FULL ARTWORK — NEVER CROP */}
//       <Image
//         src="/bonsai/about-bonsai.png"
//         alt=""
//         width={1912}
//         height={960}
//         priority
//         className="block h-auto w-full"
//       />

//       {/* CONTENT OVER THE RIGHT SIDE */}
//       <div className="absolute inset-0">
//         <div className="ml-70 flex h-full w-[48%] items-center">
//           <div className="w-full max-w-[650px] px-6 sm:px-10 lg:px-12">
//             <h2
//               className={`${playfairDisplay.className} mb-8 text-[#4D3728]`}
//               style={{
//                 fontSize: "clamp(34px, 3vw, 52px)",
//                 fontWeight: 700,
//                 lineHeight: 1.1,
//                 textAlign: "left",
//               }}
//             >
//               About Us
//             </h2>

//             <div
//               className={`${jost.className} text-[#5B5148]`}
//               style={{
//                 fontSize: "clamp(14px, 1.15vw, 20px)",
//                 fontWeight: 400,
//                 lineHeight: 1.42,
//               }}
//             >
//               <p className="mb-8">
//                 Bring a little piece of nature into your home or workspace with
//                 a beautiful Bonsai Plant in Delhi from Earthvine Interior.
//                 Bonsai Plants are tiny trees which are grown and shaped to fit a
//                 particular unique form. Having a bonsai puts a fun spin on the
//                 design element of your space with a minimalist approach. Bonsai
//                 plants are perfect for homes, workspaces, and offices.
//               </p>

//               <p>
//                 At Earthvine Interior, we feel that home decor should be the
//                 extension of warmth and nature. A bonsai checks both. With its
//                 trunk, foliage, and shape, providing an excellent piece of art
//                 for your space.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
