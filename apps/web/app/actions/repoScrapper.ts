'use server';

import axios from 'axios';
import * as cheerio from 'cheerio';

export async function repoScrapper(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const forkCount = $('#repo-network-counter').text().trim();
    const starCount = $('#repo-stars-counter-star').text().trim();
    const commitCount = $('a[href$="/commits/main/"] .Text-sc-17v1xeu-0')
      .text()
      .trim();
    return {
      forkCount,
      starCount,
      commitCount,
    };
  } catch (error) {
    console.error(`Error scraping the URL: ${error}`);
  }
}
