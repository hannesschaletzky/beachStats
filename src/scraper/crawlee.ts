// https://github.com/apify/crawlee#manual-installation

import { PlaywrightCrawler, Dataset } from 'crawlee'

// PlaywrightCrawler crawls the web using a headless browser controlled by the Playwright library.
export const crawler = new PlaywrightCrawler({
  // Use the requestHandler to process each of the crawled pages.
  async requestHandler({ request, page, enqueueLinks, log }) {
    const title = await page.title()
    log.info(`Title of ${request.loadedUrl} is '${title}'`)

    // const tables = await page.

    // Save results as JSON to ./storage/datasets/default
    await Dataset.pushData({ title, url: request.loadedUrl })

    // Extract links from the current page and add them to the crawling queue.
    // await enqueueLinks()
  }
  // Uncomment this option to see the browser window.
  // headless: false,
})
