// import "./globals.css";
// import { Arapey, Inter, Jost, Playfair_Display } from "next/font/google";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://earthvine.in"),
//   alternates: {
//     canonical: "/",
//   },
// };

// export const arapey = Arapey({
//   subsets: ["latin"],
//   weight: "400",
// });

// export const inter = Inter({
//   subsets: ["latin"],
// });

// export const jost = Jost({
//   subsets: ["latin"],
// });

// export const playfairDisplay = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://earthvine.in"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
