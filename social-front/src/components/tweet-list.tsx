import Tweet from "./tweet"

function TweetList({ tweetList }: { tweetList: TweetType[] }) {
    console.log(tweetList)
    return (
        <div className="border-x border-gray-400">
            {tweetList.map((elem: TweetType, index) => {
                return <Tweet tweet={elem} key={index} />
            })}
        </div>
    )
}

export default TweetList