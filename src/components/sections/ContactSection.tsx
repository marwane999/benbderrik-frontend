import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          subtitle="Contact"
          title="Notre Cabinet à Marrakech"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">
                    Adresse
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Résidence la paix, place de la liberté
                    <br />
                    SIBAM 2, Imm. A 1er Etage
                    <br />
                    Marrakech, 40000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">
                    Téléphone
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    +212 524 420 482
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">Email</h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    contact@benabderrazik-avocat.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">
                    Horaires
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Lun - Ven : 9h00 - 18h00
                    <br />
                    Samedi : Sur rendez-vous
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-light"
              >
                Nous Contacter
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-primary">
              <div className="text-center text-white">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-secondary" />
                <p className="font-heading text-lg">Marrakech, 40000</p>
                <p className="mt-1 text-sm text-white/60">
                  Résidence la paix, SIBAM 2
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
