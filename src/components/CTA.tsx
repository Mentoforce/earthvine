"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CTASection = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const desktopInView = useInView(desktopRef, { once: true, margin: "-100px" });
  const mobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

  return (
    <>
      <section
        ref={desktopRef}
        className="hidden md:block relative overflow-hidden p-10 bg-[hsl(var(--charcoal))]"
      >
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[300px] lg:text-[400px] text-[hsl(var(--cream)/0.03)] font-bold leading-none whitespace-nowrap">
            EARTHVINE
          </span>
        </div>

        {/* Gold Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />

        <div className="relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={desktopInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="section-padding">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[hsl(var(--gold)/0.4)]" />
                <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
                  Let's Create
                </span>
              </div>

              <h2 className="font-display text-6xl lg:text-8xl text-[hsl(var(--cream))] leading-[1.2]">
                Ready to <br />
                <span className="italic text-[hsl(var(--gold))]">
                  Transform?
                </span>
              </h2>
            </div>

            <div>
              <p className="mt-6 text-[hsl(var(--cream)/0.5)] text-lg max-w-xl leading-relaxed">
                Let's bring your vision to life. Book a consultation or get an
                instant quotation — the first step to your dream space.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/quotation"
                  className="px-7 py-3 rounded-lg bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-semibold text-[13px] tracking-wider uppercase transition-all duration-500 hover:bg-[hsl(var(--cream))]"
                >
                  Get Free Quotation
                </Link>

                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-lg border border-[hsl(var(--gold))] text-[hsl(var(--cream))] text-[13px] tracking-wider uppercase transition-all duration-500 hover:text-[hsl(var(--gold))]"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile */}
      <section
        ref={mobileRef}
        className="md:hidden relative overflow-hidden section-padding bg-[hsl(var(--charcoal))]"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[120px] text-[hsl(var(--cream)/0.03)] font-bold whitespace-nowrap">
            EARTHVINE
          </span>
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mobileInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-px bg-[hsl(var(--gold)/0.4)]" />
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
                Let's Create
              </span>
              <div className="w-10 h-px bg-[hsl(var(--gold)/0.4)]" />
            </div>

            <h2 className="font-display text-4xl text-[hsl(var(--cream))] leading-[1.2]">
              Ready to <br />
              <span className="italic text-[hsl(var(--gold))]">Transform?</span>
            </h2>

            <p className="mt-6 text-[hsl(var(--cream)/0.5)] text-base leading-relaxed">
              Let's bring your vision to life. Book a consultation or get an
              instant quotation — the first step to your dream space.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/quotation"
                className="px-6 py-3 rounded-lg bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-semibold text-[11px] tracking-wider uppercase"
              >
                Get Free Quotation
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-[hsl(var(--cream)/0.2)] text-[hsl(var(--cream))] text-[11px] tracking-wider uppercase"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
