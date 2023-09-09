import { dbClient } from "../config/db.js"
import { RequestHandler } from "express"

export const getTweets: RequestHandler = async (_, res, next) => {
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

export const createTweet: RequestHandler = async (req, res) => {
    
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