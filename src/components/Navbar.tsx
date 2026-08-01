// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import logo from "../../public/logo.png";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "Services" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-3 ${
//         scrolled
//           ? "bg-[hsl(var(--charcoal))] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
//           : "bg-[hsl(var(--charcoal)/0.9)] backdrop-blur-xl"
//       }`}
//     >
//       {/* Gold Accent Line */}
//       {scrolled && (
//         <div className="absolute bottom-0 left-0 right-0 h-px  bg-[hsl(var(--gold)/0.5)]" />
//       )}

//       <nav className="max-w-350 mx-auto px-5 sm:px-8 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-4 group">
//           <div className="relative">
//             <Image
//               src={logo}
//               alt="Earthvine Interiors"
//               width={50}
//               height={50}
//               priority
//               className="object-contain brightness-150 transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-[hsl(var(--gold)/0.2)] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           </div>

//           <div className="block">
//             <span className="font-display text-lg uppercase sm:text-xl font-semibold text-[hsl(var(--cream))] tracking-wider">
//               Earthvine
//             </span>
//             <span className="block text-[8px] sm:text-[10px] text-[hsl(var(--gold))] tracking-[0.35em] uppercase font-body font-medium">
//               Interiors
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-10">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`relative font-display text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
//                   isActive
//                     ? "text-[hsl(var(--gold))] font-semibold"
//                     : "text-[hsl(var(--cream)/0.7)] hover:text-[hsl(var(--cream))]"
//                 }`}
//               >
//                 {link.label}

//                 {isActive && (
//                   <motion.div
//                     layoutId="nav-underline"
//                     className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[hsl(var(--gold))] rounded-full"
//                   />
//                 )}
//               </Link>
//             );
//           })}

//           {/* CTA Button */}
//           <Link
//             href="/quotation"
//             className=" px-7 py-3 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] font-bold tracking-wider uppercase transition-all duration-500 border border-[hsl(var(--gold))] hover:bg-[hsl(var(--cream))] hover:shadow-[0_0_10px_rgba(186,159,119,0.2)]"
//           >
//             Get Quotation
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="md:hidden flex flex-col gap-1.5 p-2"
//           aria-label="Toggle menu"
//         >
//           <motion.span
//             animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             className="block w-7 h-0.5 bg-[hsl(var(--gold))]"
//           />
//           <motion.span
//             animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
//             className="block w-7 h-0.5 bg-[hsl(var(--gold))]"
//           />
//           <motion.span
//             animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             className="block w-7 h-0.5 bg-[hsl(var(--gold))]"
//           />
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4 }}
//             className="md:hidden bg-[hsl(var(--charcoal))] border-t border-[hsl(var(--gold)/0.2)]"
//           >
//             <div className="px-8 py-8 flex flex-col gap-5">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`font-display text-sm tracking-[0.15em] uppercase py-2 border-b border-[hsl(var(--cream)/0.05)] transition-colors ${
//                       isActive
//                         ? "text-[hsl(var(--gold))] font-semibold"
//                         : "text-[hsl(var(--cream)/0.7)] hover:text-[hsl(var(--cream))]"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}

//               <Link
//                 href="/quotation"
//                 className="mt-4 px-6 py-3 bg-[hsl(var(--gold))] rounded-lg text-[hsl(var(--charcoal))] font-display text-sm font-bold tracking-wider uppercase text-center transition-all duration-500 hover:bg-[hsl(var(--cream))]"
//               >
//                 Get Quotation
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import logo from "../../public/logo.png";
// import { menu } from "@/config/menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState<string | null>(
    null,
  );
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/services/navbar`,
        );

        const data = await res.json();

        setServices(data.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);
  const pathname = usePathname();
  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-3 ${
        scrolled
          ? "bg-[hsl(var(--charcoal))] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          : "bg-[hsl(var(--charcoal)/0.9)] backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-2 sm:px-8 flex items-center justify-between">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src={logo}
            alt="Earthvine Interiors"
            width={50}
            height={50}
            priority
            className="brightness-150"
          />

          <div>
            <span className="font-display text-lg uppercase sm:text-xl font-semibold text-[hsl(var(--cream))] tracking-wider">
              Earthvine
            </span>
            <span className="block text-[9px] text-[hsl(var(--gold))] tracking-[0.35em] uppercase">
              Interiors
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">
          {/* STATIC */}
          <Link
            href="/"
            className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--cream))] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--cream))] transition-colors"
          >
            About Us
          </Link>

          {/* SERVICES (DYNAMIC) */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link
                href="/services"
                className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--cream))] transition-colors"
              >
                Services
              </Link>

              <ChevronDown
                size={14}
                className="ml-1 text-[hsl(var(--cream)/0.6)] transition-transform duration-300 group-hover:rotate-180"
              />
            </div>

            {/* DROPDOWN */}
            <div
              className="
      absolute left-0 top-full mt-5
      w-64
      opacity-0 invisible
      group-hover:visible group-hover:opacity-100
      transition-all duration-300

      bg-[linear-gradient(135deg,rgba(30,30,30,0.95),rgba(40,40,40,0.9))]
      backdrop-blur-xl

      border border-[hsl(var(--gold)/0.15)]
      shadow-[0_20px_60px_rgba(0,0,0,0.5)]

      rounded-2xl
      py-3
    "
            >
              {services.map((cat: any) => (
                <div key={cat._id} className="group/sub relative">
                  {/* CATEGORY */}
                  <Link
                    href={`/services/${cat.slug}`}
                    className="
              flex items-center justify-between
              px-5 py-3
              text-sm
              text-[hsl(var(--cream)/0.75)]
              hover:text-[hsl(var(--gold))]
              hover:bg-[rgba(255,215,160,0.06)]
              transition-all duration-200
              rounded-lg
            "
                  >
                    {cat.title}

                    {cat.children?.length > 0 && (
                      <ChevronDown
                        size={14}
                        className="-rotate-90 text-[hsl(var(--cream)/0.6)]"
                      />
                    )}
                  </Link>

                  {/* SUBCATEGORY */}
                  {cat.children?.length > 0 && (
                    <div
                      className="
              absolute left-[100%] top-0 ml-2
              w-56
              opacity-0 invisible
              group-hover/sub:visible
              group-hover/sub:opacity-100
              transition-all duration-300

              bg-[linear-gradient(135deg,rgba(30,30,30,0.95),rgba(40,40,40,0.9))]
              backdrop-blur-xl

              border border-[hsl(var(--gold)/0.15)]
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]

              rounded-2xl
              py-2
            "
                    >
                      {cat.children.map((child: any) => (
                        <Link
                          key={child._id}
                          href={`/services/${child.slug}`}
                          className="
                    block px-5 py-3
                    text-sm
                    text-[hsl(var(--cream)/0.75)]
                    hover:text-[hsl(var(--gold))]
                    hover:bg-[rgba(255,215,160,0.06)]
                    transition-all duration-200
                    rounded-lg
                  "
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* STATIC */}
          <Link
            href="/contact"
            className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--cream))] transition-colors"
          >
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/quotation"
            className="px-7 py-3 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[hsl(var(--cream))]"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-7 h-0.5 bg-[hsl(var(--gold))]" />
          <span className="w-7 h-0.5 bg-[hsl(var(--gold))]" />
          <span className="w-7 h-0.5 bg-[hsl(var(--gold))]" />
        </button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[hsl(var(--charcoal))]"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {/* STATIC LINKS */}
              <Link
                href="/"
                className={`font-display text-sm tracking-[0.15em] uppercase ${
                  isActive("/")
                    ? "text-[hsl(var(--gold))]"
                    : "text-[hsl(var(--cream)/0.85)]"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`font-display text-sm tracking-[0.15em] uppercase ${
                  isActive("/about")
                    ? "text-[hsl(var(--gold))]"
                    : "text-[hsl(var(--cream)/0.85)]"
                }`}
              >
                About Us
              </Link>

              {/* SERVICES (DYNAMIC) */}
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className="font-display text-sm tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.85)]"
                  >
                    Services
                  </Link>

                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === "services" ? null : "services",
                      )
                    }
                  >
                    <ChevronDown
                      size={16}
                      className={`text-[hsl(var(--cream)/0.7)] transition-transform ${
                        mobileDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* CATEGORY DROPDOWN */}
                {mobileDropdown === "services" && (
                  <div className="ml-4 mt-3 flex flex-col gap-3">
                    {services.map((cat: any) => {
                      const isSubOpen = mobileSubDropdown === cat._id;

                      return (
                        <div key={cat._id}>
                          {/* CATEGORY */}
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/services/${cat.slug}`}
                              className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)]"
                            >
                              {cat.title}
                            </Link>

                            {cat.children?.length > 0 && (
                              <button
                                onClick={() =>
                                  setMobileSubDropdown(
                                    isSubOpen ? null : cat._id,
                                  )
                                }
                              >
                                <ChevronDown
                                  size={14}
                                  className={`text-[hsl(var(--cream)/0.6)] transition-transform ${
                                    isSubOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* SUBCATEGORY */}
                          {cat.children?.length > 0 && isSubOpen && (
                            <div className="ml-4 mt-2 flex flex-col gap-2">
                              {cat.children.map((child: any) => (
                                <Link
                                  key={child._id}
                                  href={`/services/${child.slug}`}
                                  className="font-display text-[12px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.6)]"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* STATIC */}
              <Link
                href="/contact"
                className={`font-display text-sm tracking-[0.15em] uppercase ${
                  isActive("/contact")
                    ? "text-[hsl(var(--gold))]"
                    : "text-[hsl(var(--cream)/0.85)]"
                }`}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
