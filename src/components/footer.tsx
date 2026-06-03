import Link from "next/link";

const serviceLinks = [
  "Genomics & Bioinformatics",
  "Pharma Data Science",
  "Machine Learning & AI",
  "Data Engineering & Infra",
];

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl gradient-bg text-white text-sm font-bold font-display">
                DX
              </div>
              <span className="font-display font-semibold text-white text-lg">
                Ducologix
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Bioinformatics, pharma, and data science consulting for the modern
              life-science organisation.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400" />
              Available for new projects
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-display font-semibold text-white text-sm mb-4">
              Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-display font-semibold text-white text-sm mb-4">
              Company
            </h5>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Clients", href: "/#clients" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ducologix. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
