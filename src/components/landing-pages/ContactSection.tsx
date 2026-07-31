"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { arapey, jost } from "@/app/layout";

export default function ContactSection() {
  const propertyTypes = [
    "1 RK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "Villa",
    "Studio Apartment",
    "Penthouse",
    "Farmhouse",
  ];

  const [selectedType, setSelectedType] = useState("2 BHK");
  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;
  console.log(SCRIPT_URL);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "",
          property: selectedType,
          source: "Landing Page Contact",
        }),
      });

      alert("Thank you! We will contact you soon.");

      setFormData({
        name: "",
        phone: "",
      });

      setSelectedType("2 BHK");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };
  return (
    <section id="getquote" className="bg-[#795547] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`
                ${arapey.className}
                max-w-xl
                text-white
                text-[48px]
                lg:text-[70px]
                leading-[95%]
                font-normal
              `}
            >
              Let's Design Your Dream Home Together
            </h2>

            <p
              className={`
                ${jost.className}
                mt-5
                max-w-lg
                text-[29px]
                leading-[150%]
                text-white
              `}
            >
              Get a free consultation and customized design plan for your space
              today.
            </p>

            {/* <div className="mt-7 flex flex-wrap gap-5"> */}
            {/* Phone */}
            {/* <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3C2A20]">
                  <Phone size={28} strokeWidth={2} className="text-white" />
                </div>

                <div>
                  <p className={`${jost.className} text-white text-[14px]`}>
                    Call Us
                  </p>

                  <a
                    href="tel:+919310333265"
                    className={`${jost.className} text-[16px] font-semibold text-white`}
                  >
                    +91 9310333265
                  </a>
                </div>
              </div> */}

            {/* Email */}
            {/* <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3C2A20]">
                  <Mail size={28} strokeWidth={2} className="text-white" />
                </div>

                <div>
                  <p className={`${jost.className} text-white text-[14px]`}>
                    Email Us
                  </p>

                  <a
                    href="mailto:info@earthvine.in"
                    className={`${jost.className} text-[16px] font-semibold text-white`}
                  >
                    info@earthvine.in
                  </a>
                </div>
              </div> */}
            {/* </div> */}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[19px] bg-white p-4 shadow-xl lg:p-7"
          >
            <h3
              className={`${jost.className} text-[21px] font-semibold text-[#1F2939]`}
            >
              Get Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="
                  h-13
                  w-full
                  rounded-lg
                  border
                  border-[#E5E7EB]
                  px-3
                  text-md
                  outline-none
                  transition
                  focus:border-[#795547]
                "
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="
                  h-13
                  w-full
                  rounded-lg
                  border
                  border-[#E5E7EB]
                  px-3
                  text-md
                  outline-none
                  transition
                  focus:border-[#795547]
                "
              />

              {/* Property Buttons */}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {propertyTypes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    disabled={loading}
                    onClick={() => setSelectedType(item)}
                    className={`
                      h-13
                      rounded-lg
                      border
                      text-md
                      font-medium
                      transition-all
                      duration-300

                      ${
                        selectedType === item
                          ? "border-[#3C2A20] bg-[#3C2A20] text-white"
                          : "border-[#E5E7EB] bg-white text-[#4A5565] hover:border-[#795547] hover:text-[#795547]"
                      }
                  `}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                className={`
                  ${arapey.className}
                  mt-5
                  h-16
                  w-full
                  rounded-2xl
                  bg-[#3C2A20]
                  text-[20px]
                  font-normal
                  tracking-wide
                  text-white
                  transition
                  hover:bg-[#3a261d]
                `}
              >
                {loading ? "Submitting..." : "GET FREE QUOTE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
