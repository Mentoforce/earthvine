"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { jost, playfairDisplay } from "@/lib/fonts";

const sections = [
  {
    title: "Quotation & Pricing",
    content: (
      <>
        Quotations are valid for <strong>30 days</strong> and are subject to
        material and market price changes. If production does not commence
        within <strong>90 days of booking</strong>, Earthvine Interiors may
        revise the quoted prices. Final pricing may vary based on actual site
        measurements, design changes, material selections, and customer
        requirements.
      </>
    ),
  },
  {
    title: "Project Timeline",
    content: (
      <>
        The estimated project completion period is{" "}
        <strong>90–120 working days</strong> from receipt of the required
        production payment, depending on the project scope. Delays in payments,
        approvals, site readiness, design changes, additional work, or material
        availability may affect the timeline.
      </>
    ),
  },
  {
    title: "Additional Works",
    content: (
      <>
        Civil work, painting, plumbing, electrical work, gas piping, core
        cutting, and other allied works are charged separately unless
        specifically included in the quotation. Costs depend on actual site
        conditions.
      </>
    ),
  },
  {
    title: "Design & Drawings",
    content: (
      <>
        The design phase is limited to <strong>60 days</strong> and includes up
        to <strong>three design revisions</strong>. All designs, drawings,
        layouts, and 3D visuals created by Earthvine Interiors remain our
        intellectual property and cannot be shared or used by third parties
        without written permission.
      </>
    ),
  },
  {
    title: "Customer Responsibilities",
    content: (
      <>
        The customer is responsible for providing electricity and basic site
        facilities, obtaining required builder/society permissions, paying
        applicable site charges, and ensuring the site is ready as per the
        agreed schedule.
      </>
    ),
  },
  {
    title: "Third-Party Vendors",
    content: (
      <>
        Third-party vendors should not work simultaneously with the Earthvine
        Interiors team where their work may affect our installation or quality.
        Allied works should preferably be carried out through Earthvine
        Interiors-approved vendors.
      </>
    ),
  },
  {
    title: "Storage & Procurement",
    content: (
      <>
        If products cannot be delivered due to a customer-related delay,
        <strong> storage/holding charges of ₹1,000 per day</strong> may apply.
        Products procured by Earthvine Interiors on behalf of the customer may
        attract a <strong>20% procurement/service charge</strong> over the
        original product price.
      </>
    ),
  },
  {
    title: "Installation & Handover",
    content: (
      <>
        Basic post-installation cleaning includes dusting, sweeping, mopping,
        and cleaning inside wooden cabinets. Deep cleaning is not included
        unless specifically mentioned. Site handover should be completed within{" "}
        <strong>10 days of project completion</strong>.
      </>
    ),
  },
  {
    title: "Cancellation & Refunds",
    content: (
      <>
        Customized and made-to-order products cannot be returned or exchanged
        except where required by applicable law or in cases of qualifying
        manufacturing defects. Payments made towards confirmed project stages
        are <strong>non-refundable</strong>, subject to applicable law and
        agreed project terms.
      </>
    ),
  },
  {
    title: "Payment Terms",
    content: (
      <>
        <strong>Woodwork:</strong> 10% or ₹2,00,000, whichever is higher, as
        booking amount; 30% before material selection; 30% upon final design
        sign-off and production; and the remaining 30% before dispatch to site.
        <br />
        <br />
        <strong>Services:</strong> <strong>100% advance payment</strong> before
        commencement of service work, unless otherwise agreed in writing.
      </>
    ),
  },
  {
    title: "Acceptance",
    content: (
      <>
        By booking a project, making payment, approving designs, or authorising
        work to begin, the customer confirms acceptance of these Terms &
        Conditions.
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen w-full bg-[#F7F2EC]">
      {/* =====================================================
          HERO
      ====================================================== */}
      {/* 
      <section className="relative overflow-hidden bg-[#263D24]">
        <div
          className="
            mx-auto
            flex
            min-h-[330px]
            w-full
            max-w-[1200px]
            flex-col
            justify-center
            px-6
            py-20

            md:min-h-[390px]
            md:px-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <p
              className={`
                ${jost.className}
                mb-4
                text-[13px]
                uppercase
                tracking-[3px]
                text-[#F7F2EC]/70

                md:text-[14px]
              `}
            >
              Earthvine Interiors
            </p>

            <h1
              className={`
                ${playfairDisplay.className}
                m-0
                text-[44px]
                font-normal
                leading-[1]
                text-black

                md:text-[64px]
              `}
            >
              Terms & Conditions
            </h1>

            <p
              className={`
                ${jost.className}
                mt-5
                max-w-[650px]
                text-[15px]
                leading-[1.6]
                text-[#F7F2EC]/80
                md:text-[17px]
              `}
            >
              Please read these terms carefully before booking a project or
              engaging Earthvine Interiors for our services.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section
        className="
          w-full
          bg-[#F7F2EC]
          mt-10
          px-5
          py-14
          md:px-8
          md:py-20
        "
      >
        <div className="mx-auto w-full max-w-[900px]">
          {/* INTRO */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
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
              These Terms & Conditions govern the booking, design, production,
              installation, and related services provided by Earthvine
              Interiors. By proceeding with a project, the customer agrees to
              the terms outlined below.
            </p>
          </motion.div>

          {/* =================================================
              TERMS SECTIONS
          ================================================== */}

          <div className="flex flex-col">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
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
                  {/* NUMBER */}

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

                  {/* CONTENT */}

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
          </div>

          {/* =================================================
              BACK TO HOME
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
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
