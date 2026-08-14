// "use client";

// import Image, { StaticImageData } from "next/image";

// import step01 from "../../public/commercial/commercial10.png";
// import step02 from "../../public/commercial/commercial20.png";
// import step03 from "../../public/commercial/commercial3.png";
// import step04 from "../../public/commercial/commercial4.png";

// type Step = {
//   number: string;
//   title: string[];
//   description: string;
//   image: StaticImageData;
//   align: "left" | "right";
// };

// const steps: Step[] = [
//   {
//     number: "01",
//     title: ["Space", "Planning"],
//     description:
//       "Strategic layout design that maximizes functionality and flow in every room.",
//     image: step01,
//     align: "right",
//   },
//   {
//     number: "02",
//     title: ["Interior", "Styling"],
//     description:
//       "Curated furniture, art, and decor selections that bring your vision to life.",
//     image: step02,
//     align: "left",
//   },
//   {
//     number: "03",
//     title: ["Renovation"],
//     description:
//       "Complete transformation of existing spaces with modern design sensibilities.",
//     image: step03,
//     align: "right",
//   },
//   {
//     number: "04",
//     title: ["3D", "Visualization"],
//     description:
//       "Photorealistic 3D renders to preview your space before construction begins.",
//     image: step04,
//     align: "left",
//   },
// ];

// export function ProcessSection() {
//   return (
//     <section className="bg-background py-20 md:py-28">
//       <header className="mx-auto max-w-4xl px-6 text-center">
//         <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground">
//           Our Process
//         </p>
//         <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-[2.75rem]">
//           How We Turn Your Ideas Into{" "}
//           <em className="font-display italic text-accent">Reality</em> in 4
//           Steps
//         </h2>
//       </header>

//       {/* Wrapper with relative positioning to establish sticky boundaries */}
//       <div className="relative mt-16 md:mt-24">
//         {steps.map((step, i) => (
//           /* Each step wrapper gives the viewport 100vh of scroll room to stick */
//           <div key={step.number} className="relative h-[100vh]">
//             <div
//               className="sticky top-0 flex h-screen items-stretch overflow-hidden border-t border-border/60 bg-panel"
//               style={{ zIndex: i + 1 }}
//             >
//               <div
//                 className={`grid h-full w-full items-center gap-10 md:grid-cols-2 md:gap-0 ${
//                   step.align === "left" ? "" : "md:[&>*:first-child]:order-2"
//                 }`}
//               >
//                 <div
//                   className={`${
//                     step.align === "left"
//                       ? "px-6 md:pr-10 lg:pl-20"
//                       : "px-6 md:pl-10 lg:pr-20 md:text-right"
//                   }`}
//                 >
//                   <p className="font-display text-5xl italic text-foreground md:text-6xl lg:text-7xl">
//                     {step.number}
//                   </p>
//                   <h3 className="mt-1 font-display text-4xl italic leading-[1.05] text-accent md:text-5xl lg:text-[4.25rem]">
//                     {step.title.map((line) => (
//                       <span key={line} className="block">
//                         {line}
//                       </span>
//                     ))}
//                   </h3>
//                   <p
//                     className={`mt-6 max-w-sm font-body text-base leading-relaxed text-muted-foreground md:text-lg ${
//                       step.align === "left" ? "" : "md:ml-auto"
//                     }`}
//                   >
//                     {step.description}
//                   </p>
//                 </div>

//                 <figure className="relative h-[45vh] w-full self-stretch overflow-hidden md:h-full">
//                   <Image
//                     src={step.image}
//                     alt={`Sketch illustration for ${step.title.join(" ")}`}
//                     priority={i === 0}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                     className="object-cover mix-blend-multiply"
//                   />
//                 </figure>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ProcessSection;
