import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Timeline } from "@/components/sections/Timeline";
import { CtaSection } from "@/components/sections/CtaSection";
import { StatsCounter } from "@/components/shared/StatsCounter";
import {
  Scale,
  Building2,
  Landmark,
  Gavel,
  FileText,
  Award,
  Shield,
  Clock,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cabinet",
  description:
    "Découvrez l'histoire et les valeurs du cabinet d'avocat Maître Mohamed Ben Abderrazik à Marrakech. Plus de 45 ans d'excellence judiciaire.",
};

const timelineEntries = [
  {
    year: "1951",
    title: "Naissance d'une Vocation",
    description:
      "Mohamed Ben Abderrazik voit le jour à Marrakech, bercé par une tradition de justice et d'intégrité qui forgera sa vocation d'avocat.",
  },
  {
    year: "1975",
    title: "Formation Juridique",
    description:
      "Obtention d'une licence en droit à l'Université Mohammed V de Rabat, premières armes dans le monde judiciaire marocain.",
  },
  {
    year: "1977",
    title: "Inscription au Barreau",
    description:
      "Inscription au barreau de Marrakech et début de la pratique du droit au sein d'un cabinet réputé de la ville ocre.",
  },
  {
    year: "1977",
    title: "Premiers Pas en Contentieux",
    description:
      "Spécialisation progressive dans le contentieux commercial et bancaire, domaines alors en pleine émergence au Maroc.",
  },
  {
    year: "1980",
    title: "Notoriété Croissante",
    description:
      "Reconnaissance par ses pairs et la profession pour son expertise en droit des affaires, premières grandes affaires.",
  },
  {
    year: "1981",
    title: "Fondation du Cabinet",
    description:
      "Création de son propre cabinet à Marrakech, avec la vision d'offrir une prestation juridique d'excellence alliant rigueur et proximité.",
  },
  {
    year: "Aujourd'hui",
    title: "Héritage et Innovation",
    description:
      "Agréé près la Cour de Cassation, le cabinet continue d'évoluer avec son temps tout en préservant les valeurs fondamentales qui ont fait sa réputation.",
  },
];

const activities = [
  { icon: Scale, title: "Droit Commercial" },
  { icon: Landmark, title: "Droit Bancaire" },
  { icon: Building2, title: "Droit des Sociétés" },
  { icon: Gavel, title: "Droit Pénal" },
  { icon: FileText, title: "Droit Civil" },
  { icon: Award, title: "Arbitrage" },
];

const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Professionnel" },
  { name: "Espagnol", level: "Professionnel" },
];

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    desc: "Une conduite irréprochable guidée par les principes les plus stricts du droit et de l'éthique professionnelle.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Une quête permanente de la qualité dans chaque dossier, de la consultation à la plaidoirie.",
  },
  {
    icon: Clock,
    title: "Proximité",
    desc: "Une relation de confiance bâtie sur l'écoute, la disponibilité et la transparence avec chaque client.",
  },
];

export default function CabinetPage() {
  return (
    <>
      <section className="section-padding bg-gradient-primary-dark pt-28 lg:pt-36">
        <div className="container-main text-center">
          <AnimatedSection>
            <span className="mb-3 inline-block font-accent text-lg tracking-wider text-secondary">
              Le Cabinet
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              45+ Ans d&apos;Excellence Judiciaire
              <br />
              <span className="text-secondary">à Marrakech</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <SectionHeading
                title="Un Héritage d'Excellence"
                description="Fondé en 1981 par Maître Mohamed Ben Abderrazik, notre cabinet s'est imposé comme une référence incontournable du droit des affaires à Marrakech. Agréé près la Cour de Cassation, nous perpétuons une tradition d'excellence judiciaire tout en embrassant les évolutions du droit moderne."
                centered={false}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-primary">
                <div className="text-center text-white">
                  <Scale className="mx-auto mb-4 h-16 w-16 text-secondary" />
                  <p className="font-heading text-xl">Depuis 1981</p>
                  <p className="text-sm text-white/60">
                    Au service du droit et de la justice
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <SectionHeading
            subtitle="Parcours"
            title="Notre Histoire en Dates"
          />
          <div className="mx-auto max-w-4xl">
            <Timeline entries={timelineEntries} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Expertise"
            title="Secteurs d'Activité"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.05}>
                <div className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading font-bold text-primary">
                    {item.title}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <SectionHeading subtitle="Langues" title="Une Équipe Multilingue" />
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <AnimatedSection key={lang.name} delay={index * 0.1}>
                <div className="rounded-xl border border-primary/10 bg-white px-8 py-6 text-center shadow-sm">
                  <div className="font-heading text-xl font-bold text-primary">
                    {lang.name}
                  </div>
                  <div className="mt-1 text-sm text-secondary">{lang.level}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16">
        <div className="container-main">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <AnimatedSection>
              <StatsCounter value={45} suffix="+" label="Années d'expérience" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <StatsCounter value={4} suffix="" label="Langues" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <StatsCounter value={8} suffix="+" label="Domaines" />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <StatsCounter value={1000} suffix="+" label="Dossiers traités" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            subtitle="Valeurs"
            title="Notre Philosophie"
            description="Trois piliers fondamentaux guident notre action quotidienne et notre relation avec nos clients depuis plus de 45 ans."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="group rounded-xl bg-neutral-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-white shadow-md">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {value.desc}
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
