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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceOutro({ heading, description, image }: any) {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Content FIRST (left side) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--secondary))]">
              Overview
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl mb-6">{heading}</h2>

          <p className="text-[hsl(var(--charcoal)/0.7)] font-body text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Image SECOND (right side) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-5 lg:col-start-8"
        >
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src={image}
              alt={heading}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
