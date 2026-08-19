// src/components/Navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blogs" },
];

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M10 3v9M6.5 8.5 10 12l3.5-3.5M4 15v2h12v-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {open ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto grid h-20 max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
        {/* Left section: original logo and wordmark */}
        <div className="flex justify-start">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="CogBias home"
          >
            <Image
              src="/logo.png"
              alt="CogBias logo icon"
              width={68}
              height={68}
              priority
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />

            <Image
              src="/logo-wordmark.png"
              alt="CogBias"
              width={120}
              height={50}
              priority
              className="h-auto w-[105px] object-contain md:w-[120px]"
            />
          </Link>
        </div>

        {/* Center section: desktop navigation */}
        <div className="hidden items-center justify-center gap-2 whitespace-nowrap md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-black"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute inset-x-4 -bottom-[17px] h-0.5 rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right section: desktop download button */}
        <div className="hidden justify-end md:flex">
          <Link
            href="https://forms.gle/8TDh59hTrcgJyWud7" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="col-start-3 flex justify-end md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] border-zinc-200/80 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-5">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex rounded-xl px-4 py-3.5 font-medium transition ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
            href="https://forms.gle/8TDh59hTrcgJyWud7" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
            Request a Demo
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}