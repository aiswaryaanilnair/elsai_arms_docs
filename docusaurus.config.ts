import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Elsai ARMS',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://arms.elsaifoundry.ai',
  baseUrl: '/documentation/',

  organizationName: 'aiswaryaanilnair',
  projectName: 'elsai_arms_docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'default',
          path: 'sdk',
          routeBasePath: 'sdk',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'saas',
        path: 'saas',
        routeBasePath: 'saas',
        sidebarPath: './sidebarsSaas.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/social_card.png',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'ARMS Logo',
        src: 'img/arms.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'SDK',
        },
        {
          type: 'docSidebar',
          sidebarId: 'saasSidebar',     // from sidebarsSaas.ts
          docsPluginId: 'saas',         // 👈 must match plugin id
          position: 'left',
          label: 'SAAS',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'SDK',
              to: '/sdk/intro',
            },
            {
              label: 'SAAS',
              to: '/saas/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://in.linkedin.com/company/optisol-business-solutions',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/c/OptiSolSolutions',
            },
            {
              label: 'X',
              href: 'https://x.com/optisol',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Optisol Business Solutions',
              href: 'https://www.optisolbusiness.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Optisol Business Solutions`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
