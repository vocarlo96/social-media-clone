import { useContext, useEffect } from 'react'
import { getTweets } from '../services/tweet-services'
import { TweetContext, contextProps } from '../context/tweetsContext'
import { fetchAbort } from '../helpers/fetchAbort'

export default function useTweet() {

    const { tweetList, setTweetList } = useContext(TweetContext) as contextProps


    useEffect(() => {

        const [getTweet, abort] = fetchAbort(getTweets)
        getTweet().then((data: any) => setTweetList(data))

        // return () => abort()
    }, [])

    return [tweetList]

}