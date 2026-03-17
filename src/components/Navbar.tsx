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
import { menu } from "@/config/menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState<string | null>(
    null,
  );

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
      <nav className="max-w-350 mx-auto px-5 sm:px-8 flex items-center justify-between">
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
          {menu.map((item) => (
            <div key={item.label} className="relative group">
              {/* Main Nav Item */}

              <div className="flex items-center gap-1 cursor-pointer">
                {"href" in item && item.href ? (
                  <Link
                    href={item.href}
                    className={`font-display text-[13px] tracking-[0.15em] uppercase transition-colors
                    ${
                      isActive(item.href)
                        ? "text-[hsl(var(--gold))]"
                        : "text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--cream))]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)]">
                    {item.label}
                  </span>
                )}

                {item.children && (
                  <ChevronDown
                    size={14}
                    className="text-[hsl(var(--cream)/0.7)] transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </div>

              {/* Dropdown */}

              {item.children && (
                <div
                  className="
                  absolute left-0 top-full mt-5
                  w-60
                  opacity-0 invisible
                  group-hover:visible group-hover:opacity-100
                  transition-all duration-300

                  bg-[hsl(var(--charcoal)/0.96)]
                  backdrop-blur-xl
                  border border-[hsl(var(--gold)/0.15)]
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  rounded-xl
                  py-2
                "
                >
                  {item.children.map((child) => (
                    <div key={child.label} className="group/sub relative">
                      {/* Child Item */}

                      {"href" in child && child.href ? (
                        <Link
                          href={child.href}
                          className="
                          flex items-center justify-between
                          px-5 py-3
                          text-sm
                          text-[hsl(var(--cream)/0.75)]
                          hover:text-[hsl(var(--gold))]
                          hover:bg-[hsl(var(--gold)/0.05)]
                          transition-colors
                        "
                        >
                          {child.label}

                          {child.children && (
                            <ChevronDown size={14} className="-rotate-90" />
                          )}
                        </Link>
                      ) : (
                        <div
                          className="
                          flex items-center justify-between
                          px-5 py-3
                          text-sm
                          text-[hsl(var(--cream)/0.75)]
                          cursor-default
                        "
                        >
                          {child.label}

                          {child.children && (
                            <ChevronDown size={14} className="-rotate-90" />
                          )}
                        </div>
                      )}

                      {/* Submenu */}

                      {child.children && (
                        <div
                          className="
                          absolute left-full top-0
                          w-56
                          opacity-0 invisible
                          group-hover/sub:visible
                          group-hover/sub:opacity-100
                          transition-all duration-300

                          bg-[hsl(var(--charcoal)/0.96)]
                          border border-[hsl(var(--gold)/0.15)]
                          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                          rounded-xl
                          py-2 ml-1
                        "
                        >
                          {child.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="
                              block px-5 py-3
                              text-sm
                              text-[hsl(var(--cream)/0.75)]
                              hover:text-[hsl(var(--gold))]
                              hover:bg-[hsl(var(--gold)/0.05)]
                              transition-colors 
                            "
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CTA */}

          <Link
            href="/quotation"
            className="px-7 py-3 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[hsl(var(--cream))]"
          >
            Get Quotation
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
              {menu.map((item) => {
                const isOpen = mobileDropdown === item.label;

                return (
                  <div key={item.label}>
                    {/* Top Level */}

                    <div className="flex items-center justify-between">
                      {"href" in item && item.href ? (
                        <Link
                          href={item.href}
                          className={`font-display text-sm tracking-[0.15em] uppercase ${
                            isActive(item.href)
                              ? "text-[hsl(var(--gold))]"
                              : "text-[hsl(var(--cream)/0.85)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="font-display text-sm tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.85)]">
                          {item.label}
                        </span>
                      )}

                      {item.children && (
                        <button
                          onClick={() =>
                            setMobileDropdown(isOpen ? null : item.label)
                          }
                        >
                          <ChevronDown
                            size={16}
                            className={`text-[hsl(var(--cream)/0.7)] transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Category Dropdown */}

                    {item.children && isOpen && (
                      <div className="ml-4 mt-3 flex flex-col gap-2">
                        {item.children.map((child) => {
                          const subOpen = mobileSubDropdown === child.label;

                          return (
                            <div key={child.label}>
                              {/* Category */}

                              <div className="flex items-center justify-between">
                                {"href" in child && child.href ? (
                                  <Link
                                    href={child.href}
                                    className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)]"
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <span className="font-display text-[13px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.75)]">
                                    {child.label}
                                  </span>
                                )}

                                {child.children && (
                                  <button
                                    onClick={() =>
                                      setMobileSubDropdown(
                                        subOpen ? null : child.label,
                                      )
                                    }
                                  >
                                    <ChevronDown
                                      size={14}
                                      className={`text-[hsl(var(--cream)/0.6)] transition-transform ${
                                        subOpen ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Subcategory */}

                              {child.children && subOpen && (
                                <div className="ml-4 mt-2 flex flex-col gap-1">
                                  {child.children.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      className="font-display text-[12px] tracking-[0.15em] uppercase text-[hsl(var(--cream)/0.6)]"
                                    >
                                      {sub.label}
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
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
