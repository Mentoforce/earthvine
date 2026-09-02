"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { jost } from "@/lib/fonts";

export default function Navbar() {
  return (
    <header
      className="
        relative
        z-20
        w-full
        h-[70px] md:h-[80px]
        bg-[#E0C49E]
        border-b-2
        border-white/80
        shadow-[0_7px_4px_rgba(0,0,0,0.25)]
      "
    >
      <div
        className="
          h-full
          max-w-full
          mx-auto
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          md:px-10
          lg:pl-[76px]
          lg:pr-[94px]
        "
      >
        {/* LOGO */}

        <a
          href="/"
          className="
            relative
            w-[80px]
            h-[66px]
            md:w-[88px]
            md:h-[68px]
            lg:w-[102px]
            lg:h-[79px] 
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <Image
            src="/changedlogo.png"
            alt="Earthvine"
            fill
            priority
            className="object-contain"
          />
        </a>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-4
            md:gap-7
            lg:gap-[45px]
          "
        >
          {/* CALL */}
          <a
            href="tel:+919310333265"
            className={`
              flex
              w-auto
              md:w-[152px]
              items-center
              gap-[7.17px]
              shrink-0
              ${jost.className}
            `}
          >
            <Phone
              size={19.12}
              strokeWidth={2}
              color="#3C2A20"
              className="shrink-0"
            />

            <div className="flex flex-col">
              <span
                className="
                  text-[14.34px]
                  font-semibold
                  leading-[17.925px]
                  text-[#3C2A20]
                "
              >
                Call Now
              </span>

              <span
                className="
                  hidden
                  sm:block
                  text-[14.34px]
                  font-semibold
                  leading-[17.925px]
                  text-[#5A5D61]
                  whitespace-nowrap
                "
              >
                +91 93103 33265
              </span>
            </div>
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/9310333265"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex
              items-center
              text-[14px]
              md:text-[15px]
              lg:text-[17px]
              gap-[7.17px]
              rounded-full
              bg-[#00C950]
              px-3
              py-2
              md:px-[19.12px]
              md:py-[9.56px]
              text-white
              transition-all
              duration-300
              hover:bg-[#00b74a]
              ${jost.className}
            `}
          >
            <Image
              src="/LP/whatsappicon.svg"
              alt="WhatsApp"
              width={19}
              height={19}
              className="shrink-0"
            />

            <span
              className="
                text-[17px]
                font-medium
                whitespace-nowrap
              "
            >
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
