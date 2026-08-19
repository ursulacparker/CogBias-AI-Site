"use client";

import { useEffect, useState } from "react";

export function InteractiveMapCard() {
  const [isOpen, setIsOpen] = useState(false);

  function openMapOnDesktop() {
    if (window.matchMedia("(min-width: 640px)").matches) {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={openMapOnDesktop}
        className="group flex min-h-[260px] w-full cursor-default flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 px-4 py-6 text-center sm:min-h-[300px] sm:cursor-pointer sm:px-6 sm:py-8 lg:min-h-full"
        aria-haspopup="dialog"
      >
        <div className="relative w-full max-w-[480px] overflow-hidden rounded-xl border border-zinc-300 sm:rounded-2xl">
          <img
            src="/mind_map.png"
            alt="CogBias proprietary cognitive-bias knowledge graph"
            className="h-auto max-h-[42vh] w-full object-contain transition-transform duration-300 sm:group-hover:scale-[1.02] sm:max-h-[46vh] lg:max-h-[50vh]"
          />

          {/* Only show the interactive overlay on larger screens */}
          <div className="absolute inset-0 hidden items-center justify-center bg-slate-950/0 transition-colors sm:flex sm:group-hover:bg-slate-950/15">
            <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">
              Explore map
            </span>
          </div>
        </div>

        <div className="mt-4 w-full max-w-md sm:mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600 sm:text-xs sm:tracking-[0.16em]">
            <span className="sm:hidden">Cognitive Bias map</span>
            <span className="hidden sm:inline">Interactive map</span>
          </p>

          <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-900 sm:text-base sm:leading-6">
            Our proprietary cognitive-bias knowledge graph
          </p>

          <p className="mx-auto mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            <span className="sm:hidden">
              A structured network connecting biases, question patterns, and
              their potential effects.
            </span>

            <span className="hidden sm:inline">
              Click to explore relationships between biases, question patterns,
              and their potential effects.
            </span>
          </p>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] hidden items-center justify-center bg-slate-950/70 p-6 backdrop-blur-sm sm:flex"
          role="dialog"
          aria-modal="true"
          aria-label="Interactive cognitive-bias map"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative h-[90dvh] w-full max-w-7xl overflow-hidden rounded-2xl bg-[#f4f6fb] shadow-2xl">
            <iframe
              src="/interactive-map/index.html"
              title="Interactive cognitive-bias map"
              className="h-full w-full border-0"
            />

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-2xl leading-none text-zinc-700 shadow-md transition hover:bg-zinc-100 hover:text-zinc-950"
              aria-label="Close interactive map"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}