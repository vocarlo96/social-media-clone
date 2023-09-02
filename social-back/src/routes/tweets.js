import express from 'express'
import * as tweetController from '../controllers/tweets.js'

const router = express.Router()

router.get('/', tweetController.getTweets)

router.post('/', tweetController.createTweet)

router.put('/', (req, res) => {
    console.log('modificando info')
})

router.delete('/', (req, res) => {
    console.log('eliminando info')
})

router.patch('/', (req, res) => {
    console.log('modificando una parte info')
})

export default router;