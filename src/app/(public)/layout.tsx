// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
// import "../../app/globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Toaster } from "@/components/ui/Toaster";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   display: "swap",
//   variable: "--font-playfair",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Earthvine",
//   description: "Interiors",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
//     >
//       <body className="antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
//         <Navbar />
//         {children}
//         <Toaster />
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar2";
import Footer from "@/components/Footer2";
import { Toaster } from "@/components/ui/Toaster";
import ContactPopup from "@/components/ContactPopup";
// import "../globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Interior Designers Company in India | Earthvine Interior",
  description:
    "Discover the best interior designers company in India with Earthvine Interior. Get stylish, functional and customised interior design solutions for homes, offices and commercial spaces.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={`antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))] ${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      >
        <Navbar />
        {children}
        <ContactPopup />
        <Toaster />
        <Footer />
      </div>
    </>
  );
}
