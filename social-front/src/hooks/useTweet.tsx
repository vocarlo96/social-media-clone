import { useContext, useEffect } from 'react'
import { createTweet, getTweets } from '../services/tweet-services'
import { TweetContext, contextProps } from '../context/tweetsContext'
// import { fetchAbort } from '../helpers/fetchAbort'

export default function useTweet() {

    const { tweetList, setTweetList, addTweet } = useContext(TweetContext) as contextProps

    async function addNewTweet(tweetData: NewTweetType) {
        const newData = await createTweet(tweetData)
        addTweet(newData)
    }


    useEffect(() => {

        // consistencia pasar a una function para usar async await 
        getTweets().then((data: TweetType[]) => setTweetList(data))
        // const [getTweet, abort] = fetchAbort(getTweets)
        // getTweet().then((data: any) => setTweetList(data))


        // return () => abort()
    }, [])

    return { tweetList, addNewTweet }

}