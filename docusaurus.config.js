const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "OwlbearDM",
    tagline: "OwlbearDM, tools for DM",
    url: "https://owlbeardm.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.png",
    organizationName: "owlbeardm", // Usually your GitHub org/user name.
    projectName: "owlbeardm.com", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // editUrl:
              // "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // editUrl:
              // 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({
        navbar: {
          title: "OwlbearDM",
          logo: {
            alt: "OwlbearDM",
            src: "img/logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "index",
              position: "left",
              label: "Texts",
            },
            // {to: '/blog', label: 'Reports', position: 'left'},
          ],
        },
        footer: {
          style: "light",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tools",
                  to: "/",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Contacts",
                  href: "https://c7d5a6.com/",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/OwlbearDm",
                },
                {
                  label: "Email Me",
                  href: "mailto:owlbeardm@gmail.com?subject=Scrollbear: ",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/owlbeardm/owlbeardm.com",
                },
              ],
            },
          ],
          copyright: `2018-${new Date().getFullYear()} @ Mikita Kukavenka, <a href="https://owlbeardm.com/" target="_blank">OwlbearDM</a>.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          // "light" | "dark"
          defaultMode: "light",
          disableSwitch: true,
        },
      }),
  }
);
