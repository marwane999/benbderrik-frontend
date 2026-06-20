"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Shield, Clock, Globe } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Autorité Incontestable",
    desc: "Agréé près la Cour de Cassation, notre cabinet bénéficie d'une reconnaissance institutionnelle qui garantit une représentation de premier ordre.",
  },
  {
    icon: Clock,
    title: "45+ ans d'Expérience",
    desc: "Depuis 1981, nous bâtissons une jurisprudence solide et une connaissance approfondie du système judiciaire marocain.",
  },
  {
    icon: Globe,
    title: "4 Langues",
    desc: "Arabe, Français, Anglais et Espagnol : nous défendons vos intérêts sans barrière linguistique, dans les affaires locales et internationales.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          subtitle="Pourquoi nous choisir"
          title="Pourquoi des Milliers de Clients Nous Font Confiance ?"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="group rounded-xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-md">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
