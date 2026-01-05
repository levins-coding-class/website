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
        docs: false, // Disable default docs, we'll use plugins
        blog: false,
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
        id: 'parents',
        path: 'docs-parents',
        routeBasePath: 'eltern',
        sidebarPath: './sidebars-parents.ts',
        editUrl: 'https://github.com/levins-coding-class/website/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'teachers',
        path: 'docs-teachers',
        routeBasePath: 'lehrkraefte',
        sidebarPath: './sidebars-teachers.ts',
        editUrl: 'https://github.com/levins-coding-class/website/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'children',
        path: 'docs-children',
        routeBasePath: 'schueler',
        sidebarPath: './sidebars-children.ts',
        editUrl: 'https://github.com/levins-coding-class/website/edit/main/',
      },
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
          sidebarId: 'parentsSidebar',
          docsPluginId: 'parents',
          position: 'left',
          label: 'Für Eltern',
        },
        {
          type: 'docSidebar',
          sidebarId: 'teachersSidebar',
          docsPluginId: 'teachers',
          position: 'left',
          label: 'Für Lehrkräfte',
        },
        {
          type: 'docSidebar',
          sidebarId: 'childrenSidebar',
          docsPluginId: 'children',
          position: 'left',
          label: 'Für Schüler:innen',
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
          title: 'Dokumentation',
          items: [
            {
              label: 'Für Eltern',
              to: '/eltern/intro',
            },
            {
              label: 'Für Lehrkräfte',
              to: '/lehrkraefte/intro',
            },
            {
              label: 'Für Schüler:innen',
              to: '/schueler/intro',
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
