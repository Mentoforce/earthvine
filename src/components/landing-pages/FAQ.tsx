"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { arapey, jost } from "@/lib/fonts";

const faqs = [
  {
    question: "How much does interior design cost in Delhi?",
    answer:
      "The cost depends on your space size, design style, materials, and customization needs. We offer solutions based on your budget and requirements.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide interior design services across Delhi NCR, including Noida, Gurgaon, Greater Noida, and Ghaziabad.",
  },
  {
    question: "Do you provide turnkey interior solutions?",
    answer:
      "Yes, we provide complete turnkey solutions, from design planning and material selection to execution and final handover.",
  },
  {
    question: "How long does a typical home interior project take?",
    answer:
      "Project timelines depend on the size and complexity of the work. We provide a clear timeline after understanding your requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className={`${jost.className}
              uppercase
              tracking-[0.18em]
              font-semibold
              text-[#795547]
              text-[18px]`}
          >
            FAQ
          </p>

          <h2
            className={`${arapey.className}
              mt-2
              text-[19px]
              lg:text-[45px]
              leading-none
              text-[#2E2E2F]`}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-[19px]
            border
            border-[#ECECEC]
            bg-white
            shadow-[0_4px_14px_rgba(0,0,0,0.08)]
          "
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={
                index !== faqs.length - 1 ? "border-b border-[#ECECEC]" : ""
              }
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                "
              >
                <span
                  className={`${jost.className}
                    text-[19px]
                    font-normal
                    text-[#2E2E2F]`}
                >
                  {faq.question}
                </span>

                <ChevronDown
                  size={24}
                  className={`text-[#795547] transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`${jost.className}
                        px-8
                        pb-7
                        text-[17px]
                        leading-8
                        text-[#5B6470]`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
