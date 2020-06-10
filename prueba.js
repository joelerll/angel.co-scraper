const cheerio = require('cheerio')
const fs = require("fs");
const xpath = require("xpath")
const dom = require('xmldom').DOMParser

const file = fs.readFileSync("./src/mock/company.html", "utf8")
// var doc = new dom().parseFromString(file)
console.log(doc)
$('h2.title').text('Hello there!')
// console.log(file)
// const $ = cheerio.load(file)

// var title = xpath.select("/html/body/div/div/div[4]/div/div/div/section/div/div[2]/div/div[1]/h1/a", doc)
// console.log(title[0].childNodes)
