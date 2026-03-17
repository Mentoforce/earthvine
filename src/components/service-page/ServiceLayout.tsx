// "use client";

// import ServiceHero from "./ServiceHero";
// import ServiceIntro from "./ServiceIntro";
// import ServiceFeatures from "./ServiceFeatures";
// import ServiceGallery from "./ServiceGallery";
// import ServiceProcess from "./ServiceProcess";
// import ServiceContact from "./ServiceContact";

// export default function ServiceLayout({
//   hero,
//   intro,
//   features,
//   gallery,
//   process,
// }: any) {
//   return (
//     <main>
//       <ServiceHero {...hero} />

//       <ServiceIntro {...intro} />

//       <ServiceFeatures {...features} />

//       <ServiceGallery images={gallery} />

//       <ServiceProcess {...process} />

//       <ServiceContact />
//     </main>
//   );
// }

import ServiceHero from "./ServiceHero";
import ServiceIntro from "./ServiceIntro";
import ServiceFeatures from "./ServiceFeatures";
import ServiceGallery from "./ServiceGallery";
import ServiceProcess from "./ServiceProcess";
import ServiceContact from "./ServiceContact";
import ServiceOutro from "./ServiceOutro";

export default function ServiceLayout(props: any) {
  return (
    <div className="bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
      <ServiceHero {...props.hero} />

      <ServiceIntro {...props.intro} />

      <ServiceFeatures {...props.features} />
      <ServiceOutro {...props.outro} />

      <ServiceProcess {...props.process} />
      <ServiceGallery images={props.gallery} />

      <ServiceContact />
    </div>
  );
}
