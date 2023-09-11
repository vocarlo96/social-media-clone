import { dbClient } from "../config/db";
import { RequestHandler } from "express";


export const getAllRetweets:RequestHandler = async (_, res) =>{
    const query = {
        text: 'SELECT * FROM retweet'
    }
    try{
        const retweets = await dbClient.query(query)
        res.send(retweets.rows)
    } catch(e){
        res.status(500).send()
        // next(e)
    } finally {
        res.end()
    }
}

export const setRetweet:RequestHandler = async(req, res) => {
    const data = req.body

    console.log(data)

    const query = {
        text: 'INSERT INTO retweet(profile_id, tweet_id) VALUES($1, $2) RETURNING retweet_id',
        values: [data.userId, parseInt(data.tweetId, 10)]
    }

    try {
        const data = await dbClient.query(query)
        res.status(203).send(data.rows[0])
    }catch(e){
        res.status(500).send()
    } finally{
        res.end()
    }

}

export const deleteRetweet:RequestHandler = async (req, res) => {
    const {id} = req.params

    const query = {
        text: 'DELETE FROM retweet WHERE retweet_id=$1',
        values: [id]
    }

    try {
        await dbClient.query(query)
        res.status(204).send()
    }catch(e){
        res.status(500).send()
    } finally{
        res.end()
    }
}