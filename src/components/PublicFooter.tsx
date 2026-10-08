"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer2";

export default function PublicFooter() {
  const pathname = usePathname();

  // Bonsai page has its own footer inside BonsaiStack
  if (pathname.startsWith("/bonsai")) {
    return null;
  }

  return <Footer />;
}
