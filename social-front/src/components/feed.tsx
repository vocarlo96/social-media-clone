import { useState, useEffect } from "react"
import TweetForm from "./tweet-form"
import TweetList from "./tweet-list"
import useTweet from "../hooks/useTweet"

export default function Feed() {

    const [tweets] = useTweet()
    // GET LIST TWEETS
    // add neww tweet cambiara de posicion

    return (
        <section className='w-full max-w-[50%]'>
            {/* <TweetForm newTweetHandler={tweetInsertionHandler} /> */}
            <TweetList tweetList={tweets} />
        </section>
    )
}