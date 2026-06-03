import { Layers, Zap, ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Layers,
    title: "Understand the biology",
    body: "We start with the science, not the tooling. Every project begins with a deep-dive into the underlying biology to ensure the right questions are being asked.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Build the right system",
    body: "Reproducible, validated, cloud-native. We architect solutions that are transparent, version-controlled, and ready to scale.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Deliver actionable answers",
    body: "Insights your team can act on immediately — with documentation, code, and interpretation built in from the start.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Visual side */}
          <div className="relative order-last lg:order-first">
            {/* Floating cards */}
            <div className="space-y-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    style={{ transform: `translateX(${i * 16}px)` }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl gradient-bg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display text-xs font-semibold text-slate-500 mb-0.5">
                        {pillar.num}
                      </div>
                      <div className="font-display font-semibold text-white text-sm">
                        {pillar.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Background blob */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6">
              About Ducologix
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl leading-tight">
              Where deep science meets scalable{" "}
              <span className="gradient-text">engineering</span>
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Ducologix was founded to bridge the gap between cutting-edge
              biological research and the robust software infrastructure modern
              life-science organisations need to move fast.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Our consultants bring PhD-level expertise in genomics, immunology,
              and computational biology together with production-grade data
              engineering — so you never have to choose between scientific
              accuracy and operational scale.
            </p>

            <div className="mt-10 space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="flex gap-5">
                  <div className="flex-shrink-0 font-display text-2xl font-bold gradient-text leading-none pt-1">
                    {pillar.num}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
