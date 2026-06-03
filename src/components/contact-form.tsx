"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, CheckCircle, Loader2 } from "lucide-react";

const services = [
  "Genomics & Bioinformatics",
  "Pharma Data Science",
  "Machine Learning & AI",
  "Data Engineering & Infra",
  "Regulatory & Scientific Writing",
  "Strategic Advisory",
  "Other / Not sure",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          {/* Info */}
          <div>
            <span className="inline-block rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 ring-1 ring-violet-200 mb-6">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Tell us about your project. Whether it&apos;s a one-off analysis or a
              multi-year partnership, we&apos;ll find the right engagement model for
              you.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@ducologix.com",
                  href: "mailto:hello@ducologix.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Remote-first · Worldwide",
                  href: null,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/company/ducologix",
                  href: "https://linkedin.com/company/ducologix",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-violet-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-900 font-medium hover:text-violet-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-slate-900 font-medium">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="mt-12 inline-flex items-center gap-2 rounded-xl bg-teal-50 border border-teal-200 px-4 py-3">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm text-teal-800 font-medium">
                We typically respond within one business day
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                  <CheckCircle className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-500">
                  Thank you for reaching out. We&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-violet-600 hover:text-violet-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your organisation"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition-colors bg-white"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What are you trying to solve? What does success look like?"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
