"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, stagger, transition } from "@/lib/animations";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-main relative z-10 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          transition={transition}
          className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl"
        >
          Prêt à Défendre Vos Droits ?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          transition={transition}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Chaque affaire est unique. Bénéficiez d&apos;une stratégie juridique
          sur mesure, élaborée par un avocat agréé près la Cour de Cassation.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          transition={transition}
          className="mt-6 text-sm font-medium text-secondary"
        >
          Places limitées : nous prenons un nombre restreint de dossiers pour
          garantir une qualité optimale.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={transition}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-secondary px-8 py-4 text-sm font-bold text-primary-dark transition-all hover:bg-secondary-light hover:shadow-lg"
          >
            Prenez Rendez-Vous
          </Link>
          <p className="mt-3 text-xs text-white/40">
            Consultation initiale sans engagement
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
