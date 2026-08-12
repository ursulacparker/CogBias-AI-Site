// src/app/blogs/page.tsx

import Link from "next/link";
import blogs from "./blogs.json";

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
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
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
      className="h-7 w-7"
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

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 6v4l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogArtwork({
  color,
  compact = false,
}: {
  color: string;
  compact?: boolean;
}) {
  const background =
    color === "violet"
      ? "from-violet-500 to-fuchsia-600"
      : "from-blue-500 to-blue-600";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${background} ${
        compact ? "aspect-[16/9]" : "min-h-[220px] sm:min-h-[250px] lg:min-h-full"
      }`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[22px] border-white/10" />

      <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-white/10 blur-sm" />

      <div className="absolute left-8 top-6 h-10 w-10 rotate-12 rounded-xl border border-white/20 bg-white/10" />

      {/* Replace this icon area with a Next.js Image later */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-sm sm:h-14 sm:w-14">
        <ArticleIcon />
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const typedBlogs = blogs as Blog[];

  const featuredBlog =
    typedBlogs.find((blog) => blog.featured) ?? typedBlogs[0];

  const remainingBlogs = typedBlogs.filter(
    (blog) => blog.slug !== featuredBlog.slug,
  );

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
        <div className="absolute left-1/2 top-0 -z-10 h-[280px] w-[75vw] max-w-[650px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="mx-auto max-w-[960px] text-center">

          <h1 className="mt-2.5 text-5xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            The CogBias Blog
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Insights on cognitive bias, survey design, product research, and
            asking questions that lead to better decisions.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="px-5 pb-12 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-4 flex items-center gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Featured article
            </p>

            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <Link
            href={`/blogs/${featuredBlog.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg md:grid-cols-[0.9fr_1.1fr]"
          >
            <BlogArtwork color={featuredBlog.color} />

            <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold text-blue-700 sm:text-xs">
                  {featuredBlog.category}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ClockIcon />
                  {featuredBlog.readTime}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold leading-tight tracking-tight transition group-hover:text-blue-600 sm:text-2xl lg:text-3xl">
                {featuredBlog.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {featuredBlog.excerpt}
              </p>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-900 sm:text-sm">
                    {featuredBlog.author}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {featuredBlog.publishedAt}
                  </p>
                </div>

                <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 sm:text-sm">
                  Read article
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All articles */}
      <section className="border-t border-zinc-200 bg-slate-50 px-5 py-12 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[960px]">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                Latest thinking
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                More from CogBias
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Research, practical guidance, and new ways to think about the
              questions we ask.
            </p>
          </div>

          {remainingBlogs.length > 0 ? (
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {remainingBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="group flex overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:block"
                >
                  <div className="w-2/5 shrink-0 sm:w-auto">
                    <BlogArtwork color={blog.color} compact />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs">
                      <span className="font-semibold text-blue-600">
                        {blog.category}
                      </span>

                      <span className="text-zinc-300">•</span>

                      <span className="text-slate-500">
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-base font-bold leading-6 transition group-hover:text-blue-600 sm:text-lg">
                      {blog.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">
                      {blog.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <p className="text-[10px] text-slate-500 sm:text-xs">
                        {blog.publishedAt}
                      </p>

                      <span className="flex items-center gap-1 text-[10px] font-semibold text-blue-600 sm:text-xs">
                        Read more
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-7 rounded-xl border border-dashed border-zinc-300 bg-white px-5 py-9 text-center text-sm text-slate-500">
              More articles are coming soon.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}