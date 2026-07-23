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
      {props.hero?.title && props.hero?.image && (
        <ServiceHero {...props.hero} />
      )}

      {props.intro?.content && <ServiceIntro {...props.intro} />}

      {props.features?.items?.length > 0 &&
        props.features.items.some((i: string) => i.trim() !== "") && (
          <ServiceFeatures {...props.features} />
        )}

      {/* {props.outro?.heading && <ServiceOutro {...props.outro} />} */}
      {props.outro?.sections?.length > 0 && <ServiceOutro {...props.outro} />}

      {props.process?.steps?.length > 0 &&
        props.process.steps.some((s: any) => s.title || s.desc) && (
          <ServiceProcess {...props.process} />
        )}

      {props.gallery?.length > 0 &&
        props.gallery.some((img: any) => img.src) && (
          <ServiceGallery images={props.gallery} />
        )}

      <ServiceContact />
    </div>
  );
}

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

// export default function ServiceLayout(props: any) {
//   return (
//     <div className="bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
//       {props.hero && <ServiceHero {...props.hero} />}

//       {props.intro && <ServiceIntro {...props.intro} />}

//       {props.features && <ServiceFeatures {...props.features} />}
//       {props.outro && <ServiceOutro {...props.outro} />}

//       {props.process && <ServiceProcess {...props.process} />}
//       {props.gallery && <ServiceGallery images={props.gallery} />}

//       <ServiceContact />
//     </div>
//   );
// }
