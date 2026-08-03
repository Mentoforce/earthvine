"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceIntro({ alt, image, content }: any) {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-5"
        >
          <div className="aspect-3/4 relative overflow-hidden">
            <Image
              src={image}
              alt={alt || "service image"}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={80}
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 lg:col-start-7 flex flex-col "
        >
          <div className="flex items-center mt-0 gap-4 mb-4">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--secondary))]">
              Overview
            </span>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div
              // className="prose max-w-none"
              className="prose max-w-none earthvine-prose"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// export default function ServiceIntro({ heading, description }: any) {
//   return (
//     <section className="py-24 bg-[hsl(var(--charcoal))] text-center">
//       <div className="max-w-3xl mx-auto px-6">
//         <h2 className="text-3xl font-display text-[hsl(var(--cream))] uppercase">
//           {heading}
//         </h2>

//         <p className="mt-6 text-[hsl(var(--cream)/0.8)]">{description}</p>
//       </div>
//     </section>
//   );
// }

{
  /* <h2 className="font-display text-3xl md:text-4xl mb-6">{heading}</h2> */
}

{
  /* <p className="text-[hsl(var(--charcoal)/0.7)] font-body text-sm leading-relaxed mb-2">
            {description1}
          </p>
          <p className="text-[hsl(var(--charcoal)/0.7)] font-body text-sm leading-relaxed mb-8">
            {description2} <span className="font-bold">{keyword1}</span>
          </p>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-4">
            {heading2}
          </h2>

          <p className="text-[hsl(var(--charcoal)/0.7)] font-body text-sm leading-relaxed mb-2">
            {description3}
          </p> */
}
