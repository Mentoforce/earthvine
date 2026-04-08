// export default function ServiceProcess({ title, steps }: any) {
//   return (
//     <section className="py-24 bg-black">
//       <div className="max-w-4xl mx-auto px-6">
//         <h2 className="text-3xl text-center font-display text-[hsl(var(--cream))] uppercase mb-12">
//           {title}
//         </h2>

//         <ol className="space-y-6">
//           {steps.map((step: string, i: number) => (
//             <li
//               key={i}
//               className="p-6 border border-[hsl(var(--gold)/0.2)] rounded-lg text-[hsl(var(--cream)/0.85)]"
//             >
//               {step}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function ServiceProcess({ title, steps }: any) {
  return (
    <section className="section-padding bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--secondary))] font-medium">
            Our Process
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--foreground))] mb-10">
          {title}
        </h2>

        {/* Process Steps */}
        <div className="space-y-5">
          {steps.map((step: any, i: number) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-9 gap-1 items-start"
            >
              {/* Left Gold Divider */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-px h-full bg-[hsl(var(--gold)/0.3)]" />
              </div>
              {/* Content */}
              <div className="lg:col-span-10">
                <div className="glass rounded-lg p-8 hover-lift">
                  <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--foreground))] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] font-body text-sm leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
