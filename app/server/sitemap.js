import Express from 'express';

import path from 'path';
import cron from 'node-cron';
import SiteMap from 'react-router-sitemap';

import { SITEMAP_HOSTNAME } from '@/config';

import { configureRoutes } from '@/routes';

let LAST_MODIFIED = null;
/* eslint-disable no-unused-vars*/
const task = cron.schedule('0 0 3 * * *', generateSitemap);
const routes = configureRoutes({});

generateSitemap();

function writeSitemap() {
  const sitemap = new SiteMap(routes);
  LAST_MODIFIED = new Date();

  sitemap
    .build(SITEMAP_HOSTNAME)
    .save(path.resolve(__dirname, '../../public', 'sitemap_router.xml'));
}

function generateSitemap() {
  return writeSitemap();
}

const router = new Express.Router();

router.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'text/xml');
  res.send(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
    <sitemap>
        <loc>${SITEMAP_HOSTNAME}/sitemap_router.xml</loc>
        <lastmod>${LAST_MODIFIED.toJSON()}</lastmod>
    </sitemap>
</sitemapindex>`);
});
export default router;
