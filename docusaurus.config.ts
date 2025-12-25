import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Coding-Kurs für Kinder',
  tagline: 'Lerne Programmieren mit modernen Tools und echten Projekten',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true, // Use SWC instead of Babel and rspack instead of webpack for faster builds
  },

  // Set the production url of your site here
  url: 'https://coding-class.levinkeller.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'levins-coding-class', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Docs-only mode: docs are at the root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/levins-coding-class/website/edit/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
