import { dbClient } from "../config/db.js"

const getTweets = async (req, res, next) => {
    try{
        const tweets = await dbClient.query('SELECT * FROM tweet')
        res.send(tweets.rows)
    } catch(e){
        next()
    } finally {
        res.end()
    }
    // await dbClient.end()
}

const createTweet = async (req, res, next) => {
    
    const data = req.body
    const query = {
        text:'INSERT INTO tweet(tweet, user_id) VALUES($1, $2) RETURNING *',
        values:[data.tweet, data.username]
    } 

    try{
        const newTweet = await dbClient.query(query)
        res.status(201).send(newTweet.rows[0])
    } catch(e){
        res.status(500)
    } finally {
        res.end()
    }
    // await dbClient.end()
}

export {getTweets, createTweet}