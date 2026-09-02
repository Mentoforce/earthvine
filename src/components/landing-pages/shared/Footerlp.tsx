"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { arapey, jost } from "@/lib/fonts";
const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/earthvinein" },
  { icon: Instagram, href: "https://www.instagram.com/_earthvine_/" },
  { icon: Youtube, href: "https://www.youtube.com/@earthvineinteriors" },
];

export default function Footer() {
  return (
    <footer className="bg-[#190F0A] text-white">
      <div className="mx-auto max-w-7xl px-5">
        {/* Top */}
        <div className="grid gap-12 py-16 lg:grid-cols-2 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            {/* Logo */}
            <a href="/">
              <Image
                src="/changedlogo2.png"
                alt="Earthvine Interior Design"
                width={120}
                height={10}
                className="object-contain"
              />
            </a>

            <p
              className={`
                ${jost.className}
                mt-6
                text-[16px]
                leading-[162%]
                text-[#99A1AF]
              `}
            >
              Delhi's trusted interior design company delivering beautiful,
              functional spaces since 2019. We blend creativity with
              craftsmanship.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#374151]
                  transition-all
                  duration-300
                  hover:bg-[#795547]
                "
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:ml-auto"
          >
            <h3
              className={`
                ${jost.className}
                mb-5
                mt-10
                text-[19px]
                font-semibold
              `}
            >
              Contact Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin size={19} />
                <span className={`${jost.className} text-[16px]`}>
                  G-24, Ground Floor, NDM-2, Netaji Subhash Place, New Delhi
                  110034
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={19} />
                <a
                  href="tel:+919888322220"
                  className={`${jost.className} text-[16px] hover:text-[#D8C0B1]`}
                >
                  +91 93103 33265
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={19} />
                <a
                  href="mailto:info@earthvine.in"
                  className={`${jost.className} text-[16px] hover:text-[#D8C0B1]`}
                >
                  info@earthvine.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div
          className={`
            ${jost.className}
            flex
            flex-col
            items-center
            justify-between
            gap-4
            py-8
            text-[14px]
            text-[#6A7282]
            lg:flex-row
          `}
        >
          <p>© 2026 Earthvine Interiors. All rights reserved.</p>

          <p>
            Designed and Developed by{" "}
            <a
              href="https://mentoforce.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Mentoforce
            </a>
          </p>

          <div className="flex items-center gap-4">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>

            <span className="text-white/20">|</span>

            <p className="hover:text-white cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
