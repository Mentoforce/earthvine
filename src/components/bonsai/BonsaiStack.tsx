"use client";

import BonsaiHero from "@/components/bonsai/BonsaiHero";
import BonsaiAbout from "@/components/bonsai/BonsaiAbout";
import BonsaiFeatures from "@/components/bonsai/BonsaiFeatures";
import BonsaiIndoorOutdoor from "@/components/bonsai/BonsaiIndoorOutdoor";
import BonsaiPlantSection from "@/components/bonsai/BonsaiPlantSection";
import BonsaiTestimonials from "./BonsaiTestimonials";
import BonsaiFooter from "./BonsaiFooter";

export default function BonsaiStack() {
  return (
    <section className="relative w-full overflow-visible">
      {/* =====================================================
          HERO
          Keep BonsaiHero completely unchanged.
          The wrapper clips anything outside the viewport.
      ====================================================== */}

      <article
        className="
          sticky
          top-0
          z-10
          h-screen
          w-full
          overflow-hidden
        "
      >
        <BonsaiHero />
      </article>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <article className="relative z-20 w-full">
        <BonsaiAbout />
      </article>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <article className="relative z-30 w-full">
        <BonsaiFeatures />
      </article>

      {/* =====================================================
          INDOOR / OUTDOOR
      ====================================================== */}

      <article
        className="
          relative
          z-40
          w-full
        "
      >
        <BonsaiIndoorOutdoor />
      </article>

      <article className="relative z-50 w-full">
        <BonsaiPlantSection />
      </article>
      <article
        className="
          relative
          z-40
          w-full
        "
      >
        <BonsaiTestimonials />
      </article>
      <article
        className="
          relative
          z-40
          w-full
        "
      >
        <BonsaiFooter />
      </article>
    </section>
  );
}

// "use client";

// import BonsaiHero from "@/components/bonsai/BonsaiHero";
// import BonsaiAbout from "@/components/bonsai/BonsaiAbout";
// import BonsaiFeatures from "@/components/bonsai/BonsaiFeatures";
// import BonsaiIndoorOutdoor from "@/components/bonsai/BonsaiIndoorOutdoor";

// export default function BonsaiStack() {
//   return (
//     <section className="relative w-full overflow-visible">
//       {/* =====================================================
//           HERO STACK ITEM
//       ====================================================== */}

//       <article className="sticky top-0 z-10 h-screen w-full">
//         <BonsaiHero />
//       </article>

//       {/* =====================================================
//           ABOUT STACK ITEM
//       ====================================================== */}

//       <article className="relative z-20 w-full">
//         <BonsaiAbout />
//       </article>

//       <article className="relative z-30 w-full">
//         <BonsaiFeatures />
//       </article>

//       <article className="relative z-40 w-full">
//         <BonsaiIndoorOutdoor />
//       </article>
//     </section>
//   );
// }
