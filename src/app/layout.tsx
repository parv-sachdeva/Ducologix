import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Ducologix — Bioinformatics, Pharma & Data Science Consulting",
    template: "%s | Ducologix",
  },
  description:
    "Ducologix partners with life-science organisations to transform complex genomics, proteomics, and clinical datasets into clear, actionable science.",
  keywords: [
    "bioinformatics consulting",
    "pharma data science",
    "genomics",
    "NGS pipeline",
    "single cell analysis",
    "drug discovery",
    "clinical data",
  ],
  authors: [{ name: "Ducologix" }],
  openGraph: {
    type: "website",
    siteName: "Ducologix",
    title: "Ducologix — Bioinformatics, Pharma & Data Science Consulting",
    description:
      "Turning biological data into breakthrough insights. We partner with leading life-science organisations worldwide.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
