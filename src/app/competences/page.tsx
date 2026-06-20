"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { AccordionCard } from "@/components/sections/AccordionCard";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  Scale,
  Building2,
  Briefcase,
  Shield,
  FileText,
  Users,
  Calculator,
  Home,
  Gavel,
} from "lucide-react";

const competences = [
  {
    id: "commercial",
    icon: Scale,
    title: "Droit Commercial",
    subtitle: "Contentieux et conseil en droit des affaires",
    details: [
      "Contentieux commercial et procédures collectives",
      "Rédaction et négociation de contrats commerciaux",
      "Droit de la concurrence et distribution",
      "Baux commerciaux et fonds de commerce",
      "Procédures de sauvegarde, redressement et liquidation judiciaire",
    ],
  },
  {
    id: "bancaire",
    icon: Building2,
    title: "Droit Bancaire & Financier",
    subtitle: "Expertise en contentieux bancaire et financement",
    details: [
      "Contentieux bancaire et recouvrement de créances",
      "Contrats de financement et garanties",
      "Droit du crédit et des sûretés",
      "Opérations bancaires internationales",
      "Conformité réglementaire et lutte anti-blanchiment",
    ],
  },
  {
    id: "societes",
    icon: Briefcase,
    title: "Droit des Sociétés",
    subtitle: "Conseil juridique pour entreprises",
    details: [
      "Constitution et structuration de sociétés",
      "Fusions-acquisitions et due diligence",
      "Gouvernance d'entreprise et assemblées générales",
      "Restructuration et transmission d'entreprises",
      "Contentieux des affaires et responsabilité des dirigeants",
    ],
  },
  {
    id: "penal",
    icon: Shield,
    title: "Droit Pénal des Affaires",
    subtitle: "Défense pénale en matière d'affaires",
    details: [
      "Défense pénale des dirigeants et entreprises",
      "Abus de biens sociaux et escroquerie",
      "Corruption et trafic d'influence",
      "Droit pénal fiscal et douanier",
      "Procédure pénale et plaider-coupable",
    ],
  },
  {
    id: "civil",
    icon: FileText,
    title: "Droit Civil",
    subtitle: "Droit civil général et contentieux",
    details: [
      "Droit des obligations et responsabilité civile",
      "Droit de la famille et successions",
      "Droit des contrats et contentieux général",
      "Procédure civile et voies d'exécution",
      "Droit immobilier et construction",
    ],
  },
  {
    id: "social",
    icon: Users,
    title: "Droit Social",
    subtitle: "Accompagnement en droit du travail",
    details: [
      "Contentieux prud'homal et droit du travail",
      "Contrats de travail et conventions collectives",
      "Licenciements et ruptures conventionnelles",
      "Droit de la sécurité sociale",
      "Hygiène, sécurité et conditions de travail",
    ],
  },
  {
    id: "fiscal",
    icon: Calculator,
    title: "Droit Fiscal",
    subtitle: "Conseil et contentieux fiscal",
    details: [
      "Contentieux fiscal et procédure d'imposition",
      "Fiscalité des entreprises et des particuliers",
      "Optimisation fiscale et restructuration",
      "Droit fiscal international et conventions",
      "Assistance lors de contrôles et vérifications fiscales",
    ],
  },
  {
    id: "foncier",
    icon: Home,
    title: "Droit Foncier & Immobilier",
    subtitle: "Expertise en droit immobilier marocain",
    details: [
      "Droit de l'urbanisme et des permis de construire",
      "Transactions immobilières et due diligence",
      "Contentieux foncier et expropriation",
      "Copropriété et gestion immobilière",
      "Promotion immobilière et contrats VEFA",
    ],
  },
  {
    id: "arbitrage",
    icon: Gavel,
    title: "Contentieux & Arbitrage",
    subtitle: "Résolution de litiges et arbitrage",
    details: [
      "Arbitrage interne et international",
      "Médiation et modes alternatifs de règlement des litiges",
      "Contentieux civil et commercial",
      "Exequatur et reconnaissance des sentences arbitrales",
      "Procédure devant la Cour de Cassation",
    ],
  },
];

export default function CompetencesPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <section className="section-padding bg-gradient-primary-dark pt-28 lg:pt-36">
        <div className="container-main text-center">
          <AnimatedSection>
            <span className="mb-3 inline-block font-accent text-lg tracking-wider text-secondary">
              Compétences
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Une Expertise Juridique
              <br />
              <span className="text-secondary">Complete et Transversale</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Notre cabinet couvre l&apos;ensemble du spectre juridique des
              affaires. Chaque domaine est maîtrisé par une équipe dédiée,
              garantissant une expertise pointue et actualisée.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <SectionHeading
            subtitle="Nos Domaines d'Intervention"
            title="Cliquez sur un domaine pour explorer nos compétences"
            description="Découvrez en détail l'étendue de notre expertise juridique dans chacun de nos domaines d'intervention."
          />
          <div className="mx-auto max-w-4xl space-y-4">
            {competences.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <AccordionCard
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                >
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </AccordionCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              subtitle="Langues"
              title="Nous Parlons Votre Langue"
              description="Dans un monde globalisé, la barrière linguistique ne doit pas être un obstacle à la justice. Notre cabinet communique couramment en arabe, français, anglais et espagnol."
            />
            <div className="flex flex-wrap justify-center gap-4">
              {["Arabe", "Français", "Anglais", "Espagnol"].map(
                (lang, index) => (
                  <AnimatedSection key={lang} delay={index * 0.1}>
                    <div className="rounded-xl border border-primary/10 bg-neutral-50 px-8 py-6 text-center shadow-sm transition-all hover:shadow-md">
                      <div className="font-heading text-xl font-bold text-primary">
                        {lang}
                      </div>
                      <div className="mt-1 text-sm text-secondary">
                        {index === 0 && "Maternelle"}
                        {index === 1 && "Courant"}
                        {index === 2 && "Professionnel"}
                        {index === 3 && "Professionnel"}
                      </div>
                    </div>
                  </AnimatedSection>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
