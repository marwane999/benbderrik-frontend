"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Clock,
  Send,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(6, "Téléphone invalide"),
  subject: z.string().min(3, "Le sujet est requis"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactForm = z.infer<typeof contactSchema>;

const faqs = [
  {
    q: "Comment prendre rendez-vous avec Maître Ben Abderrazik ?",
    a: "Vous pouvez nous contacter par téléphone au +212 524 420 482, par email à contact@benabderrazik-avocat.com, ou via le formulaire de cette page. Notre secrétariat vous répondra sous 24 heures.",
  },
  {
    q: "Quels sont les délais pour une première consultation ?",
    a: "En général, nous pouvons vous recevoir sous 48 à 72 heures. Pour les urgences, une consultation peut être organisée dans la journée.",
  },
  {
    q: "Puis-je être reçu en urgence ?",
    a: "Oui, pour les situations urgentes (garde à vue, comparution immédiate, mesures conservatoires), nous assurons une disponibilité prioritaire.",
  },
  {
    q: "Proposez-vous des consultations à distance ?",
    a: "Oui, nous proposons des consultations par visioconférence (Zoom, Teams) ou par téléphone pour les clients ne pouvant se déplacer.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      console.error("Erreur lors de l'envoi");
    }
  };

  return (
    <>
      <section className="section-padding bg-gradient-primary-dark pt-28 lg:pt-36">
        <div className="container-main text-center">
          <AnimatedSection>
            <span className="mb-3 inline-block font-accent text-lg tracking-wider text-secondary">
              Contact
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Prenons
              <br />
              <span className="text-secondary">Rendez-Vous</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Que ce soit pour une consultation, un conseil ou une
              représentation, notre équipe est à votre écoute. Remplissez le
              formulaire ou contactez-nous directement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="mb-6 font-heading text-2xl font-bold text-primary">
                Envoyez-nous un Message
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-green-50 p-8 text-center">
                  <Send className="mx-auto mb-4 h-10 w-10 text-green-600" />
                  <h3 className="font-heading text-xl font-bold text-green-800">
                    Message Envoyé !
                  </h3>
                  <p className="mt-2 text-sm text-green-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-green-700 underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div>
                    <label className="mb-1 block text-sm font-medium text-primary">
                      Nom complet *
                    </label>
                    <input
                      {...register("name")}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-accent">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-primary">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-accent">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-primary">
                        Téléphone *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                        placeholder="+212 6XX XX XX XX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-accent">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-primary">
                      Sujet *
                    </label>
                    <input
                      {...register("subject")}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="Objet de votre message"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-accent">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-primary">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="Décrivez votre situation..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-accent">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-light disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="mb-6 font-heading text-2xl font-bold text-primary">
                Nos Coordonnées
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-heading font-bold text-primary">
                      Adresse
                    </h4>
                    <p className="mt-1 text-sm text-neutral-500">
                      Résidence la paix, place de la liberté
                      <br />
                      SIBAM 2, Imm. A 1er Etage
                      <br />
                      Marrakech, 40000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-heading font-bold text-primary">
                      Téléphone
                    </h4>
                    <p className="mt-1 text-sm text-neutral-500">
                      +212 524 420 482
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <Printer className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-heading font-bold text-primary">Fax</h4>
                    <p className="mt-1 text-sm text-neutral-500">
                      +212 524 420 483
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-heading font-bold text-primary">
                      Email
                    </h4>
                    <p className="mt-1 text-sm text-neutral-500">
                      contact@benabderrazik-avocat.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-heading font-bold text-primary">
                      Horaires
                    </h4>
                    <table className="mt-2 text-sm text-neutral-500">
                      <tbody>
                        <tr>
                          <td className="pr-6">Lun - Ven</td>
                          <td>9h00 - 18h00</td>
                        </tr>
                        <tr>
                          <td className="pr-6">Samedi</td>
                          <td>Sur rendez-vous</td>
                        </tr>
                        <tr>
                          <td className="pr-6">Dimanche</td>
                          <td>Fermé</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+212524420482"
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-all hover:bg-primary-light"
                >
                  <Phone className="h-4 w-4" />
                  Appeler
                </a>
                <a
                  href="mailto:contact@benabderrazik-avocat.com"
                  className="flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="https://maps.google.com/?q=Résidence+la+paix+SIBAM+2+Marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <MapPin className="h-4 w-4" />
                  Carte
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto max-w-5xl">
            <div className="flex aspect-[16/5] items-center justify-center rounded-xl bg-gradient-primary">
              <div className="text-center text-white">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-secondary" />
                <p className="font-heading text-lg">Marrakech, 40000</p>
                <p className="mt-1 text-sm text-white/60">
                  Résidence la paix, SIBAM 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <SectionHeading
            subtitle="FAQ"
            title="Questions Fréquentes"
          />
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-bold text-primary">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-neutral-400 transition-transform",
                      openFaq === index && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-neutral-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-neutral-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
