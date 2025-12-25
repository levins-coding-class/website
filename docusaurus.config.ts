import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Coding-Kurs für Kinder',
  tagline: 'Lerne Programmieren mit modernen Tools und echten Projekten',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    experimental_faster: true,
  },

  url: 'https://coding-class.levinkeller.de',
  baseUrl: '/',

  organizationName: 'levins-coding-class',
  projectName: 'website',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/levins-coding-class/website/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Coding-Kurs',
      logo: {
        alt: 'Coding-Kurs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Kursmaterial',
        },
        {
          href: 'https://github.com/levins-coding-class/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Kursmaterial',
          items: [
            {
              label: 'Kursinhalte',
              to: '/kurs-inhalte',
            },
            {
              label: 'Info für Eltern',
              to: '/info-fuer-eltern',
            },
          ],
        },
        {
          title: 'Ressourcen',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/levins-coding-class/website',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/levins-coding-class/website/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/levins-coding-class/website/discussions',
            },
          ],
        },
        {
          title: 'Rechtliches',
          items: [
            {
              label: 'Impressum',
              to: '/impressum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Levin Keller. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
