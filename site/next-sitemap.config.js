/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rainbowkit.com',
  generateRobotsTxt: true,
  autoLastmod: false,
  exclude: [
    '/ds',
    '/ar',
    '/ar/*',
    '/de',
    '/de/*',
    '/es-419',
    '/es-419/*',
    '/fr',
    '/fr/*',
    '/hi',
    '/hi/*',
    '/id',
    '/id/*',
    '/ja',
    '/ja/*',
    '/ko',
    '/ko/*',
    '/ms',
    '/ms/*',
    '/pt-BR',
    '/pt-BR/*',
    '/ru',
    '/ru/*',
    '/th',
    '/th/*',
    '/tr',
    '/tr/*',
    '/ua',
    '/ua/*',
    '/vi',
    '/vi/*',
    '/zh-CN',
    '/zh-CN/*',
    '/zh-HK',
    '/zh-HK/*',
    '/zh-TW',
    '/zh-TW/*',
  ],
  alternateRefs: [
    {
      href: 'https://rainbowkit.com/en-US/',
      hreflang: 'en-US',
    },
    {
      href: 'https://rainbowkit.com/ar/',
      hreflang: 'ar',
    },
    {
      href: 'https://rainbowkit.com/de/',
      hreflang: 'de',
    },
    {
      href: 'https://rainbowkit.com/es-419/',
      hreflang: 'es-419',
    },
    {
      href: 'https://rainbowkit.com/fr/',
      hreflang: 'fr',
    },
    {
      href: 'https://rainbowkit.com/hi/',
      hreflang: 'hi',
    },
    {
      href: 'https://rainbowkit.com/id/',
      hreflang: 'id',
    },
    {
      href: 'https://rainbowkit.com/ja/',
      hreflang: 'ja',
    },
    {
      href: 'https://rainbowkit.com/ko/',
      hreflang: 'ko',
    },
    {
      href: 'https://rainbowkit.com/ms/',
      hreflang: 'ms',
    },
    {
      href: 'https://rainbowkit.com/pt-BR/',
      hreflang: 'pt-BR',
    },
    {
      href: 'https://rainbowkit.com/ru/',
      hreflang: 'ru',
    },
    {
      href: 'https://rainbowkit.com/th/',
      hreflang: 'th',
    },
    {
      href: 'https://rainbowkit.com/tr/',
      hreflang: 'tr',
    },
    {
      href: 'https://rainbowkit.com/ua/',
      hreflang: 'ua',
    },
    {
      href: 'https://rainbowkit.com/vi/',
      hreflang: 'vi',
    },
    {
      href: 'https://rainbowkit.com/zh-CN/',
      hreflang: 'zh-CN',
    },
    {
      href: 'https://rainbowkit.com/zh-HK/',
      hreflang: 'zh-HK',
    },
    {
      href: 'https://rainbowkit.com/zh-TW/',
      hreflang: 'zh-TW',
    },
  ],
};
