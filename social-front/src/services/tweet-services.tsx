export async function createTweet(TweetData: TweetType) {

    const res = await fetch('http://localhost:8080/tweet', {
        method: 'POST',
        body: JSON.stringify(TweetData),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    return await res.json()
    // newTweetHandler(data)
}

export function getTweets(signal: AbortController["signal"]) {
    return async function () {
        const res = await fetch('http://localhost:8080/tweet', {
            method: 'GET',
            signal
        })

        return await res.json()
    }
}

// export async function getTweets() {
//     const res = await fetch('http://localhost:8080/tweet', {
//         method: 'GET'
//     })

//     return await res.json()
// }

// const [tweetList, setTweetList] = useState<TweetType[]>([])

// useEffect(() => {
//     const controller = new AbortController()

//     const fetchData = async () => {
//         const res = await fetch('http://localhost:8080/tweet', {
//             method: 'get',
//             signal: controller.signal
//         })
//         const data = await res.json()
//         setTweetList(data)
//     }

//     fetchData()

//     return () => controller.abort()
// }, [])

// action
// function tweetInsertionHandler(data: tweet) {
//     setTweetList((prev) => [data, ...prev])
// }