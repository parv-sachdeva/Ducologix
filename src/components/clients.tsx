const clients = [
  {
    name: "MedGenome",
    description:
      "Next-generation genomics diagnostics & research services across South Asia and beyond.",
    tags: ["Genomics", "Diagnostics", "Clinical research"],
    initials: "MG",
    color: "violet",
  },
  {
    name: "Illumina",
    description:
      "The global leader in DNA sequencing and array-based technologies for genetic analysis.",
    tags: ["Sequencing", "Arrays", "NGS platforms"],
    initials: "IL",
    color: "teal",
  },
  {
    name: "Sonoma Biotherapeutics",
    description:
      "Pioneering regulatory T-cell therapies to treat autoimmune and inflammatory diseases.",
    tags: ["Cell therapy", "Immunology", "Clinical"],
    initials: "SB",
    color: "violet",
  },
  {
    name: "Roche",
    description:
      "Global healthcare leader in pharmaceuticals and diagnostics driving personalised medicine.",
    tags: ["Oncology", "Diagnostics", "Personalised medicine"],
    initials: "RC",
    color: "teal",
  },
];

const testimonials = [
  {
    quote:
      "Ducologix delivered a production-grade scRNA-seq pipeline that cut our analysis turnaround from weeks to days. Exceptional scientific depth combined with engineering rigour.",
    author: "Michael B.",
    role: "Head of Computational Biology · MedGenome",
    initials: "MB",
  },
  {
    quote:
      "Their team understood our regulatory constraints from day one and built a fully validated bioinformatics workflow that sailed through our IND submission review.",
    author: "Sarah R.",
    role: "VP Data Science · Sonoma Biotherapeutics",
    initials: "SR",
  },
];

export function Clients() {
  return (
    <section id="clients" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 ring-1 ring-violet-200 mb-4">
            Trusted By
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Partners who shape the future of medicine
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We have had the privilege of working alongside some of the world's
            most innovative life-science organisations.
          </p>
        </div>

        {/* Client cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => {
            const isViolet = client.color === "violet";
            return (
              <div
                key={client.name}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 font-display font-bold text-lg text-white shadow-lg ${
                    isViolet
                      ? "bg-gradient-to-br from-violet-500 to-violet-700"
                      : "bg-gradient-to-br from-teal-400 to-teal-600"
                  }`}
                >
                  {client.initials}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {client.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        isViolet
                          ? "bg-violet-50 text-violet-700"
                          : "bg-teal-50 text-teal-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-display text-slate-100 leading-none select-none">
                "
              </div>
              <p className="relative text-slate-700 text-base leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-white text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
