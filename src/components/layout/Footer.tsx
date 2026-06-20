import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-main py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-secondary" />
              <span className="font-heading text-xl font-bold">
                M. Ben Abderrazik
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Cabinet d&apos;avocat à Marrakech, agréé près la Cour de
              Cassation. Plus de 45 ans d&apos;expertise juridique au service de
              vos droits.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">Liens</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/cabinet", label: "Cabinet" },
                { href: "/competences", label: "Compétences" },
                { href: "/honoraires", label: "Honoraires" },
                { href: "/vision", label: "Notre Vision" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  Résidence la paix, place de la liberté
                  <br />
                  SIBAM 2, Imm. A 1er Etage
                  <br />
                  Marrakech, 40000
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span>+212 524 420 482</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span>contact@benabderrazik-avocat.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">Horaires</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-secondary" />
                <span>Lun - Ven : 9h00 - 18h00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-secondary" />
                <span>Samedi : Sur rendez-vous</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-secondary" />
                <span>Dimanche : Fermé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-6">
          <p className="text-center text-sm text-white/40">
            &copy; {new Date().getFullYear()} Maître Mohamed Ben Abderrazik.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
