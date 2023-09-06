import { useState, useEffect } from "react"
import TweetForm from "./tweet-form"
import TweetList from "./tweet-list"

export default function Feed() {
    const [tweetList, setTweetList] = useState<tweet[]>([])

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/tweet', {
                method: 'get',
                signal: controller.signal
            })
            const data = await res.json()
            setTweetList(data)
        }

        fetchData()

        return () => controller.abort()
    }, [])

    function tweetInsertionHandler(data: tweet) {
        setTweetList((prev) => [data, ...prev])
    }
    return (
        <section className='w-full max-w-[50%]'>
            <TweetForm newTweetHandler={tweetInsertionHandler} />
            <TweetList tweetList={tweetList} />
        </section>
    )
}