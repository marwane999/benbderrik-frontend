"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Cabinet" },
  { href: "/competences", label: "Compétences" },
  { href: "/honoraires", label: "Honoraires" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
              <span className="font-heading text-lg font-bold text-primary">
                Menu
              </span>
              <button onClick={onClose} aria-label="Fermer">
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-lg px-4 py-3 text-base font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-neutral-200 p-6">
              <span className="mb-3 block text-center font-accent text-sm tracking-wider text-secondary">
                Agréé Cour de Cassation
              </span>
              <Link
                href="/contact"
                onClick={onClose}
                className="block rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-primary-light"
              >
                Contactez-nous
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
