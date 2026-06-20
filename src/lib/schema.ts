export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Maître Mohamed Ben Abderrazik",
    description:
      "Cabinet d'avocat à Marrakech spécialisé en droit commercial, bancaire, des sociétés, pénal des affaires, civil et arbitrage. Agréé près la Cour de Cassation.",
    url: "https://www.benabderrazik-avocat.com",
    telephone: "+212 524 420 482",
    email: "contact@benabderrazik-avocat.com",
    foundingDate: "1981",
    founder: {
      "@type": "Person",
      name: "Mohamed Ben Abderrazik",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Résidence la paix, place de la liberté, SIBAM 2, Imm. A 1er Etage",
      addressLocality: "Marrakech",
      postalCode: "40000",
      addressCountry: "MA",
    },
    knowsLanguage: [
      { "@type": "Language", name: "Arabic" },
      { "@type": "Language", name: "French" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
    ],
    areaServed: "Marrakech-Safi, Morocco",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Juridiques",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Droit Commercial" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Droit Bancaire & Financier" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Droit des Sociétés" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Droit Pénal des Affaires" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Droit Civil" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contentieux & Arbitrage" } },
      ],
    },
  };
}
