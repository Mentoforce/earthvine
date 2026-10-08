// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import BonsaiCard, { type Bonsai } from "@/components/bonsai/BonsaiCard";
// import BonsaiFooter from "@/components/bonsai/BonsaiFooter";
// import { jost, playfairDisplay } from "@/lib/fonts";
// import { Plus_Jakarta_Sans } from "next/font/google";

// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const MAX_IMAGES = 6;
// const RATING = "4.5";

// function formatPrice(price?: number) {
//   if (typeof price !== "number") {
//     return "Price on request";
//   }

//   return `AED ${price.toFixed(2)}`;
// }

// function capitalize(value?: string) {
//   if (!value) return "";

//   return value.charAt(0).toUpperCase() + value.slice(1);
// }

// function stripHtml(html?: string) {
//   if (!html) return "";

//   return html
//     .replace(/<br\s*\/?>/gi, " ")
//     .replace(/<\/p>/gi, " ")
//     .replace(/<[^>]*>/g, " ")
//     .replace(/&nbsp;/gi, " ")
//     .replace(/&amp;/gi, "&")
//     .replace(/&quot;/gi, '"')
//     .replace(/&#39;/gi, "'")
//     .replace(/\s+/g, " ")
//     .trim();
// }

// function getShortDescription(description?: string) {
//   return stripHtml(description);
// }

// function getWhatsAppUrl(name: string, quantity: number) {
//   const message = encodeURIComponent(
//     `Hello Earthvine Interior, I am interested in ${name}. Quantity: ${quantity}.`,
//   );

//   return `https://wa.me/919310333265?text=${message}`;
// }

// export default function BonsaiProductPage() {
//   const params = useParams<{ slug: string }>();
//   const slug = params?.slug;

//   const [bonsai, setBonsai] = useState<Bonsai | null>(null);
//   const [relatedBonsais, setRelatedBonsais] = useState<Bonsai[]>([]);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!slug) return;

//     const fetchBonsai = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const [productResponse, relatedResponse] = await Promise.all([
//           fetch(`${API_URL}/api/bonsai/${slug}`, {
//             method: "GET",
//             cache: "no-store",
//           }),
//           fetch(`${API_URL}/api/bonsai`, {
//             method: "GET",
//             cache: "no-store",
//           }),
//         ]);

//         if (!productResponse.ok) {
//           throw new Error("Bonsai not found");
//         }

//         const productResult = await productResponse.json();

//         if (!productResult?.success || !productResult?.data) {
//           throw new Error("Bonsai not found");
//         }

//         const current = productResult.data as Bonsai;

//         setBonsai(current);
//         setSelectedImage(0);

//         if (relatedResponse.ok) {
//           const relatedResult = await relatedResponse.json();

//           if (relatedResult?.success && Array.isArray(relatedResult.data)) {
//             const related = (relatedResult.data as Bonsai[])
//               .filter((item) => item._id !== current._id)
//               .slice(0, 4);

//             setRelatedBonsais(related);
//           } else {
//             setRelatedBonsais([]);
//           }
//         } else {
//           setRelatedBonsais([]);
//         }
//       } catch (fetchError) {
//         console.error("Failed to load Bonsai:", fetchError);
//         setError("Unable to load this bonsai.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBonsai();
//   }, [slug]);

//   const images = useMemo(() => {
//     return (
//       bonsai?.images?.filter((image) => image?.url).slice(0, MAX_IMAGES) ?? []
//     );
//   }, [bonsai]);

//   const selectedImageUrl = images[selectedImage]?.url || images[0]?.url || "";

//   const shortDescription = getShortDescription(bonsai?.description);

//   if (loading) {
//     return (
//       <main
//         className="w-full"
//         style={{
//           background: "#F8F2EA",
//           minHeight: "100vh",
//         }}
//       >
//         <div
//           style={{
//             minHeight: "700px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <p
//             className={jost.className}
//             style={{
//               margin: 0,
//               color: "#795547",
//               fontSize: "18px",
//             }}
//           >
//             Loading bonsai...
//           </p>
//         </div>

//         <BonsaiFooter />
//       </main>
//     );
//   }

//   if (!bonsai || error) {
//     return (
//       <main
//         className="w-full"
//         style={{
//           background: "#F8F2EA",
//           minHeight: "100vh",
//         }}
//       >
//         <div
//           style={{
//             minHeight: "700px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//           <h1
//             className={playfairDisplay.className}
//             style={{
//               margin: 0,
//               color: "#795547",
//               fontSize: "42px",
//               fontWeight: 600,
//             }}
//           >
//             Bonsai not found
//           </h1>

//           <Link
//             href="/bonsai/plants"
//             className={jost.className}
//             style={{
//               marginTop: "20px",
//               color: "#795547",
//               fontSize: "16px",
//               textDecoration: "underline",
//             }}
//           >
//             Back to Bonsai Collection
//           </Link>
//         </div>

//         <BonsaiFooter />
//       </main>
//     );
//   }

//   return (
//     <main
//       className="w-full"
//       style={{
//         background: "#F8F2EA",
//       }}
//     >
//       {/* =====================================================
//           PRODUCT SECTION
//       ====================================================== */}
//       <section
//         style={{
//           width: "100%",
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "34px 40px 54px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* ===================================================
//             BREADCRUMB
//         ==================================================== */}
//         <div
//           className={jost.className}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: "8px",
//             color: "#8D8782",
//             fontSize: "12px",
//             lineHeight: "18px",
//           }}
//         >
//           <Link
//             href="/"
//             style={{
//               color: "#8D8782",
//               textDecoration: "none",
//             }}
//           >
//             Homepage
//           </Link>

//           <span>›</span>

//           <Link
//             href="/bonsai"
//             style={{
//               color: "#8D8782",
//               textDecoration: "none",
//             }}
//           >
//             Bonsai
//           </Link>

//           <span>›</span>

//           <Link
//             href="/bonsai/plants"
//             style={{
//               color: "#8D8782",
//               textDecoration: "none",
//             }}
//           >
//             Explore More
//           </Link>

//           <span>›</span>

//           <span style={{ color: "#3C2A20" }}>{bonsai.name}</span>
//         </div>

//         {/* ===================================================
//             MAIN PRODUCT AREA
//             IMAGE LEFT / CONTENT RIGHT
//         ==================================================== */}
//         <div
//           style={{
//             display: "flex",
//             width: "100%",
//             marginTop: "22px",
//             alignItems: "flex-start",
//             gap: "70px",
//           }}
//         >
//           {/* =================================================
//               LEFT — IMAGE GALLERY
//           ================================================== */}
//           <div
//             style={{
//               width: "520px",
//               flexShrink: 0,
//             }}
//           >
//             {/* PRIMARY IMAGE */}
//             <div
//               style={{
//                 display: "flex",
//                 width: "520px",
//                 height: "650px",
//                 flexShrink: 0,
//                 aspectRatio: "4 / 5",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 overflow: "hidden",
//                 borderRadius: "22px",
//                 background: "rgba(243, 208, 160, 0.37)",
//                 boxSizing: "border-box",
//               }}
//             >
//               {selectedImageUrl ? (
//                 <img
//                   src={selectedImageUrl}
//                   alt={bonsai.name}
//                   style={{
//                     display: "block",
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",
//                     objectPosition: "center",
//                   }}
//                 />
//               ) : (
//                 <span
//                   className={jost.className}
//                   style={{
//                     color: "#795547",
//                     fontSize: "14px",
//                   }}
//                 >
//                   No image available
//                 </span>
//               )}
//             </div>

//             {/* THUMBNAILS */}
//             {images.length > 0 && (
//               <div
//                 style={{
//                   display: "flex",
//                   marginTop: "16px",
//                   gap: "10px",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {images.map((image, index) => {
//                   const active = selectedImage === index;

//                   return (
//                     <button
//                       key={`${image.url}-${index}`}
//                       type="button"
//                       onClick={() => setSelectedImage(index)}
//                       aria-label={`View image ${index + 1}`}
//                       style={{
//                         display: "flex",
//                         width: "85.236px",
//                         height: "106.507px",
//                         flexShrink: 0,
//                         aspectRatio: "85.24 / 106.51",
//                         padding: 0,
//                         justifyContent: "center",
//                         alignItems: "center",
//                         overflow: "hidden",
//                         border: active ? "2px solid #795547" : "none",
//                         borderRadius: "10px",
//                         background: "rgba(243, 208, 160, 0.37)",
//                         cursor: "pointer",
//                         boxSizing: "border-box",
//                       }}
//                     >
//                       <img
//                         src={image.url}
//                         alt={`${bonsai.name} image ${index + 1}`}
//                         style={{
//                           display: "block",
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "contain",
//                         }}
//                       />
//                     </button>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           {/* =================================================
//               RIGHT — PRODUCT INFORMATION
//           ================================================== */}
//           <div
//             style={{
//               flex: 1,
//               minWidth: 0,
//               paddingTop: "105px",
//             }}
//           >
//             {/* TITLE */}
//             <h1
//               className={playfairDisplay.className}
//               style={{
//                 margin: 0,
//                 color: "#795547",
//                 fontSize: "36px",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 lineHeight: "120%",
//                 letterSpacing: "-0.18px",
//               }}
//             >
//               {bonsai.name}
//             </h1>

//             {/* PRICE + RATING */}
//             <div
//               style={{
//                 display: "flex",
//                 width: "100%",
//                 marginTop: "12px",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <span
//                 className={jost.className}
//                 style={{
//                   color: "#3C2A20",
//                   fontSize: "28px",
//                   fontStyle: "normal",
//                   fontWeight: 600,
//                   lineHeight: "120%",
//                 }}
//               >
//                 {formatPrice(bonsai.price)}
//               </span>

//               <div
//                 className={jost.className}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "7px",
//                   color: "#141414",
//                   fontSize: "24px",
//                   fontStyle: "normal",
//                   fontWeight: 600,
//                   lineHeight: "100%",
//                 }}
//               >
//                 <span
//                   style={{
//                     color: "#F5A623",
//                     fontSize: "24px",
//                     lineHeight: "24px",
//                   }}
//                 >
//                   ★
//                 </span>

//                 <span>{RATING}</span>
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div
//               style={{
//                 width: "100%",
//                 marginTop: "18px",
//                 borderTop: "1px dashed #D5C9C0",
//               }}
//             />

//             {/* SHORT DESCRIPTION */}
//             <div
//               style={{
//                 marginTop: "17px",
//                 maxWidth: "650px",
//               }}
//             >
//               <h2
//                 className={playfairDisplay.className}
//                 style={{
//                   margin: 0,
//                   color: "#795547",
//                   fontSize: "20px",
//                   fontStyle: "normal",
//                   fontWeight: 700,
//                   lineHeight: "120%",
//                 }}
//               >
//                 Description:
//               </h2>

//               <p
//                 className={jost.className}
//                 style={{
//                   margin: "8px 0 0",
//                   color: "#666",
//                   fontSize: "16px",
//                   fontStyle: "normal",
//                   fontWeight: 400,
//                   lineHeight: "130%",
//                   display: "-webkit-box",
//                   WebkitLineClamp: 3,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                 }}
//               >
//                 {shortDescription}
//               </p>
//             </div>

//             {/* QUANTITY + WHATSAPP */}
//             <div
//               style={{
//                 display: "flex",
//                 marginTop: "38px",
//                 alignItems: "center",
//                 gap: "16px",
//               }}
//             >
//               {/* Unlimited quantity */}
//               <input
//                 type="number"
//                 min={1}
//                 step={1}
//                 value={quantity}
//                 onChange={(event) => {
//                   const value = Number(event.target.value);

//                   if (!Number.isFinite(value) || value < 1) {
//                     setQuantity(1);
//                     return;
//                   }

//                   setQuantity(Math.floor(value));
//                 }}
//                 aria-label="Quantity"
//                 className={jost.className}
//                 style={{
//                   display: "flex",
//                   width: "80px",
//                   height: "44px",
//                   padding: "11px 16px 12px",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexShrink: 0,
//                   border: "1px solid #D9D1CB",
//                   background: "#FFFFFF",
//                   color: "#3C2A20",
//                   fontSize: "15px",
//                   outline: "none",
//                   boxSizing: "border-box",
//                 }}
//               />

//               <a
//                 href={getWhatsAppUrl(bonsai.name, quantity)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={jost.className}
//                 style={{
//                   display: "flex",
//                   width: "416px",
//                   minHeight: "44px",
//                   padding: "17px 99px",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   flexShrink: 0,
//                   background: "#32A60B",
//                   color: "#FFFFFF",
//                   fontSize: "20px",
//                   fontStyle: "normal",
//                   fontWeight: 600,
//                   lineHeight: "120%",
//                   textDecoration: "none",
//                   boxSizing: "border-box",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 WhatsApp to Order
//               </a>
//             </div>

//             {/* DELIVERY T&C */}
//             <a
//               href="#delivery-terms"
//               className={jost.className}
//               style={{
//                 display: "inline-block",
//                 marginTop: "20px",
//                 color: "#534F4F",
//                 fontSize: "16px",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 lineHeight: "120%",
//                 textDecorationLine: "underline",
//                 textDecorationStyle: "solid",
//               }}
//             >
//               Delivery T&amp;C
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FULL DESCRIPTION
//       ====================================================== */}
//       <section
//         style={{
//           width: "100%",
//           borderTop: "1px dashed #D5C9C0",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "1400px",
//             margin: "0 auto",
//             padding: "50px 72px 34px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h2
//             className={playfairDisplay.className}
//             style={{
//               margin: 0,
//               color: "#795547",
//               fontSize: "36px",
//               fontStyle: "normal",
//               fontWeight: 700,
//               lineHeight: "120%",
//             }}
//           >
//             Description:
//           </h2>

//           {/* Render HTML instead of showing <p> tags */}
//           <div
//             className={jost.className}
//             style={{
//               marginTop: "12px",
//               maxWidth: "1120px",
//               color: "#666",
//               fontSize: "16px",
//               fontStyle: "normal",
//               fontWeight: 400,
//               lineHeight: "130%",
//             }}
//             dangerouslySetInnerHTML={{
//               __html:
//                 bonsai.description?.trim() ||
//                 "<p>No description available.</p>",
//             }}
//           />

//           {/* PRODUCT DETAILS */}
//           <div
//             style={{
//               marginTop: "29px",
//             }}
//           >
//             <h3
//               className={playfairDisplay.className}
//               style={{
//                 margin: 0,
//                 color: "#795547",
//                 fontSize: "21px",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 lineHeight: "120%",
//               }}
//             >
//               Product Details:
//             </h3>

//             <div
//               className={jost.className}
//               style={{
//                 marginTop: "12px",
//                 color: "#666",
//                 fontSize: "16px",
//                 fontWeight: 400,
//                 lineHeight: "130%",
//               }}
//             >
//               {bonsai.species && (
//                 <p style={{ margin: 0 }}>· Plant: {bonsai.species}</p>
//               )}

//               {bonsai.age && <p style={{ margin: 0 }}>· Age: {bonsai.age}</p>}

//               {bonsai.careLevel && (
//                 <p style={{ margin: 0 }}>· Care Level: {bonsai.careLevel}</p>
//               )}

//               <p style={{ margin: 0 }}>
//                 · Placement: {capitalize(bonsai.category)}
//               </p>

//               {bonsai.sunlight && (
//                 <p style={{ margin: 0 }}>· Light: {bonsai.sunlight}</p>
//               )}

//               {bonsai.watering && (
//                 <p style={{ margin: 0 }}>· Watering: {bonsai.watering}</p>
//               )}

//               {bonsai.height && (
//                 <p style={{ margin: 0 }}>· Height: {bonsai.height}</p>
//               )}

//               {bonsai.potInfo && (
//                 <p style={{ margin: 0 }}>· Pot: {bonsai.potInfo}</p>
//               )}

//               {bonsai.dimensions && (
//                 <p style={{ margin: 0 }}>· Dimensions: {bonsai.dimensions}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           RELATED PRODUCTS
//       ====================================================== */}
//       {relatedBonsais.length > 0 && (
//         <section
//           style={{
//             width: "100%",
//             padding: "25px 0 54px",
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               maxWidth: "1400px",
//               margin: "0 auto",
//               padding: "0 72px",
//               boxSizing: "border-box",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <h2
//                 className={playfairDisplay.className}
//                 style={{
//                   margin: 0,
//                   color: "#795547",
//                   fontFamily: '"Playfair Display", serif',
//                   fontSize: "32px",
//                   fontStyle: "normal",
//                   fontWeight: 600,
//                   lineHeight: "120%",
//                 }}
//               >
//                 Related Product
//               </h2>

//               <Link
//                 href="/bonsai/plants"
//                 className={jost.className}
//                 style={{
//                   display: "flex",
//                   height: "32px",
//                   padding: "0 14px",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   border: "1px solid #B59D90",
//                   color: "#795547",
//                   fontSize: "12px",
//                   textDecoration: "none",
//                 }}
//               >
//                 View All
//               </Link>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 marginTop: "25px",
//                 gap: "16px",
//                 overflowX: "auto",
//                 paddingBottom: "8px",
//               }}
//             >
//               {relatedBonsais.map((item) => (
//                 <BonsaiCard key={item._id} bonsai={item} />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       <BonsaiFooter />
//     </main>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";

import { useParams } from "next/navigation";

import BonsaiCard, { type Bonsai } from "@/components/bonsai/BonsaiCard";

import BonsaiFooter from "@/components/bonsai/BonsaiFooter";

import { jost, playfairDisplay } from "@/lib/fonts";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const MAX_IMAGES = 6;

// const RATING = "4.5";

function formatPrice(price?: number) {
  if (typeof price !== "number") {
    return "Price on request";
  }

  return `AED ${price.toFixed(2)}`;
}

function capitalize(value?: string) {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function stripHtml(value?: string) {
  if (!value) return "";

  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function getWhatsAppUrl(name: string, quantity: number) {
  const message = encodeURIComponent(
    `Hello Earthvine Interior, I am interested in ${name}. Quantity: ${quantity}.`,
  );

  return `https://wa.me/919310333265?text=${message}`;
}

export default function BonsaiProductPage() {
  const params = useParams<{ slug: string }>();

  const slug = params?.slug;

  const [bonsai, setBonsai] = useState<Bonsai | null>(null);

  const [relatedBonsais, setRelatedBonsais] = useState<Bonsai[]>([]);

  const [selectedImage, setSelectedImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchBonsai = async () => {
      try {
        setLoading(true);
        setError("");

        const [productResponse, relatedResponse] = await Promise.all([
          fetch(`${API_URL}/api/bonsai/${slug}`, {
            method: "GET",
            cache: "no-store",
          }),

          fetch(`${API_URL}/api/bonsai`, {
            method: "GET",
            cache: "no-store",
          }),
        ]);

        if (!productResponse.ok) {
          throw new Error("Bonsai not found");
        }

        const productResult = await productResponse.json();

        if (!productResult?.success || !productResult?.data) {
          throw new Error("Bonsai not found");
        }

        const current = productResult.data as Bonsai;

        setBonsai(current);
        setSelectedImage(0);

        if (relatedResponse.ok) {
          const relatedResult = await relatedResponse.json();

          if (relatedResult?.success && Array.isArray(relatedResult.data)) {
            const related = (relatedResult.data as Bonsai[])
              .filter((item) => item._id !== current._id)
              .slice(0, 4);

            setRelatedBonsais(related);
          } else {
            setRelatedBonsais([]);
          }
        } else {
          setRelatedBonsais([]);
        }
      } catch (fetchError) {
        console.error("Failed to load Bonsai:", fetchError);

        setError("Unable to load this bonsai.");
      } finally {
        setLoading(false);
      }
    };

    fetchBonsai();
  }, [slug]);

  const images = useMemo(() => {
    return (
      bonsai?.images?.filter((image) => image?.url).slice(0, MAX_IMAGES) ?? []
    );
  }, [bonsai]);

  const selectedImageUrl = images[selectedImage]?.url || images[0]?.url || "";

  const cleanDescription = stripHtml(bonsai?.description);

  if (loading) {
    return (
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#F8F2EA",
        }}
      >
        <div
          style={{
            minHeight: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            className={jost.className}
            style={{
              margin: 0,
              color: "#795547",
              fontSize: "18px",
            }}
          >
            Loading bonsai...
          </p>
        </div>

        <BonsaiFooter />
      </main>
    );
  }

  if (!bonsai || error) {
    return (
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#F8F2EA",
        }}
      >
        <div
          style={{
            minHeight: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            className={playfairDisplay.className}
            style={{
              margin: 0,
              color: "#795547",
              fontSize: "42px",
              fontWeight: 600,
            }}
          >
            Bonsai not found
          </h1>

          <Link
            href="/bonsai/plants"
            className={jost.className}
            style={{
              marginTop: "20px",
              color: "#795547",
              fontSize: "16px",
              textDecoration: "underline",
            }}
          >
            Back to Bonsai Collection
          </Link>
        </div>

        <BonsaiFooter />
      </main>
    );
  }

  return (
    <main
      style={{
        width: "100%",
        background: "#F8F2EA",
        marginTop: "68px",
      }}
    >
      {/* =====================================================
          MAIN PRODUCT SECTION
          EXACT 100PX HORIZONTAL PAGE PADDING
      ====================================================== */}
      <section
        style={{
          width: "100%",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingTop: "26px",
          paddingBottom: "55px",
          boxSizing: "border-box",
        }}
      >
        {/* =====================================================
            BREADCRUMB
        ====================================================== */}
        <div
          className={jost.className}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#8F8B88",
            fontSize: "16px",
            lineHeight: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#8F8B88",
              textDecoration: "none",
            }}
          >
            Homepage
          </Link>

          <span
            style={{
              color: "#8D98A8",
              fontSize: "25px",
            }}
          >
            ›
          </span>

          <Link
            href="/bonsai"
            style={{
              color: "#8F8B88",
              textDecoration: "none",
            }}
          >
            Bonsai
          </Link>

          <span
            style={{
              color: "#8D98A8",
              fontSize: "25px",
            }}
          >
            ›
          </span>

          <Link
            href="/bonsai/plants"
            style={{
              color: "#8F8B88",
              textDecoration: "none",
            }}
          >
            Explore More
          </Link>

          <span
            style={{
              color: "#8D98A8",
              fontSize: "25px",
            }}
          >
            ›
          </span>

          <span style={{ color: "#2E2926" }}>{bonsai.name}</span>
        </div>

        {/* =====================================================
            PRODUCT AREA
        ====================================================== */}
        <div
          style={{
            display: "flex",
            width: "88%",
            marginTop: "34px",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "70px",
          }}
        >
          {/* ===================================================
              LEFT — IMAGE GALLERY
          ==================================================== */}
          <div
            style={{
              width: "480px",
              flexShrink: 0,
            }}
          >
            {/* PRIMARY IMAGE */}
            <div
              style={{
                display: "flex",
                width: "480px",
                height: "600px",
                flexShrink: 0,
                aspectRatio: "4 / 5",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "40px",
                background: "rgba(243, 208, 160, 0.37)",
              }}
            >
              {selectedImageUrl ? (
                <img
                  src={selectedImageUrl}
                  alt={bonsai.name}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              ) : (
                <span
                  className={jost.className}
                  style={{
                    color: "#795547",
                    fontSize: "14px",
                  }}
                >
                  No image available
                </span>
              )}
            </div>

            {/* THUMBNAILS */}
            {images.length > 0 && (
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  gap: "16px",
                  flexWrap: "nowrap",
                  overflow: "visible",
                }}
              >
                {images.map((image, index) => {
                  const active = selectedImage === index;

                  return (
                    <button
                      key={`${image.url}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View image ${index + 1}`}
                      style={{
                        display: "flex",
                        width: "85.236px",
                        height: "106.507px",
                        flexShrink: 0,
                        padding: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        border: active ? "2px solid #795547" : "none",
                        borderRadius: "11px",
                        background: "rgba(243, 208, 160, 0.37)",
                        boxSizing: "border-box",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={image.url}
                        alt={`${bonsai.name} ${index + 1}`}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ===================================================
              RIGHT — PRODUCT INFO
          ==================================================== */}
          <div
            style={{
              width: "620px",
              flexShrink: 0,
              paddingTop: "90px",
              paddingLeft: "60px",
            }}
          >
            {/* TITLE */}
            <h1
              className={playfairDisplay.className}
              style={{
                margin: 0,
                color: "#795547",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.18px",
              }}
            >
              {bonsai.name}
            </h1>

            {/* PRICE + RATING */}
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "28px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className={jost.className}
                style={{
                  color: "#3C2A20",
                  fontSize: "28px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "120%",
                }}
              >
                {formatPrice(bonsai.price)}
              </span>

              {/* <div
                className={jost.className}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#141414",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "100%",
                }}
              >
                <span
                  style={{
                    color: "#F5A623",
                    fontSize: "24px",
                    lineHeight: "24px",
                  }}
                >
                  ★
                </span>

                <span>{RATING}</span>
              </div> */}
            </div>

            {/* DIVIDER */}
            <div
              style={{
                width: "100%",
                marginTop: "30px",
                borderTop: "1px dashed #CFC1B8",
              }}
            />

            {/* DESCRIPTION */}
            <div
              style={{
                width: "100%",
                marginTop: "30px",
              }}
            >
              <h2
                className={playfairDisplay.className}
                style={{
                  margin: 0,
                  color: "#795547",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "120%",
                }}
              >
                Description:
              </h2>

              <p
                className={jost.className}
                style={{
                  margin: "12px 0 0",
                  color: "#666",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "130%",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {cleanDescription}
              </p>
            </div>

            {/* QUANTITY + WHATSAPP */}
            <div
              style={{
                display: "flex",
                marginTop: "36px",
                alignItems: "center",
                gap: "27px",
              }}
            >
              <input
                type="number"
                min={1}
                step={1}
                value={quantity}
                onChange={(event) => {
                  const nextValue = Number(event.target.value);

                  if (!Number.isFinite(nextValue) || nextValue < 1) {
                    setQuantity(1);
                    return;
                  }

                  setQuantity(Math.floor(nextValue));
                }}
                aria-label="Quantity"
                className={`${jost.className} bonsai-quantity-input`}
                style={{
                  display: "flex",
                  width: "80px",
                  height: "44px",
                  padding: "11px 16px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  border: "1px solid #D8D2CD",
                  background: "#FFFFFF",
                  color: "var(--gray-800, #424551)",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                  boxSizing: "border-box",
                  outline: "none",
                  appearance: "auto",
                }}
              />

              <a
                href={getWhatsAppUrl(bonsai.name, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className={jost.className}
                style={{
                  display: "flex",
                  width: "416px",
                  height: "68px",
                  padding: "17px 99px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexShrink: 0,
                  background: "#32A60B",
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "120%",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                }}
              >
                WhatsApp to Order
              </a>
            </div>

            {/* DELIVERY T&C */}
            <a
              href="#delivery-terms"
              className={jost.className}
              style={{
                display: "inline-block",
                marginTop: "24px",
                color: "#534F4F",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
                textDecorationLine: "underline",
              }}
            >
              Delivery T&amp;C
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL DESCRIPTION
      ====================================================== */}
      <section
        style={{
          width: "100%",
          borderTop: "1px dashed #D5C9C0",
          paddingLeft: "100px",
          paddingRight: "100px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            paddingTop: "48px",
            paddingBottom: "34px",
            boxSizing: "border-box",
          }}
        >
          <h2
            className={playfairDisplay.className}
            style={{
              margin: 0,
              color: "#795547",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "120%",
            }}
          >
            Description:
          </h2>

          <div
            className={jost.className}
            style={{
              marginTop: "14px",
              maxWidth: "1120px",
              color: "#666",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "130%",
            }}
            dangerouslySetInnerHTML={{
              __html:
                bonsai.description?.trim() ||
                "<p>No description available.</p>",
            }}
          />

          {/* PRODUCT DETAILS */}
          <div
            style={{
              marginTop: "28px",
            }}
          >
            <h3
              className={playfairDisplay.className}
              style={{
                margin: 0,
                color: "#795547",
                fontSize: "26px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "130%",
              }}
            >
              Product Details:
            </h3>

            <div
              className={jost.className}
              style={{
                marginTop: "12px",
                color: "#666",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "130%",
              }}
            >
              {bonsai.species && (
                <p style={{ margin: 0 }}>· Plant: {bonsai.species}</p>
              )}

              {bonsai.age && <p style={{ margin: 0 }}>· Age: {bonsai.age}</p>}

              {bonsai.careLevel && (
                <p style={{ margin: 0 }}>· Care Level: {bonsai.careLevel}</p>
              )}

              <p style={{ margin: 0 }}>
                · Placement: {capitalize(bonsai.category)}
              </p>

              {bonsai.sunlight && (
                <p style={{ margin: 0 }}>· Light: {bonsai.sunlight}</p>
              )}

              {bonsai.watering && (
                <p style={{ margin: 0 }}>· Watering: {bonsai.watering}</p>
              )}

              {bonsai.height && (
                <p style={{ margin: 0 }}>· Height: {bonsai.height}</p>
              )}

              {bonsai.potInfo && (
                <p style={{ margin: 0 }}>· Pot: {bonsai.potInfo}</p>
              )}

              {bonsai.dimensions && (
                <p style={{ margin: 0 }}>· Dimensions: {bonsai.dimensions}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}
      {relatedBonsais.length > 0 && (
        <section
          style={{
            width: "100%",
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "26px",
            paddingBottom: "54px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2
                className={playfairDisplay.className}
                style={{
                  margin: 0,
                  color: "#795547",
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "120%",
                }}
              >
                Related Product
              </h2>

              <Link
                href="/bonsai/plants"
                className={jost.className}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #795547",
                  color: "#795547",
                  textAlign: "center",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "140%",
                  textDecoration: "none",
                }}
              >
                View All
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "25px",
                gap: "16px",
                overflowX: "auto",
                paddingBottom: "8px",
              }}
            >
              {relatedBonsais.map((item) => (
                <BonsaiCard key={item._id} bonsai={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BonsaiFooter />

      {/* =====================================================
          KEEP NUMBER INPUT ARROWS VISIBLE
      ====================================================== */}
      <style jsx global>{`
        .bonsai-quantity-input::-webkit-inner-spin-button,
        .bonsai-quantity-input::-webkit-outer-spin-button {
          opacity: 1 !important;
          display: block !important;
          -webkit-appearance: inner-spin-button !important;
        }

        .bonsai-quantity-input {
          appearance: auto !important;
          -moz-appearance: auto !important;
        }
      `}</style>
    </main>
  );
}
