import { Arapey, Inter, Jost, Playfair_Display } from "next/font/google";

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

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
