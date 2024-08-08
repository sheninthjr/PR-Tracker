'use server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function prScrapper(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const prStatus = $('span.State').attr('title');
    const commitsCount = $('#commits_tab_counter').text().trim();
    const filesChangedCount = $('#files_tab_counter').text().trim();
    return {
      prStatus,
      commitsCount,
      filesChangedCount,
    };
  } catch (error) {
    console.error(`Error scraping the URL: ${error}`);
  }
}
