"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { jost, playfairDisplay } from "@/lib/fonts";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect your name, phone number, email address, address, project location, interior requirements, and other information you voluntarily provide.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to respond to enquiries, provide quotations and consultations, deliver our services, contact you regarding your project, improve our website and services, and send service or promotional communications where permitted.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell your personal information. Your information may be shared with trusted service providers when necessary to provide our services, operate our website, or comply with legal requirements.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies and similar technologies to improve website performance, understand visitor activity, and provide a better browsing experience.",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your information only for as long as reasonably necessary to provide our services, respond to enquiries, maintain business records, or meet legal requirements.",
  },
  {
    title: "Your Rights",
    content:
      "Where applicable, you may request access, correction, deletion, or withdrawal of consent regarding your personal information.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. Earthvine Interiors is not responsible for their privacy practices or content.",
  },
  {
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen mt-10 w-full bg-[#F7F2EC]">
      {/* CONTENT */}
      <section className="w-full bg-[#F7F2EC] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[900px]">
          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p
              className={`
                ${jost.className}
                text-[16px]
                leading-[1.7]
                text-[#504E4C]
                md:text-[18px]
                md:leading-[1.75]
              `}
            >
              Earthvine Interiors respects your privacy and protects the
              personal information you provide through our website{" "}
              <a
                href="https://earthvine.in/"
                className="text-[#795547] underline underline-offset-2"
              >
                https://earthvine.in/
              </a>
              .
            </p>
          </motion.div>

          {/* POLICY SECTIONS */}
          <div className="flex flex-col">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.03,
                  ease: "easeOut",
                }}
                className="
                  border-t
                  border-[#795547]/20
                  py-7
                  md:py-8
                "
              >
                <div className="flex gap-5 md:gap-8">
                  <span
                    className={`
                      ${playfairDisplay.className}
                      shrink-0
                      pt-1
                      text-[15px]
                      text-[#A96D5A]
                      md:text-[17px]
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2
                      className={`
                        ${playfairDisplay.className}
                        m-0
                        text-[24px]
                        font-normal
                        leading-[1.2]
                        text-[#795547]
                        md:text-[29px]
                      `}
                    >
                      {section.title}
                    </h2>

                    <p
                      className={`
                        ${jost.className}
                        m-0
                        mt-3
                        text-[15px]
                        leading-[1.7]
                        text-[#504E4C]
                        md:mt-4
                        md:text-[17px]
                        md:leading-[1.75]
                      `}
                    >
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="
                border-t
                border-[#795547]/20
                py-7
                md:py-8
              "
            >
              <div className="flex gap-5 md:gap-8">
                <span
                  className={`
                    ${playfairDisplay.className}
                    shrink-0
                    pt-1
                    text-[15px]
                    text-[#A96D5A]
                    md:text-[17px]
                  `}
                >
                  10
                </span>

                <div>
                  <h2
                    className={`
                      ${playfairDisplay.className}
                      m-0
                      text-[24px]
                      font-normal
                      leading-[1.2]
                      text-[#795547]
                      md:text-[29px]
                    `}
                  >
                    Contact Us
                  </h2>

                  <p
                    className={`
                      ${jost.className}
                      m-0
                      mt-3
                      text-[15px]
                      leading-[1.7]
                      text-[#504E4C]
                      md:mt-4
                      md:text-[17px]
                      md:leading-[1.75]
                    `}
                  >
                    If you have any questions, concerns, requests, or complaints
                    regarding this Privacy Policy or the handling of your
                    personal information, please contact us at{" "}
                    <a
                      href="mailto:info@earthvine.in"
                      className="font-medium text-[#795547] underline underline-offset-2"
                    >
                      info@earthvine.in
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BACK TO HOME */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/"
              className={`
                ${playfairDisplay.className}
                flex
                h-[46px]
                w-[165px]
                items-center
                justify-center
                bg-[#795547]
                text-[15px]
                text-white
                transition-colors
                duration-300
                hover:bg-[#3C2A20]
              `}
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
