"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { fadeInUp, stagger, transition } from "@/lib/animations";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-primary-dark">
      <div className="container-main relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 lg:flex-row">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-20 lg:pt-0"
        >
          <motion.span
            variants={fadeInUp}
            transition={transition}
            className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 font-accent text-sm tracking-widest text-secondary"
          >
            Agréé près la Cour de Cassation
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            transition={transition}
            className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Avocat à Marrakech
            <br />
            <span className="text-secondary">
              Depuis 1981, la Référence Judiciaire
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={transition}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
          >
            Cabinet d&apos;avocat agréé près la Cour de Cassation, spécialisé
            en droit commercial, bancaire, des sociétés et contentieux
            des affaires à Marrakech.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-primary-dark transition-all hover:bg-secondary-light"
            >
              Obtenez une Consultation
            </Link>
            <Link
              href="/cabinet"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Découvrir le Cabinet
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-8 flex items-center gap-2"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-secondary text-secondary"
                />
              ))}
            </div>
            <span className="text-sm text-white/60">
              Confiance de nos clients depuis 1981
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative flex-1"
        >
          <div className="relative mx-auto aspect-[3/4] max-w-md">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-primary-light/30 to-transparent" />
            <div className="absolute -bottom-4 -right-4 h-48 w-48 rounded-xl bg-secondary/20" />
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-xl bg-secondary/10" />
            <div className="relative flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light/20 to-primary-dark/50 p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-secondary/30">
                  <Image
                    src="/images/Profile-img.png"
                    alt="Maître Mohamed Ben Abderrazik"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <p className="font-heading text-xl text-white">
                  Maître Mohamed Ben Abderrazik
                </p>
                <p className="mt-1 text-sm text-secondary">
                  Avocat à la Cour de Cassation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90 text-white/40" />
      </div>
    </section>
  );
}
