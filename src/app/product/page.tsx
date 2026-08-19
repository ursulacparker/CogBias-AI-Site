// src/app/product/page.tsx
import {InteractiveMapCard} from "../../components/InteractiveMapCard";

const biases = [
  {
    name: "Leading Question Bias",
    description:
      "Questions that suggest a particular answer or contain assumptions.",
    example: "“Don’t you agree that our product is easy to use?”",
    icon: "message",
  },
  {
    name: "Framing Effect",
    description:
      "Language that frames a topic positively or negatively before asking.",
    example: "“How would you rate our award-winning product?”",
    icon: "frame",
  },
  {
    name: "Confirmation Bias",
    description:
      "Questions structured to confirm pre-existing beliefs.",
    example: "“How has our improved platform helped your workflow?”",
    icon: "search",
  },
  {
    name: "Social Desirability Bias",
    description:
      "Questions that pressure respondents toward socially acceptable answers.",
    example: "“Most responsible people recycle. Do you?”",
    icon: "users",
  },
  {
    name: "Loaded Language",
    description:
      "Emotionally charged or value-laden words that influence responses.",
    example: "“How concerned are you about this disastrous policy?”",
    icon: "spark",
  },
  {
    name: "Double-Barreled Questions",
    description:
      "Questions that ask respondents about two different things at once.",
    example: "“How satisfied are you with our speed and design?”",
    icon: "split",
  },
];

const systemSteps = [
  {
    title: "Input Text",
    description: "Survey question or feedback prompt",
  },
  {
    title: "Bias Knowledge Base",
    description: "Structured ontology of cognitive biases",
  },
  {
    title: "Candidate Generation",
    description: "Retrieve relevant bias hypotheses",
  },
  {
    title: "Multi-Cue Scoring",
    description: "Calculate presence likelihood",
  },
  {
    title: "Coherence Reasoning",
    description: "Validate conceptual consistency",
  },
  {
    title: "Utility Prioritization",
    description: "Rank by goal and context",
  },
  {
    title: "User-Facing Recommendation",
    description: "Top-K biases and improved alternatives",
  },
];

const publications = [
  {
    type: "Research Study",
    title: "Cognitive Bias Detection in Survey Design",
    description:
      "Evaluating how automated bias detection can improve question quality.",
  },
  {
    type: "Validation Study",
    title: "Measuring Agreement Between Experts and AI",
    description:
      "Comparing system recommendations with human research experts.",
  },
  {
    type: "Applied Research",
    title: "Bias-Aware Feedback Collection",
    description:
      "Exploring practical applications across product and research teams.",
  },
];

const securityFeatures = [
  {
    title: "Privacy First",
    description:
      "We process only the text you submit and do not train models on your data.",
    icon: "shield",
  },
  {
    title: "Encryption",
    description:
      "Data is encrypted in transit using TLS and protected while at rest.",
    icon: "lock",
  },
  {
    title: "Compliance Ready",
    description:
      "Designed to support SOC 2, GDPR, and enterprise security requirements.",
    icon: "document",
  },
];

type IconProps = {
  name: string;
  className?: string;
};

function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true,
  };

  if (name === "message") {
    return (
      <svg {...sharedProps}>
        <path
          d="M5 5h14v10H9l-4 4V5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 9h8M8 12h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "frame") {
    return (
      <svg {...sharedProps}>
        <path
          d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12h8M12 8v8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "search") {
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

  if (name === "users") {
    return (
      <svg {...sharedProps}>
        <circle
          cx="9"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.5 19c.4-3.3 2.2-5 5.5-5s5.1 1.7 5.5 5M15 5.5c2.1.2 3 1.2 3 2.8 0 1.5-.8 2.5-2.5 2.8M16.5 14c2.5.5 3.8 2.1 4 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "spark") {
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

  if (name === "split") {
    return (
      <svg {...sharedProps}>
        <path
          d="M5 5h4c3 0 3 4 6 4h4M19 9l-3-3M19 9l-3 3M5 19h4c3 0 3-4 6-4h4M19 15l-3-3M19 15l-3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...sharedProps}>
        <path
          d="M12 3 5 6v5c0 4.7 2.8 8.1 7 10 4.2-1.9 7-5.3 7-10V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...sharedProps}>
        <rect
          x="5"
          y="10"
          width="14"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg {...sharedProps}>
        <path
          d="M7 3h7l4 4v14H7V3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v5h4M10 13l1.5 1.5L15 11"
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

  return null;
}
export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Intro */}
      <section className="px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[960px]">
          <div className="mx-auto max-w-2xl text-center">

            <h1 className="mt-4 text-5xl font-medium tracking-tight">
              Biases CogBias helps detect
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Identify cognitive biases that compromise survey quality before
              they compromise your results.
            </p>
          </div>

          {/* Bias cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {biases.map((bias) => (
              <article
                key={bias.name}
                className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon name={bias.icon} className="h-4.5 w-4.5" />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold sm:text-base">
                      {bias.name}
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      {bias.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2.5 text-xs italic leading-5 text-slate-500">
                  {bias.example}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How the system works */}
      <section className="border-y border-zinc-200 bg-slate-50 px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              From question to recommendation
            </p>

            <h2 className="mt-2.5 text-3xl font-semibold tracking-tight sm:text-4xl">
              How the system works
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A structured pipeline that transforms raw survey questions into actionable 
              recommendations using our <b>patent-pending</b> technology.
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            {/* Steps */}
            <div className="p-5 sm:p-6">
              <ol>
                {systemSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative flex gap-3 pb-7 last:pb-0"
                  >
                    {index !== systemSteps.length - 1 && (
                      <div className="absolute left-[13px] top-7 h-[calc(100%-16px)] w-px bg-blue-200" />
                    )}

                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-sm">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold sm:text-sm">
                        {step.title}
                      </h3>

                      <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <InteractiveMapCard />

          </div>
        </div>
      </section>

      {/* Research publications */}

      {/* <section className="px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[960px]">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                Evidence-based technology
              </p>

              <h2 className="mt-2.5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Research Publications
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Explore the research and validation work behind our approach to
              cognitive bias detection.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {publications.map((publication, index) => (
              <article
                key={publication.title}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
                  <div className="text-center text-slate-400">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Icon name="document" className="h-5 w-5" />
                    </div>

                    <p className="mt-2 text-xs">
                      Study image {index + 1}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-600 sm:text-[10px]">
                    {publication.type}
                  </p>

                  <h3 className="mt-2 text-base font-bold leading-6">
                    {publication.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {publication.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* Security */}
      <section className="border-t border-zinc-200 bg-slate-50 px-5 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[960px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Built responsibly
            </p>

            <h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Security you can build on
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Thoughtful data handling and enterprise-ready protections are
              built into every layer of CogBias.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {securityFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon name={feature.icon} className="h-5 w-5" />
                </div>

                <h3 className="mt-3 text-sm font-bold sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}