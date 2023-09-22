type TweetType = {
    tweet_id: number,
    tweet: string
    attachImg: string
    name?: string,
    lastname?: string,
    username?: string
}

type NewTweetType = {
    username: string
    tweet: string
    attachImg?: string
}