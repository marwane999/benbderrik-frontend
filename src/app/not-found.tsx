import Link from "next/link";
import type { Metadata } from "next";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Introuvable",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-primary-dark px-6 text-center">
      <Scale className="mb-6 h-16 w-16 text-secondary" />
      <h1 className="font-heading text-6xl font-bold text-white md:text-8xl">
        404
      </h1>
      <p className="mt-4 text-lg text-white/70">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-primary-dark transition-all hover:bg-secondary-light"
      >
        Retour à l&apos;Accueil
      </Link>
    </div>
  );
}
