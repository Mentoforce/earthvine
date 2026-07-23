// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ServiceOutro({ heading, description, image }: any) {
//   return (
//     <section className="section-padding">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="lg:col-span-5"
//         >
//           <div className="aspect-[3/4] relative overflow-hidden">
//             <Image
//               src={image}
//               alt={heading}
//               fill
//               className="rounded-lg object-cover"
//             />
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--secondary))]">
//               Overview
//             </span>
//           </div>

//           <h2 className="font-display text-4xl md:text-5xl mb-6">{heading}</h2>

//           <p className="text-[hsl(var(--charcoal)/0.7)] font-body text-sm leading-relaxed">
//             {description}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//---------------------------------------below code is working---------------------------------------
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ServiceOutro({ heading, points, image, alt }: any) {
//   return (
//     <section className="section-padding">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 px-4">
//         {/* Content FIRST (left side) */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="lg:col-span-6 flex flex-col justify-center"
//         >
//           <h2 className="font-display text-3xl md:text-4xl mb-8">{heading}</h2>

//           <div className="space-y-3">
//             {points?.map((item: any, index: number) => (
//               <div key={index}>
//                 {/* Title with dot */}
//                 <div className="flex items-start gap-2">
//                   <span className="mt-2 w-2 h-2 rounded-full bg-[hsl(var(--secondary))] shrink-0" />

//                   <h3 className="font-semibold text-md mb-1">{item.title}</h3>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm text-[hsl(var(--charcoal)/0.7)] leading-relaxed ml-4">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Image SECOND (right side) */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="lg:col-span-5 lg:col-start-8"
//         >
//           <div className="aspect-3/4 relative overflow-hidden">
//             <Image
//               src={image}
//               alt={alt || heading}
//               fill
//               sizes="(max-width: 1024px) 100vw, 40vw"
//               quality={80}
//               className="rounded-lg object-cover mt-0 lg:mt-9"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//-----------------------------------------------------------------------------------------------
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// type OutroSection = {
//   content: string;
//   image?: string;
//   alt?: string;
//   layout?: "left" | "right";
// };

// export default function ServiceOutro({
//   sections = [],
// }: {
//   sections: OutroSection[];
// }) {
//   if (!sections.length) return null;

//   return (
//     <section className="section-padding">
//       <div className="max-w-7xl mx-auto px-4 space-y-20">
//         {sections.map((section, index) => {
//           const isLeft = section.layout === "left";
//           const hasImage = !!section.image;

//           const ImageBlock = hasImage && (
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className={`lg:col-span-5`}
//             >
//               <div className="aspect-3/4 relative overflow-hidden">
//                 <Image
//                   src={section.image!}
//                   alt={section.alt || "outro image"}
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 40vw"
//                   quality={80}
//                   className="rounded-lg object-cover"
//                 />
//               </div>
//             </motion.div>
//           );

//           const ContentBlock = (
//             <motion.div
//               initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className={`${hasImage ? "lg:col-span-6" : "lg:col-span-12"}`}
//             >
//               <div
//                 className="prose max-w-none"
//                 dangerouslySetInnerHTML={{
//                   __html: section.content || "",
//                 }}
//               />
//             </motion.div>
//           );

//           return (
//             <div key={index} className="grid lg:grid-cols-12 gap-12 ">
//               {/* 🔥 CONTROL ORDER HERE */}
//               {isLeft ? (
//                 <>
//                   {ImageBlock}
//                   {ContentBlock}
//                 </>
//               ) : (
//                 <>
//                   {ContentBlock}
//                   {ImageBlock}
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type OutroSection = {
  content: string;
  image?: string;
  alt?: string;
  layout?: "left" | "right";
};

export default function ServiceOutro({
  sections = [],
}: {
  sections: OutroSection[];
}) {
  if (!sections.length) return null;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 space-y-5">
        {sections.map((section, index) => {
          const isLeft = section.layout === "left";
          const hasImage = !!section.image;

          return (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* ✅ IMAGE */}
              {hasImage && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`
                    col-span-1
                    lg:col-span-5
                    ${isLeft ? "lg:order-1" : "lg:order-2"}
                  `}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src={section.image!}
                      alt={section.alt || "outro image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </motion.div>
              )}

              {/* ✅ CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`
                  col-span-1
                  ${hasImage ? "lg:col-span-7" : "lg:col-span-12"}
                  ${isLeft ? "lg:order-2" : "lg:order-1"}
                  min-w-0  
                `}
              >
                <div
                  className="prose max-w-none earthvine-prose break-words"
                  dangerouslySetInnerHTML={{
                    __html: section.content || "",
                  }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
