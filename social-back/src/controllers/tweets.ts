import { dbClient } from "../config/db.js"
import { RequestHandler } from "express"

export const getTweets: RequestHandler = async (_, res) => {
    const query = {
        text: 'SELECT p.username, p.url_img, p.name, p.lastname, t.tweet_id, t.tweet, attach_img FROM tweet t JOIN profile p ON p.username = t.user_id'
    }

    try{
        const tweets = await dbClient.query(query)
        console.log(tweets.rows)
        res.send(tweets.rows)
    } catch(e){
        console.log(e)
        res.status(500).send()
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