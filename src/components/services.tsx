import {
  Dna,
  BarChart3,
  BrainCircuit,
  Database,
  FileText,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Dna,
    title: "Genomics & Bioinformatics",
    description:
      "NGS pipeline development, variant calling, genome assembly, RNA-seq, single-cell analysis, and multi-omics integration.",
    tags: ["WGS / WES", "scRNA-seq", "ATAC-seq", "Long-read"],
    accent: "violet",
  },
  {
    icon: BarChart3,
    title: "Pharma Data Science",
    description:
      "Clinical trial analytics, biomarker discovery, drug response modelling, real-world evidence, and safety signal detection.",
    tags: ["Biomarker", "PK/PD", "RWE", "Safety"],
    accent: "teal",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & AI",
    description:
      "Predictive models for drug target identification, patient stratification, imaging analysis, and lab automation intelligence.",
    tags: ["Deep learning", "NLP", "Computer vision", "AutoML"],
    accent: "violet",
  },
  {
    icon: Database,
    title: "Data Engineering & Infra",
    description:
      "Cloud-native bioinformatics platforms, LIMS integration, scalable Nextflow/Snakemake pipelines, and FAIR data repositories.",
    tags: ["AWS / GCP", "Nextflow", "FAIR data", "LIMS"],
    accent: "teal",
  },
  {
    icon: FileText,
    title: "Regulatory & Scientific Writing",
    description:
      "Bioinformatics methods documentation, statistical analysis plans, IND/BLA data packages, and peer-reviewed manuscript support.",
    tags: ["IND/BLA", "SAP", "Manuscripts", "Dossiers"],
    accent: "violet",
  },
  {
    icon: Lightbulb,
    title: "Strategic Advisory",
    description:
      "Technology roadmaps, build-vs-buy analysis, vendor selection, and scientific due diligence for biotech investments.",
    tags: ["Roadmapping", "Due diligence", "Vendor eval", "M&A"],
    accent: "teal",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 ring-1 ring-violet-200 mb-4">
            What We Do
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            End-to-end scientific consulting
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            From raw sequencing reads to regulatory-ready reports, we cover the
            full analytical stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isViolet = service.accent === "violet";
            return (
              <div
                key={service.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isViolet ? "bg-violet-100" : "bg-teal-50"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                    isViolet
                      ? "bg-violet-50 text-violet-600"
                      : "bg-teal-50 text-teal-600"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative font-display text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="relative text-slate-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
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
      </div>
    </section>
  );
}
