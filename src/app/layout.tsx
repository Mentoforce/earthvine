import "./globals.css";
import { Arapey, Inter, Jost } from "next/font/google";

export const arapey = Arapey({
  subsets: ["latin"],
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
});

export const jost = Jost({
  subsets: ["latin"],
});

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
