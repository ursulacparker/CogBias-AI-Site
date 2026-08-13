// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-4 text-xs text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} CogBias AI. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <span>Atlanta, GA</span>

          <span className="text-zinc-300" aria-hidden="true">
            •
          </span>

          <a
            href="mailto:welcome@cogbias.com"
            className="font-medium text-zinc-600 transition-colors hover:text-blue-600"
          >
            welcome@cogbias.com
          </a>
        </div>
      </div>
    </footer>
  );
}