import type { MetadataRoute } from 'next';
import { CONFIG } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = CONFIG.siteUrl;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/equipe`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/galeria`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fidelidade`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/agendar`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
  ];
}
