/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://metamorfosis.app',
  generateRobotsTxt: false, // We handle robots.txt via app/robots.ts
  exclude: ['/404'],
};
