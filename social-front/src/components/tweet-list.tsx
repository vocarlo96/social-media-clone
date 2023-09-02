import { useEffect, useState } from "react"
import Tweet from "./tweet"

function TweetList(){

    const [list, setList] = useState([])

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/tweet', {
                method: 'get',
                signal: controller.signal
            })
            const data = await res.json()
            setList(data)
        }
        
        fetchData()

        return () => controller.abort()
    }, [])

    return(
        <div className="mx-auto max-w-[50%] border-x border-gray-400">
            {list.map((elem, index)=>{
                return <Tweet key={index}/>
            })}
        </div>
    )
}

export default TweetList