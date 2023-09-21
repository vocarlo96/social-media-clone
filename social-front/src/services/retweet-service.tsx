export async function setReetweet(tweetId: number, userId: string) {
    console.log(tweetId)
    const res = await fetch('http://localhost:8080/retweet', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            tweetId
        }),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    const data = await res.json()

    console.log(data)
}

export async function deleteReetweet(retweetId: number) {
    const res = await fetch(`http://localhost:8080/${retweetId}`, {
        method: 'DELETE',
    })

    const data = await res.json()

    console.log(data)
}