import React, { createContext, useReducer, useState } from "react";

type TweetContextProps = {
    children: React.ReactNode
}

export type contextProps = {
    tweetList: TweetType[]
    setTweetList: React.Dispatch<React.SetStateAction<TweetType[]>>
    addTweet: (newTweet: TweetType) => void
}

const TweetContext = createContext<contextProps | null>(null)


// const reducer = (state, action) => {
//     return state
// }

const TweetProvider = ({ children }: TweetContextProps) => {

    // reducer
    // const [state, dispatch] = useReducer(reducer, initialState)

    const [tweetList, setTweetList] = useState<TweetType[]>([])

    // actions
    // add tweet
    function addTweet(newTweet: TweetType) {
        setTweetList(prev => [newTweet, ...prev])
    }
    // delete tweet
    // retweets
    // delete retweet
    return (
        <TweetContext.Provider value={{
            addTweet,
            setTweetList,
            tweetList
        }}>
            {children}
        </TweetContext.Provider>
    )
}

export { TweetContext }
export default TweetProvider