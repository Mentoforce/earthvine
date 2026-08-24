"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../public/logo2.png";
import { jost, playfairDisplay } from "@/lib/fonts";

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
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        h-20
        border-2
        border-white/80
        transition-all
        duration-700
        ${scrolled ? "shadow-[0_4px_30px_rgba(60,42,32,0.12)]" : ""}
      `}
      style={{
        background:
          "radial-gradient(326.52% 125.18% at 12.61% 176.25%, #FFFFFF 0%, #FEE6C3 100%)",
      }}
    >
      <nav
        className={`
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-12
          xl:px-[72px]
        `}
      >
        {/* =========================================================
            LOGO
        ========================================================= */}

        <Link
          href="/"
          className="
            relative
            z-10
            flex
            h-full
            w-[146px]
            shrink-0
            items-center
          "
        >
          <Image
            src={logo}
            alt="Earthvine Interiors"
            width={146}
            height={112}
            priority
            className="
              h-[112px]
              w-[146px]
              max-w-none
              object-contain
            "
          />
        </Link>

        {/* =========================================================
            DESKTOP MENU
        ========================================================= */}

        <div
          className={`
            ${jost.className}
            hidden
            items-center
            md:flex
            md:gap-10
            lg:gap-[52px]
          `}
        >
          {/* HOME */}

          <Link
            href="/"
            className={`
              flex
              w-[71px]
              shrink-0
              items-center
              justify-center
              text-[20px]
              leading-[120%]
              transition-colors
              duration-200
              ${
                isActive("/")
                  ? "font-bold text-[#1C1410]"
                  : "font-normal text-[#504E4C] hover:text-[#1C1410]"
              }
            `}
          >
            Home
          </Link>

          {/* ABOUT US */}

          <Link
            href="/about"
            className={`
    ${jost.className}
    flex
    w-[100px]
    shrink-0
    items-center
    justify-center
    text-[20px]
    leading-[120%]
    transition-colors
    duration-200
    ${
      isActive("/about")
        ? "font-bold text-[#1C1410]"
        : "font-normal text-[#504E4C] hover:text-[#1C1410]"
    }
  `}
          >
            About Us
          </Link>

          {/* =======================================================
              SERVICES - DYNAMIC
          ======================================================= */}

          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className={`
                  ${jost.className}
                  flex
                  items-center
                  text-[20px]
                  leading-[120%]
                  transition-colors
                  duration-200
                  ${
                    isActive("/services")
                      ? "font-bold text-[#1C1410]"
                      : "font-normal text-[#504E4C] hover:text-[#1C1410]"
                  }
                `}
              >
                Services
              </Link>

              <ChevronDown
                size={16}
                strokeWidth={1.8}
                className={`
                  ml-1
                  text-[#504E4C]
                  transition-transform
                  duration-300
                  group-hover:rotate-180
                `}
              />
            </div>

            {/* SERVICES DROPDOWN */}

            <div
              className="
                absolute
                left-1/2
                top-full
                mt-5
                w-64
                -translate-x-1/2
                invisible
                rounded-xl
                border
                border-[#795547]/15
                bg-[#FFF8EE]/95
                py-3
                opacity-0
                shadow-[0_20px_50px_rgba(60,42,32,0.15)]
                backdrop-blur-xl
                transition-all
                duration-300
                group-hover:visible
                group-hover:opacity-100
              "
            >
              {services.map((cat: any) => (
                <div key={cat._id} className="relative group/sub">
                  {/* CATEGORY */}

                  <Link
                    href={`/services/${cat.slug}`}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-lg
                      px-5
                      py-3
                      text-[15px]
                      font-normal
                      text-[#504E4C]
                      transition-all
                      duration-200
                      hover:bg-[#FEE6C3]/50
                      hover:text-[#1C1410]
                    "
                  >
                    {cat.title}

                    {cat.children?.length > 0 && (
                      <ChevronDown
                        size={14}
                        strokeWidth={1.8}
                        className="
                          -rotate-90
                          text-[#795547]
                        "
                      />
                    )}
                  </Link>

                  {/* SUBCATEGORY */}

                  {cat.children?.length > 0 && (
                    <div
                      className="
                        absolute
                        left-[100%]
                        top-0
                        ml-2
                        w-56
                        invisible
                        rounded-xl
                        border
                        border-[#795547]/15
                        bg-[#FFF8EE]/95
                        py-2
                        opacity-0
                        shadow-[0_20px_50px_rgba(60,42,32,0.15)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover/sub:visible
                        group-hover/sub:opacity-100
                      "
                    >
                      {cat.children.map((child: any) => (
                        <Link
                          key={child._id}
                          href={`/services/${child.slug}`}
                          className="
                            block
                            rounded-lg
                            px-5
                            py-3
                            text-[15px]
                            font-normal
                            text-[#504E4C]
                            transition-all
                            duration-200
                            hover:bg-[#FEE6C3]/50
                            hover:text-[#1C1410]
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

          {/* CONTACT */}

          <Link
            href="/contact"
            className={`
              ${jost.className}
              flex
              shrink-0
              items-center
              text-[20px]
              leading-[120%]
              transition-colors
              duration-200
              ${
                isActive("/contact")
                  ? "font-bold text-[#1C1410]"
                  : "font-normal text-[#504E4C] hover:text-[#1C1410]"
              }
            `}
          >
            Contact Us
          </Link>

          {/* GET QUOTE */}

          <Link
            href="/contact"
            className={`
              ${playfairDisplay.className}
              flex
              h-[52px]
              w-[150px]
              shrink-0
              items-center
              justify-center
              border
              border-white
              bg-[#3C2A20]
              text-[17px]
              font-normal
              leading-[120%]
              text-white
              transition-all
              duration-300
              hover:bg-[#4A3328]
            `}
          >
            Get Quote
          </Link>
        </div>

        {/* =========================================================
            MOBILE TOGGLE
        ========================================================= */}

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#795547]/30
            text-[#3C2A20]
            md:hidden
          "
        >
          {mobileOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              overflow-hidden
              border-t
              border-[#795547]/15
              bg-[#FFF8EE]
              md:hidden
            "
          >
            <div
              className={`
                ${jost.className}
                flex
                flex-col
                gap-5
                px-7
                py-7
              `}
            >
              {/* HOME */}

              <Link
                href="/"
                className={`
                  text-[19px]
                  leading-[120%]
                  ${
                    isActive("/")
                      ? "font-bold text-[#1C1410]"
                      : "font-normal text-[#504E4C]"
                  }
                `}
              >
                Home
              </Link>

              {/* ABOUT */}

              <Link
                href="/about"
                className={`
                  text-[19px]
                  leading-[120%]
                  ${
                    isActive("/about")
                      ? "font-bold text-[#1C1410]"
                      : "font-normal text-[#504E4C]"
                  }
                `}
              >
                About Us
              </Link>

              {/* SERVICES */}

              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className={`
                      text-[19px]
                      leading-[120%]
                      ${
                        isActive("/services")
                          ? "font-bold text-[#1C1410]"
                          : "font-normal text-[#504E4C]"
                      }
                    `}
                  >
                    Services
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === "services" ? null : "services",
                      )
                    }
                    className="p-2"
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={1.8}
                      className={`
                        text-[#504E4C]
                        transition-transform
                        duration-300
                        ${mobileDropdown === "services" ? "rotate-180" : ""}
                      `}
                    />
                  </button>
                </div>

                {/* CATEGORY DROPDOWN */}

                {mobileDropdown === "services" && (
                  <div className="ml-4 mt-4 flex flex-col gap-4 border-l border-[#795547]/20 pl-4">
                    {services.map((cat: any) => {
                      const isSubOpen = mobileSubDropdown === cat._id;

                      return (
                        <div key={cat._id}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/services/${cat.slug}`}
                              className="
                                text-[16px]
                                font-normal
                                leading-[120%]
                                text-[#504E4C]
                              "
                            >
                              {cat.title}
                            </Link>

                            {cat.children?.length > 0 && (
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileSubDropdown(
                                    isSubOpen ? null : cat._id,
                                  )
                                }
                                className="p-1"
                              >
                                <ChevronDown
                                  size={16}
                                  strokeWidth={1.8}
                                  className={`
                                    text-[#795547]
                                    transition-transform
                                    duration-300
                                    ${isSubOpen ? "rotate-180" : ""}
                                  `}
                                />
                              </button>
                            )}
                          </div>

                          {/* SUBCATEGORY */}

                          {cat.children?.length > 0 && isSubOpen && (
                            <div className="ml-4 mt-3 flex flex-col gap-3 border-l border-[#795547]/15 pl-4">
                              {cat.children.map((child: any) => (
                                <Link
                                  key={child._id}
                                  href={`/services/${child.slug}`}
                                  className="
                                        text-[14px]
                                        font-normal
                                        leading-[120%]
                                        text-[#504E4C]/80
                                      "
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

              {/* CONTACT */}

              <Link
                href="/contact"
                className={`
                  text-[19px]
                  leading-[120%]
                  ${
                    isActive("/contact")
                      ? "font-bold text-[#1C1410]"
                      : "font-normal text-[#504E4C]"
                  }
                `}
              >
                Contact Us
              </Link>

              {/* GET QUOTE */}

              <Link
                href="/quotation"
                className="
                  mt-2
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  bg-[#3C2A20]
                  text-[17px]
                  font-normal
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#4A3328]
                "
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
