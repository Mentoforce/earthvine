"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { arapey, jost } from "@/lib/fonts";
import { Turnstile } from "@marsidev/react-turnstile";

export default function LeadForm() {
  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.property) {
      alert("Please select a property type.");
      return;
    }

    if (!captchaToken) {
      alert("Please verify that you're human.");
      return;
    }

    setLoading(true);

    try {
      const form = new URLSearchParams();

      form.append("name", formData.name.trim());
      form.append("phone", formData.phone.trim());
      form.append("email", formData.email.trim());
      form.append("property", formData.property);
      form.append("source", "Landing Page Hero");
      form.append("captchaToken", captchaToken);
      form.append("website", honeypot);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: form,
      });

      alert("Thank you! We'll contact you shortly.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        property: "",
      });

      setCaptchaToken("");
      setHoneypot("");
      setTurnstileKey((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");

      setCaptchaToken("");
      setTurnstileKey((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };
  return (
    // shadow-[-4px_-4px_9px_rgba(255,255,255,0.62),0_4px_8px_rgba(255,255,255,0.62)]
    <div
      className="
        w-full
        max-w-130
        rounded-2xl
        bg-[#EEEEEE]
        border
      border-[#795547]
        px-6
        sm:px-7
        lg:px-8
        py-7
        lg:py-8
      "
    >
      {/* Heading */}
      <h2
        className={`
          ${arapey.className}
          text-[#3C2A20]
          text-[36px]
          sm:text-[40px]
          lg:text-[45px]
          leading-[102%]
          font-normal
          [text-shadow:2px_2px_25px_#FFF]
          [-webkit-text-stroke:0.5px_#3C2A20]
        `}
      >
        Book Your Free
        <br />
        Consultation
      </h2>

      {/* Description */}
      <p
        className={`
          ${jost.className}
          mt-3
          text-[#795547]
          text-[18px]
          lg:text-[22px]
          font-medium
          leading-[135%]
        `}
      >
        Talk to our Interior Experts and get a customised design plan for your
        space
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-7 space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`
            ${jost.className}
            w-full
            border-0
            border-b-2
            border-[#C8BDD4]
            bg-transparent
            pb-3
            text-[16px]
            text-black
            placeholder:text-[#B7A9C4]
            outline-none

            transition-colors
            duration-200

            focus:border-[#795547]
            focus:text-black
            focus:placeholder:text-black
          `}
          />
        </div>

        {/* Email */}

        <div className="flex flex-col gap-1.5">
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`
            ${jost.className}
            w-full
            border-0
            border-b-2
            border-[#C8BDD4]
            bg-transparent
            pb-3
            text-[16px]
            text-black
            placeholder:text-[#B7A9C4]
            outline-none

            transition-colors
            duration-200

            focus:border-[#795547]
            focus:text-black
            focus:placeholder:text-black
          `}
          />
        </div>

        {/* Phone */}

        <div className="flex flex-col gap-1.5">
          <input
            type="tel"
            placeholder="Your number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`
            ${jost.className}
            w-full
            border-0
            border-b-2
            border-[#C8BDD4]
            bg-transparent
            pb-3
            text-[16px]
            text-black
            placeholder:text-[#B7A9C4]
            outline-none

            transition-colors
            duration-200

            focus:border-[#795547]
            focus:text-black
            focus:placeholder:text-black
          `}
          />
        </div>

        {/* Property */}
        <div className="relative flex flex-col gap-[5px]">
          <select
            name="property"
            value={formData.property}
            onChange={handleChange}
            className={`
              ${jost.className}
              w-full
              appearance-none
              border-0
              border-b-2
              border-[#C8BDD4]
              bg-transparent
              pb-3
              pr-8
              text-[16px]
              text-[#B7A9C4]
              outline-none

              transition-colors
              duration-200

              focus:border-[#795547]
              focus:text-black
            `}
          >
            <option value="" disabled>
              Property Type
            </option>
            <option>Residential</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Independent House</option>
            <option>Office</option>
            <option>Restaurants and Cafes</option>
          </select>

          <ChevronDown
            size={28}
            strokeWidth={2.5}
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              text-[#B7A9C4]
            "
          />
        </div>
        <Turnstile
          key={turnstileKey}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          options={{
            theme: "light",
          }}
          onSuccess={(token) => {
            setCaptchaToken(token);
          }}
          onExpire={() => {
            setCaptchaToken("");
          }}
          onError={() => {
            setCaptchaToken("");
          }}
        />
        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`
            ${arapey.className}
            mt-2
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-[10px]
            bg-[#795547]
            px-8
            py-2
            text-[20px]
            font-normal
            text-white
            transition-all
            duration-300
            hover:bg-[#68493D]
            hover:-translate-y-0.5
          `}
        >
          <Image src="/icons/send.svg" alt="Send" width={17} height={17} />
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Bottom */}

      <div
        className={`
          ${jost.className}
          mt-10
          flex
          flex-wrap
          items-center
          gap-x-7
          gap-y-3
          text-[#3C2A20]
          text-[14.34px]
          leading-[19px]
        `}
      >
        {["On-Time Delivery", "Good Reports", "Results"].map((item) => (
          <div key={item} className="flex items-center gap-2 whitespace-nowrap">
            <span
              className="
                flex
                h-[14px]
                w-[14px]
                items-center
                justify-center
                rounded-[2px]
                bg-[#795547]
                text-white
                text-[10px]
                leading-none
                font-bold
              "
            >
              ✓
            </span>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
