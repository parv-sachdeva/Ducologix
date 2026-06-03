import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/mdx";

interface Props {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 ring-1 ring-violet-200 mb-4">
              From the Blog
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              Latest insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800 transition-colors"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-1.5 gradient-bg" />
              <div className="flex flex-col flex-1 p-6">
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
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
                <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
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

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
