import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Quote, Shield, Award, Users, Globe, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Vision",
  description:
    "La vision et les engagements du cabinet d'avocat Maître Mohamed Ben Abderrazik à Marrakech : justice, intégrité et excellence.",
};

const missionCards = [
  {
    icon: Shield,
    title: "Défendre",
    desc: "Défendre avec vigueur et détermination les droits et intérêts de nos clients, sans compromis sur l'éthique et la déontologie.",
  },
  {
    icon: Award,
    title: "Conseiller",
    desc: "Éclairer nos clients par un conseil juridique stratégique, anticipant les risques et identifiant les opportunités.",
  },
  {
    icon: Users,
    title: "Accompagner",
    desc: "Être un partenaire de confiance tout au long du parcours juridique, de la consultation initiale à la décision finale.",
  },
];

const valuesGrid = [
  {
    icon: Shield,
    title: "Intégrité",
    desc: "La probité et l'honnêteté intellectuelle guident chacune de nos actions. Nous plaçons l'éthique au cœur de notre pratique.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Nous visons l'excellence dans chaque dossier. Notre exigence de qualité se traduit par une préparation minutieuse et une argumentation rigoureuse.",
  },
  {
    icon: Users,
    title: "Proximité",
    desc: "Nous cultivons une relation humaine et personnalisée avec chaque client, fondée sur l'écoute, la disponibilité et la transparence.",
  },
  {
    icon: Globe,
    title: "Ouverture",
    desc: "Tourné vers le monde, notre cabinet maîtrise plusieurs langues et systèmes juridiques pour accompagner des clients internationaux.",
  },
];

const engagements = [
  "Confidentialité absolue de vos informations",
  "Respect des délais et des engagements pris",
  "Communication régulière sur l'avancement de votre dossier",
  "Transparence totale sur les honoraires et les procédures",
  "Indépendance et objectivité dans nos conseils",
  "Veille juridique permanente pour une expertise actualisée",
];

const comparison = [
  { us: "Stratégie personnalisée", other: "Approche standardisée" },
  { us: "Disponibilité prioritaire", other: "Délais de réponse longs" },
  { us: "Expertise Cour de Cassation", other: "Compétence limitée" },
  { us: "Accompagnement multilingue", other: "Une seule langue" },
  { us: "45+ ans d'expérience", other: "Expérience récente" },
  { us: "Réseau pluridisciplinaire", other: "Compétences isolées" },
];

export default function VisionPage() {
  return (
    <>
      <section className="section-padding bg-gradient-primary-dark pt-28 lg:pt-36">
        <div className="container-main text-center">
          <AnimatedSection>
            <span className="mb-3 inline-block font-accent text-lg tracking-wider text-secondary">
              Notre Vision
            </span>
            <h1 className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              La Justice est Notre Mission.
              <br />
              <span className="text-secondary">
                Votre Confiance est Notre Récompense.
              </span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-gradient-primary-dark text-white">
        <div className="container-main">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                Depuis plus de 45 ans, notre cabinet incarne une vision de la
                justice où l&apos;excellence technique rencontre l&apos;humanité.
                Nous croyons en un droit accessible, transparent et efficace,
                mis au service de celles et ceux qui nous confient leurs affaires
                les plus importantes. Notre engagement dépasse la simple
                représentation juridique : nous sommes les gardiens de vos droits
                et les architectes de vos solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Notre Mission"
            title="Défendre. Conseiller. Accompagner."
            description="Trois verbes qui résument notre raison d'être et notre engagement quotidien envers nos clients."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {missionCards.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="group rounded-xl border border-neutral-200 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-white shadow-md transition-transform group-hover:scale-110">
                    <item.icon className="h-8 w-8" />
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

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <SectionHeading
            subtitle="Valeurs"
            title="Ce Qui Nous Définit"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {valuesGrid.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="flex gap-5 rounded-xl bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-md">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Engagements"
            title="Nos Engagements Envers Vous"
          />
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {engagements.map((item, index) => (
                <AnimatedSection key={item} delay={index * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl bg-neutral-50 p-5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm text-neutral-600">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="relative rounded-2xl bg-white p-8 text-center shadow-lg md:p-12">
                <Quote className="mx-auto mb-6 h-10 w-10 text-secondary/40" />
                <blockquote className="font-heading text-xl leading-relaxed text-primary md:text-2xl">
                  &ldquo;La justice n&apos;est pas seulement une question de
                  droit. C&apos;est avant tout une affaire de confiance, de
                  rigueur et d&apos;humanité.&rdquo;
                </blockquote>
                <div className="mt-6">
                  <div className="font-heading font-bold text-primary">
                    Maître Mohamed Ben Abderrazik
                  </div>
                  <div className="mt-1 text-sm text-secondary">
                    Avocat à la Cour de Cassation
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Comparaison"
            title="Ce Qui Fait Notre Différence"
          />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-neutral-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary">
                  <th className="px-6 py-4 font-heading text-white">
                    Notre Cabinet
                  </th>
                  <th className="px-6 py-4 font-heading text-white/60 font-normal">
                    Ailleurs
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-neutral-50" : "bg-white"
                    }
                  >
                    <td className="flex items-center gap-2 px-6 py-4 text-neutral-700">
                      <Check className="h-4 w-4 text-secondary" />
                      {row.us}
                    </td>
                    <td className="px-6 py-4 text-neutral-400">
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-neutral-300" />
                        {row.other}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
