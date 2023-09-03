import { useEffect, useState } from 'react'
import './App.css'
import TweetList from './components/tweet-list'
import TweetForm from './components/tweet-form'

// function handleCondition(condition: boolean){
//   if (condition) {
//       document.documentElement.classList.add('dark')
//   } else {
//       document.documentElement.classList.remove('dark')
//   }
// }

function App() {

  const [darkMode, setDarkMode] = useState(false)

  // useEffect(() => {
  //     handleCondition(window.matchMedia('(prefers-color-scheme: dark)').matches)
  // }, [])

  // useEffect(() => {
  //     handleCondition(darkMode)
  // }, [darkMode])

  const [tweetList, setTweetList] = useState<tweet[]>([])

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/tweet', {
                method: 'get',
                signal: controller.signal
            })
            const data = await res.json()
            setTweetList(data)
        }
        
        fetchData()

        return () => controller.abort()
    }, [])

  function tweetInsertionHandler(data: tweet){
    setTweetList((prev) => [data, ...prev])
  }

  return (
    <main className=''>
      {/* <button onClick={()=>setDarkMode((prev) => !prev)}>dark</button> */}
      <TweetForm newTweetHandler={tweetInsertionHandler}/>
      <TweetList tweetList={tweetList}/>
    </main>
  )
} 

export default App
