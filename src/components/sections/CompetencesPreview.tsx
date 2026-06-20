import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Scale, Building2, Landmark, Gavel } from "lucide-react";

const competences = [
  {
    icon: Scale,
    title: "Droit Commercial",
    desc: "Contentieux commercial, contrats, procédures collectives",
  },
  {
    icon: Building2,
    title: "Droit des Sociétés",
    desc: "Constitution, fusion, acquisition, gouvernance",
  },
  {
    icon: Landmark,
    title: "Droit Bancaire",
    desc: "Contentieux bancaire, financement, recouvrement",
  },
  {
    icon: Gavel,
    title: "Contentieux & Arbitrage",
    desc: "Procédure civile, arbitrage interne et international",
  },
];

export function CompetencesPreview() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Une Expertise Juridique Complète à Marrakech"
              description="De la consultation stratégique à la représentation devant les hautes juridictions, notre cabinet vous accompagne dans tous vos besoins juridiques."
              centered={false}
            />
            <AnimatedSection>
              <Link
                href="/competences"
                className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary-light"
              >
                Voir toutes nos compétences
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {competences.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1 font-heading text-lg font-bold text-primary">
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
      </div>
    </section>
  );
}
