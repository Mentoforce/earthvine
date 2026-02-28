"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[hsl(var(--charcoal))] text-[hsl(var(--cream))] px-5 md:px-0">
      {/* Top Accent Line */}
      <div className="h-px bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />

      <div className="max-w-350 mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={logo}
                alt="Earthvine Interiors logo"
                width={48}
                height={48}
              />
              <div>
                <span className="font-display text-xl tracking-wider">
                  Earthvine
                </span>
                <span className="block text-[10px] text-[hsl(var(--gold))] tracking-[0.35em] uppercase">
                  Interiors
                </span>
              </div>
            </div>

            <p className="text-[hsl(var(--cream)/0.4)] text-sm leading-relaxed max-w-xs">
              From Blueprint to Beautiful Reality. We craft spaces that tell
              your story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-[hsl(var(--gold))] mb-6">
              Navigate
            </h4>

            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[hsl(var(--cream)/0.4)] hover:text-[hsl(var(--gold))] transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-[hsl(var(--gold))] mb-6">
              Services
            </h4>

            <div className="flex flex-col gap-3 text-sm text-[hsl(var(--cream)/0.4)]">
              <span>Residential Design</span>
              <span>Commercial Spaces</span>
              <span>Terrace & Outdoor</span>
              <span>Renovation</span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 md:col-start-10">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-[hsl(var(--gold))] mb-6">
              Get In Touch
            </h4>

            <div className="flex flex-col gap-3 text-sm text-[hsl(var(--cream)/0.4)]">
              <span>Infoearthvine@gmail.com</span>
              <span>+91 93103 33265</span>

              <Link
                href="/quotation"
                className="mt-4 inline-block px-6 sm:px-7 py-3 rounded-lg border border-[hsl(var(--gold)/0.3)] text-[hsl(var(--gold))] text-center text-[12px] tracking-widest uppercase transition-all duration-300 hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--charcoal))]"
              >
                Get Quotation
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="h-px mt-20 bg-linear-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
        <div className="flex justify-center text-[hsl(var(--cream)/0.25)] text-xs tracking-wider">
          <p className="my-8">
            © {new Date().getFullYear()} Earthvine Interiors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
