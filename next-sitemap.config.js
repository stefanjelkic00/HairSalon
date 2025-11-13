/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bucka.rs',       // glavni URL sajta
  generateRobotsTxt: true,           // generiše robots.txt automatski
  sitemapSize: 7000,                 // maksimalno URL-ova po sitemap fajlu
  sourceDir: 'app',                  // obavezno za Next 13+ App Router
  outDir: 'public',                  // gde će sitemap.xml i robots.txt biti generisani
  changefreq: 'weekly',              // preporučena učestalost ažuriranja
  priority: 0.7,                     // prioritet za sve rute
  extraPaths: [
    '/politika-privatnosti',
    '/uslovi-koriscenja'
  ],                                  // dodatne rute koje nisu u app folderu
};
