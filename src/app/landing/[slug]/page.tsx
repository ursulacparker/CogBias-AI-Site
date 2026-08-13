import Link from "next/link";
import { notFound } from "next/navigation";
import landingPages from "../landing-pages.json";

type IconName =
  | "trend"
  | "people"
  | "warning"
  | "search"
  | "question"
  | "clock"
  | "document"
  | "check"
  | "message"
  | "roadmap"
  | "target";

type PainPointItem = {
  title: string;
  description: string;
  icon: IconName;
};

type LandingPage = {
  slug: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  subtitle: string;
  audience: string;
  painPoint: {
    eyebrow: string;
    title: string;
    description: string;
    items: PainPointItem[];
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  outcomes: string[];
  cta: {
    title: string;
    description: string;
  };
};

type LandingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const pages = landingPages as LandingPage[];

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: LandingPageProps) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Page Not Found | CogBias",
    };
  }

  return {
    title: `${page.eyebrow} | CogBias`,
    description: page.subtitle,
  };
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <circle cx="10" cy="10" r="8" className="fill-blue-100" />
      <path
        d="m6.5 10 2.2 2.2 4.8-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M12 2c.7 5.4 3.6 8.3 9 9-5.4.7-8.3 3.6-9 9-.7-5.4-3.6-8.3-9-9 5.4-.7 8.3-3.6 9-9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PersonaIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "trend") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="m4 17 5-5 4 3 7-8" {...common} />
        <path d="M15 7h5v5" {...common} />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="9" cy="8" r="3" {...common} />
        <circle cx="17" cy="9" r="2.5" {...common} />
        <path d="M3.5 19c.5-3.5 2.4-5.2 5.5-5.2s5 1.7 5.5 5.2" {...common} />
        <path d="M15 14.5c3-.3 4.8 1.2 5.3 4.5" {...common} />
      </svg>
    );
  }

  if (name === "warning") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3 2.8 20h18.4L12 3Z" {...common} />
        <path d="M12 9v4.5M12 17h.01" {...common} />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.5" {...common} />
        <path d="m15.5 15.5 5 5" {...common} />
      </svg>
    );
  }

  if (name === "question") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M9.7 9a2.5 2.5 0 1 1 3.1 2.4c-.8.3-.8.9-.8 1.6M12 17h.01" {...common} />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M12 7v5l3 2" {...common} />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M6 3h8l4 4v14H6V3Z" {...common} />
        <path d="M14 3v5h4M9 12h6M9 16h6" {...common} />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="m8 12 2.6 2.6L16.5 9" {...common} />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M4 5h16v11H9l-5 4V5Z" {...common} />
        <path d="M8 9h8M8 12h5" {...common} />
      </svg>
    );
  }

  if (name === "roadmap") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="6" cy="18" r="2" {...common} />
        <circle cx="18" cy="6" r="2" {...common} />
        <path d="M8 18h3a3 3 0 0 0 3-3v-6a3 3 0 0 1 3-3" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="8" {...common} />
      <circle cx="12" cy="12" r="4" {...common} />
      <path d="m16 8 5-5M17 3h4v4" {...common} />
    </svg>
  );
}

export default async function PersonaLandingPage({
  params,
}: LandingPageProps) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="relative border-b border-zinc-200 px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="absolute left-[8%] top-[18%] -z-0 h-32 w-32 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute bottom-[12%] right-[8%] -z-0 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-[1080px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <SparkleIcon />
              {page.eyebrow}
            </div>

            <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              {page.headline}
              <span className="mt-1 block text-blue-600">
                {page.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {page.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://extension.staging.cogbias.ai/" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
              >
                Download now
                <ArrowIcon />
              </Link>

              <Link
                href="/product"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Explore the product
                <ArrowIcon />
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Built for {page.audience.toLowerCase()}.
            </p>
          </div>

          {/* General product graphic */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-blue-950/5 sm:p-5">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                </div>

                <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700">
                  CogBias analysis
                </span>
              </div>

              <div className="mt-4 rounded-xl border border-zinc-200 bg-slate-50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Survey question
                </p>

                <p className="mt-2 text-sm font-medium leading-6">
                  Don&apos;t you agree that this solution would improve your
                  experience?
                </p>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                  <p className="text-xs font-semibold text-amber-800">
                    Leading question
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-amber-700">
                    The wording signals that agreement is expected.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-xs font-semibold text-blue-800">
                    Suggested revision
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-blue-700">
                    How, if at all, would this solution affect your experience?
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3 text-white">
                <div>
                  <p className="text-[10px] text-blue-100">
                    Question improved
                  </p>
                  <p className="mt-0.5 text-xs font-semibold">
                    Intent preserved
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {page.painPoint.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {page.painPoint.title}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              {page.painPoint.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.painPoint.items.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <PersonaIcon name={item.icon} />
                </div>

                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-zinc-200 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                {page.solution.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {page.solution.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {page.solution.description}
              </p>

              <Link
                href="/pricing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Check our our team pricing
                <ArrowIcon />
              </Link>
            </div>

            <div className="space-y-3">
              {page.solution.steps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:grid-cols-[52px_1fr] sm:items-start sm:p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[900px] rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-7 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                The result
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Better questions create better evidence.
              </h2>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {page.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-sm leading-5 text-slate-700"
                >
                  <span className="mt-0.5 text-blue-600">
                    <CheckIcon />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-200 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[900px] rounded-3xl border border-blue-200 bg-blue-50 px-6 py-10 text-center sm:px-10">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <SparkleIcon />
          </div>

          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {page.cta.title}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            {page.cta.description}
          </p>
        </div>
      </section>
    </main>
  );
}