import Footer from "@/components/landing-pages/shared/Footerlp";
import Hero from "@/components/landing-pages/Hero";
import USPSection from "@/components/landing-pages/USPSection";
import Navbar from "@/components/landing-pages/shared/Navbar";
import StickyBackground from "@/components/landing-pages/StickyBackground";
import WhyChoose from "@/components/landing-pages/WhyChoose";
import OurServices from "@/components/landing-pages/OurServices";
import HowWeWork from "@/components/landing-pages/HowWeWork";
import RecentProjects from "@/components/landing-pages/RecentProjects";
import ClientReviews from "@/components/landing-pages/ClientReviews";
import FAQ from "@/components/landing-pages/FAQ";
import ContactSection from "@/components/landing-pages/ContactSection";

export default function LandingPage() {
  return (
    <>
      <StickyBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <USPSection />
        <WhyChoose />
        <OurServices />
        <HowWeWork />
        <RecentProjects />
        <ClientReviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
// import Navbar from "@/components/landing-pages/shared/Navbar";
// // import Hero from "@/components/landing-pages/Hero";
// // import Stats from "@/components/landing-pages/Stats";
// // import WhyChoose from "@/components/landing-pages/WhyChoose";
// // import Services from "@/components/landing-pages/Services";
// // import Process from "@/components/landing-pages/Process";
// // import Portfolio from "@/components/landing-pages/Portfolio";
// // import Testimonials from "@/components/landing-pages/Testimonials";
// // import FAQ from "@/components/landing-pages/FAQ";
// // import CTA from "@/components/landing-pages/CTA";
// import Footer from "@/components/landing-pages/shared/Footer";

// export const metadata = {
//   title: "Best Interior Designers in Delhi | Earthvine",
//   description:
//     "Transform your home with premium interior designers in Delhi. Book a free consultation today.",
// };

// export default function LandingPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         {/* <Hero />
//         <Stats />
//         <WhyChoose />
//         <Services />
//         <Process />
//         <Testimonials />
//         <Portfolio />
//         <FAQ />
//         <CTA /> */}
//       </main>

//       <Footer />
//     </>
//   );
// }
