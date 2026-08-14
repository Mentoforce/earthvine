"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Sofa,
  CalendarDays,
  Gift,
  ShieldCheck,
  Award,
  LockKeyhole,
  ChevronDown,
  Clock3,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { jost, playfairDisplay } from "@/app/layout";

type ContactPopupProps = {
  onClose?: () => void;
};

export default function ContactPopup({ onClose }: ContactPopupProps) {
  const { toast } = useToast();

  const POPUP_STORAGE_KEY = "earthvine_contact_popup_seen";

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  /* ============================================================
     AUTO OPEN
  ============================================================ */

  useEffect(() => {
    // Do not show the popup if the user has already
    // submitted it or dismissed it previously.
    const alreadySeen = localStorage.getItem(POPUP_STORAGE_KEY);

    if (alreadySeen === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* ============================================================
     FORM STATE
  ============================================================ */

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "",
    timeframe: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ============================================================
     CLOSE
  ============================================================ */

  const closePopup = () => {
    if (loading) return;

    // Remember that the user has dismissed the popup.
    localStorage.setItem(POPUP_STORAGE_KEY, "true");

    setOpen(false);
    onClose?.();
  };
  /* ============================================================
     SUBMIT
     SAME BACKEND / TURNSTILE / LEADS API
  ============================================================ */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.city.trim() ||
      !form.requirement.trim()
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
            name: form.name,
            email: form.email,
            phone: form.phone,

            subject: `10% OFF Offer - ${form.requirement}`,

            message: [
              "10% OFF Interior Design Offer",
              `Requirement: ${form.requirement}`,
              `City: ${form.city}`,
              `Timeframe: ${form.timeframe || "Not specified"}`,
            ].join("\n"),

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
        title: "Thank you!",
        description: "Our design expert will get in touch with you shortly.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        requirement: "",
        timeframe: "",
      });

      setCaptchaToken("");
      setTurnstileKey((prev) => prev + 1);

      // Remember that the user has completed the popup.
      localStorage.setItem(POPUP_STORAGE_KEY, "true");

      setOpen(false);
      onClose?.();
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

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/65
        px-3
        py-3
        backdrop-blur-[2px]
        sm:px-5
        sm:py-5
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !loading) {
          closePopup();
        }
      }}
    >
      {/* ========================================================
          POPUP
      ========================================================= */}

      <div
        className="
          relative
          flex
          h-auto
          max-h-[94vh]
          w-full
          max-w-[1180px]
          flex-col
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-[0_30px_100px_rgba(0,0,0,0.38)]
          sm:rounded-[24px]
        "
      >
        {/* ======================================================
            CLOSE BUTTON
        ======================================================= */}

        <button
          type="button"
          onClick={closePopup}
          disabled={loading}
          aria-label="Close popup"
          className="
            absolute
            right-3
            top-3
            z-[100]
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#151515]
            shadow-[0_5px_20px_rgba(0,0,0,0.16)]
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[#F7F7F7]
            disabled:cursor-not-allowed
          "
        >
          <X size={25} strokeWidth={2.2} />
        </button>

        {/* ======================================================
            MAIN AREA

            LEFT  = IMAGE + OFFER CONTENT
            RIGHT = COMPLETE FORM
        ======================================================= */}

        <div
          className="
            grid
            min-h-0
            flex-1
            grid-cols-1
            lg:grid-cols-[43%_57%]
          "
        >
          {/* ====================================================
              LEFT — IMAGE + OFFER
          ===================================================== */}

          <div
            className="
              relative
              min-h-[330px]
              overflow-hidden
              lg:min-h-0
            "
          >
            {/* IMAGE */}

            <Image
              src="/new/ab1.png"
              alt="Interior Design Offer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 43vw"
              className="
                object-cover
                object-center
              "
            />

            {/* DARK / WHITE SOFT OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/15
                via-transparent
                to-black/35
              "
            />

            {/* LEFT CONTENT */}

            <div
              className="
                absolute
                inset-0
                z-10
                flex
                flex-col
                justify-start
                px-6
                pb-7
                pt-7
                sm:px-8
                sm:pt-9
                lg:px-8
                lg:pb-8
                lg:pt-8
                xl:px-10
                xl:pt-10
              "
            >
              {/* LIMITED OFFER */}

              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-[#F7EFE5]
                  px-3
                  py-1.5
                  shadow-sm
                  sm:px-4
                  sm:py-2
                "
              >
                <Clock3 size={17} strokeWidth={2} className="text-[#F2670A]" />

                <span
                  className={`
                    ${jost.className}
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.04em]
                    text-[#163D2D]
                    sm:text-[12px]
                  `}
                >
                  Limited Time Offer
                </span>
              </div>

              {/* HEADING */}

              <h2
                className={`
                  ${jost.className}
                  mt-5
                  max-w-[430px]
                  text-[25px]
                  font-bold
                  leading-[1.05]
                  text-white
                  drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]
                  sm:mt-6
                  sm:text-[30px]
                  lg:text-[29px]
                  xl:text-[32px]
                `}
              >
                Transform Your Space with
              </h2>

              {/* 10% OFF */}

              <div
                className={`
                  ${jost.className}
                  mt-1
                  text-[62px]
                  font-black
                  leading-[0.88]
                  tracking-[-0.055em]
                  text-[#F2670A]
                  drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                  sm:text-[76px]
                  lg:text-[66px]
                  xl:text-[76px]
                `}
              >
                10% OFF
              </div>

              {/* SUBTITLE */}

              <div
                className={`
                  ${jost.className}
                  mt-3
                  flex
                  items-center
                  gap-3
                  text-[18px]
                  font-extrabold
                  leading-none
                  text-white
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                  sm:text-[22px]
                  lg:text-[20px]
                  xl:text-[23px]
                `}
              >
                <span>ON INTERIOR DESIGN</span>

                <span
                  className="
                    h-[2px]
                    w-7
                    shrink-0
                    bg-[#F2670A]
                    sm:w-9
                  "
                />
              </div>

              {/* BENEFITS */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-4
                  sm:mt-7
                  sm:gap-6
                "
              >
                {/* CONSULTATION */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/80
                      bg-white/90
                      text-[#F2670A]
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <User size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p
                      className={`
                        ${jost.className}
                        text-[12px]
                        font-bold
                        leading-none
                        text-[#073D2B]
                        sm:text-[14px]
                      `}
                    >
                      FREE
                    </p>

                    <p
                      className={`
                        ${jost.className}
                        mt-1
                        text-[12px]
                        font-bold
                        leading-none
                        text-[#073D2B]
                        sm:text-[12px]
                      `}
                    >
                      Consultation
                    </p>
                  </div>
                </div>

                <div
                  className="
                    h-10
                    w-px
                    bg-white/60
                  "
                />

                {/* SITE VISIT */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/80
                      bg-white/90
                      text-[#F2670A]
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <MapPin size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p
                      className={`
                        ${jost.className}
                        text-[12px]
                        font-bold
                        leading-none
                        text-[#073D2B]
                        sm:text-[14px]
                      `}
                    >
                      FREE
                    </p>

                    <p
                      className={`
                        ${jost.className}
                        mt-1
                        text-[12px]
                        font-bold
                        leading-none
                        text-[#073D2B]
                        sm:text-[12px]
                      `}
                    >
                      Site Visit
                    </p>
                  </div>
                </div>
              </div>

              {/* VALIDITY */}

              <div
                className="
                  mt-6
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-[#073D2B]
                  px-3
                  py-2
                  shadow-[0_5px_15px_rgba(0,0,0,0.2)]
                  sm:mt-7
                  sm:px-4
                "
              >
                <CalendarDays size={16} className="text-white" />

                <span
                  className={`
                    ${jost.className}
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.02em]
                    text-white
                    sm:text-[11px]
                  `}
                >
                  Offer valid till{" "}
                  <span className="text-[#FF9D18]">31st August</span>
                </span>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT — COMPLETE FORM
          ===================================================== */}

          <div
            className="
              min-w-0
              bg-white
              px-5
              py-6
              sm:px-7
              sm:py-7
              lg:px-8
              lg:py-7
              xl:px-10
              xl:py-8
            "
          >
            {/* FORM HEADING */}

            <div className="text-center">
              <h3
                className={`
                  ${jost.className}
                  text-[25px]
                  font-bold
                  leading-[1.05]
                  text-[#101820]
                  sm:text-[29px]
                  lg:text-[30px]
                  xl:text-[32px]
                `}
              >
                Get Your <span className="text-[#123A2C]">FREE</span>{" "}
                Consultation + Site Visit
              </h3>

              <p
                className={`
                  ${jost.className}
                  mt-2
                  text-[12px]
                  leading-[1.35]
                  text-[#444]
                  sm:text-[14px]
                `}
              >
                Fill in your details and our design expert will get in touch
                with you.
              </p>

              {/* DIVIDER */}

              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-[2px] w-7 bg-[#F2670A]" />
                <span className="h-2 w-2 rounded-full bg-[#F2670A]" />
                <span className="h-[2px] w-7 bg-[#F2670A]" />
              </div>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                mx-auto
                mt-5
                max-w-[650px]
              "
            >
              {/* NAME + PHONE */}

              <div className="grid grid-cols-2 gap-2.5">
                <InputField
                  icon={<User size={19} strokeWidth={1.7} />}
                  placeholder="Full Name*"
                  value={form.name}
                  onChange={(value) => updateField("name", value)}
                  required
                />

                <InputField
                  icon={<Phone size={19} strokeWidth={1.7} />}
                  placeholder="Mobile Number*"
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                  type="tel"
                  required
                />
              </div>

              {/* EMAIL + CITY */}

              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <InputField
                  icon={<Mail size={19} strokeWidth={1.7} />}
                  placeholder="Email Address*"
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                  type="email"
                  required
                />

                <InputField
                  icon={<MapPin size={19} strokeWidth={1.7} />}
                  placeholder="City*"
                  value={form.city}
                  onChange={(value) => updateField("city", value)}
                  required
                />
              </div>

              {/* REQUIREMENT */}

              <SelectField
                icon={<Sofa size={19} strokeWidth={1.7} />}
                label="What are you looking for?*"
                sublabel="Select your requirement"
                value={form.requirement}
                onChange={(value) => updateField("requirement", value)}
                options={[
                  "Residential Interior Design",
                  "Commercial Interior Design",
                  "Modular Kitchen",
                  "Bedroom Design",
                  "Living Room Design",
                  "Full Home Interior",
                  "Renovation",
                  "Other",
                ]}
                required
              />

              {/* TIMEFRAME */}

              <SelectField
                icon={<CalendarDays size={19} strokeWidth={1.7} />}
                label="When do you plan to start?"
                sublabel="Select timeframe"
                value={form.timeframe}
                onChange={(value) => updateField("timeframe", value)}
                options={[
                  "Immediately",
                  "Within 1 Month",
                  "Within 3 Months",
                  "Within 6 Months",
                  "Just Exploring",
                ]}
              />

              {/* TURNSTILE */}

              <div
                className="
                  mt-2
                  flex
                  min-h-[60px]
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
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

              {/* CTA */}

              <button
                type="submit"
                disabled={loading}
                className="
                  mt-2
                  flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
                  cursor-pointer
                  gap-3
                  rounded-[11px]
                  bg-gradient-to-r
                  from-[#FF7900]
                  to-[#F04B08]
                  px-5
                  text-white
                  shadow-[0_7px_20px_rgba(242,103,10,0.20)]
                  transition-all
                  duration-300
                  hover:brightness-105
                  active:scale-[0.99]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <Gift size={27} strokeWidth={1.8} />

                <span className="text-left">
                  <span
                    className={`
                      ${jost.className}
                      block
                      text-[17px]
                      font-bold
                      leading-none
                      sm:text-[20px]
                    `}
                  >
                    {loading ? "SUBMITTING..." : "CLAIM MY 10% OFF NOW"}
                  </span>

                  <span
                    className={`
                      ${jost.className}
                      mt-1
                      block
                      text-[11px]
                      font-normal
                      leading-none
                      sm:text-[12px]
                    `}
                  >
                    Book Free Consultation
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* ======================================================
            BOTTOM TAGLINE / TRUST STRIP
        ======================================================= */}

        <div
          className="
            shrink-0
            border-t
            border-[#ECEDEC]
            bg-[#F4F6F4]
            px-4
            py-3
            sm:px-8
            sm:py-3.5
          "
        >
          <div
            className="
              grid
              grid-cols-3
              divide-x
              divide-[#D7DCD8]
            "
          >
            <TrustItem
              icon={<ShieldCheck size={25} strokeWidth={1.7} />}
              title="Trusted by 1000+"
              subtitle="Happy Clients"
            />

            <TrustItem
              icon={<Award size={25} strokeWidth={1.7} />}
              title="Expert Designers"
              subtitle="Just for You"
            />

            <TrustItem
              icon={<LockKeyhole size={25} strokeWidth={1.7} />}
              title="100% Privacy"
              subtitle="Your Details are Safe"
            />
          </div>

          {/* PRIVACY TAGLINE */}

          <p
            className={`
              ${jost.className}
              mt-2
              text-center
              text-[9px]
              leading-[1.3]
              text-[#555]
              sm:text-[10px]
            `}
          >
            🔒 By submitting this form, you agree to our{" "}
            <span className="text-[#E76C20]">Terms of Use</span> &{" "}
            <span className="text-[#E76C20]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   INPUT FIELD
============================================================ */

function InputField({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div
      className="
        flex
        h-[54px]
        min-w-0
        items-center
        gap-2.5
        rounded-[9px]
        border
        border-[#D5D5D5]
        bg-white
        px-3
        transition-colors
        focus-within:border-[#F2670A]
        focus-within:ring-1
        focus-within:ring-[#F2670A]/20
        sm:h-[57px]
        sm:px-3.5
      "
    >
      <span className="shrink-0 text-[#555]">{icon}</span>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
    ${jost.className}
    h-full
    min-w-0
    flex-1
    bg-transparent
    text-[12px]
    !text-[#222]
    outline-none
    placeholder:text-[#626262]
    sm:text-[14px]
  `}
      />
    </div>
  );
}

/* ============================================================
   SELECT FIELD
============================================================ */

function SelectField({
  icon,
  label,
  sublabel,
  value,
  onChange,
  options,
  required = false,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="relative mt-2.5">
      <div
        className="
          flex
          min-h-[58px]
          items-center
          gap-2.5
          rounded-[9px]
          border
          border-[#D5D5D5]
          bg-white
          px-3
          transition-colors
          focus-within:border-[#F2670A]
          focus-within:ring-1
          focus-within:ring-[#F2670A]/20
          sm:px-3.5
        "
      >
        <span className="shrink-0 text-[#555]">{icon}</span>

        <div className="min-w-0 flex-1">
          <p
            className={`
              ${jost.className}
              text-[12px]
              leading-[1.1]
              text-[#222]
              sm:text-[13px]
            `}
          >
            {label}
          </p>

          <select
            value={value}
            required={required}
            onChange={(e) => onChange(e.target.value)}
            className={`
              ${jost.className}
              mt-0.5
              w-full
              cursor-pointer
              appearance-none
              bg-transparent
              pr-7
              text-[10px]
              text-[#707070]
              outline-none
              sm:text-[11px]
            `}
          >
            <option value="">{sublabel}</option>

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <ChevronDown
          size={19}
          strokeWidth={1.8}
          className="
            pointer-events-none
            shrink-0
            text-[#555]
          "
        />
      </div>
    </div>
  );
}

/* ============================================================
   TRUST ITEM
============================================================ */

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        justify-center
        gap-1.5
        px-1
        sm:gap-2
        sm:px-3
      "
    >
      <span className="shrink-0 text-[#123D2D]">{icon}</span>

      <div className="min-w-0">
        <p
          className={`
            ${jost.className}
            truncate
            text-[9px]
            font-bold
            leading-[1.15]
            text-[#1A1A1A]
            sm:text-[11px]
          `}
        >
          {title}
        </p>

        <p
          className={`
            ${jost.className}
            mt-0.5
            truncate
            text-[8px]
            leading-[1.15]
            text-[#555]
            sm:text-[10px]
          `}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
