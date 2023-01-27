const PORT = process.env.PORT || 8888

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')


const app = express()

const source = [
    {
        SOURCE_URL_0: "https://www.babypips.com/news",
        NAME_0: "BabyPips"
    },
    {
        SOURCE_URL_1: "https://www.myfxbook.com/news",
        NAME_1: "MyFxBook"
    },
    {
        SOURCE_URL_2: "https://fxnewsgroup.com/category/forex-news",
        NAME_2: "FxNewsGroup"
    },
    {
        SOURCE_URL_3: "https://www.dailyforex.com/forex-news/page-1",
        NAME_3: "DailyForex"
    },
    {
        SOURCE_URL_4: "https://www.investing.com/news/forex-news",
        NAME_4: "Investing"
    },
    {
        SOURCE_URL_5: "https://www.fx-markets.com/events",
        NAME_5: "FxMarkets"
    },
    {
        SOURCE_URL_6: "https://fbs.eu/en/analytics/news/category/currencies",
        NAME_6: "FBS"
    },
    {
        SOURCE_URL_7: "https://www.forextime.com/market-analysis",
        NAME_7: "ForexTime"
    },
    {
        SOURCE_URL_8: "https://www.actionforex.com",
        NAME_8: "ActionForex"
    }
    ]
    
const articles = []




app.get('/', (req,res) => {
    res.json('Forgein Exchange Market News API')
})

app.get('/babypips/babypips', (req,res) => {
const babypips = []
    axios.get("https://www.babypips.com/news",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.headline a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
             
            babypips.push({
                title,
                url,
                source: source["0"]
            
            })
        })
        res.json(babypips)
    }).catch((err) => console.log(err))
}),

app.get('/myfxbook/myfxbook', (req,res) => {
const myfxbook = []
    axios.get("https://www.myfxbook.com/news",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.news-info a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            myfxbook.push({
                title,
                url,
                source: source["1"]
            })
        })
        res.json(myfxbook)
    }).catch((err) => console.log(err))
}),

app.get('/fxnewsgroup/fxnewsgroup', (req,res) => {
const fxnewsgroup = []
    axios.get("https://fxnewsgroup.com/category/forex-news/",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.post-content a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            fxnewsgroup.push({
                title,
                url,
                source: source["2"]
            })
        })
        res.json(fxnewsgroup)
    }).catch((err) => console.log(err))
}),

app.get('/dailyforex/dailyforex', (req,res) => {
const dailyforex = []
    axios.get("https://www.dailyforex.com/forex-news/page-1",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.article_main a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            dailyforex.push({
                title,
                url,
                source: source["3"]
            })
        })
        res.json(dailyforex)
    }).catch((err) => console.log(err))
}),

app.get('/investing/investing', (req,res) => {
const investing = []
    axios.get("https://www.investing.com/news/forex-news",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.largeTitle a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            investing.push({
                title,
                url,
                source: source["4"]
            })
        })
        res.json(investing)
    }).catch((err) => console.log(err))
}),

app.get('/fx-markets/fx-markets', (req,res) => {
const fxmarkets = []
    axios.get("https://www.fx-markets.com/events",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.article-title a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            fxmarkets.push({
                title,
                url,
                source: source["5"]
            })
        })
        res.json(fxmarkets)
    }).catch((err) => console.log(err))
}),


app.get('/fbs/fbs', (req,res) => {
const fbs = []
    axios.get("https://fbs.eu/en/analytics/news/category/currencies",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.newsitem__content a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            fbs.push({
                title,
                url,
                source: source["6"]
            })
        })
        res.json(fbs)
    }).catch((err) => console.log(err))
}),


app.get('/forextime/forextime', (req,res) => {
const forextime = []
    axios.get("https://www.forextime.com/market-analysis",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.latest-analysis_carousel-item-content a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            forextime.push({
                title,
                url,
                source: source["7"]
            })
        })
        res.json(forextime)
    }).catch((err) => console.log(err))
}),

app.get('/actionforex/actionforex', (req,res) => {
const actionforex = []
    axios.get("https://www.actionforex.com/",{ headers: { 'Accept-Encoding': 'text/html; charset=UTF-8'}})

    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.td-module-meta-info a',html).each(function () {
            const title = $(this).text()
             const url = $(this).attr("href")
            
            actionforex.push({
                title,
                url,
                source: source["8"]
            })
        })
        res.json(actionforex)
    }).catch((err) => console.log(err))
}),




app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
