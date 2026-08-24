"use client";

import { useState } from "react";
import Image from "next/image";
import { Turnstile } from "@marsidev/react-turnstile";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { arapey, jost } from "@/lib/fonts";

const ConsultationSection = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.trim()) {
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.property.trim()
    ) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!captchaToken) {
      toast({
        title: "Please verify that you're human.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `Homepage Consultation - ${formData.property}`,
            message: `Free consultation request from homepage. Property Type: ${formData.property}`,
            captchaToken,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.errors?.[0]?.message ||
          data.message ||
          "Submission failed. Please try again.";

        toast({
          title: "Submission Failed",
          description: errorMessage,
          variant: "destructive",
        });

        return;
      }

      toast({
        title: "Consultation request sent!",
        description: "We'll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        property: "",
      });

      setHoneypot("");
      setCaptchaToken("");
      setTurnstileKey((prev) => prev + 1);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description:
          error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });

      setCaptchaToken("");
      setTurnstileKey((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full overflow-hidden" id="consultation">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* =========================================================
            LEFT IMAGE
        ========================================================== */}

        <div className="relative min-h-[450px] w-full lg:min-h-[570px]">
          <Image
            src="/new/consultation.png"
            alt="Earthvine interior consultation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* =========================================================
            RIGHT FORM
        ========================================================== */}

        <div className="flex min-h-[450px] w-full items-center justify-center bg-[#795547] px-6 py-12 sm:px-10 lg:min-h-[570px] lg:px-10 lg:py-12">
          <div className="w-full max-w-[430px]">
            {/* =====================================================
                HEADING
            ====================================================== */}

            <h2
              className={`
                ${arapey.className}
                text-center
                text-[44px]
                font-normal
                leading-[102%]
                text-white
                [text-shadow:2px_2px_12px_rgba(255,255,255,0.79)]
                sm:text-[49px]
                lg:text-[54px]
              `}
            >
              Book Your Free
              <br />
              Consultation
            </h2>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              className={`
                ${jost.className}
                mx-auto
                mt-3
                max-w-[400px]
                text-center
                text-[20px]
                font-medium
                leading-[135%]
                text-[#F7F2EC]
                sm:text-[21px]
                lg:text-[22px]
              `}
            >
              Talk to our Interior Experts and get a customised design plan for
              your space
            </p>

            {/* =====================================================
                FORM
            ====================================================== */}

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-7">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {/* =================================================
                  NAME
              ================================================== */}

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={`
                  ${jost.className}
                  w-full
                  border-0
                  border-b-2
                  border-white/60
                  bg-transparent
                  pb-2
                  text-[13px]
                  font-medium
                  leading-normal
                  text-white
                  placeholder:text-white/60
                  outline-none
                  transition-colors
                  duration-200
                  focus:border-white
                  focus:placeholder:text-white
                `}
              />

              {/* =================================================
                  EMAIL
              ================================================== */}

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  ${jost.className}
                  w-full
                  border-0
                  border-b-2
                  border-white/60
                  bg-transparent
                  pb-2
                  text-[13px]
                  font-medium
                  leading-normal
                  text-white
                  placeholder:text-white/60
                  outline-none
                  transition-colors
                  duration-200
                  focus:border-white
                  focus:placeholder:text-white
                `}
              />

              {/* =================================================
                  PHONE
              ================================================== */}

              <input
                type="tel"
                name="phone"
                placeholder="Your number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={`
    ${jost.className}
    w-full
    border-0
    border-b-2
    border-white/60
    bg-transparent
    pb-2
    text-[13px]
    font-medium
    leading-normal
    text-white
    placeholder:text-white/60
    outline-none
    transition-colors
    duration-200
    focus:border-white
    focus:placeholder:text-white
  `}
              />

              {/* =================================================
                  PROPERTY TYPE
              ================================================== */}

              <div className="relative w-full">
                <select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className={`
                    ${jost.className}
                    h-[35px]
                    w-full
                    appearance-none
                    border-0
                    border-b-2
                    border-white/60
                    bg-transparent
                    pb-2
                    pr-10
                    text-[13px]
                    font-medium
                    leading-normal
                    outline-none
                    transition-all
                    duration-200
                    ${formData.property ? "text-white" : "text-white/60"}
                    focus:border-white
                  `}
                >
                  <option value="" disabled className="bg-white text-[#795547]">
                    Property Type
                  </option>

                  <option
                    value="Residential"
                    className="bg-white text-[#795547]"
                  >
                    Residential
                  </option>

                  <option value="Apartment" className="bg-white text-[#795547]">
                    Apartment
                  </option>

                  <option value="Villa" className="bg-white text-[#795547]">
                    Villa
                  </option>

                  <option
                    value="Independent House"
                    className="bg-white text-[#795547]"
                  >
                    Independent House
                  </option>

                  <option value="Office" className="bg-white text-[#795547]">
                    Office
                  </option>

                  <option
                    value="Restaurants and Cafes"
                    className="bg-white text-[#795547]"
                  >
                    Restaurants and Cafes
                  </option>
                </select>

                <ChevronDown
                  size={21}
                  strokeWidth={2}
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    text-white/60
                  "
                />
              </div>

              {/* =================================================
                  TURNSTILE
              ================================================== */}

              <div className="flex justify-center pt-1">
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
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}

              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    ${arapey.className}
                    inline-flex
                    h-[48px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[9px]
                    bg-white
                    px-[28px]
                    text-[17px]
                    font-normal
                    leading-none
                    text-[#3C2A20]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#F7F2EC]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  `}
                >
                  <Image
                    src="/icons/send2.png"
                    alt="Send"
                    width={17}
                    height={17}
                  />

                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {/* =====================================================
                BOTTOM BENEFITS
            ====================================================== */}

            <div
              className={`
                ${jost.className}
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-[12px]
                font-normal
                leading-[18px]
                text-white
                sm:text-[13px]
              `}
            >
              {["On-Time Delivery", "Good Reports", "Results"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span
                    className="
                        flex
                        h-[12px]
                        w-[12px]
                        items-center
                        justify-center
                        rounded-[2px]
                        bg-white
                        text-[8px]
                        font-bold
                        leading-none
                        text-[#795547]
                      "
                  >
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
