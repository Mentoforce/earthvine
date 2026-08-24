"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Phone, User, MessageSquare } from "lucide-react";

import { Turnstile } from "@marsidev/react-turnstile";
import { jost, playfairDisplay } from "@/lib/fonts";

export default function ServiceContact() {
  const pathname = usePathname();

  /*
   * Keeps the existing functionality:
   * /services/interior-design
   * /services/modular-kitchen
   * etc.
   *
   * The last URL segment becomes the Subject in Google Sheets.
   */
  const subject = pathname.split("/").filter(Boolean).pop() || "general";

  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  /*
   * Honeypot field.
   * Real users never see or fill this.
   */
  const [honeypot, setHoneypot] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /*
   * SAME GOOGLE SHEETS SCRIPT
   */
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzXkPmfSywVrL_IBqcLSfqMOMKo2l5DYRI65EobSHYv9ACg410qz-cXqjFiYmEXgnKrCg/exec";

  /*
   * Convert URL slug into readable service name.
   *
   * Example:
   * interior-design -> Interior Design
   */
  const readableSubject = subject
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  /*
   * Update form
   */
  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /*
   * Submit
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /*
     * Honeypot protection
     */
    if (honeypot.trim()) {
      return;
    }

    /*
     * Prevent duplicate submissions
     */
    if (loading) return;

    /*
     * Basic validation
     */
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    /*
     * Length protection
     */
    if (form.name.trim().length > 100) {
      alert("Please enter a valid name.");
      return;
    }

    if (form.email.trim().length > 150) {
      alert("Please enter a valid email address.");
      return;
    }

    if (form.phone.trim().length > 30) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (form.message.trim().length > 2000) {
      alert("Please keep your message under 2000 characters.");
      return;
    }

    /*
     * Email validation
     */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    /*
     * Phone validation
     *
     * Allows:
     * +91 9876543210
     * 9876543210
     * +1 1234567890
     */
    const phoneRegex = /^[+]?[\d\s()-]{7,30}$/;

    if (!phoneRegex.test(form.phone.trim())) {
      alert("Please enter a valid phone number.");
      return;
    }

    /*
     * Turnstile
     */
    if (!captchaToken) {
      alert("Please verify that you're human.");
      return;
    }

    setLoading(true);

    /*
     * IST timestamp
     */
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };

    const istFormatted = new Intl.DateTimeFormat("en-IN", options).format(
      new Date(),
    );

    /*
     * Google Sheet payload
     *
     * Same fields/functionality as your existing ServiceContact.
     */
    const formPayload = new FormData();

    formPayload.append("Name", form.name.trim());
    formPayload.append("Email", form.email.trim());
    formPayload.append("Phone", form.phone.trim());
    formPayload.append("Message", form.message.trim());
    formPayload.append("Subject", readableSubject);
    formPayload.append("Timestamp", istFormatted);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      /*
       * Google Apps Script often doesn't expose a useful
       * response body to the browser because of its redirect/CORS
       * behavior. We therefore preserve your existing successful
       * submission behavior.
       */

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      /*
       * Reset form
       */
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setCaptchaToken("");
      setTurnstileKey((prev) => prev + 1);

      alert(
        "Thank you! We have received your enquiry and will get back to you shortly.",
      );
    } catch (error) {
      console.error("Service contact submission error:", error);

      alert(
        "Something went wrong while submitting your enquiry. Please try again.",
      );

      setCaptchaToken("");
      setTurnstileKey((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F2EC]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ======================================================
          SUBTLE BACKGROUND DETAIL
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#3C2A20]/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-30
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#3C2A20]/[0.04]
        "
      />

      {/* ======================================================
          MAIN
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1280px]
          grid-cols-1
          gap-12
          px-6
          sm:px-8
          lg:grid-cols-[0.85fr_1.15fr]
          lg:items-center
          lg:gap-20
          lg:px-10
          xl:px-0
        "
      >
        {/* ====================================================
            LEFT CONTENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-[520px]"
        >
          {/* SMALL LABEL */}

          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#8C6A58]" />

            <span
              className={`
                ${jost.className}
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#8C6A58]
                sm:text-[11px]
              `}
            >
              Consultation
            </span>
          </div>

          {/* HEADING */}

          <h2
            className={`
              ${playfairDisplay.className}
              mt-7
              text-[42px]
              font-medium
              leading-[1.05]
              tracking-[-0.02em]
              text-[#3C2A20]
              sm:text-[52px]
              lg:text-[58px]
              xl:text-[64px]
            `}
          >
            Start Your
            <br />
            <span className="italic text-[#8C6A58]">Design Journey</span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className={`
              ${jost.className}
              mt-7
              max-w-[450px]
              text-[15px]
              font-normal
              leading-[1.75]
              text-[#3C2A20]/70
              sm:text-[16px]
            `}
          >
            Tell us about your space and our design team will reach out to you
            with ideas, possibilities, and a tailored approach to transform it.
          </p>

          {/* SERVICE CONTEXT */}

          <div className="mt-9 border-l border-[#8C6A58]/40 pl-5">
            <p
              className={`
                ${jost.className}
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#8C6A58]
              `}
            >
              Enquiring about
            </p>

            <p
              className={`
                ${playfairDisplay.className}
                mt-1.5
                text-[20px]
                italic
                text-[#3C2A20]
                sm:text-[22px]
              `}
            >
              {readableSubject}
            </p>
          </div>

          {/* SMALL CTA */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-3
              text-[#3C2A20]/60
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3C2A20]/20">
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </span>

            <span
              className={`
                ${jost.className}
                text-[11px]
                uppercase
                tracking-[0.18em]
              `}
            >
              Let&apos;s create something beautiful
            </span>
          </div>
        </motion.div>

        {/* ====================================================
            FORM
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            relative
            bg-[#EFE7DC]
            px-6
            py-7
            sm:px-9
            sm:py-9
            lg:px-11
            lg:py-10
          "
        >
          {/* TOP LINE */}

          <div className="absolute left-0 top-0 h-[3px] w-full bg-[#8C6A58]" />

          {/* FORM HEADER */}

          <div className="mb-8">
            <p
              className={`
                ${jost.className}
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#8C6A58]
              `}
            >
              Tell us about your project
            </p>

            <h3
              className={`
                ${playfairDisplay.className}
                mt-2
                text-[30px]
                font-medium
                leading-[1.15]
                text-[#3C2A20]
                sm:text-[34px]
              `}
            >
              We&apos;d love to hear from you.
            </h3>
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME + EMAIL */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* NAME */}

              <div className="group">
                <label
                  className={`
                    ${jost.className}
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#3C2A20]/60
                  `}
                >
                  Your Name *
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-[#3C2A20]/25
                    transition-colors
                    duration-300
                    focus-within:border-[#8C6A58]
                  "
                >
                  <User
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#8C6A58]"
                  />

                  <input
                    type="text"
                    value={form.name}
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Your name"
                    onChange={(e) => updateField("name", e.target.value)}
                    className={`
                      ${jost.className}
                      h-11
                      w-full
                      bg-transparent
                      text-[14px]
                      text-[#3C2A20]
                      outline-none
                      placeholder:text-[#3C2A20]/40
                    `}
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="group">
                <label
                  className={`
                    ${jost.className}
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#3C2A20]/60
                  `}
                >
                  Email Address *
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-[#3C2A20]/25
                    transition-colors
                    duration-300
                    focus-within:border-[#8C6A58]
                  "
                >
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#8C6A58]"
                  />

                  <input
                    type="email"
                    value={form.email}
                    maxLength={150}
                    autoComplete="email"
                    placeholder="your@email.com"
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`
                      ${jost.className}
                      h-11
                      w-full
                      bg-transparent
                      text-[14px]
                      text-[#3C2A20]
                      outline-none
                      placeholder:text-[#3C2A20]/40
                      autofill:bg-transparent
                    `}
                  />
                </div>
              </div>
            </div>

            {/* PHONE */}

            <div>
              <label
                className={`
                  ${jost.className}
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#3C2A20]/60
                `}
              >
                Phone Number *
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-[#3C2A20]/25
                  transition-colors
                  duration-300
                  focus-within:border-[#8C6A58]
                "
              >
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#8C6A58]"
                />

                <input
                  type="tel"
                  value={form.phone}
                  maxLength={30}
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={`
                    ${jost.className}
                    h-11
                    w-full
                    bg-transparent
                    text-[14px]
                    text-[#3C2A20]
                    outline-none
                    placeholder:text-[#3C2A20]/40
                  `}
                />
              </div>
            </div>

            {/* MESSAGE */}

            <div>
              <label
                className={`
                  ${jost.className}
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#3C2A20]/60
                `}
              >
                Tell us about your project *
              </label>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  border-b
                  border-[#3C2A20]/25
                  transition-colors
                  duration-300
                  focus-within:border-[#8C6A58]
                "
              >
                <MessageSquare
                  size={17}
                  strokeWidth={1.5}
                  className="mt-3 shrink-0 text-[#8C6A58]"
                />

                <textarea
                  rows={4}
                  maxLength={2000}
                  value={form.message}
                  placeholder="Tell us a little about your space, requirements or ideas..."
                  onChange={(e) => updateField("message", e.target.value)}
                  className={`
                    ${jost.className}
                    w-full
                    resize-none
                    bg-transparent
                    py-3
                    text-[14px]
                    leading-[1.6]
                    text-[#3C2A20]
                    outline-none
                    placeholder:text-[#3C2A20]/40
                  `}
                />
              </div>
            </div>

            {/* HONEYPOT */}

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="
                absolute
                left-[-9999px]
                h-0
                w-0
                opacity-0
              "
            />

            {/* TURNSTILE */}

            <div className="flex justify-start pt-1">
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

            {/* BUTTON */}

            <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p
                className={`
                  ${jost.className}
                  max-w-[260px]
                  text-[10px]
                  leading-[1.5]
                  text-[#3C2A20]/50
                `}
              >
                Your information is kept private and will only be used to
                respond to your enquiry.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  inline-flex
                  h-12
                  shrink-0
                  items-center
                  justify-center
                  gap-4
                  bg-[#3C2A20]
                  px-7
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#8C6A58]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <span
                  className={`
                    ${jost.className}
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                  `}
                >
                  {loading ? "Sending..." : "Request Consultation"}
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// //---------------------------------------------------------------------------------------------------------------
// //this works: and is correct:
// // "use client";

// // import { motion } from "framer-motion";

// // export default function ServiceContact() {
// //   return (
// //     <section className="section-padding bg-[hsl(var(--charcoal))]">
// //       <div className="max-w-350 mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
// //         {/* Left Content */}
// //         <div className="lg:col-span-5">
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className="w-8 h-px bg-[hsl(var(--gold))]" />
// //             <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]">
// //               Consultation
// //             </span>
// //           </div>

// //           <h2 className="font-display text-4xl sm:text-5xl text-[hsl(var(--cream))] mb-6">
// //             Start Your
// //             <span className="italic text-[hsl(var(--gold))]">
// //               {" "}
// //               Design Journey
// //             </span>
// //           </h2>

// //           <p className="text-[hsl(var(--cream)/0.65)] max-w-md text-sm leading-relaxed">
// //             Tell us about your space and our design team will reach out to you
// //             with ideas, possibilities, and a tailored approach to transform it.
// //           </p>
// //         </div>

// //         {/* Form */}
// //         <motion.form
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="lg:col-span-7 glass-dark rounded-lg p-10 space-y-6"
// //         >
// //           <div className="grid md:grid-cols-2 gap-6">
// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
// //             />

// //             <input
// //               type="email"
// //               placeholder="Email Address"
// //               className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
// //             />
// //           </div>

// //           <input
// //             type="text"
// //             placeholder="Phone Number"
// //             className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
// //           />

// //           <textarea
// //             rows={4}
// //             placeholder="Tell us about your project"
// //             className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
// //           />

// //           <button
// //             type="submit"
// //             className="mt-6 px-8 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] tracking-[0.15em] uppercase hover:opacity-90 transition"
// //           >
// //             Request Consultation
// //           </button>
// //         </motion.form>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// export default function ServiceContact() {
//   const pathname = usePathname();
//   const subject = pathname.split("/").filter(Boolean).pop() || "general";
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true,
//     timeZone: "Asia/Kolkata",
//   };
//   const istFormatted = new Intl.DateTimeFormat("en-IN", options).format(
//     new Date(),
//   );

//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbzXkPmfSywVrL_IBqcLSfqMOMKo2l5DYRI65EobSHYv9ACg410qz-cXqjFiYmEXgnKrCg/exec";

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !form.name.trim() ||
//       !form.email.trim() ||
//       !form.phone.trim() ||
//       !form.message.trim()
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     setLoading(true);

//     const formPayload = new FormData();
//     formPayload.append("Name", form.name);
//     formPayload.append("Email", form.email);
//     formPayload.append("Phone", form.phone);
//     formPayload.append("Message", form.message);
//     formPayload.append("Subject", subject);
//     formPayload.append("Timestamp", istFormatted);

//     try {
//       await fetch(scriptURL, {
//         method: "POST",
//         body: formPayload,
//       });

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       });

//       alert("Message sent successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="section-padding bg-[hsl(var(--charcoal))]">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
//         {/* Left Content */}
//         <div className="lg:col-span-5">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]">
//               Consultation
//             </span>
//           </div>

//           <h2 className="font-display text-4xl sm:text-5xl text-[hsl(var(--cream))] mb-6">
//             Start Your
//             <span className="italic text-[hsl(var(--gold))]">
//               {" "}
//               Design Journey
//             </span>
//           </h2>

//           <p className="text-[hsl(var(--cream)/0.65)] max-w-md text-sm leading-relaxed">
//             Tell us about your space and our design team will reach out to you
//             with ideas, possibilities, and a tailored approach to transform it.
//           </p>
//         </div>

//         {/* Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="lg:col-span-7 glass-dark rounded-lg p-10 space-y-6"
//         >
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
//               className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={(e) =>
//                 setForm((p) => ({ ...p, email: e.target.value }))
//               }
//               className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
//             />
//           </div>

//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
//             className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
//           />

//           <textarea
//             rows={4}
//             placeholder="Tell us about your project"
//             value={form.message}
//             onChange={(e) =>
//               setForm((p) => ({ ...p, message: e.target.value }))
//             }
//             className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="mt-6 px-8 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] tracking-[0.15em] uppercase hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Request Consultation"}
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }
