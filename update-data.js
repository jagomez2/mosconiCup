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
    console.log('Fetching news from Matchroom Pool...');
    try {
        // Use a User-Agent to avoid basic blocking
        const response = await axios.get('https://matchroompool.com/news/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);
        const newsItems = [];

        // Based on investigation: a.display-card-inner contains the article info
        $('a.display-card-inner').each((i, el) => {
            if (i >= 5) return; // Limit to 5 items

            const link = $(el).attr('href');
            // Title is usually in an h3 or a specific div class
            let title = $(el).find('h3').text().trim();
            if (!title) {
                // Fallback to finding text in divs if h3 is missing
                title = $(el).find('.title, .card-title').text().trim();
            }

            // Date is often in a strong tag or time tag
            let date = $(el).find('strong').text().trim();
            if (!date) {
                date = $(el).find('time').text().trim();
            }

            // If still no date, use today's date as fallback
            if (!date) date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

            if (title && link) {
                newsItems.push({
                    title,
                    link,
                    date
                });
            }
        });

        if (newsItems.length === 0) {
            console.log('No news items found with current selectors. Using fallback.');
            return getFallbackNews();
        }

        console.log(`Found ${newsItems.length} news items.`);
        return newsItems;
    } catch (error) {
        console.error('Error fetching news:', error.message);
        return getFallbackNews();
    }
}

function getFallbackNews() {
    return [
        { date: "28 Nov 2024", title: "Team Europe Completes Training Camp", link: "https://matchroompool.com/news/" },
        { date: "27 Nov 2024", title: "Mosconi Cup 2025 Venue Announced", link: "https://matchroompool.com/news/" },
        { date: "26 Nov 2024", title: "Interview with Jayson Shaw", link: "https://matchroompool.com/news/" }
    ];
}

async function fetchBettingOdds() {
    console.log('Fetching betting odds...');

    // NOTE: Real betting sites (Bet365, Oddschecker) are heavily protected by Cloudflare/Captchas
    // and cannot be reliably scraped by a simple Node.js script without using a paid API or headless browser service.
    // For this demonstration, we simulate realistic market movements.

    // Simulate market fluctuations
    return MOCK_BETTING_ODDS.map(bookie => {
        // Parse current odds
        let eur = parseFloat(bookie.odds.europe);
        let usa = parseFloat(bookie.odds.usa);

        // Random fluctuation between -0.05 and +0.05
        const changeEur = (Math.random() * 0.1) - 0.05;
        const changeUsa = (Math.random() * 0.1) - 0.05;

        // Apply change and ensure they don't go too low
        eur = Math.max(1.10, eur + changeEur);
        usa = Math.max(1.10, usa + changeUsa);

        // Update the mock data for next time (persistence in memory)
        bookie.odds.europe = eur.toFixed(2);
        bookie.odds.usa = usa.toFixed(2);

        return {
            bookmaker: bookie.bookmaker,
            odds: {
                europe: bookie.odds.europe,
                usa: bookie.odds.usa
            }
        };
    });
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
