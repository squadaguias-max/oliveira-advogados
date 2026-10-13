import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { AppRouter } = await server.ssrLoadModule("/src/app/router/AppRouter.jsx");
  const { AppProviders } = await server.ssrLoadModule("/src/app/providers/AppProviders.jsx");
  const app = createElement(StaticRouter, { location: "/" }, createElement(AppProviders, null, createElement(AppRouter)));
  const markup = renderToString(app);
  const file = resolve("dist/index.html");
  let html = await readFile(file, "utf8");
  if (!html.includes('<div id="root"></div>')) throw new Error("Root element not found in production HTML");
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const configuredUrl = process.env.SITE_URL?.trim();
  if (configuredUrl) {
    const parsed = new URL(configuredUrl);
    if (parsed.protocol !== "https:" || parsed.pathname !== "/" || parsed.search || parsed.hash) {
      throw new Error("SITE_URL must be an HTTPS origin, such as https://example.com/");
    }
    const canonical = `${parsed.origin}/`;
    const social = `${parsed.origin}/images/social.jpg`;
    const tags = `<link rel="canonical" href="${canonical}" /><meta property="og:url" content="${canonical}" /><meta property="og:image" content="${social}" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:type" content="image/jpeg" /><meta property="og:image:alt" content="Logo Oliveira Advogados Associados" /><meta name="twitter:image" content="${social}" />`;
    html = html.replace("<title>", `${tags}<title>`);
    html = html.replaceAll("noindex, follow, max-image-preview:large", "index, follow, max-image-preview:large");
    html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_, raw) => {
      const data = JSON.parse(raw);
      for (const item of data["@graph"]) {
        if (item["@type"] === "WebSite" || item["@type"] === "LegalService") item.url = canonical;
        if (item["@type"] === "LegalService") item.logo = `${parsed.origin}/images/marca.png`;
      }
      return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
    });
    await writeFile(resolve("dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url></urlset>\n`);
    await writeFile(resolve("dist/robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${parsed.origin}/sitemap.xml\n`);
  }
  await writeFile(file, html);
  console.log("Prerendered homepage into dist/index.html");
} finally {
  await server.close();
}
