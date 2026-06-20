"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { StatsCounter } from "@/components/shared/StatsCounter";

const stats = [
  { value: 45, suffix: "+", label: "Années d'expérience" },
  { value: 8, suffix: "+", label: "Domaines d'expertise" },
  { value: 4, suffix: "", label: "Langues parlées" },
  { value: 1, suffix: "", label: "Cour de Cassation" },
];

export function TrustBar() {
  return (
    <section className="border-b border-neutral-200 bg-white py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <StatsCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
