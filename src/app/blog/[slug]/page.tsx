import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-slate-900 pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 ring-1 ring-violet-500/20"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <span className="font-medium text-slate-300">{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-slate prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </article>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-slate-900 p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-white">
            Want to apply these techniques to your data?
          </h3>
          <p className="mt-3 text-slate-400">
            Ducologix builds production-grade bioinformatics pipelines tailored
            to your research or clinical objectives.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
