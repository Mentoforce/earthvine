//this code is whole sukritis mind
// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";

// import aboutHero from "../../../public/about/hero.jpg";
// import aboutTeam from "../../../public/about/photo.jpg";

// export default function About() {
//   const storyRef = useRef(null);
//   const valuesRef = useRef(null);
//   const processRef = useRef(null);

//   const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
//   const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
//   const processInView = useInView(processRef, { once: true, margin: "-100px" });

//   return (
//     <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
//       {/* ================= HERO ================= */}
//       <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={aboutHero}
//             alt="Interior studio"
//             fill
//             priority
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
//         </motion.div>

//         <div className="relative z-10 max-w-7xl pl-15 h-full flex flex-col justify-end">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-4"
//           >
//             <div className="w-10 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
//               About Us
//             </span>
//           </motion.div>

//           <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
//             Crafting Spaces
//           </h1>
//           <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
//             with Soul
//           </h1>

//           <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
//             Over 12 years of transforming spaces into stories — blending
//             craftsmanship with modern sensibility.
//           </p>
//         </div>
//       </section>

//       {/* ================= STORY ================= */}
//       <section ref={storyRef} className="section-padding ">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={storyInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5 relative"
//           >
//             <div className="aspect-3/4 relative overflow-hidden">
//               <Image
//                 src={aboutTeam}
//                 alt="Design materials and process"
//                 fill
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={storyInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4 }}
//               className="absolute -bottom-6 -right-4 glass-strong backdrop-blur-md p-6 shadow-lg"
//             >
//               <p className="font-display text-4xl sm:text-5xl text-[hsl(var(--gold))]">
//                 150+
//               </p>
//               <p className="text-[hsl(var(--muted-foreground))] font-body text-xs tracking-widest uppercase mt-1">
//                 Projects Completed
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={storyInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5 lg:col-start-7 flex flex-col justify-center"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//               <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
//                 Our Story
//               </span>
//             </div>

//             <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
//               Where{" "}
//               <span className="italic text-[hsl(var(--gold))]">Vision</span>
//               <br />
//               Meets Craft
//             </h2>

//             <div className="space-y-4 text-[hsl(var(--charcoal)/0.7)]">
//               <p>
//                 Earthvine Interiors was founded with a simple belief — that
//                 every space has a story waiting to be told. With over 12 years
//                 of experience in residential and commercial design, we've
//                 transformed more than 150 spaces across India.
//               </p>
//               <p>
//                 Our team of passionate designers, architects, and artisans work
//                 together to create environments that are not just visually
//                 stunning but deeply functional.
//               </p>
//               <p>
//                 From luxurious living rooms to modern corporate offices, from
//                 serene bedrooms to vibrant restaurant interiors — we approach
//                 each project with fresh eyes and unwavering attention to detail.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section
//         ref={valuesRef}
//         className="section-padding bg-[hsl(var(--charcoal))]"
//       >
//         <div className="max-w-350 mx-auto px-6">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
//               Our Values
//             </span>
//           </div>
//           <h2 className="font-display sm:text-5xl text-4xl md:text-5xl text-[hsl(var(--cream))] mb-16">
//             What Drives{" "}
//             <span className="italic text-[hsl(var(--gold))]">Us</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {[
//               {
//                 title: "Vision",
//                 desc: "We see potential where others see walls. Every spaqce is a canvas waiting to be transformed into something extraordinary",
//               },
//               {
//                 title: "Craft",
//                 desc: "Meticulous attention to detail in every material selection, finish, and placement. We believe the magic is in the details. ",
//               },
//               {
//                 title: "Trust",
//                 desc: "Transparent processes and honest communication from blueprint to reality. Your dream is our commitment",
//               },
//             ].map((v, i) => (
//               <motion.div
//                 key={v.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={valuesInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 + i * 0.15 }}
//                 className="glass-dark sm:p-10 p-8 hover-lift group"
//               >
//                 <span className="font-display text-6xl sm:text-7xl text-[hsl(var(--gold)/0.2)] group-hover:text-[hsl(var(--gold)/0.4)] transition-colors duration-500">
//                   0{i + 1}
//                 </span>
//                 <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--cream))] mt-2 mb-4">
//                   {v.title}
//                 </h3>
//                 <p className="text-[hsl(var(--cream)/0.6)] font-body text-sm leading-relaxed">
//                   {v.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section
//         ref={processRef}
//         className="section-padding bg-[hsl(var(--background))]"
//       >
//         <div className="max-w-350 mx-auto px-6 text-left">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
//             <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
//               Our Process
//             </span>
//           </div>
//           <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--foreground))] mb-16">
//             From Concept to{" "}
//             <span className="italic text-[hsl(var(--secondary))]">Reality</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
//             {[
//               {
//                 title: "Discover",
//                 desc: "We listen to your vision, understand your lifestyle, and study the space.",
//               },
//               {
//                 title: "Design",
//                 desc: "Our team creates detailed 3D visualizations and mood boards for your approval.",
//               },
//               {
//                 title: "Develop",
//                 desc: "We source the finest materials and manage every aspect of construction.",
//               },
//               {
//                 title: "Deliver",
//                 desc: "Your space is revealed — on time, on budget, beyond expectations.",
//               },
//             ].map((step, i) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={processInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 + i * 0.12 }}
//                 className="relative glass  p-8 hover-lift group text-left"
//               >
//                 <div className="w-12 h-12 rounded-full border border-[hsl(var(--secondary)/0.3)] flex items-center justify-center mb-6 group-hover:border-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary)/0.1)] transition-all duration-500">
//                   <span className="font-body text-sm text-[hsl(var(--secondary))] font-semibold">
//                     0{i + 1}
//                   </span>
//                 </div>

//                 <h3 className="font-display text-xl text-[hsl(var(--foreground))] mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-[hsl(var(--muted-foreground))] font-body text-sm leading-relaxed">
//                   {step.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
// import aboutHero from "../../../public/about/hero.jpg";
// import aboutTeam from "../../../public/about/photo.jpg";

// export default function About() {
//   const storyRef = useRef(null);
//   const valuesRef = useRef(null);
//   const processRef = useRef(null);

//   const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
//   const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
//   const processInView = useInView(processRef, { once: true, margin: "-100px" });

//   return (
//     <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
//       {/* ================= HERO ================= */}
//       <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={aboutHero}
//             alt="Interior studio"
//             fill
//             priority
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
//         </motion.div>

//         <div className="relative z-10 max-w-7xl pl-15 h-full flex flex-col justify-end">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-4"
//           >
//             <div className="w-10 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
//               About Us
//             </span>
//           </motion.div>

//           <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
//             Crafting Spaces
//           </h1>
//           <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
//             with Soul
//           </h1>

//           <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
//             Over 12 years of transforming spaces into stories — blending
//             craftsmanship with modern sensibility.
//           </p>
//         </div>
//       </section>

//       {/* ================= STORY ================= */}
//       <section ref={storyRef} className="section-padding ">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={storyInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5 relative"
//           >
//             <div className="aspect-3/4 relative overflow-hidden">
//               <Image
//                 src={aboutTeam}
//                 alt="Design materials and process"
//                 fill
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={storyInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4 }}
//               className="absolute -bottom-6 -right-4 glass-strong backdrop-blur-md rounded-2xl p-6 shadow-lg"
//             >
//               <p className="font-display text-4xl sm:text-5xl text-[hsl(var(--gold))]">
//                 150+
//               </p>
//               <p className="text-[hsl(var(--muted-foreground))] font-body text-xs tracking-widest uppercase mt-1">
//                 Projects Completed
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={storyInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//               <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
//                 Our Story
//               </span>
//             </div>

//             <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
//               Where{" "}
//               <span className="italic text-[hsl(var(--gold))]">Vision</span>
//               <br />
//               Meets Craft
//             </h2>

//             <div className="space-y-4 text-[hsl(var(--charcoal)/0.7)]">
//               <p>
//                 Earthvine Interiors was founded with a simple belief — that
//                 every space has a story waiting to be told. With over 12 years
//                 of experience in residential and commercial design, we've
//                 transformed more than 150 spaces across India.
//               </p>
//               <p>
//                 Our team of passionate designers, architects, and artisans work
//                 together to create environments that are not just visually
//                 stunning but deeply functional.
//               </p>
//               <p>
//                 From luxurious living rooms to modern corporate offices, from
//                 serene bedrooms to vibrant restaurant interiors — we approach
//                 each project with fresh eyes and unwavering attention to detail.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section
//         ref={valuesRef}
//         className="section-padding bg-[hsl(var(--charcoal))]"
//       >
//         <div className="max-w-350 mx-auto px-6">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
//               Our Values
//             </span>
//           </div>
//           <h2 className="font-display sm:text-5xl text-4xl md:text-5xl text-[hsl(var(--cream))] mb-16">
//             What Drives{" "}
//             <span className="italic text-[hsl(var(--gold))]">Us</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {[
//               {
//                 title: "Vision",
//                 desc: "We see potential where others see walls. Every spaqce is a canvas waiting to be transformed into something extraordinary",
//               },
//               {
//                 title: "Craft",
//                 desc: "Meticulous attention to detail in every material selection, finish, and placement. We believe the magic is in the details. ",
//               },
//               {
//                 title: "Trust",
//                 desc: "Transparent processes and honest communication from blueprint to reality. Your dream is our commitment",
//               },
//             ].map((v, i) => (
//               <motion.div
//                 key={v.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={valuesInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 + i * 0.15 }}
//                 className="glass-dark rounded-3xl sm:p-10 p-8 hover-lift group"
//               >
//                 <span className="font-display text-6xl sm:text-7xl text-[hsl(var(--gold)/0.2)] group-hover:text-[hsl(var(--gold)/0.4)] transition-colors duration-500">
//                   0{i + 1}
//                 </span>
//                 <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--cream))] mt-2 mb-4">
//                   {v.title}
//                 </h3>
//                 <p className="text-[hsl(var(--cream)/0.6)] font-body text-sm leading-relaxed">
//                   {v.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section
//         ref={processRef}
//         className="section-padding bg-[hsl(var(--background))]"
//       >
//         <div className="max-w-350 mx-auto px-6 text-left">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
//             <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
//               Our Process
//             </span>
//           </div>
//           <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--foreground))] mb-16">
//             From Concept to{" "}
//             <span className="italic text-[hsl(var(--secondary))]">Reality</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
//             {[
//               {
//                 title: "Discover",
//                 desc: "We listen to your vision, understand your lifestyle, and study the space.",
//               },
//               {
//                 title: "Design",
//                 desc: "Our team creates detailed 3D visualizations and mood boards for your approval.",
//               },
//               {
//                 title: "Develop",
//                 desc: "We source the finest materials and manage every aspect of construction.",
//               },
//               {
//                 title: "Deliver",
//                 desc: "Your space is revealed — on time, on budget, beyond expectations.",
//               },
//             ].map((step, i) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={processInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 + i * 0.12 }}
//                 className="relative glass rounded-3xl p-8 hover-lift group text-left"
//               >
//                 <div className="w-12 h-12 rounded-full border border-[hsl(var(--secondary)/0.3)] flex items-center justify-center mb-6 group-hover:border-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary)/0.1)] transition-all duration-500">
//                   <span className="font-body text-sm text-[hsl(var(--secondary))] font-semibold">
//                     0{i + 1}
//                   </span>
//                 </div>

//                 <h3 className="font-display text-xl text-[hsl(var(--foreground))] mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-[hsl(var(--muted-foreground))] font-body text-sm leading-relaxed">
//                   {step.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import aboutHero from "../../../public/about/hero.jpg";
import aboutTeam from "../../../public/about/photo.jpg";

export default function About() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const processRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
      {/* ====== HERO ====== */}
      <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={aboutHero}
            alt="Interior studio"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl pl-15 h-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
              About Us
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
            Crafting Spaces
          </h1>
          <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
            with Soul
          </h1>

          <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
            Over 12 years of transforming spaces into stories — blending
            craftsmanship with modern sensibility.
          </p>
        </div>
      </section>

      {/* ====== STORY ===== */}
      <section ref={storyRef} className="section-padding ">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-3/4 relative overflow-hidden">
              <Image
                src={aboutTeam}
                alt="Design materials and process"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 glass-strong backdrop-blur-md  p-6 shadow-lg"
            >
              <p className="font-display text-4xl sm:text-5xl text-[hsl(var(--gold))]">
                150+
              </p>
              <p className="text-[hsl(var(--muted-foreground))] font-body text-xs tracking-widest uppercase mt-1">
                Projects Completed
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--gold))]" />
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
              Where{" "}
              <span className="italic text-[hsl(var(--gold))]">Vision</span>
              <br />
              Meets Craft
            </h2>

            <div className="space-y-4 text-[hsl(var(--charcoal)/0.7)]">
              <p>
                Earthvine Interiors was founded with a simple belief — that
                every space has a story waiting to be told. With over 12 years
                of experience in residential and commercial design, we've
                transformed more than 150 spaces across India.
              </p>
              <p>
                Our team of passionate designers, architects, and artisans work
                together to create environments that are not just visually
                stunning but deeply functional.
              </p>
              <p>
                From luxurious living rooms to modern corporate offices, from
                serene bedrooms to vibrant restaurant interiors — we approach
                each project with fresh eyes and unwavering attention to detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section
        ref={valuesRef}
        className="section-padding bg-[hsl(var(--charcoal))]"
      >
        <div className="max-w-350 mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
              Our Values
            </span>
          </div>
          <h2 className="font-display sm:text-5xl text-4xl md:text-5xl text-[hsl(var(--cream))] mb-16">
            What Drives{" "}
            <span className="italic text-[hsl(var(--gold))]">Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Vision",
                desc: "We see potential where others see walls. Every spaqce is a canvas waiting to be transformed into something extraordinary",
              },
              {
                title: "Craft",
                desc: "Meticulous attention to detail in every material selection, finish, and placement. We believe the magic is in the details. ",
              },
              {
                title: "Trust",
                desc: "Transparent processes and honest communication from blueprint to reality. Your dream is our commitment",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="glass-dark rounded-3xl sm:p-10 p-8 hover-lift group"
              >
                <span className="font-display text-6xl sm:text-7xl text-[hsl(var(--gold)/0.2)] group-hover:text-[hsl(var(--gold)/0.4)] transition-colors duration-500">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--cream))] mt-2 mb-4">
                  {v.title}
                </h3>
                <p className="text-[hsl(var(--cream)/0.6)] font-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        ref={processRef}
        className="section-padding bg-[hsl(var(--background))]"
      >
        <div className="max-w-350 mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
            <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
              Our Process
            </span>
            <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--foreground))] mb-16">
            From Concept to{" "}
            <span className="italic text-[hsl(var(--secondary))]">Reality</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              {
                title: "Discover",
                desc: "We listen to your vision, understand your lifestyle, and study the space.",
              },
              {
                title: "Design",
                desc: "Our team creates detailed 3D visualizations and mood boards for your approval.",
              },
              {
                title: "Develop",
                desc: "We source the finest materials and manage every aspect of construction.",
              },
              {
                title: "Deliver",
                desc: "Your space is revealed — on time, on budget, beyond expectations.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="relative glass rounded-3xl p-8 hover-lift group text-left"
              >
                <div className="w-12 h-12 rounded-full border border-[hsl(var(--secondary)/0.3)] flex items-center justify-center mb-6 group-hover:border-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary)/0.1)] transition-all duration-500">
                  <span className="font-body text-sm text-[hsl(var(--secondary))] font-semibold">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl text-[hsl(var(--foreground))] mb-3">
                  {step.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] font-body text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
