import { MetadataRoute } from 'next';

// This site is a single-page application (SPA). All sections (Vehicles, Sourcing,
// Market, About, Contact, Resources, Electronics & Gaming) are tab-based views
// rendered at the single canonical URL: https://icelinkglobal.com
// There are no separate URL routes to include in the sitemap.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://icelinkglobal.com',
      lastModified: new Date('2026-10-06'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
