"use client";

import { useEffect, useMemo, useState } from "react";
import BonsaiCard, { type Bonsai } from "@/components/bonsai/BonsaiCard";

type Filter = "all" | "mature" | "outdoor" | "indoor";

const FILTERS: {
  label: string;
  value: Filter;
}[] = [
  {
    label: "All plants",
    value: "all",
  },
  {
    label: "Mature",
    value: "mature",
  },
  {
    label: "Outdoor",
    value: "outdoor",
  },
  {
    label: "Indoor",
    value: "indoor",
  },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BonsaiPlantsPage() {
  const [bonsais, setBonsais] = useState<Bonsai[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBonsais = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/bonsai`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          const errorText = await response.text();

          console.error("Bonsai API Error:", {
            url: `${API_URL}/api/bonsai`,
            status: response.status,
            statusText: response.statusText,
            response: errorText,
          });

          throw new Error(
            `Failed to fetch bonsais: ${response.status} ${response.statusText}`,
          );
        }

        const result = await response.json();

        if (!result?.success || !Array.isArray(result.data)) {
          throw new Error("Invalid Bonsai response");
        }

        setBonsais(result.data);
      } catch (error) {
        console.error("Failed to fetch Bonsais:", error);
        setError("Unable to load bonsai plants.");
      } finally {
        setLoading(false);
      }
    };

    fetchBonsais();
  }, []);

  const filteredBonsais = useMemo(() => {
    if (activeFilter === "all") {
      return bonsais;
    }

    return bonsais.filter((bonsai) => bonsai.category === activeFilter);
  }, [bonsais, activeFilter]);

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
  };

  return (
    <main
      className="min-h-screen w-full"
      style={{
        background: "#F5F9F2",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <section
        className="mx-auto w-full px-6 text-center"
        style={{
          maxWidth: "1200px",
          paddingTop: "115px",
          paddingBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#3C2A20",
            textAlign: "center",
            fontFamily: '"Frank Ruhl Libre", serif',
            fontSize: "45px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "46.248px",
          }}
        >
          Choose Your Bonsai with Earthvine Interior
        </h1>

        <p
          style={{
            width: "1028px",
            maxWidth: "100%",
            margin: "12px auto 0",
            color: "#504E4C",
            textAlign: "center",
            fontFamily: "Jost, sans-serif",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "26.304px",
          }}
        >
          If you&apos;ve been searching for a “Bonsai Plant in UAE,” you can
          find your answer at Earthvine Interior. Beautify your surroundings
          with greenery that looks charming and elegant, and that also comes
          ready to suit your space. All you need is to provide the care it
          requires to keep it healthy and beautiful.
        </p>

        {/* =====================================================
            FILTERS
        ====================================================== */}
        <div
          className="mt-[30px] flex justify-center"
          style={{
            gap: "11.6px",
          }}
        >
          {FILTERS.map((filter) => {
            const selected = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => handleFilterChange(filter.value)}
                style={{
                  display: "flex",
                  padding: "9.25px 23.124px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  border: "none",
                  borderRadius: 0,
                  background: selected ? "#795547" : "#FFFFFF",
                  boxShadow: "0 1.156px 3.469px 0 rgba(0, 0, 0, 0.10)",
                  color: selected ? "#FFFFFF" : "#3C2A20",
                  textAlign: "center",
                  fontFamily: '"Frank Ruhl Libre", serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "23.124px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          BONSAI CARDS
      ====================================================== */}
      <section
        className="mx-auto w-full px-6"
        style={{
          maxWidth: "1250px",
          paddingBottom: "80px",
          marginTop: "75px",
        }}
      >
        {loading ? (
          <div className="flex w-full items-start gap-[24px] overflow-x-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: "287px",
                  height: "327px",
                  borderRadius: "18.499px",
                  background: "#FFFFFF",
                }}
              />
            ))}
          </div>
        ) : error ? (
          <div className="flex min-h-[300px] items-center justify-center text-center">
            <p
              style={{
                margin: 0,
                color: "#795547",
                fontFamily: "Jost, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              {error}
            </p>
          </div>
        ) : filteredBonsais.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center text-center">
            <p
              style={{
                margin: 0,
                color: "#504E4C",
                fontFamily: "Jost, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              No bonsai plants available in this category.
            </p>
          </div>
        ) : (
          <div className="flex w-full items-start gap-[24px] overflow-x-auto">
            {filteredBonsais.map((bonsai) => (
              <div
                key={bonsai._id}
                className="shrink-0"
                style={{
                  width: "287px",
                  minWidth: "287px",
                  maxWidth: "287px",
                }}
              >
                <BonsaiCard bonsai={bonsai} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
//-------New---------------
// "use client";

// import { useEffect, useMemo, useState } from "react";
// import BonsaiCard, { type Bonsai } from "@/components/bonsai/BonsaiCard";

// type Filter = "all" | "mature" | "outdoor" | "indoor";

// const FILTERS: {
//   label: string;
//   value: Filter;
// }[] = [
//   {
//     label: "All plants",
//     value: "all",
//   },
//   {
//     label: "Mature",
//     value: "mature",
//   },
//   {
//     label: "Outdoor",
//     value: "outdoor",
//   },
//   {
//     label: "Indoor",
//     value: "indoor",
//   },
// ];

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export default function BonsaiPlantsPage() {
//   const [bonsais, setBonsais] = useState<Bonsai[]>([]);
//   const [activeFilter, setActiveFilter] = useState<Filter>("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBonsais = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await fetch(`${API_URL}/api/bonsai`, {
//           method: "GET",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch bonsais");
//         }

//         const result = await response.json();

//         if (!result?.success || !Array.isArray(result.data)) {
//           throw new Error("Invalid Bonsai response");
//         }

//         setBonsais(result.data);
//       } catch (error) {
//         console.error("Failed to fetch Bonsais:", error);
//         setError("Unable to load bonsai plants.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBonsais();
//   }, []);

//   const filteredBonsais = useMemo(() => {
//     if (activeFilter === "all") {
//       return bonsais;
//     }

//     return bonsais.filter((bonsai) => bonsai.category === activeFilter);
//   }, [bonsais, activeFilter]);

//   return (
//     <main
//       className="min-h-screen w-full"
//       style={{
//         background: "#F5F9F2",
//       }}
//     >
//       {/* =====================================================
//           HEADER
//       ====================================================== */}
//       <section
//         className="mx-auto w-full px-6 text-center"
//         style={{
//           maxWidth: "1100px",
//           paddingTop: "115px",
//           paddingBottom: "20px",
//         }}
//       >
//         <h1
//           style={{
//             margin: 0,
//             color: "#3C2A20",
//             fontFamily: '"Frank Ruhl Libre", serif',
//             fontSize: "42px",
//             fontStyle: "normal",
//             fontWeight: 600,
//             lineHeight: "1.15",
//           }}
//         >
//           Choose Your Bonsai with Earthvine Interior
//         </h1>

//         <p
//           style={{
//             maxWidth: "900px",
//             margin: "10px auto 0",
//             color: "#504E4C",
//             fontFamily: "Jost",
//             fontSize: "15px",
//             fontWeight: 400,
//             lineHeight: "20px",
//           }}
//         >
//           If you&apos;ve been searching for a “Bonsai Plant in Delhi,” you can
//           find your answer at Earthvine Interior. Beautify your surroundings
//           with greenery that looks charming and elegant, and that also comes
//           ready to suit your space. All you need is to provide the care it
//           requires to keep it healthy and beautiful.
//         </p>

//         {/* =====================================================
//             FILTERS
//         ====================================================== */}
//         <div className="mt-7 flex flex-wrap justify-center gap-[6px]">
//           {FILTERS.map((filter) => {
//             const isActive = activeFilter === filter.value;

//             return (
//               <button
//                 key={filter.value}
//                 type="button"
//                 onClick={() => setActiveFilter(filter.value)}
//                 style={{
//                   border: "none",
//                   borderRadius: 0,
//                   padding: "8px 18px",
//                   background: isActive ? "#795547" : "#FFFFFF",
//                   color: isActive ? "#FFFFFF" : "#504E4C",
//                   fontFamily: '"Frank Ruhl Libre", serif',
//                   fontSize: "14px",
//                   fontWeight: 600,
//                   lineHeight: "18px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {filter.label}
//               </button>
//             );
//           })}
//         </div>
//       </section>

//       {/* =====================================================
//           PRODUCTS
//       ====================================================== */}
//       <section
//         className="mx-auto w-full px-6"
//         style={{
//           maxWidth: "1100px",
//           paddingBottom: "80px",
//         }}
//       >
//         {loading ? (
//           <div
//             className="
//               grid
//               grid-cols-2
//               gap-[14px]
//               sm:grid-cols-3
//               lg:grid-cols-4
//               lg:gap-[16px]
//             "
//           >
//             {Array.from({ length: 8 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="animate-pulse rounded-[14px] bg-white"
//                 style={{
//                   height: "205px",
//                   border: "1px solid rgba(60,42,32,0.08)",
//                 }}
//               />
//             ))}
//           </div>
//         ) : error ? (
//           <div className="flex min-h-[300px] items-center justify-center text-center">
//             <p
//               style={{
//                 margin: 0,
//                 color: "#795547",
//                 fontFamily: "Jost",
//                 fontSize: "16px",
//               }}
//             >
//               {error}
//             </p>
//           </div>
//         ) : filteredBonsais.length === 0 ? (
//           <div className="flex min-h-[300px] items-center justify-center text-center">
//             <p
//               style={{
//                 margin: 0,
//                 color: "#504E4C",
//                 fontFamily: "Jost",
//                 fontSize: "16px",
//               }}
//             >
//               No bonsai plants available in this category.
//             </p>
//           </div>
//         ) : (
//           <div
//             className="
//               grid
//               grid-cols-2
//               gap-[14px]
//               sm:grid-cols-3
//               lg:grid-cols-4
//               lg:gap-[16px]
//             "
//           >
//             {filteredBonsais.map((bonsai) => (
//               <BonsaiCard key={bonsai._id} bonsai={bonsai} />
//             ))}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

//---------------------old-------------------

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import BonsaiCard, { type Bonsai } from "@/components/bonsai/BonsaiCard";

// type CategoryFilter = "all" | "mature" | "outdoor" | "indoor";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const FILTERS: {
//   label: string;
//   value: CategoryFilter;
// }[] = [
//   {
//     label: "All plants",
//     value: "all",
//   },
//   {
//     label: "Mature",
//     value: "mature",
//   },
//   {
//     label: "Outdoor",
//     value: "outdoor",
//   },
//   {
//     label: "Indoor",
//     value: "indoor",
//   },
// ];

// export default function BonsaiPlantsPage() {
//   const [bonsais, setBonsais] = useState<Bonsai[]>([]);
//   const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBonsais = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await fetch(`${API_URL}/api/bonsai`, {
//           method: "GET",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch bonsais");
//         }

//         const result = await response.json();

//         setBonsais(result?.data || []);
//       } catch (err) {
//         console.error("Failed to fetch bonsais:", err);
//         setError("Unable to load bonsai plants.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBonsais();
//   }, []);

//   const filteredBonsais = useMemo(() => {
//     if (activeFilter === "all") {
//       return bonsais;
//     }

//     return bonsais.filter((bonsai) => bonsai.category === activeFilter);
//   }, [bonsais, activeFilter]);

//   return (
//     <main
//       className="w-full"
//       style={{
//         background: "#F5F9F2",
//       }}
//     >
//       {/* =====================================================
//           HEADER
//       ====================================================== */}
//       <section
//         className="mx-auto w-full max-w-[1100px] px-6 text-center"
//         style={{
//           paddingTop: "38px",
//           paddingBottom: "20px",
//         }}
//       >
//         <h1
//           style={{
//             margin: 0,
//             color: "#3C2A20",
//             fontFamily: '"Frank Ruhl Libre", serif',
//             fontSize: "42px",
//             fontStyle: "normal",
//             fontWeight: 600,
//             lineHeight: "1.15",
//           }}
//         >
//           Choose Your Bonsai with Earthvine Interior
//         </h1>

//         <p
//           style={{
//             maxWidth: "900px",
//             margin: "10px auto 0",
//             color: "#504E4C",
//             fontFamily: "Jost",
//             fontSize: "15px",
//             fontWeight: 400,
//             lineHeight: "20px",
//           }}
//         >
//           If you&apos;ve been searching for a “Bonsai Plant in Delhi,” you can
//           find your answer at Earthvine Interior. Beautify your surroundings
//           with greenery that looks charming and elegant, and that also comes
//           ready to suit your space. All you need is to provide the care it
//           requires to keep it healthy and beautiful.
//         </p>

//         {/* ===================================================
//             FILTERS
//         ==================================================== */}
//         <div className="mt-7 flex flex-wrap items-center justify-center gap-[6px]">
//           {FILTERS.map((filter) => {
//             const active = activeFilter === filter.value;

//             return (
//               <button
//                 key={filter.value}
//                 type="button"
//                 onClick={() => setActiveFilter(filter.value)}
//                 className="px-[18px] py-[8px] transition-colors duration-200"
//                 style={{
//                   border: "none",
//                   borderRadius: 0,
//                   background: active ? "#795547" : "#FFFFFF",
//                   color: active ? "#FFFFFF" : "#504E4C",
//                   fontFamily: '"Frank Ruhl Libre", serif',
//                   fontSize: "14px",
//                   fontWeight: 600,
//                   cursor: "pointer",
//                 }}
//               >
//                 {filter.label}
//               </button>
//             );
//           })}
//         </div>
//       </section>

//       {/* =====================================================
//           PRODUCTS
//       ====================================================== */}
//       <section
//         className="mx-auto w-full max-w-[1100px] px-6"
//         style={{
//           paddingBottom: "80px",
//         }}
//       >
//         {loading ? (
//           <div className="flex min-h-[300px] items-center justify-center">
//             <p
//               className="text-[16px] text-[#504E4C]"
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               Loading bonsai plants...
//             </p>
//           </div>
//         ) : error ? (
//           <div className="flex min-h-[300px] items-center justify-center">
//             <p
//               className="text-[16px] text-[#795547]"
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               {error}
//             </p>
//           </div>
//         ) : filteredBonsais.length === 0 ? (
//           <div className="flex min-h-[300px] items-center justify-center">
//             <p
//               className="text-[16px] text-[#504E4C]"
//               style={{
//                 fontFamily: "Jost",
//               }}
//             >
//               No bonsai plants available.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-[14px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-[16px]">
//             {filteredBonsais.map((bonsai) => (
//               <BonsaiCard key={bonsai._id} bonsai={bonsai} />
//             ))}
//           </div>
//         )}

//         {/* ===================================================
//             EXPLORE MORE
//         ==================================================== */}
//         {!loading &&
//           !error &&
//           activeFilter === "all" &&
//           bonsais.length > 12 && (
//             <div className="mt-10 flex justify-center">
//               <button
//                 type="button"
//                 className="
//                   border
//                   border-[#795547]
//                   bg-transparent
//                   px-[28px]
//                   py-[10px]
//                   text-[15px]
//                   text-[#795547]
//                   transition-all
//                   duration-300
//                   hover:bg-[#795547]
//                   hover:text-white
//                 "
//                 style={{
//                   fontFamily: '"Frank Ruhl Libre", serif',
//                 }}
//               >
//                 Explore More
//               </button>
//             </div>
//           )}
//       </section>
//     </main>
//   );
// }
