"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

import contactHero from "../../../public/contact/contact-hero.jpg"; // move image to /public
import { Building, Mail, PhoneCall } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
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
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
      {/* Hero */}
      <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={contactHero}
            alt="Contact us"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl pl-15 h-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] font-body text-[11px] tracking-[0.4em] uppercase">
              Get In Touch
            </span>
          </motion.div>

          <h1 className="font-display  text-4xl sm:text-6xl md:text-7xl leading-[1.1] text-[hsl(var(--cream))] ">
            Let's
          </h1>
          <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
            Connect
          </h1>

          <p className="mt-6 max-w-md text-[hsl(var(--cream)/0.65)]">
            Whether you have a project in mind or just want to explore
            possibilities, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section
        ref={formRef}
        className="section-padding bg-[hsl(var(--background))] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
              <span className="text-[hsl(var(--secondary))] font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                Contact Details
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.9] mb-8">
              Start a{" "}
              <span className="italic text-[hsl(var(--gold))]">
                Conversation
              </span>
            </h2>

            <div className="space-y-5">
              {[
                {
                  label: "Email",
                  value: "info@earthvineinteriors.com",
                  logo: Mail,
                },
                {
                  label: "Phone",
                  value: "+91 98765 43210",
                  logo: PhoneCall,
                },
                {
                  label: "Office",
                  value: "Netaji Subhash Place, New Delhi, Delhi",
                  logo: Building,
                },
              ].map((item) => {
                const Icon = item.logo;

                return (
                  <div
                    key={item.label}
                    className="glass rounded-2xl p-6 hover-lift flex items-center gap-6"
                  >
                    <Icon className="w-6 h-6 text-[hsl(var(--gold))]" />

                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-[hsl(var(--gold))] mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-[hsl(var(--charcoal)/0.9)]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-6 lg:col-start-7 glass rounded-3xl p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { key: "name", label: "Full Name *", type: "text" },
                { key: "email", label: "Email *", type: "email" },
                { key: "phone", label: "Phone *", type: "tel" },
                { key: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block font-body text-xs uppercase tracking-[0.15em] text-[hsl(var(--muted-foreground))] mb-2">
                    {f.label}
                  </label>

                  <input
                    type={f.type}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [f.key]: e.target.value }))
                    }
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl px-4 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.5)] transition-all"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-[hsl(var(--muted-foreground))] mb-2">
                Message *
              </label>

              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                rows={5}
                className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl px-4 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.5)] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-display font-bold text-[13px] tracking-wider uppercase hover:shadow-xl transition-all duration-500 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
