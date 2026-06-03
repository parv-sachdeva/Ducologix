import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on bioinformatics, genomics, pharma data science, and machine learning from the Ducologix team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 ring-1 ring-violet-500/20 mb-6">
            Insights
          </span>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            The Ducologix{" "}
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Deep dives into bioinformatics, genomics, pharma data science, and
            the tools shaping modern life-science research.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-slate-500 text-center py-24">
            No posts yet. Drop a <code>.mdx</code> file in{" "}
            <code>content/blog/</code> to get started.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient accent bar */}
                <div className="h-1.5 gradient-bg" />

                <div className="flex flex-col flex-1 p-6">
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700"
                        >
                          <Tag className="h-2.5 w-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="font-display text-xl font-semibold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 font-medium text-violet-600 hover:text-violet-800 transition-colors"
                    >
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
