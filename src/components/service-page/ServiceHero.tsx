// import Image from "next/image";

// export default function ServiceHero({ title, subtitle, image }: any) {
//   return (
//     <section className="relative h-[70vh] flex items-center justify-center text-center">
//       <Image
//         src={image}
//         alt={title}
//         fill
//         className="object-cover brightness-[0.45]"
//       />

//       <div className="relative z-10 max-w-3xl px-6">
//         <h1 className="text-5xl font-display uppercase text-[hsl(var(--cream))]">
//           {title}
//         </h1>

//         <p className="mt-5 text-lg text-[hsl(var(--cream)/0.8)]">{subtitle}</p>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHero({ title, subtitle, image, alt }: any) {
  return (
    <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={alt || title}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black to-black/25" />
      </motion.div>

      <div className="relative z-10 max-w-7xl sm:pl-15 flex flex-col justify-end">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-px bg-[hsl(var(--gold))]" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]">
            Service
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
          {title}
        </h1>

        <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
