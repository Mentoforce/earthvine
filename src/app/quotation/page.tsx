"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import servicesHero from "../../../public/services/servicesHero.png";

const workTypes = [
  "Living Room Design",
  "Bedroom Design",
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Office Interior",
  "Restaurant Design",
  "Terrace / Outdoor",
  "Complete Home Interior",
  "Commercial Space",
  "Other",
];

const budgetRanges = [
  "Under ₹5 Lakhs",
  "₹5 - 15 Lakhs",
  "₹15 - 30 Lakhs",
  "₹30 - 50 Lakhs",
  "₹50 Lakhs+",
];

export default function Quotation() {
  const { toast } = useToast();
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    selectedWorks: [] as string[],
    area: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);

  const toggleWork = (work: string) => {
    setForm((prev) => ({
      ...prev,
      selectedWorks: prev.selectedWorks.includes(work)
        ? prev.selectedWorks.filter((w) => w !== work)
        : [...prev.selectedWorks, work],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      form.selectedWorks.length === 0
    ) {
      toast({
        title:
          "Please fill all required fields and select at least one work type",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Quotation request submitted!",
        description:
          "Our team will contact you within 24 hours with an estimate.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        selectedWorks: [],
        area: "",
        budget: "",
        timeline: "",
        details: "",
      });
    }, 1500);
  };

  const getEstimate = () => {
    if (form.selectedWorks.length === 0 || !form.area) return null;

    const baseRate = 1500;
    const area = parseInt(form.area) || 0;
    if (!area) return null;

    const multiplier = form.selectedWorks.length > 3 ? 0.9 : 1;

    const estimate =
      area * baseRate * form.selectedWorks.length * 0.3 * multiplier;

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(estimate);
  };

  const estimate = getEstimate();

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--charcoal))]">
      {/* ================= HERO ================= */}
      <section className="relative section-padding flex items-end min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={servicesHero}
            alt="Interior design"
            fill
            priority
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/60" /> */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent sm:hidden" />

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/10 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl sm:pl-15 h-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.4em] uppercase">
              Free Estimate{" "}
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--cream))] leading-[1.1]">
            Get Your{" "}
          </h1>
          <h1 className="font-display italic text-4xl sm:text-6xl md:text-7xl text-[hsl(var(--gold))] leading-[1.1]">
            Quotation
          </h1>

          <p className="font-body text-[hsl(var(--cream)/0.65)] max-w-md mt-6">
            Tell us about your project and get an estimated quotation instantly.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section
        ref={formRef}
        className="section-padding bg-background overflow-hidden"
      >
        <div className="max-w-225 mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-12"
          >
            {/* Personal Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
                <span className="text-secondary font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                  Your Details
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: "name", label: "Full Name *", type: "text" },
                  { key: "email", label: "Email *", type: "email" },
                  { key: "phone", label: "Phone *", type: "tel" },
                  { key: "city", label: "City", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.key as keyof typeof form] as string}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, [f.key]: e.target.value }))
                      }
                      className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary)/0.4)] transition-all duration-300"
                      maxLength={f.key === "email" ? 255 : 100}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Work Type */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
                <span className="text-secondary font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                  Type of Work *
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {workTypes.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => toggleWork(w)}
                    className={`px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 cursor-pointer ${
                      form.selectedWorks.includes(w)
                        ? "bg-[hsl(var(--gold))] text-primary-foreground shadow-xl"
                        : "border border-[hsl(var(--border))] text-foreground hover:border-[hsl(var(--gold))] hover:text-secondary"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[hsl(var(--secondary))]" />
                <span className="text-secondary font-body text-[11px] tracking-[0.4em] uppercase font-medium">
                  Project Details
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Area (sq ft)
                  </label>
                  <input
                    type="number"
                    value={form.area}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, area: e.target.value }))
                    }
                    className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary)/0.4)]"
                    min="0"
                    max="100000"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, budget: e.target.value }))
                    }
                    className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary)/0.4)]"
                  >
                    <option value="">Select</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    value={form.timeline}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, timeline: e.target.value }))
                    }
                    placeholder="e.g. 3 months"
                    maxLength={50}
                    className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary)/0.4)]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Additional Details
                </label>
                <textarea
                  value={form.details}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, details: e.target.value }))
                  }
                  rows={4}
                  maxLength={1000}
                  placeholder="Describe your vision, preferences, or any specific requirements..."
                  className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary)/0.4)] resize-none"
                />
              </div>
            </div>

            {/* Estimate */}
            {estimate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-strong rounded-3xl p-8 sm:p-10 text-center"
              >
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Estimated Starting Price
                </p>
                <p className="font-display text-4xl sm:text-5xl text-foreground">
                  {estimate}
                </p>
                <p className="font-body text-xs text-[hsl(var(--charcoal)/0.7)] mt-8">
                  *This is a rough estimate. Actual pricing may vary based on
                  materials and specifications.
                </p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[hsl(var(--gold))] rounded-lg text-[hsl(var(--charcoal))] font-display font-bold text-[13px] tracking-wider uppercase hover:shadow-2xl transition-all duration-500 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Quotation Request"}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
