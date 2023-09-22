import useTweet from "../hooks/useTweet"
import Tweet from "./tweet"

function TweetList() {
    const { tweetList } = useTweet()
    return (
        <div className="border-x border-gray-400">
            {tweetList.map((elem: TweetType, index) => {
                return <Tweet tweet={elem} key={index} />
            })}
        </div>
    )
}

export default TweetList