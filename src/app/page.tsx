// src/app/page.tsx

import Link from "next/link";

type IconName =
  | "sparkles"
  | "failure"
  | "money"
  | "survey"
  | "detect"
  | "rephrase"
  | "integrate"
  | "brain"
  | "arrow"
  | "check";

type IconProps = {
  name: IconName;
  className?: string;
};

function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true,
  };

  if (name === "sparkles") {
    return (
      <svg {...sharedProps}>
        <path
          d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M19 15c.3 2.2 1.3 3.2 3 3.5-1.7.3-2.7 1.3-3 3.5-.3-2.2-1.3-3.2-3-3.5 1.7-.3 2.7-1.3 3-3.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "failure") {
    return (
      <svg {...sharedProps}>
        <path
          d="M4 5v14h16M7 9l4 4 3-3 5 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16h3v-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "money") {
    return (
      <svg {...sharedProps}>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M7 8H6v1M17 16h1v-1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "survey") {
    return (
      <svg {...sharedProps}>
        <path
          d="M7 4h10a2 2 0 0 1 2 2v15H5V6a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 4V2h6v2M8 9h1M12 9h4M8 13h1M12 13h4M8 17h1M12 17h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "detect") {
    return (
      <svg {...sharedProps}>
        <circle
          cx="10.5"
          cy="10.5"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m15 15 5 5M8.5 10.5l1.5 1.5 3-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "rephrase") {
    return (
      <svg {...sharedProps}>
        <path
          d="M5 6h12M5 10h8M5 14h5M14 17h6M17 14l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "integrate") {
    return (
      <svg {...sharedProps}>
        <path
          d="M8 4v4H4M16 4v4h4M8 20v-4H4M16 20v-4h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "brain") {
    return (
      <svg {...sharedProps}>
        <path
          d="M9.5 5.5A3 3 0 0 0 4 7a3 3 0 0 0 .8 5.8A3.5 3.5 0 0 0 9.5 18M14.5 5.5A3 3 0 0 1 20 7a3 3 0 0 1-.8 5.8 3.5 3.5 0 0 1-4.7 5.2M9.5 5.5V19M14.5 5.5V19M9.5 9H7M14.5 9H17M9.5 14H7M14.5 14H17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...sharedProps}>
        <path
          d="M4 12h15M14 7l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const statistics = [
  {
    value: "$3.1 Trillion",
    title: "In the U.S.",
    emphasis: "Wasted Yearly",
    description: "Due to poor data quality",
    icon: "survey" as IconName,
    source: {
      label: "Harvard Business Review, 2016",
      url: "https://hbr.org/2016/09/bad-data-costs-the-u-s-3-trillion-per-year",
    },
  },
  {
    value: "$12.9 Million",
    title: "Lost by",
    emphasis: "Your Company Yearly",
    description: "On average for data quality issues",
    icon: "money" as IconName,
    source: {
      label: "Gartner",
      url: "https://www.gartner.com/en/data-analytics/topics/data-quality",
    },
  },
  {
    value: "95%",
    title: "",
    emphasis: "Failure Rate",
    description: "Of all products to meet revenue targets",
    icon: "failure" as IconName,
    source: {
      label: "MIT Professional, 2021",
      url: "https://professionalprograms.mit.edu/blog/design/why-95-of-new-products-miss-the-mark-and-how-yours-can-avoid-the-same-fate/",
    },
  },
];

const capabilities = [
  {
    title: "Detect biases",
    description: "Both helpful and harmful for your goals",
    icon: "detect" as IconName,
  },
  {
    title: "Rephrase",
    description:
      "Your survey questions to get the responses you really need",
    icon: "rephrase" as IconName,
  },
  {
    title: "Integrate",
    description:
      "Detection systems in your favorite survey creation platforms",
    icon: "integrate" as IconName,
  },
  {
    title: "Accurate Data",
    description:
      "Results you need harnessing biases for your goals",
    icon: "integrate" as IconName,
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-black">
      {/* Screen 1: Hero */}
      <section className="relative flex items-center overflow-hidden px-5 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-[5vw] lg:py-7">
        <div className="absolute left-1/2 top-0 -z-10 h-[38vh] w-[80vw] max-w-[760px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="absolute left-[5%] top-[12%] -z-10 hidden h-12 w-12 rotate-12 rounded-2xl border border-blue-200 bg-blue-100/40 sm:block lg:h-16 lg:w-16" />

        <div className="absolute bottom-[10%] right-[5%] -z-10 hidden h-16 w-16 -rotate-12 rounded-full border border-violet-200 bg-violet-100/50 sm:block lg:h-20 lg:w-20" />

        <div className="mx-auto w-full max-w-[960px]">
          <div className="mx-auto max-w-2xl text-center">

            <h1 className="text-[clamp(2rem,3.25vw,3.25rem)] font-semibold leading-[1.08] tracking-tight">
              Ask Better Questions.
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Get Better Responses.
              </span>
            </h1>

            <p className="mx-auto mt-3 mb-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Identify hidden cognitive biases, improve your survey wording,
              and collect answers you can actually trust.
            </p>
          </div>

          {/* Replace this entire div with your graphic or video later */}
          <div className="mx-auto w-[95%] max-w-[3000px] sm:w-[82%] md:w-[76%] lg:w-[95%]">
            <img
              src="/cogbias-product-overview.svg"
              alt="CogBias analyzing a biased survey question, explaining detected biases, scoring their impact, and suggesting a neutral rephrase"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-5 text-center text-lg tracking-tight sm:text-xl lg:text-2xl">
            Make biases work for{" "}
            <strong className="font-semibold text-blue-600">you.</strong>
          </p>

          <div className="mt-4 flex flex-col justify-center gap-2.5 sm:flex-row">
            <Link
              href="https://alphafrontend.onrender.com/" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md sm:px-5 sm:text-sm"
            >
              Try it now!
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-5 sm:text-sm"
            >
              Explore the product
            </Link>
          </div>
        </div>
      </section>

      {/* Screen 2: Why CogBias */}
      <section className="flex items-center border-y border-zinc-200 bg-slate-50 px-5 py-12 sm:px-6 md:px-8 lg:px-[5vw] lg:py-14">
        <div className="mx-auto w-full max-w-[960px]">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              The cost of asking poorly
            </p>

            <h2 className="mt-2.5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight">
              Why CogBias?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Survey questions shape the answers they receive. Small biases can
              turn into expensive product decisions.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3">
            {statistics.map((statistic) => (
              <article
                key={statistic.emphasis}
                className="group relative flex min-h-[190px] flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:min-h-[205px] sm:p-5"
              >
                <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
                  <a
                    href={statistic.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source: ${statistic.source.label}`}
                    className="peer flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 bg-white text-[11px] font-bold text-zinc-500 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    ?
                  </a>

                  <div
                    role="tooltip"
                    className="pointer-events-none absolute right-0 top-7 z-20 w-52 translate-y-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-left text-[11px] font-normal leading-4 text-slate-600 opacity-0 shadow-lg transition peer-hover:translate-y-0 peer-hover:opacity-100 peer-focus:translate-y-0 peer-focus:opacity-100"
                  >
                    <span className="block font-semibold text-slate-900">
                      Source
                    </span>
                    {statistic.source.label}
                    <span className="mt-1 block text-slate-400">
                      (click to view)
                    </span>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon
                    name={statistic.icon}
                    className="h-4.5 w-4.5"
                  />
                </div>

                <p className="mt-4 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
                  {statistic.value}
                </p>

                <p className="mt-2.5 text-sm text-slate-600 sm:text-base">
                  {statistic.title}
                  {statistic.title && " "}
                  <strong className="font-semibold text-black">
                    {statistic.emphasis}
                  </strong>
                </p>

                <div className="mt-auto border-t border-zinc-200 pt-3">
                  <p className="text-xs leading-5 text-slate-600 sm:text-sm">
                    {statistic.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-center text-base tracking-tight sm:px-5 sm:text-lg">
              <strong className="font-semibold text-blue-700">
                Beat biases
              </strong>{" "}
              before they{" "}
              <strong className="font-semibold">beat you.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3: What We Do */}
      <section className="flex items-center bg-white px-5 py-12 sm:px-6 md:px-8 lg:px-[5vw] lg:py-14">
        <div className="mx-auto w-full max-w-[960px]">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Clearer questions, stronger data
            </p>

            <h2 className="mt-2.5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight">
              What We Do
            </h2>
          </div>

          <div className="mt-7 grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-7 lg:gap-8">
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <article
                  key={capability.title}
                  className="group flex gap-3 rounded-xl border border-zinc-200 bg-white p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon
                      name={capability.icon}
                      className="h-4.5 w-4.5"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-blue-400 sm:text-[10px]">
                        0{index + 1}
                      </span>

                      <h3 className="text-sm font-bold sm:text-base">
                        {capability.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                      {capability.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Replace this div with your product graphic later */}
            <img
              src="/what_we_do.png"
              alt="CogBias analyzing a biased survey question, explaining detected biases, scoring their impact, and suggesting a neutral rephrase"
              className="h-auto w-full rounded-xl border border-zinc-200 object-contain"
            />
            
          </div>

          {/* Bottom CTA — gray instead of dark */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-zinc-200 bg-slate-50 px-4 py-5 text-center shadow-sm sm:px-6 sm:py-6">
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <Icon name="sparkles" className="h-4.5 w-4.5" />
            </div>

            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
              Better questions. Better answers.
              <span className="block text-blue-600">
                Better decisions.
              </span>
            </p>

            <div className="mt-4 flex flex-col justify-center gap-2.5 sm:flex-row">
              <Link
                href="https://alphafrontend.onrender.com/" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md sm:text-sm"
              >
                Download the extension
                <Icon
                  name="arrow"
                  className="h-3.5 w-3.5 transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
              >
                View team pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}