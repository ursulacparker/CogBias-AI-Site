// src/app/blogs/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import blogs from "../blogs.json";

type ContentSection = {
  heading: string;
  paragraphs: string[];
};

type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  color: string;
  content: ContentSection[];
};

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function BackIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform group-hover:-translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M16 10H5M9 6l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArticleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="M6 3h9l4 4v14H6V3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 3v5h4M9 12h7M9 16h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function generateStaticParams() {
  return (blogs as Blog[]).map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = (blogs as Blog[]).find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${blog.title} | CogBias`,
    description: blog.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = (blogs as Blog[]).find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const background =
    blog.color === "violet"
      ? "from-violet-500 to-fuchsia-600"
      : "from-blue-500 to-blue-600";

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Article heading */}
      <section className="relative overflow-hidden px-5 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
        <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[75vw] max-w-[650px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="mx-auto max-w-[760px]">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
          >
            <BackIcon />
            Back to all articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold text-blue-700 sm:text-xs">
              {blog.category}
            </span>

            <span className="text-xs text-slate-500">
              {blog.readTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {blog.excerpt}
          </p>

          <div className="mt-5 flex items-center gap-3 border-t border-zinc-200 pt-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              CB
            </div>

            <div>
              <p className="text-xs font-semibold sm:text-sm">
                {blog.author}
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                Published {blog.publishedAt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <section className="px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          className={`relative mx-auto flex aspect-[16/6] max-w-[900px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${background}`}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[30px] border-white/10 sm:h-48 sm:w-48" />

          <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10" />

          <div className="absolute left-1/4 top-8 hidden h-14 w-14 rotate-12 rounded-2xl border border-white/20 bg-white/10 sm:block" />

          {/* Replace this area with your article image later */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-sm sm:h-16 sm:w-16">
            <ArticleIcon />
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="px-5 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[700px]">
          {blog.content.map((section, index) => (
            <section
              key={section.heading}
              className={index === 0 ? "" : "mt-9 sm:mt-10"}
            >
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-slate-700 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-slate-50 p-5 text-slate-950 shadow-sm sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Better questions start here
            </p>

            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              Make bias work for you.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              CogBias helps teams identify and improve biased survey questions before
              they affect the results.
            </p>

            <Link
              href="https://alphafrontend.onrender.com/" target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm"
            >
              Download the extension
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}