import { GetServerSideProps } from "next";
import { getAllBlogSlugs } from "../data/blogPosts";

const SITE_URL = "https://care2home.co";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogPaths = [
    "/blog",
    ...getAllBlogSlugs().map((slug) => `/blog/${slug}`),
  ];

  // Static pages
  const staticPages = [
    ...blogPaths,
    "/about-us",
    "/contact-us",
    "/book-service",
    "/terms",
    "/faq",
    "/safety",
    "/our-team",
    "/vision-mission",
    "/new-delhi-railway-station-parent-pickup",
    "/old-delhi-railway-station-parent-pickup",
    "/hazrat-nizamuddin-railway-station-parent-pickup",
    "/anand-vihar-railway-station-parent-pickup",
    "/delhi-cantt-railway-station-parent-pickup",
    "/igi-airport-delhi-parent-pickup",
    "/t3-igi-airport-parent-pickup",
    "/interchange-service"
  ];

  const staticUrls = staticPages
    .map((path) => {
      return `
      <url>
        <loc>${SITE_URL}${path}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>`;
    })
    .join("");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${staticUrls}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
