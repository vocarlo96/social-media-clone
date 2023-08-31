import Tweet from "./tweet"

function TweetList(){
    return(
        <div className="mx-auto max-w-[50%] border-x border-gray-400">
            {['','','','',''].map((elem, index)=>{
                return <Tweet key={index}/>
            })}
        </div>
    )
}

export default TweetList