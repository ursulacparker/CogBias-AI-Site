// src/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-3">
        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} CogBias. All rights reserved.
        </p>
      </div>
    </footer>
  );
}