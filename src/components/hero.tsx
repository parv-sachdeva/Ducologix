"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const clients = [
  { name: "MedGenome",              logo: "/logos/medgenome.png" },
  { name: "Illumina",               logo: "/logos/illumina.png"  },
  { name: "Sonoma Biotherapeutics", logo: "/logos/sonoma.png"    },
  { name: "Roche",                  logo: "/logos/roche.png"     },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-400/10 rounded-full blur-2xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* DNA strand decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden xl:block opacity-10">
        <svg viewBox="0 0 300 800" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 20 }).map((_, i) => (
            <g key={i}>
              <circle
                cx={150 + Math.sin(i * 0.8) * 80}
                cy={i * 40 + 20}
                r="6"
                fill="#7c3aed"
                opacity={0.6}
              />
              <circle
                cx={150 - Math.sin(i * 0.8) * 80}
                cy={i * 40 + 20}
                r="6"
                fill="#2dd4bf"
                opacity={0.6}
              />
              <line
                x1={150 + Math.sin(i * 0.8) * 80}
                y1={i * 40 + 20}
                x2={150 - Math.sin(i * 0.8) * 80}
                y2={i * 40 + 20}
                stroke="white"
                strokeWidth="1"
                opacity={0.3}
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Bioinformatics · Pharma · Data Science
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
            Turning biological data
            <br />
            into{" "}
            <span className="gradient-text">breakthrough insights</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
            Ducologix partners with life-science organisations to transform
            complex genomics, proteomics, and clinical datasets into clear,
            actionable science — from pipeline to publication.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:opacity-90 transition-opacity"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/15 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
            {[
              { num: "10+", label: "Years expertise" },
              { num: "50+", label: "Projects delivered" },
              { num: "4", label: "Global partners" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold gradient-text">
                  {stat.num}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client logos marquee */}
        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">
            Trusted by leading life-science organisations
          </p>

          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-900 to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-900 to-transparent" />

            <div className="flex w-max animate-marquee gap-6">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex h-16 w-44 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/90 px-5 backdrop-blur-sm hover:bg-white transition-colors"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span>Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
