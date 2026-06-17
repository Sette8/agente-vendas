import { CONFIG } from './config';
import { SERVICES, formatPrice } from './data';

export function getHairSalonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: CONFIG.nome,
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    url: CONFIG.siteUrl,
    telephone: `+${CONFIG.fone}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua das Palmeiras, 120',
      addressLocality: 'Sua Cidade',
      addressRegion: 'MS',
      postalCode: '00000-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-00.000000',
      longitude: '-00.000000',
    },
    sameAs: [CONFIG.instagram],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicos',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name },
        price: (s.priceCents / 100).toFixed(0),
        priceCurrency: 'BRL',
      })),
    },
  };
}
