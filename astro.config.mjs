// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Kodular Docs',
      favicon: '/favicon.ico',
      logo: { src: './src/assets/logo.png', alt: 'Kodular Logo' },
      social: {
        github: 'https://github.com/Kodular/Documentation',
        'x.com': 'https://x.com/@KodularIO',
        youtube: 'https://youtube.com/@Kodular',
      },
      editLink: {
        baseUrl: 'https://github.com/Kodular/Documentation/edit/master/',
      },
      sidebar: [
        {
          label: 'Guides',
          collapsed: true,
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Blocks',
          collapsed: true,
          autogenerate: { directory: 'blocks' },
        },
        {
          label: 'Support',
          collapsed: true,
          autogenerate: { directory: 'support' },
        },
        {
          label: 'Release Notes',
          collapsed: true,
          autogenerate: { directory: 'release-notes' },
        },
        { label: 'Pricing', slug: 'pricing' },
        { label: 'Terms of Service', slug: 'terms-of-service' },
      ],
      plugins: [starlightLinksValidator()],
    }),
  ],
});
