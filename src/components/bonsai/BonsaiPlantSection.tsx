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

// export default function BonsaiPlantSection() {
//   const [bonsais, setBonsais] = useState<Bonsai[]>([]);
//   const [activeFilter, setActiveFilter] = useState<Filter>("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBonsais = async () => {
//       try {
//         const response = await fetch(`${API_URL}/api/bonsai`, {
//           method: "GET",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch bonsais");
//         }

//         const result = await response.json();

//         if (result?.success && Array.isArray(result.data)) {
//           setBonsais(result.data);
//         } else {
//           setBonsais([]);
//         }
//       } catch (error) {
//         console.error("Failed to load Bonsai landing section:", error);

//         setBonsais([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBonsais();
//   }, []);

//   const filteredBonsais = useMemo(() => {
//     if (activeFilter === "all") {
//       return bonsais.slice(0, 8);
//     }

//     return bonsais
//       .filter((bonsai) => bonsai.category === activeFilter)
//       .slice(0, 8);
//   }, [bonsais, activeFilter]);

//   /*
//    * Do not leave an empty section on the landing page.
//    */
//   if (!loading && bonsais.length === 0) {
//     return null;
//   }

//   return (
//     <section
//       className="w-full"
//       style={{
//         background: "#F5F9F2",
//         paddingTop: "46px",
//         paddingBottom: "58px",
//       }}
//     >
//       {/* =====================================================
//           HEADING
//       ====================================================== */}
//       <div
//         className="mx-auto w-full px-6 text-center"
//         style={{
//           maxWidth: "1100px",
//         }}
//       >
//         <h2
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
//         </h2>

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
//       </div>

//       {/* =====================================================
//           CARDS
//       ====================================================== */}
//       <div
//         className="
//     mx-auto
//     mt-[26px]
//     grid
//     w-fit
//     grid-cols-1
//     gap-[16px]
//     px-6
//     sm:grid-cols-2
//     lg:grid-cols-4
//   "
//         style={{
//           maxWidth: "100%",
//         }}
//       >
//         {loading
//           ? Array.from({ length: 8 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="animate-pulse rounded-[18.499px] bg-white"
//                 style={{
//                   width: "287px",
//                   height: "327px",
//                 }}
//               />
//             ))
//           : filteredBonsais.map((bonsai) => (
//               <BonsaiCard key={bonsai._id} bonsai={bonsai} />
//             ))}
//       </div>

//       {/* =====================================================
//           EXPLORE MORE
//       ====================================================== */}
//       {!loading && bonsais.length > 8 && (
//         <div className="mt-8 flex justify-center">
//           <a
//             href="/bonsai/plants"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "9px 25px",
//               border: "1px solid #795547",
//               background: "transparent",
//               color: "#795547",
//               fontFamily: '"Frank Ruhl Libre", serif',
//               fontSize: "15px",
//               fontWeight: 600,
//               lineHeight: "18px",
//               textDecoration: "none",
//             }}
//           >
//             Explore More
//           </a>
//         </div>
//       )}
//     </section>
//   );
// }

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

export default function BonsaiPlantSection() {
  const [bonsais, setBonsais] = useState<Bonsai[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBonsais = async () => {
      try {
        const response = await fetch(`${API_URL}/api/bonsai`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bonsais");
        }

        const result = await response.json();

        if (result?.success && Array.isArray(result.data)) {
          setBonsais(result.data);
        } else {
          setBonsais([]);
        }
      } catch (error) {
        console.error("Failed to load Bonsai collection:", error);
        setBonsais([]);
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

  const visibleBonsais = useMemo(() => {
    const limit = showMore ? 8 : 4;

    return filteredBonsais.slice(0, limit);
  }, [filteredBonsais, showMore]);

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
    setShowMore(false);
  };

  /*
   * No published Bonsais at all:
   * hide the complete landing-page section.
   */
  if (!loading && bonsais.length === 0) {
    return null;
  }

  const canExploreMore = filteredBonsais.length > 4 && !showMore;

  return (
    <section
      className="w-full"
      style={{
        background: "#F5F9F2",
        paddingTop: "46px",
        paddingBottom: "58px",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div
        className="mx-auto w-full px-6 text-center"
        style={{
          maxWidth: "1200px",
        }}
      >
        <h2
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
        </h2>

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
      </div>

      {/* =====================================================
          CARDS / EMPTY STATE
      ====================================================== */}
      {loading ? (
        <div
          className="
    mx-auto
    flex
    w-full
    gap-[24px]
    px-6
    justify-start
    overflow-x-auto
  "
          style={{
            maxWidth: "1250px",
            marginTop: "75px",
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{
                width: "287px",
                minWidth: "287px",
                maxWidth: "287px",
                height: "327px",
                borderRadius: "18.499px",
                background: "#FFFFFF",
              }}
            />
          ))}
        </div>
      ) : filteredBonsais.length === 0 ? (
        <div
          style={{
            marginTop: "75px",
            minHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "max(24px, calc((100vw - 1196px) / 2))",
            paddingRight: "24px",
            color: "#504E4C",
            fontFamily: "Jost, sans-serif",
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          No bonsai plants available in this category.
        </div>
      ) : (
        <div
          className="
    mx-auto
    flex
    w-full
    gap-[24px]
    px-6
    justify-start
    overflow-x-auto
  "
          style={{
            maxWidth: "1250px",
            marginTop: "75px",
          }}
        >
          {visibleBonsais.map((bonsai) => (
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

      {/* =====================================================
          EXPLORE MORE
      ====================================================== */}
      {canExploreMore && (
        <div className="mt-[36px] flex justify-center">
          <a
            href="/bonsai/plants"
            style={{
              display: "flex",
              width: "175.711px",
              height: "56.087px",
              padding: "15.923px 27.036px 16.164px 26.675px",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
              border: "1px solid #795547",
              background: "transparent",
              color: "#795547",
              textAlign: "center",
              fontFamily: '"Frank Ruhl Libre", serif',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "23.124px",
              textDecoration: "none",
            }}
          >
            Explore More
          </a>
        </div>
      )}
    </section>
  );
}
