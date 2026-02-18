"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        ref={ref}
        className="md:relative hidden overflow-hidden p-10 bg-[hsl(var(--charcoal))]"
      >
        {/* Large Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] text-[hsl(var(--cream)/0.03)] font-bold leading-none whitespace-nowrap">
            EARTHVINE
          </span>
        </div>

        {/* Gold Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />

        <div className="relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="section-padding">
              {/* Label */}
              <div className="flex items-center gap-4 ">
                <div className="w-10 sm:w-12 h-px bg-[hsl(var(--gold)/0.4)]" />
                <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
                  Let's Create
                </span>
                {/* <div className="w-10 sm:w-12 h-px bg-[hsl(var(--gold)/0.4)]" /> */}
              </div>

              {/* Heading */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[hsl(var(--cream))] leading-[1.2]">
                Ready to
                <br />
                <span className="italic text-[hsl(var(--gold))]">
                  Transform?
                </span>
              </h2>
            </div>
            {/* Description */}
            <div>
              <p className="mt-6 sm:mt-8 text-[hsl(var(--cream)/0.5)] text-base sm:text-lg max-w-xl leading-relaxed">
                Let's bring your vision to life. Book a consultation or get an
                instant quotation — the first step to your dream space.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/quotation"
                  className="px-6 sm:px-7 py-3 rounded-lg bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-semibold text-[11px] sm:text-[13px] tracking-wider uppercase transition-all duration-500 hover:bg-[hsl(var(--cream))]"
                >
                  Get Free Quotation
                </Link>

                <Link
                  href="/contact"
                  className="px-6 sm:px-7 py-3 rounded-lg border border-[hsl(var(--gold))] text-[hsl(var(--cream))] text-[11px] sm:text-[13px] tracking-wider uppercase transition-all duration-500 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        ref={ref}
        className="md:hidden relative overflow-hidden section-padding bg-[hsl(var(--charcoal))]"
      >
        {/* Large Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] text-[hsl(var(--cream)/0.03)] font-bold leading-none whitespace-nowrap">
            EARTHVINE
          </span>
        </div>

        {/* Gold Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />

        <div className="relative z-10 max-w-225 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="w-10 sm:w-12 h-px bg-[hsl(var(--gold)/0.4)]" />
              <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
                Let's Create
              </span>
              <div className="w-10 sm:w-12 h-px bg-[hsl(var(--gold)/0.4)]" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[hsl(var(--cream))] leading-[1.2]">
              Ready to
              <br />
              <span className="italic text-[hsl(var(--gold))]">Transform?</span>
            </h2>

            {/* Description */}
            <p className="mt-6 sm:mt-8 text-[hsl(var(--cream)/0.5)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Let's bring your vision to life. Book a consultation or get an
              instant quotation — the first step to your dream space.
            </p>

            {/* Buttons */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/quotation"
                className="px-6 sm:px-10 py-3 rounded-lg sm:py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-semibold text-[11px] sm:text-[13px] tracking-wider uppercase transition-all duration-500 hover:bg-[hsl(var(--cream))]"
              >
                Get Free Quotation
              </Link>

              <Link
                href="/contact"
                className="px-6 sm:px-10 py-3 rounded-lg sm:py-4 border border-[hsl(var(--cream)/0.2)] text-[hsl(var(--cream))] text-[11px] sm:text-[13px] tracking-wider uppercase transition-all duration-500 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
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
