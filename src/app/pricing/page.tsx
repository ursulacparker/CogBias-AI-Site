// src/app/pricing/page.tsx

const plans = [
  {
    name: "Individual / Student",
    description:
      "For individuals and students who want to identify and improve bias in their work.",
    price: "$20/month",
    icon: "individual",
    features: [
      "Bias detection, scoring, and rephrasing",
      "Email support",
    ],
  },
  {
    name: "Startup",
    description:
      "For early-stage teams building more thoughtful, effective products and research.",
    price: "Contact us",
    icon: "rocket",
    features: [
      "Bias detection, scoring, and rephrasing",
      "Collaboration for up to 10 seats",
      "Reporting and analysis tools",
      "Email support",
    ],
  },
  {
    name: "Enterprise",
    description:
      "For organizations that need powerful, scalable bias analysis across their teams and workflows.",
    price: "Contact us",
    icon: "enterprise",
    recommended: true,
    features: [
      "Advanced bias detection, scoring, and rephrasing",
      "Organization-wide analysis and collaboration",
      "Secure, scalable workflow integrations",
      "Custom-built solutions and integrations",
      "Real-time support",
      "Early access to new products",
      "Custom reports, analysis, training, and configurable admin portal",
    ],
  },
  {
    name: "Academic",
    description:
      "For researchers and academic teams conducting rigorous, survey-based studies.",
    price: "Contact us",
    icon: "academic",
    features: [
      "Research-focused bias detection, scoring, and rephrasing",
      "Advanced analysis for survey questions and research workflows",
      "Priority research support",
    ],
  },
];

const individualSignupLink = "https://extension.staging.cogbias.ai";
const demoLink = "https://forms.gle/8TDh59hTrcgJyWud7";

type PlanIconProps = {
  type: string;
};

function PlanIcon({ type }: PlanIconProps) {
  if (type === "individual") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="8"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "rocket") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M14.5 5.5c2.2-2.2 4.6-2.4 5.5-2.5-.1.9-.3 3.3-2.5 5.5l-4 4-4-4 5-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 8.5-3.2.4-2.8 2.8 4.6.2M13 12l-.4 3.2-2.8 2.8-.2-4.6M7.5 16.5c-1.2.1-2.4.7-3.5 1.8.2-1.8.8-3.1 1.8-4.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15.5" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "academic") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="m3 9 9-5 9 5-9 5-9-5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.5v4.2c2.8 2.1 7.2 2.1 10 0v-4.2M21 9v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m7 10 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-[calc(100dvh-5rem)] bg-white px-5 py-5 text-black sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center pb-2">

            <h1 className="mt-4 text-5xl font-medium tracking-tight">
              Our Team Pricing
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Choose the right plan to detect, measure, and transform bias at any scale.
            </p>
          </div>

        <div className="mt-7 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4 lg:gap-5 lg:px-10">
          {plans.map((plan) => {
            const isIndividual = plan.icon === "individual";

            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-white p-5 ${
                  plan.recommended
                    ? "border-2 border-blue-600 shadow-[0_6px_18px_rgba(79,70,229,0.13)]"
                    : "border border-zinc-300 shadow-sm"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-0.5 text-[10px] font-semibold text-white">
                    Recommended
                  </div>
                )}

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <PlanIcon type={plan.icon} />
                </div>

                <h2 className="mt-3 text-lg font-bold">{plan.name}</h2>

                <p className="mt-1.5 min-h-[60px] text-xs leading-5 text-slate-600">
                  {plan.description}
                </p>

                <p className="mt-3 text-2xl font-bold">{plan.price}</p>

                <a
                  href={isIndividual ? individualSignupLink : demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-lg border text-xs font-medium transition ${
                    plan.recommended
                      ? "border-black bg-black text-white hover:bg-zinc-800"
                      : "border-zinc-300 bg-white text-black hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {isIndividual ? "Get Started" : "Contact Us"}
                  <ArrowIcon />
                </a>

                <ul className="mt-5 space-y-2 text-xs leading-4 text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}