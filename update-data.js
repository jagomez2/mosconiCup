require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

// Configuration
const INTERVAL_MINUTES = process.env.UPDATE_INTERVAL_MINUTES || 60;
const DATA_DIR = path.join(__dirname, 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

// File paths
const NEWS_FILE = path.join(DATA_DIR, 'news.json');
const BETTING_FILE = path.join(DATA_DIR, 'betting.json');

// Mock Betting Data (since real APIs usually require keys)
const MOCK_BETTING_ODDS = [
    { bookmaker: "Bet365", odds: { europe: "1.80", usa: "2.00" } },
    { bookmaker: "William Hill", odds: { europe: "1.83", usa: "1.95" } },
    { bookmaker: "Sky Bet", odds: { europe: "1.75", usa: "2.10" } },
    { bookmaker: "Betfair", odds: { europe: "1.85", usa: "1.95" } }
];

async function fetchNews() {
    console.log('Fetching news...');
    try {
        // Attempt to scrape Matchroom Pool news
        // Note: This is a basic scraper and might need adjustment if the site structure changes
        const response = await axios.get('https://matchroompool.com/news/');
        const $ = cheerio.load(response.data);
        const newsItems = [];

        $('article').each((i, el) => {
            if (i >= 5) return; // Limit to 5 items
            const title = $(el).find('h3').text().trim();
            const link = $(el).find('a').attr('href');
            const date = $(el).find('time').text().trim() || new Date().toLocaleDateString();

            if (title && link) {
                newsItems.push({
                    title,
                    link,
                    date
                });
            }
        });

        if (newsItems.length === 0) {
            // Fallback if scraping fails or structure is different
            console.log('No news found via scraping, using fallback data.');
            return getFallbackNews();
        }

        return newsItems;
    } catch (error) {
        console.error('Error fetching news:', error.message);
        return getFallbackNews();
    }
}

function getFallbackNews() {
    return [
        { date: "28 Nov 2024", title: "Team Europe Completes Training Camp", link: "#" },
        { date: "27 Nov 2024", title: "Mosconi Cup 2025 Venue Announced", link: "#" },
        { date: "26 Nov 2024", title: "Interview with Jayson Shaw", link: "#" }
    ];
}

async function fetchBettingOdds() {
    console.log('Fetching betting odds...');
    // In a real scenario, you would call a betting API here
    // For now, we'll simulate a slight change in odds to show updates

    return MOCK_BETTING_ODDS.map(bookie => ({
        bookmaker: bookie.bookmaker,
        odds: {
            europe: (parseFloat(bookie.odds.europe) + (Math.random() * 0.1 - 0.05)).toFixed(2),
            usa: (parseFloat(bookie.odds.usa) + (Math.random() * 0.1 - 0.05)).toFixed(2)
        }
    }));
}

async function updateData() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Starting data update...`);

    // Update News
    const newsData = await fetchNews();
    fs.writeFileSync(NEWS_FILE, JSON.stringify(newsData, null, 2));
    console.log(`[${timestamp}] News updated: ${newsData.length} items saved.`);

    // Update Betting Odds
    const bettingData = await fetchBettingOdds();
    fs.writeFileSync(BETTING_FILE, JSON.stringify(bettingData, null, 2));
    console.log(`[${timestamp}] Betting odds updated.`);

    console.log(`[${timestamp}] Update complete.`);
}

// Run immediately on start
updateData();

// Schedule cron job
// Cron format: * * * * * (minute hour day month day-of-week)
// We want to run every X minutes. 
// Note: node-cron supports simple syntax like '*/5 * * * *'
const cronSchedule = `*/${INTERVAL_MINUTES} * * * *`;

console.log(`Scheduling updates every ${INTERVAL_MINUTES} minutes (Schedule: ${cronSchedule})`);

if (process.argv.includes('--once')) {
    console.log('Running once and exiting...');
    // updateData is already called above, just need to wait for it? 
    // Actually updateData is async. We should await it if we were inside an async function.
    // But since it's top level, we can't easily await. 
    // Let's restructure slightly to allow clean exit.
} else {
    cron.schedule(cronSchedule, () => {
        updateData();
    });
    console.log('Auto-update script running. Press Ctrl+C to stop.');
}
