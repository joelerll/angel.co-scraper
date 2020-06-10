const axios = require("axios");
const $ = require("cheerio")
const puppeteer = require('puppeteer-firefox');

const { URL, BASE_URL } = require("../config");
const Queries = require("./queries")

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'x-requested-with': 'XMLHttpRequest'}
});

const init = async () => {
    try {
        const resp = await instance.post(URL, Queries.QueryCompanies())
        const companies = resp.data.data.talent.jobSearchResults.startups.edges

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${BASE_URL}company/${companies[0].node.slug}`);
        const bodyHTML = await page.content();
        const $ = cheerio.load(bodyHTML)
        // styles_component__1WTsC styles_flexRow__35QHu __halo_row_align_space-between
        console.log($.html());
        await browser.close();
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

init();



// 3. Jobs blacklist
// 4. Company Accronimoyes
// 5. Ignored Locations
// 6. Company Stopwords. Meter en un blacklist dentro del job


// 1. The oldest posting job date >=14 days
// 2. Keywords to exclude. Only for this board
// 3. Login this job board