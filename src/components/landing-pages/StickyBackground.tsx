"use client";

import Image from "next/image";

export default function StickyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Image src="/LPHero.png" alt="" fill priority className="object-cover" />

      <div className="absolute inset-0 backdrop-blur-[1.5px]" />

      <div className="absolute inset-0 bg-linear-to-r from-[#E0C49E]/20 via-[#E0C49E]/10 to-transparent" />
    </div>
  );
}
