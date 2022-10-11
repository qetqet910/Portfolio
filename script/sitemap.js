const fs = require("fs");
const prettier = require("prettier");

const SitemapGeneratedDate = new Date().toISOString();
const CINEPS_BOARD_DOMAIN = "https://introduceme.kr";

const formatting = (target) => prettier.format(target, { parser: "html" });

let pages = ["/"];
pages = pages.map((page) => CINEPS_BOARD_DOMAIN + page);

const pageSitemap = pages
  .map(
    (page) => `
      <url>
        <loc>${page}</loc>
        <lastmod>${SitemapGeneratedDate}</lastmod>
      </url>
    `
  )
  .join("");

const geneateSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          ${pageSitemap}
        </urlset>`;

const formattedSitemap = formatting(geneateSitemap);

fs.writeFileSync("./public/sitemap.xml", formattedSitemap, "utf8");
console.log('sitemap create completed');