"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { Scale } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Cabinet" },
  { href: "/competences", label: "Compétences" },
  { href: "/honoraires", label: "Honoraires" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-neutral-200 bg-white lg:h-20">
      <div className="container-main flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-secondary" />
          <span className="font-heading text-lg font-bold text-primary lg:text-xl">
            M. Ben Abderrazik
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="rounded-full bg-secondary/10 px-3 py-1 font-accent text-xs tracking-wider text-secondary">
            Agréé Cour de Cassation
          </span>
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-light"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 bg-primary" />
          <span className="block h-0.5 w-6 bg-primary" />
          <span className="block h-0.5 w-6 bg-primary" />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
