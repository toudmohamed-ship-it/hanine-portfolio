import { MetadataRoute } from 'next';
import { projects } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://haninetoudghi.com'; // Placeholder URL

    const staticPages = [
        '',
        '/about',
        '/research',
        '/publications',
        '/teaching',
        '/cv',
        '/methods',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/research/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
}
