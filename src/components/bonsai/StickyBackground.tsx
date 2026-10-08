"use client";

export default function StickyBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050a03]"
      aria-hidden="true"
    >
      <img
        src="/bonsai/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Slight bottom darkening */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/45" />
    </div>
  );
}
