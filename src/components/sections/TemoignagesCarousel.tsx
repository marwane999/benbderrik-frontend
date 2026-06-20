"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed B.",
    role: "Chef d'entreprise",
    text: "Maître Ben Abderrazik m'a accompagné dans un litige commercial complexe. Son expertise et sa rigueur ont fait toute la différence. Je recommande vivement.",
  },
  {
    name: "Fatima Z.",
    role: "Promotrice immobilière",
    text: "Un cabinet d'une grande compétence. Leur maîtrise du droit des affaires et leur approche stratégique m'ont permis de résoudre des situations délicates.",
  },
  {
    name: "Karim E.",
    role: "Investisseur",
    text: "Excellente expérience avec ce cabinet. Professionnalisme, réactivité et une connaissance approfondie du droit bancaire. Un partenaire de confiance.",
  },
  {
    name: "Hassan M.",
    role: "Dirigeant de PME",
    text: "Je consulte Maître Ben Abderrazik depuis plus de 10 ans. Sa vision stratégique et son intégrité en font un conseiller juridique hors pair.",
  },
];

export function TemoignagesCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <SectionHeading
          subtitle="Témoignages"
          title="La Confiance de Nos Clients, Notre Plus Belle Récompense"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="rounded-2xl bg-white p-8 text-center shadow-md md:p-12"
              >
                <Quote className="mx-auto mb-6 h-10 w-10 text-secondary/40" />
                <p className="mb-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="font-heading text-lg font-bold text-primary">
                  {testimonials[current].name}
                </div>
                <div className="mt-1 text-sm text-secondary">
                  {testimonials[current].role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-neutral-50"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-neutral-50"
            aria-label="Suivant"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
