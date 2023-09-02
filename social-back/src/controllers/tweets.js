import { dbClient } from "../config/db.js"

const getTweets = async (req, res, next) => {
    const tweets = await dbClient.query('SELECT * FROM tweet')
    // await dbClient.end()
    res.send(tweets.rows)
    res.end()
}

const createTweet = async (req, res, next) => {
    const data = req.body
    console.log(data)
    const query = {
        text:'INSERT INTO tweet(tweet) VALUES($1)',
        values:[data.tweet]
    } 

    const newTweet = await dbClient.query(query)
    // await dbClient.end()
    res.send(newTweet.rows)
    res.end()
}

export {getTweets, createTweet}