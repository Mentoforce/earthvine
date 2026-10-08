import StickyBackground from "@/components/bonsai/StickyBackground";
import BonsaiStack from "@/components/bonsai/BonsaiStack";

export default function BonsaiPage() {
  return (
    <>
      <StickyBackground />

      <main className="relative w-full overflow-visible">
        <BonsaiStack />
      </main>
    </>
  );
}

//=====================Latest Code=======================
// "use client";

// import StickyBackground from "@/components/bonsai/StickyBackground";
// import BonsaiHero from "@/components/bonsai/BonsaiHero";
// import BonsaiAbout from "@/components/bonsai/BonsaiAbout";
// // import BonsaiFeatures from "@/components/bonsai/BonsaiFeatures";
// // import BonsaiIndoorOutdoor from "@/components/bonsai/BonsaiIndoorOutdoor";
// // import BonsaiCollectionPreview from "@/components/bonsai/BonsaiCollectionPreview";
// // import BonsaiTestimonials from "@/components/bonsai/BonsaiTestimonials";
// // import BonsaiFooter from "@/components/bonsai/BonsaiFooter";

// export default function BonsaiPage() {
//   return (
//     <>
//       <StickyBackground />
//       <main className="bg-[#f7f4ed] text-[#3b2a22]">
//         <BonsaiHero />
//         <BonsaiAbout />
//         {/*
//       <BonsaiFeatures />
//       <BonsaiIndoorOutdoor />
//       <BonsaiCollectionPreview />
//       <BonsaiTestimonials />
//       <BonsaiFooter /> */}
//       </main>
//     </>
//   );
// }

//----------------------------------------------------

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { ArrowUpRight, Check, Leaf, Star } from "lucide-react";

// type Category = "all" | "mature" | "outdoor" | "indoor";

// type Bonsai = {
//   _id: string;
//   name: string;
//   slug: string;
//   description: string;
//   category: "mature" | "outdoor" | "indoor";
//   price?: number;
//   species?: string;
//   age?: string;
//   height?: string;
//   images?: {
//     url: string;
//     publicId?: string;
//   }[];
//   featured?: boolean;
//   status?: "draft" | "published";
// };

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const features = [
//   {
//     title: "Compact Size",
//     description:
//       "Easy to place on tables, desks, shelves, balconies, or small spaces.",
//   },
//   {
//     title: "Easy To Display",
//     description:
//       "Perfect for homes, offices, reception areas, study rooms, and workspaces.",
//   },
//   {
//     title: "Long Life Ease",
//     description:
//       "With proper care of sunlight and watering, premium bonsai can last for years.",
//   },
//   {
//     title: "Natural Beauty",
//     description:
//       "No two bonsai have the same shape and structure. Each one is special.",
//   },
//   {
//     title: "Elegant Decor",
//     description:
//       "Bonsai plants can add class and a cosy touch to traditional and modern decor.",
//   },
//   {
//     title: "Thoughtful Gift",
//     description:
//       "An excellent choice for housewarming, birthdays, or other special moments.",
//   },
//   {
//     title: "Living Artwork",
//     description:
//       "With its miniature form, a bonsai makes for an attractive piece of living art.",
//   },
// ];

// const testimonials = [
//   {
//     name: "Sarah M.",
//     role: "Plant lover",
//     image: "/bonsai/testimonial-1.jpg",
//     text: "Absolutely love this plant shop! Beautiful, healthy plants and a great selection. The ordering process was smooth and the plant arrived in perfect condition.",
//     rating: 5,
//   },
//   {
//     name: "Emily R.",
//     role: "Plant lover",
//     image: "/bonsai/testimonial-2.jpg",
//     text: "Absolutely love this plant shop! Beautiful, healthy plants and a great selection. The ordering process was smooth and the plant arrived in perfect condition.",
//     rating: 5,
//   },
// ];

// const fallbackBonsai: Bonsai[] = [
//   {
//     _id: "1",
//     name: "Juniper Bonsai",
//     slug: "juniper-bonsai",
//     description: "A beautiful Juniper Bonsai.",
//     category: "outdoor",
//     price: 450,
//     species: "Juniper",
//     images: [
//       {
//         url: "/bonsai/collection-juniper.png",
//       },
//     ],
//     status: "published",
//   },
//   {
//     _id: "2",
//     name: "Ficus Bonsai",
//     slug: "ficus-bonsai",
//     description: "A beautifully shaped Ficus Bonsai.",
//     category: "indoor",
//     price: 320,
//     species: "Ficus Microcarpa",
//     images: [
//       {
//         url: "/bonsai/collection-ficus.png",
//       },
//     ],
//     status: "published",
//   },
// ];

// const formatAED = (price?: number) => {
//   if (price === undefined || price === null) {
//     return "Price on request";
//   }

//   return `AED ${Number(price).toLocaleString("en-AE", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 2,
//   })}`;
// };

// const getCategoryLabel = (category: Bonsai["category"]) => {
//   return category.charAt(0).toUpperCase() + category.slice(1);
// };

// export default function BonsaiLandingPage() {
//   const [bonsais, setBonsais] = useState<Bonsai[]>([]);
//   const [activeCategory, setActiveCategory] = useState<Category>("all");

//   useEffect(() => {
//     const fetchBonsais = async () => {
//       try {
//         const response = await fetch(`${API_URL}/api/bonsai`, {
//           method: "GET",
//           cache: "no-store",
//         });

//         const data = await response.json().catch(() => null);

//         if (!response.ok) {
//           throw new Error(data?.message || "Failed to fetch bonsais");
//         }

//         const items = Array.isArray(data?.data)
//           ? data.data.filter((item: Bonsai) => item.status === "published")
//           : [];

//         setBonsais(items);
//       } catch (error) {
//         console.error("PUBLIC BONSAI FETCH ERROR:", error);

//         setBonsais([]);
//       }
//     };

//     fetchBonsais();
//   }, []);

//   const collection = useMemo(() => {
//     const source = bonsais.length > 0 ? bonsais : fallbackBonsai;

//     if (activeCategory === "all") {
//       return source.slice(0, 8);
//     }

//     return source
//       .filter((item) => item.category === activeCategory)
//       .slice(0, 8);
//   }, [bonsais, activeCategory]);

//   const scrollToCollection = () => {
//     document.getElementById("bonsai-collection")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <main className="bg-[#f7f4ed] text-[#3b2a22] overflow-hidden">
//       {/* ========================================================= */}
//       {/* HERO */}
//       {/* ========================================================= */}

//       <section className="relative min-h-[650px] md:min-h-[760px] flex items-center justify-center overflow-hidden bg-[#291b15]">
//         {/* Decorative leaves */}
//         <div className="absolute -top-10 -right-24 w-[360px] md:w-[520px] opacity-90 pointer-events-none">
//           <img src="/bonsai/hero-right-leaves.png" alt="" className="w-full" />
//         </div>

//         <div className="absolute bottom-[-80px] left-[-80px] w-[360px] md:w-[520px] pointer-events-none">
//           <img src="/bonsai/hero-left-bonsai.png" alt="" className="w-full" />
//         </div>

//         <div className="absolute right-[-100px] bottom-[-100px] w-[360px] md:w-[600px] pointer-events-none opacity-90">
//           <img src="/bonsai/hero-bottom-leaf.png" alt="" className="w-full" />
//         </div>

//         <div className="relative z-10 max-w-5xl px-6 text-center text-white">
//           <p className="text-[11px] md:text-sm tracking-[0.05em] mb-5">
//             Bonsai Plant in Delhi for Your Home & Workspace
//           </p>

//           <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto text-[#f4eee4]">
//             Find a bonsai that suits your space. Explore the collection at
//             Earthvine Interior.
//           </h1>

//           <button
//             type="button"
//             onClick={scrollToCollection}
//             className="mt-8 inline-flex items-center gap-2 bg-white text-[#3a2a22] px-6 py-3 text-xs md:text-sm font-semibold hover:bg-[#f1e8d7] transition"
//           >
//             Explore Now
//             <ArrowUpRight size={15} />
//           </button>
//         </div>
//       </section>

//       {/* ========================================================= */}
//       {/* ABOUT */}
//       {/* ========================================================= */}

//       <section className="relative bg-[#e5c79e] py-16 md:py-24 overflow-hidden">
//         <div className="absolute top-0 right-[18%] w-24 md:w-36 pointer-events-none">
//           <img src="/bonsai/about-leaf-top.png" alt="" className="w-full" />
//         </div>

//         <div className="absolute bottom-[-20px] right-[-30px] w-56 md:w-80 pointer-events-none opacity-90">
//           <img src="/bonsai/about-leaf-bottom.png" alt="" className="w-full" />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
//           <div className="relative">
//             <img
//               src="/bonsai/about-bonsai.png"
//               alt="Bonsai plant"
//               className="w-full max-w-[520px] mx-auto"
//             />
//           </div>

//           <div>
//             <p className="text-xs uppercase tracking-[0.24em] text-[#6d5545] mb-3">
//               About Us
//             </p>

//             <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
//               Bring a little piece of nature into your home.
//             </h2>

//             <div className="space-y-5 text-sm md:text-base leading-relaxed text-[#57463a]">
//               <p>
//                 Bring a little piece of nature into your home or workspace with
//                 a beautiful Bonsai Plant in Delhi from Earthvine Interior.
//                 Bonsai Plants are tiny trees which are grown and shaped to fit a
//                 particular unique form.
//               </p>

//               <p>
//                 Having a bonsai puts a fun spin on the design element of your
//                 space with a minimalist approach. Bonsai plants are perfect for
//                 homes, workspaces, and offices.
//               </p>

//               <p>
//                 At Earthvine Interior, we feel that home decor should be the
//                 extension of warmth and nature. A bonsai checks both. With its
//                 trunk, foliage, and shape, it provides an excellent piece of art
//                 for your space.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================= */}
//       {/* FEATURES */}
//       {/* ========================================================= */}

//       <section className="bg-[#f8f5ef] py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <p className="text-xs uppercase tracking-[0.24em] text-[#8a6c58] mb-3">
//               Why Bonsai
//             </p>

//             <h2 className="font-serif text-3xl md:text-5xl mb-4">
//               Features of Bonsai Plants
//             </h2>

//             <p className="text-sm md:text-base text-[#77685d]">
//               Bonsai plants are not just aesthetically attractive, but also
//               attractive in terms of their utility.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-[1fr_380px_1fr] gap-8 items-center">
//             {/* Left features */}
//             <div className="space-y-6">
//               {features.slice(0, 3).map((feature) => (
//                 <FeatureItem
//                   key={feature.title}
//                   feature={feature}
//                   align="right"
//                 />
//               ))}
//             </div>

//             {/* Center image */}
//             <div className="flex justify-center">
//               <img
//                 src="/bonsai/feature-bonsai.png"
//                 alt="Decorative bonsai"
//                 className="w-full max-w-[380px]"
//               />
//             </div>

//             {/* Right features */}
//             <div className="space-y-6">
//               {features.slice(3, 7).map((feature) => (
//                 <FeatureItem
//                   key={feature.title}
//                   feature={feature}
//                   align="left"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================= */}
//       {/* INDOOR / OUTDOOR */}
//       {/* ========================================================= */}

//       <section className="relative overflow-hidden bg-[#2d1d17]">
//         <div className="absolute inset-0">
//           <img
//             src="/bonsai/collection-bg.jpg"
//             alt=""
//             className="w-full h-full object-cover opacity-60"
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-5">
//           <PromoCard
//             type="INDOOR"
//             title="Low-Maintenance Greens"
//             text="Bring life to your home with zero stress. These indoor plants thrive with minimal attention."
//             image="/bonsai/indoor-bonsai.png"
//           />

//           <PromoCard
//             type="OUTDOOR"
//             title="Garden-Ready Plants"
//             text="Level up your outdoor space with our curated garden picks."
//             image="/bonsai/outdoor-bonsai.png"
//           />
//         </div>
//       </section>

//       {/* ========================================================= */}
//       {/* COLLECTION */}
//       {/* ========================================================= */}

//       <section id="bonsai-collection" className="bg-[#f5f8f2] py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center max-w-3xl mx-auto mb-10">
//             <p className="text-xs uppercase tracking-[0.24em] text-[#7c8e70] mb-3">
//               Our Collection
//             </p>

//             <h2 className="font-serif text-3xl md:text-5xl mb-4">
//               Choose Your Bonsai with Earthvine Interior
//             </h2>

//             <p className="text-sm md:text-base text-[#677164] leading-relaxed">
//               If you&apos;ve been searching for a bonsai plant in Delhi, you can
//               find your answer at Earthvine Interior. Beautiful surroundings
//               with greenery that looks charming and elegant, and that also cares
//               ready to suit your space.
//             </p>
//           </div>

//           {/* Category tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-10">
//             {[
//               ["all", "All plants"],
//               ["mature", "Mature"],
//               ["outdoor", "Outdoor"],
//               ["indoor", "Indoor"],
//             ].map(([value, label]) => {
//               const active = activeCategory === value;

//               return (
//                 <button
//                   key={value}
//                   type="button"
//                   onClick={() => setActiveCategory(value as Category)}
//                   className={`px-5 py-2 text-xs md:text-sm border transition ${
//                     active
//                       ? "bg-[#765d4d] text-white border-[#765d4d]"
//                       : "bg-white text-[#67584e] border-transparent hover:border-[#765d4d]/30"
//                   }`}
//                 >
//                   {label}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Products */}
//           {collection.length === 0 ? (
//             <div className="text-center py-16 text-gray-500">
//               No bonsai found in this category.
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//               {collection.map((item) => (
//                 <article
//                   key={item._id}
//                   className="group bg-[#f0efd9] rounded-xl overflow-hidden border border-[#e4e2c8] hover:-translate-y-1 transition duration-300"
//                 >
//                   <a href={`/bonsai/${item.slug}`} className="block">
//                     <div className="relative aspect-[0.88] bg-[#ebead4] overflow-hidden">
//                       {item.images?.[0]?.url ? (
//                         <img
//                           src={item.images[0].url}
//                           alt={item.name}
//                           className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center text-4xl">
//                           🌱
//                         </div>
//                       )}

//                       <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-full text-[9px] text-[#5f554d]">
//                         {getCategoryLabel(item.category)}
//                       </span>
//                     </div>

//                     <div className="p-4">
//                       <p className="text-[9px] text-[#7b756e] uppercase tracking-wide mb-1">
//                         Tree | {getCategoryLabel(item.category)}
//                       </p>

//                       <h3 className="font-serif text-base md:text-lg leading-tight line-clamp-2 min-h-[44px]">
//                         {item.name}
//                       </h3>

//                       <div className="mt-3 flex items-center justify-between">
//                         <span className="font-medium text-sm">
//                           {formatAED(item.price)}
//                         </span>

//                         <span className="w-8 h-8 rounded-full bg-[#765d4d] text-white flex items-center justify-center">
//                           <ArrowUpRight size={14} />
//                         </span>
//                       </div>
//                     </div>
//                   </a>
//                 </article>
//               ))}
//             </div>
//           )}

//           <div className="text-center mt-10">
//             <a
//               href="/bonsai/plants"
//               className="inline-flex items-center gap-2 border border-[#8e7b6d] px-6 py-3 text-sm text-[#6d5a4d] hover:bg-[#765d4d] hover:text-white transition"
//             >
//               Explore More
//               <ArrowUpRight size={15} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================= */}
//       {/* TESTIMONIALS */}
//       {/* ========================================================= */}

//       <section className="bg-[#fafaf6] py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <p className="text-xs uppercase tracking-[0.24em] text-[#8a6c58] mb-3">
//               Testimonials
//             </p>

//             <h2 className="font-serif text-3xl md:text-5xl mb-4">
//               Our Happy Customers Say It Best
//             </h2>

//             <p className="text-sm text-[#81776f]">
//               Real reviews from real plant lovers who found their green.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.name}
//                 className="bg-[#f4f0e8] rounded-xl p-6 md:p-8 flex gap-5"
//               >
//                 <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-200">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-sm italic text-[#6f665e] leading-relaxed">
//                     &ldquo;{testimonial.text}&rdquo;
//                   </p>

//                   <div className="flex gap-0.5 mt-4">
//                     {Array.from({
//                       length: testimonial.rating,
//                     }).map((_, index) => (
//                       <Star
//                         key={index}
//                         size={12}
//                         fill="currentColor"
//                         className="text-yellow-500"
//                       />
//                     ))}
//                   </div>

//                   <p className="font-semibold text-sm mt-2">
//                     {testimonial.name}
//                   </p>

//                   <p className="text-xs text-[#93877c]">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========================================================= */}
//       {/* FOOTER */}
//       {/* ========================================================= */}

//       <footer className="relative bg-[#21150f] text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/bonsai/footer-bg.jpg"
//             alt=""
//             className="w-full h-full object-cover opacity-35"
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20">
//           <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12">
//             <div>
//               <h3 className="font-serif text-3xl">Earthvine</h3>

//               <p className="text-xs uppercase tracking-[0.2em] text-[#d5c8bc] mt-1">
//                 Designing Spaces. Elevating Lives.
//               </p>

//               <p className="text-sm text-[#c5b8ad] mt-6 max-w-sm leading-relaxed">
//                 From Blueprint to Beautiful Reality. We craft spaces that tell
//                 your story.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold mb-5">Navigate</h4>

//               <div className="space-y-3 text-sm text-[#c5b8ad]">
//                 <a href="/" className="block hover:text-white transition">
//                   Home
//                 </a>

//                 <a
//                   href="/about-us"
//                   className="block hover:text-white transition"
//                 >
//                   About Us
//                 </a>

//                 <a
//                   href="/services"
//                   className="block hover:text-white transition"
//                 >
//                   Services
//                 </a>

//                 <a
//                   href="/contact-us"
//                   className="block hover:text-white transition"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold mb-5">Get In Touch</h4>

//               <div className="space-y-3 text-sm text-[#c5b8ad]">
//                 <p>infoearthvine@gmail.com</p>

//                 <p>+91 93103 33285</p>

//                 <a
//                   href="/contact-us"
//                   className="inline-flex items-center gap-2 bg-white text-[#2a1b13] px-4 py-2 text-xs font-medium hover:bg-[#eee3d4] transition"
//                 >
//                   Get in Touch
//                   <ArrowUpRight size={13} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-white/10 mt-12 pt-5 flex flex-col md:flex-row justify-between gap-3 text-[10px] text-[#9e9187]">
//             <p>© 2025 Earthvine Design Studio. All rights reserved.</p>

//             <div className="flex gap-5">
//               <a href="/privacy-policy">Privacy Policy</a>

//               <a href="/terms-and-conditions">Terms and Conditions</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// /* ============================================================= */
// /* FEATURE ITEM */
// /* ============================================================= */

// function FeatureItem({
//   feature,
//   align,
// }: {
//   feature: {
//     title: string;
//     description: string;
//   };
//   align: "left" | "right";
// }) {
//   return (
//     <div
//       className={`flex gap-4 items-start ${
//         align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
//       }`}
//     >
//       <div className="w-10 h-10 shrink-0 bg-[#eee8dd] flex items-center justify-center">
//         <Leaf size={17} strokeWidth={1.5} className="text-[#6f5949]" />
//       </div>

//       <div>
//         <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>

//         <p className="text-xs leading-relaxed text-[#82776e]">
//           {feature.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ============================================================= */
// /* PROMO CARD */
// /* ============================================================= */

// function PromoCard({
//   type,
//   title,
//   text,
//   image,
// }: {
//   type: string;
//   title: string;
//   text: string;
//   image: string;
// }) {
//   return (
//     <div className="relative min-h-[280px] md:min-h-[320px] border border-white/20 overflow-hidden bg-[#5b4335]/70">
//       <div className="absolute inset-0">
//         <img
//           src={image}
//           alt={title}
//           className="absolute right-0 bottom-0 h-[92%] w-[55%] object-contain object-right-bottom"
//         />
//       </div>

//       <div className="relative z-10 max-w-[52%] p-6 md:p-8 text-white">
//         <span className="inline-flex px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[9px] tracking-wide">
//           {type}
//         </span>

//         <h3 className="font-serif text-2xl md:text-3xl mt-4">{title}</h3>

//         <p className="text-xs md:text-sm text-white/80 mt-3 leading-relaxed">
//           {text}
//         </p>

//         <a
//           href="/bonsai/plants"
//           className="inline-flex items-center gap-1 mt-5 border border-white/50 px-4 py-2 text-[11px] hover:bg-white hover:text-[#4c382d] transition"
//         >
//           Explore Now
//           <ArrowUpRight size={13} />
//         </a>
//       </div>
//     </div>
//   );
// }
