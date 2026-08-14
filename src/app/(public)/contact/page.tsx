"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { jost, playfairDisplay } from "@/app/layout";

import contactHero2 from "../../../../public/contact/contacthero2.png";
import contactImg from "../../../../public/contact/ContactImg.png";

const Contact = () => {
  const { toast } = useToast();

  const formRef = useRef(null);

  const formInView = useInView(formRef, {
    once: true,
    margin: "-100px",
  });

  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
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
            subject: form.subject,
            message: form.message,
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
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

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
    <div className="w-full overflow-hidden bg-white text-[#3C2A20]">
      {/*HERO*/}
      <section
        className="
          relative
          h-[65vh]
          min-h-[600px]
          w-full
          overflow-hidden
          sm:h-[68vh]
          sm:min-h-[660px]
          lg:h-[760px]
          lg:min-h-[760px]
          xl:h-[800px]
          xl:min-h-[800px]
        "
      >
        {/* HERO IMAGE */}
        <motion.div
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={contactHero2}
            alt="Earthvine Interior Design"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/15 to-transparent" />
        </motion.div>
        {/* HERO CONTENT */}
        <div className="relative z-10 h-full w-full">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
            absolute
            left-[5.75%]
            top-[30%]
            w-[720px]
            max-w-[88%]
            sm:max-w-[80%]
            lg:max-w-[720px]
          "
          >
            {/* HEADING */}
            <h1
              className={`
                ${playfairDisplay.className}
                m-0
                text-[34px]
                font-black
                leading-[115%]
                tracking-normal
                text-white
                sm:text-[48px]
                md:text-[58px]
                lg:text-[68px]
                lg:leading-[120%]
              `}
            >
              Creating Harmony
              <br />
              Through Design
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`
                ${jost.className}
                m-0
                mt-4
                max-w-150
                text-[15px]
                font-medium
                leading-[125%]
                text-white
                sm:mt-6
                sm:text-[18px]
                md:text-[20px]
                lg:mt-8
                lg:text-[23px]
                lg:leading-[120%]
              `}
            >
              Whether you have a project in mind or
              <br className="hidden sm:block" />
              just want to explore possibilities, we'd
              <br className="hidden sm:block" />
              love to hear from you.
            </p>

            {/* BUTTON */}
            <a
              href="#contact-section"
              className={`
                  ${playfairDisplay.className}
                  mt-5
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-4
                  bg-white
                  px-4
                  text-[15px]
                  font-bold
                  leading-normal
                  tracking-[0.8px]
                  text-[#1E1E1E]
                  transition-all
                  duration-300
                  hover:bg-[#F7F2EC]
                  sm:mt-6
                  sm:h-12
                  sm:text-[18px]
                `}
            >
              <span>Contact Us</span>

              <span className="text-[27px] font-normal leading-none sm:text-[33px]">
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* GAP */}
      <div className="h-[28px] w-full bg-white sm:h-[36px]" />

      {/*CONTACT SECTION */}
      <section
        id="contact-section"
        ref={formRef}
        className="
          relative
          w-full
          overflow-hidden
          bg-[#263D24]
        "
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={contactImg}
            alt="Earthvine contact background"
            fill
            priority
            sizes="100vw"
            className="scale-[1.04] object-cover"
          />
          <div className="absolute inset-0 bg-[#263D24]/55" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/*MAIN CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1180px]
            flex-col
            gap-12
            px-5
            py-11
            sm:px-8
            sm:py-13
            lg:min-h-[720px]
            lg:flex-row
            lg:items-start
            lg:gap-[195px]
            lg:px-0
            lg:py-[50px]
          "
        >
          {/*FORM CARD*/}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              w-full
              shrink-0
              bg-[#FBECE7]
              px-6
              py-6
              sm:px-10
              sm:py-8
              lg:w-[530px]
              lg:px-[45px]
              lg:py-[35px]
            "
          >
            {/* FORM HEADING */}

            <h2
              className={`
                ${playfairDisplay.className}
                m-0
                text-[36px]
                font-normal
                leading-[1.05]
                text-[#A96D5A]

                sm:text-[42px]

                lg:text-[46px]
              `}
            >
              Get in touch
            </h2>

            <p
              className={`
                ${jost.className}
                mt-5
                text-[16px]
                font-normal
                leading-[1.4]
                text-[#A96D5A]

                sm:text-[18px]

                lg:text-[19px]
              `}
            >
              We'd love to hear from you. Please fill out this form.
            </p>

            {/* FORM */}

            <form onSubmit={handleSubmit} className="mt-8">
              {/* FIRST + LAST NAME */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5

                  sm:grid-cols-2
                  sm:gap-5
                "
              >
                {/* FIRST NAME */}

                <div>
                  <label
                    className={`
                      ${jost.className}
                      mb-2
                      block
                      text-[13px]
                      font-medium
                      leading-normal
                      text-[#1E1E1E]

                      lg:text-[14px]
                    `}
                  >
                    First name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        name: e.target.value,
                      }))
                    }
                    placeholder="First name"
                    className={`
                      ${jost.className}
                      h-[46px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#D8D5D3]
                      bg-white
                      px-3
                      text-[14px]
                      font-normal
                      text-[#53627A]
                      outline-none
                      transition-colors
                      placeholder:text-[#68758A]
                      focus:border-[#A96D5A]
                    `}
                  />
                </div>

                {/* LAST NAME */}

                <div>
                  <label
                    className={`
                      ${jost.className}
                      mb-2
                      block
                      text-[13px]
                      font-medium
                      leading-normal
                      text-[#1E1E1E]

                      lg:text-[14px]
                    `}
                  >
                    Last name
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        subject: e.target.value,
                      }))
                    }
                    placeholder="Last name"
                    className={`
                      ${jost.className}
                      h-[46px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#D8D5D3]
                      bg-white
                      px-3
                      text-[14px]
                      font-normal
                      text-[#53627A]
                      outline-none
                      transition-colors
                      placeholder:text-[#68758A]
                      focus:border-[#A96D5A]
                    `}
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="mt-5">
                <label
                  className={`
                    ${jost.className}
                    mb-2
                    block
                    text-[13px]
                    font-medium
                    leading-normal
                    text-[#1E1E1E]

                    lg:text-[14px]
                  `}
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      email: e.target.value,
                    }))
                  }
                  placeholder="you@company.com"
                  className={`
                    ${jost.className}
                    h-[46px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#D8D5D3]
                    bg-white
                    px-3
                    text-[14px]
                    font-normal
                    text-[#53627A]
                    outline-none
                    transition-colors
                    placeholder:text-[#68758A]
                    focus:border-[#A96D5A]
                  `}
                />
              </div>

              {/* PHONE */}

              <div className="mt-5">
                <label
                  className={`
                    ${jost.className}
                    mb-2
                    block
                    text-[13px]
                    font-medium
                    leading-normal
                    text-[#1E1E1E]

                    lg:text-[14px]
                  `}
                >
                  Phone number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="+91   000-000-0000"
                  className={`
                    ${jost.className}
                    h-[46px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#D8D5D3]
                    bg-white
                    px-3
                    text-[14px]
                    font-normal
                    text-[#53627A]
                    outline-none
                    transition-colors
                    placeholder:text-[#68758A]
                    focus:border-[#A96D5A]
                  `}
                />
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <label
                  className={`
      ${jost.className}
      mb-2
      block
      text-[13px]
      font-medium
      leading-normal
      text-[#1E1E1E]

      lg:text-[14px]
    `}
                >
                  Message
                </label>

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      message: e.target.value,
                    }))
                  }
                  rows={5}
                  placeholder="Leave us a message..."
                  className={`
      ${jost.className}
      min-h-[95px]
      w-full
      resize-none
      rounded-[7px]
      border
      border-[#D8D5D3]
      bg-white
      px-3
      py-3
      text-[14px]
      font-normal
      text-[#53627A]
      outline-none
      transition-colors
      placeholder:text-[#68758A]
      focus:border-[#A96D5A]
    `}
                />
              </div>

              {/* TURNSTILE */}

              <div className="mt-2">
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

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className={`
                  ${playfairDisplay.className}
                  mt-5
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  rounded-[7px]
                  bg-white
                  text-[18px]
                  font-normal
                  leading-normal
                  text-[#795547]
                  transition-all
                  duration-300
                  hover:bg-[#795547]
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/*RIGHT CONTACT INFORMATION*/}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={
              formInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              flex
              w-full
              max-w-[520px]
              flex-col
              text-white
              lg:pt-[30px]
            "
          >
            {/* HEADING */}
            <h1
              className={`
                ${playfairDisplay.className}
                text-[20px]
                font-bold
                leading-[1.1]
                sm:text-[34px]
                lg:text-[40x]
              `}
            >
              We'd love to hear from you
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`
                ${jost.className}
                mt-6
                max-w-[500px]
                text-[16px]
                font-normal
                leading-[1.5]
                text-white
                sm:text-[18px]
                lg:text-[20px]
              `}
            >
              Need something cleared up? Here are our most frequently asked
              questions.
            </p>

            {/* PHONE + EMAIL */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-38
                sm:grid-cols-2
                sm:gap-12
              "
            >
              {/* PHONE */}
              <div>
                <div
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#FFF1ED]
                    text-[#9B6453]
                  "
                >
                  <PhoneCall size={32} strokeWidth={1.7} />
                </div>

                <h3
                  className={`
                    ${playfairDisplay.className}
                    mt-6
                    text-[21px]
                    font-bold
                    leading-none
                    text-white
                    lg:text-[24px]
                  `}
                >
                  Phone
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-4
                    text-[16px]
                    font-normal
                    leading-normal
                    text-white
                    lg:text-[19px]
                  `}
                >
                  +91 93103 33265
                </p>
              </div>

              {/* EMAIL */}

              <div>
                <div
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#FFF1ED]
                    text-[#9B6453]
                  "
                >
                  <Mail size={32} strokeWidth={1.7} />
                </div>

                <h3
                  className={`
                    ${playfairDisplay.className}
                    mt-6
                    text-[21px]
                    font-bold
                    leading-none
                    text-white
                    lg:text-[24px]
                  `}
                >
                  Email
                </h3>

                <p
                  className={`
                    ${jost.className}
                    mt-4
                    text-[16px]
                    font-normal
                    leading-normal
                    text-white
                    lg:text-[19px]
                  `}
                >
                  info@earthvine.in
                </p>
              </div>
            </div>

            {/* OFFICE */}

            <div className="mt-12 sm:mt-14">
              <div
                className="
                  flex
                  h-13
                  w-13
                  items-center
                  justify-center
                  rounded-[9px]
                    bg-[#FFF1ED]
                    text-[#9B6453]
                "
              >
                <MapPin size={32} strokeWidth={1.7} />
              </div>

              <h3
                className={`
                    ${playfairDisplay.className}
                    mt-6
                    text-[21px]
                    font-bold
                    leading-none
                    text-white
                    lg:text-[24px]
                `}
              >
                Office
              </h3>

              <p
                className={`
                    ${jost.className}
                    mt-4
                    text-[16px]
                    font-normal
                    leading-normal
                    text-white
                    lg:text-[19px]
                `}
              >
                G-24, Ground Floor, NDM-2, Netaji Subhash Place, New Delhi
                110034
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

// "use client";

// import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import { useToast } from "@/hooks/use-toast";
// import { Turnstile } from "@marsidev/react-turnstile";

// import contactHero from "../../../../public/contact/contact-hero.jpg"; // move image to /public
// import { Building, Mail, PhoneCall } from "lucide-react";

// const Contact = () => {
//   const { toast } = useToast();
//   const formRef = useRef(null);
//   const formInView = useInView(formRef, { once: true, margin: "-100px" });
//   const [loading, setLoading] = useState(false);

//   const [captchaToken, setCaptchaToken] = useState("");

//   const [turnstileKey, setTurnstileKey] = useState(0);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !form.name.trim() ||
//       !form.email.trim() ||
//       !form.phone.trim() ||
//       !form.message.trim()
//     ) {
//       toast({
//         title: "Please fill all required fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!captchaToken) {
//       toast({
//         title: "Please verify that you're human.",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/leads`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: form.name,
//             email: form.email,
//             phone: form.phone,
//             subject: form.subject,
//             message: form.message,
//             captchaToken,
//           }),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         const errorMessage =
//           data.errors?.[0]?.message ||
//           data.message ||
//           "Submission failed. Please try again.";

//         toast({
//           title: "Submission Failed",
//           description: errorMessage,
//           variant: "destructive",
//         });

//         return;
//       }

//       toast({
//         title: "Message sent!",
//         description: "We'll get back to you within 24 hours.",
//       });

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });

//       setCaptchaToken("");
//       setTurnstileKey((prev) => prev + 1);
//     } catch (error: any) {
//       toast({
//         title: "Submission Failed",
//         description:
//           error?.message || "Something went wrong. Please try again.",
//         variant: "destructive",
//       });

//       setCaptchaToken("");
//       setTurnstileKey((prev) => prev + 1);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Corrected options object using the required literal types

//   return (
//     <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
//       {/* Hero */}
//       <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.05 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={contactHero}
//             alt="Contact us"
//             fill
//             priority
//             className="object-cover"
//           />

//           {/* <div className="absolute inset-0 bg-black/60" /> */}
//           <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent sm:hidden" />

//           <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />
//         </motion.div>

//         <div className="relative z-10 max-w-7xl sm:pl-15 h-full flex flex-col justify-end">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="flex items-center gap-4"
//           >
//             <div className="w-10 h-px bg-[hsl(var(--gold))]" />
//             <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase">
//               Get In Touch
//             </span>
//           </motion.div>

//           <h1 className="font-display  text-4xl sm:text-6xl md:text-7xl leading-[1.1] text-[hsl(var(--cream))] ">
//             Let's
//           </h1>
//           <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
//             Connect
//           </h1>

//           <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
//             Whether you have a project in mind or just want to explore
//             possibilities, we'd love to hear from you.
//           </p>
//         </div>
//       </section>

//       {/* Contact + Form */}
//       <section
//         ref={formRef}
//         className="section-padding bg-[hsl(var(--background))] overflow-hidden"
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={formInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
//               <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
//                 Contact Details
//               </span>
//             </div>
//             <h2 className="font-display text-4xl sm:text-5xl leading-[0.9] mb-8">
//               Start a{" "}
//               <span className="italic text-[hsl(var(--gold))]">
//                 Conversation
//               </span>
//             </h2>

//             <div className="space-y-5">
//               {[
//                 {
//                   label: "Email",
//                   value: "info@earthvine.in",
//                   logo: Mail,
//                 },
//                 {
//                   label: "Phone",
//                   value: "+91 93103 33265",
//                   logo: PhoneCall,
//                 },
//                 {
//                   label: "Office",
//                   value:
//                     "G-24, Ground Floor, NDM-2, Netaji Subhash Place, New Delhi 110034",
//                   logo: Building,
//                 },
//               ].map((item) => {
//                 const Icon = item.logo;

//                 return (
//                   <div
//                     key={item.label}
//                     className="glass rounded-lg p-6 hover-lift flex items-center gap-6"
//                   >
//                     <Icon className="w-6 h-6 text-[hsl(var(--gold))]" />

//                     <div>
//                       <p className="font-body text-xs uppercase tracking-[0.2em] text-[hsl(var(--gold))] mb-1">
//                         {item.label}
//                       </p>
//                       <p className="font-body text-[hsl(var(--charcoal)/0.9)]">
//                         {item.value}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Right Form */}
//           <motion.form
//             initial={{ opacity: 0, y: 50 }}
//             animate={formInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             onSubmit={handleSubmit}
//             className="lg:col-span-6 lg:col-start-7 glass rounded-lg p-8 sm:p-10 space-y-6"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {[
//                 { key: "name", label: "Full Name *", type: "text" },
//                 { key: "email", label: "Email *", type: "email" },
//                 { key: "phone", label: "Phone *", type: "tel" },
//                 { key: "subject", label: "Subject", type: "text" },
//               ].map((f) => (
//                 <div key={f.key}>
//                   <label className="block font-body text-xs uppercase tracking-[0.15em] text-[hsl(var(--muted-foreground))] mb-2">
//                     {f.label}
//                   </label>

//                   <input
//                     type={f.type}
//                     name={f.key}
//                     value={form[f.key as keyof typeof form]}
//                     onChange={(e) =>
//                       setForm((p) => ({ ...p, [f.key]: e.target.value }))
//                     }
//                     className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg px-4 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.5)] transition-all"
//                   />
//                 </div>
//               ))}
//             </div>

//             <div>
//               <label className="block font-body text-xs uppercase tracking-[0.15em] text-[hsl(var(--muted-foreground))] mb-2">
//                 Message *
//               </label>

//               <textarea
//                 value={form.message}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, message: e.target.value }))
//                 }
//                 rows={5}
//                 className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg px-4 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.5)] transition-all resize-none"
//               />
//             </div>
//             <Turnstile
//               key={turnstileKey}
//               siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
//               options={{
//                 theme: "light",
//               }}
//               onSuccess={(token) => {
//                 setCaptchaToken(token);
//               }}
//               onExpire={() => {
//                 setCaptchaToken("");
//               }}
//               onError={() => {
//                 setCaptchaToken("");
//               }}
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-4 rounded-lg bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-display font-bold text-[13px] tracking-wider uppercase hover:shadow-xl transition-all duration-500 disabled:opacity-50"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </motion.form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
