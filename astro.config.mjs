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
      // sidebar: [
      //   {
      //     label: 'Guides',
      //     items: [
      //       // Each item here is one entry in the navigation menu.
      //       // { label: 'Example Guide', slug: 'guides/example' },
      //     ],
      //   },
      //   {
      //     label: 'Reference',
      //     autogenerate: { directory: 'reference' },
      //   },
      // ],
      plugins: [starlightLinksValidator()],
    }),
  ],
});
