import got from 'got';
import { JSDOM } from "jsdom";

const scrapeData= async function() {
    got("https://fr.wikipedia.org/wiki/Web_scraping")
    .then(async (response) => {
        const dom = new JSDOM(response.body);
        return dom;
    })
    .then(async (response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    });
}
console.log(scrapeData);