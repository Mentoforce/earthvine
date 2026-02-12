"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/60 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border-b border-white/30 py-3"
          : "bg-white/40 backdrop-blur-3xl border-b border-white/20 py-5"
      }`}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent" />

      <nav className="w-full mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <Image
              src={logo}
              alt="Earthvine Interiors"
              height={54}
              width={54}
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="hidden sm:block">
            <span className="font-display text-xl font-semibold text-cream tracking-wider">
              Earthvine
            </span>
            <span className="block text-[10px] text-gold tracking-[0.35em] uppercase font-body font-medium">
              Interiors
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-body text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-gold font-semibold"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {link.label}

              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gold rounded-full"
                />
              )}
            </Link>
          ))}

          <Link
            href="/quotation"
            className="ml-6 px-7 py-3 bg-gold text-charcoal font-body text-[13px] font-bold tracking-wider uppercase hover:bg-cream hover:shadow-[0_0_30px_rgba(186,159,119,0.5)] transition-all duration-500 border border-gold"
          >
            Get Quotation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-7 h-0.5 bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-7 h-0.5 bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-7 h-0.5 bg-gold"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-t border-gold/20"
          >
            <div className="px-8 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm tracking-[0.15em] uppercase py-2 border-b border-cream/5 ${
                    pathname === link.href
                      ? "text-gold font-semibold"
                      : "text-cream/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/quotation"
                className="mt-4 px-6 py-3 bg-gold text-charcoal font-body text-sm font-bold tracking-wider uppercase text-center"
              >
                Get Quotation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
