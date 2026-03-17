// "use client";

// export default function ServiceContact() {
//   return (
//     // <section className="py-24 bg-[hsl(var(--charcoal))]">
//     <section className="section-padding bg-[hsl(var(--charcoal))]">
//       <div className="max-w-xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-display text-[hsl(var(--cream))] uppercase">
//           Start Your Interior Project
//         </h2>

//         <form className="mt-10 space-y-5">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 bg-black border border-[hsl(var(--gold)/0.2)] text-white"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 bg-black border border-[hsl(var(--gold)/0.2)] text-white"
//           />

//           <textarea
//             placeholder="Project details"
//             rows={4}
//             className="w-full p-3 bg-black border border-[hsl(var(--gold)/0.2)] text-white"
//           />

//           <button className="px-8 py-3 bg-[hsl(var(--gold))] text-black font-bold uppercase">
//             Send Inquiry
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

//---------------------------------------------------------------------------------------------------------------
//this works: and is correct:
// "use client";

// import { motion } from "framer-motion";

// export default function ServiceContact() {
//   return (
//     <section className="section-padding bg-[hsl(var(--charcoal))]">
//       <div className="max-w-350 mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
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
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="lg:col-span-7 glass-dark rounded-lg p-10 space-y-6"
//         >
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
//             />
//           </div>

//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
//           />

//           <textarea
//             rows={4}
//             placeholder="Tell us about your project"
//             className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
//           />

//           <button
//             type="submit"
//             className="mt-6 px-8 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] tracking-[0.15em] uppercase hover:opacity-90 transition"
//           >
//             Request Consultation
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function ServiceContact() {
  const pathname = usePathname();

  const subject = pathname.split("/").filter(Boolean).pop() || "general";

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzXkPmfSywVrL_IBqcLSfqMOMKo2l5DYRI65EobSHYv9ACg410qz-cXqjFiYmEXgnKrCg/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("Name", form.name);
    formPayload.append("Email", form.email);
    formPayload.append("Phone", form.phone);
    formPayload.append("Message", form.message);
    formPayload.append("Subject", subject); // ✅ auto from path
    formPayload.append("Timestamp", istFormatted);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="section-padding bg-[hsl(var(--charcoal))]">
      <div className="max-w-350 mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]">
              Consultation
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-[hsl(var(--cream))] mb-6">
            Start Your
            <span className="italic text-[hsl(var(--gold))]">
              {" "}
              Design Journey
            </span>
          </h2>

          <p className="text-[hsl(var(--cream)/0.65)] max-w-md text-sm leading-relaxed">
            Tell us about your space and our design team will reach out to you
            with ideas, possibilities, and a tailored approach to transform it.
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 glass-dark rounded-lg p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              className="bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))] transition"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
          />

          <textarea
            rows={4}
            placeholder="Tell us about your project"
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
            className="w-full bg-transparent border-b border-[hsl(var(--cream)/0.3)] py-3 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream)/0.5)] focus:outline-none focus:border-[hsl(var(--gold))]"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 px-8 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg font-display text-[13px] tracking-[0.15em] uppercase hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Request Consultation"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
