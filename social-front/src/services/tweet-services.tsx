export async function createTweet(TweetData: NewTweetType): Promise<TweetType> {

    const res = await fetch('http://localhost:8080/tweet', {
        method: 'POST',
        body: JSON.stringify(TweetData),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    return await res.json()
}



export async function getTweets() {
    const res = await fetch('http://localhost:8080/tweet', {
        method: 'GET',
    })

    return await res.json()
}


// export function getTweets(signal: AbortController["signal"]) {
//     return async function () {
//         const res = await fetch('http://localhost:8080/tweet', {
//             method: 'GET',
//             signal
//         })

//         return await res.json()
//     }
// }