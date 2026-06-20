import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { CheckCircle, Scale, Shield, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Honoraires d'avocat à Marrakech. Transparence et flexibilité dans notre politique tarifaire. Honoraires convenus, prestation, résultat et facilités de paiement.",
};

const cards = [
  {
    icon: CheckCircle,
    title: "Honoraires Convenus",
    desc: "Avant toute mission, un devis détaillé vous est remis. Le montant des honoraires est fixé d'un commun accord entre l'avocat et le client, en tenant compte de la nature et de la complexité de l'affaire.",
  },
  {
    icon: Scale,
    title: "Valeur de la Prestation",
    desc: "Nos honoraires reflètent la valeur réelle de la prestation : le temps consacré, la technicité du dossier, l'expérience mise à votre service et les résultats obtenus.",
  },
  {
    icon: Shield,
    title: "Honoraires de Résultat",
    desc: "Pour certaines affaires, nous proposons un complément d'honoraires indexé sur le résultat obtenu. Cette formule aligne nos intérêts sur les vôtres et témoigne de notre confiance dans notre travail.",
  },
  {
    icon: HeartHandshake,
    title: "Facilités de Paiement",
    desc: "Nous comprenons que les frais de justice peuvent représenter une charge importante. Des échéanciers personnalisés peuvent être étudiés pour adapter le paiement à votre situation.",
  },
];

const investmentReasons = [
  {
    title: "Sécurité Juridique",
    desc: "Un bon avocat anticipe les risques et sécurise vos décisions, vous évitant des litiges coûteux à long terme.",
  },
  {
    title: "Optimisation des Coûts",
    desc: "Une stratégie juridique bien conçue réduit les coûts globaux d'un litige et maximise vos chances de succès.",
  },
  {
    title: "Tranquillité d'Esprit",
    desc: "Confier vos affaires à un expert vous libère du stress juridique et vous permet de vous concentrer sur l'essentiel.",
  },
  {
    title: "Valeur Ajoutée",
    desc: "Un avocat expérimenté apporte une vision stratégique qui peut transformer une situation défavorable en opportunité.",
  },
];

export default function HonorairesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-primary-dark pt-28 lg:pt-36">
        <div className="container-main text-center">
          <AnimatedSection>
            <span className="mb-3 inline-block font-accent text-lg tracking-wider text-secondary">
              Honoraires
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Une Politique Tarifaire
              <br />
              <span className="text-secondary">Transparente et Équitable</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Chez Maître Ben Abderrazik, nous croyons que la qualité du conseil
              juridique doit être accessible. Notre politique d&apos;honoraires
              est fondée sur la transparence, la confiance et le respect de
              nos clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Notre Philosophie"
            title="Des Honoraires Justes et Transparents"
            description="Le coût de nos prestations est déterminé en fonction de plusieurs critères objectifs, toujours expliqués et validés avec vous avant le début de toute mission."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {cards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="group h-full rounded-xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-primary">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {card.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container-main">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-primary p-8 text-center text-white md:p-12">
            <HeartHandshake className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h3 className="font-heading text-2xl font-bold md:text-3xl">
              Premier Entretien Sans Engagement
            </h3>
            <p className="mt-4 text-white/70">
              Nous vous recevons pour une première consultation afin d&apos;évaluer
              votre situation et discuter des modalités de notre collaboration,
              sans aucun engagement de votre part.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Investissement"
            title="Pourquoi Investir dans un Bon Avocat ?"
            description="Au-delà du coût apparent, faire appel à un avocat expérimenté est un investissement qui protège vos intérêts et vous fait économiser à long terme."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {investmentReasons.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="rounded-xl bg-neutral-50 p-6">
                  <ArrowRight className="mb-3 h-6 w-6 text-secondary" />
                  <h3 className="mb-2 font-heading font-bold text-primary">
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

      <CtaSection />
    </>
  );
}
