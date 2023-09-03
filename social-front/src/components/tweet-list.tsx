import Tweet from "./tweet"

function TweetList({tweetList}: {tweetList: tweet[]}){

    return(
        <div className="mx-auto max-w-[50%] border-x border-gray-400">
            {tweetList.map((elem: tweet, index)=>{
                return <Tweet tweet={elem} key={index}/>
            })}
        </div>
    )
}

export default TweetList