// src/app/about/page.tsx

const partners = [
  {
    name: "Rochester Institute of Technology",
    image: "/partners/rit.png",
  },
  {
    name: "Georgia Tech",
    image: "/partners/gt.png",
  },
  {
    name: "Kennesaw State University",
    image: "/partners/kennesaw.png",
  },
  {
    name: "Advanced Technology Development Center",
    image: "/partners/atdc.png",
  },
  {
    name: "Alliance For Decision Education",
    image: "/partners/ade.png",
  },
  {
    name: "Perkins Coie",
    image: "/partners/perkins_coie.png",
  },
  {
    name: "Product Coffee",
    image: "/partners/product_coffee.png",
  },
];

type IconProps = {
  name: "question" | "chart" | "brain" | "target" | "linkedin";
  className?: string;
};

function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true,
  };

  if (name === "question") {
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
          d="M9.8 9a2.4 2.4 0 1 1 3.6 2.1c-.9.5-1.4 1-1.4 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...sharedProps}>
        <path
          d="M4 20V10M10 20V4M16 20v-7M22 20H2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 7 5-3 5 5 6-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
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

  if (name === "target") {
    return (
      <svg {...sharedProps}>
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="m15.5 8.5 4-4M16 4h3.5v3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        {...sharedProps}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.5 8.4H3.2V19h3.3V8.4ZM4.85 3A1.93 1.93 0 1 0 4.8 6.86 1.93 1.93 0 0 0 4.85 3ZM19.8 12.92c0-3.2-1.7-4.69-3.98-4.69a3.46 3.46 0 0 0-3.14 1.73V8.4H9.37V19h3.31v-5.25c0-1.38.26-2.71 1.97-2.71 1.68 0 1.7 1.57 1.7 2.8V19h3.32l.13-6.08Z" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path
        d="M5 21V7h9v14M14 11h5v10M8 10h3M8 14h3M8 18h3M17 14h1M17 18h1M3 21h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Mission hero */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="absolute left-1/2 top-0 -z-10 h-[320px] w-[75vw] max-w-[700px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="mx-auto max-w-[960px] text-center">

          <h1 className="text-5xl font-medium tracking-tight">
            Our Mission
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            CogBias was born from a problem we experienced firsthand: our
            product discovery surveys{" "}
            <strong className="font-semibold text-black">
              weren’t telling us the truth.
            </strong>
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="border-y border-zinc-200 bg-slate-50 px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[960px]">
          <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                The problem
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Promising answers.
                <span className="block text-slate-400">
                  Different outcomes.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                What people said they wanted and what they ultimately did were
                telling us two very different stories.
              </p>
            </div>

            <div className="space-y-3">
              <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon name="question" className="h-4.5 w-4.5" />
                  </div>

                  <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
                    When we asked people whether they wanted a new product, the
                    responses looked promising. Interest was high. Enthusiasm
                    seemed strong. But when it came time for people to actually
                    buy,{" "}
                    <strong className="font-semibold text-black">
                      the numbers told a different story.
                    </strong>
                  </p>
                </div>
              </article>

              <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon name="chart" className="h-4.5 w-4.5" />
                  </div>

                  <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
                    That gap revealed a deeper issue: our survey questions were
                    unintentionally shaping the answers we received. Why?{" "}
                    <strong className="font-semibold text-black">
                      Cognitive Biases.
                    </strong>
                  </p>
                </div>
              </article>

              <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon name="brain" className="h-4.5 w-4.5" />
                  </div>

                  <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
                    Cognitive biases, subtle wording choices, and leading
                    question structures were influencing respondents in ways
                    we didn’t intend. The result was data that{" "}
                    <strong className="font-semibold text-black">
                      looked useful
                    </strong>{" "}
                    on the surface,{" "}
                    <strong className="font-semibold text-black">
                      but failed
                    </strong>{" "}
                    to reflect what people truly thought, wanted, or would do.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* The solution */}
      <section className="flex min-h-[calc(50dvh-5rem)] items-center bg-white px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto grid w-full max-w-[960px] items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Icon name="brain" className="h-5 w-5" />
            </div>

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              The turning point
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              So, we built CogBias.
            </h2>
          </div>

          <div className="border-t border-zinc-200 pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              CogBias helps teams identify and rephrase biased survey questions so
              they can collect clearer, more accurate, and more actionable data.
              Instead of letting bias distort your results, CogBias helps you design
              surveys that account for human psychology and work with it.
            </p>
          </div>
        </div>
      </section>

      {/* Research and outcome */}
      <section className="px-5 pb-12 sm:px-6 md:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto grid max-w-[960px] gap-4 md:grid-cols-[0.7fr_1.3fr]">
          <article className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-blue-200 bg-blue-100 p-5 text-slate-950 shadow-sm sm:p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                Our research
              </p>

              <p className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                ~70%
              </p>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              of questions were answered more accurately when using CogBias compared to
              traditional survey wording in our study.
            </p>
          </article>

          <article className="flex min-h-[220px] flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              The result
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              Better questions lead to better data. Better data leads to better
              decisions.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              That means products customers actually want, responses you can
              trust, and research that is more fair, reliable, and
              representative.
            </p>
          </article>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-zinc-200 bg-slate-50 px-5 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[68%]">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Working together
            </p>

            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight sm:text-3xl">
              Partners
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Collaborating with research, technology, and industry partners to
              build better ways of asking questions.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-3">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex aspect-square items-center justify-center bg-white p-3 sm:p-4 lg:p-3">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex min-h-10 items-center justify-center border-t border-zinc-100 px-2 py-2 text-center">
                  <h3 className="line-clamp-2 text-[10px] font-semibold leading-4 text-slate-900 sm:text-xs lg:text-[11px]">
                    {partner.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Follow us */}
      <section className="px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[960px]">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 px-5 py-8 text-center sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Follow us!
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
              Follow our work, research, and product updates as we build
              CogBias.
            </p>

            <div className="mt-5 flex justify-center">
              <a
                href="https://www.linkedin.com/company/cogbias-ai/" target="_blank" rel="noopener noreferrer"
                aria-label="Follow CogBias on LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Icon
                  name="linkedin"
                  className="h-5 w-5 transition group-hover:scale-110"
                />
              </a>
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              LinkedIn
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}