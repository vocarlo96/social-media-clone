import { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom'
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

  // const [darkMode, setDarkMode] = useState(false)

  // useEffect(() => {
  //     handleCondition(window.matchMedia('(prefers-color-scheme: dark)').matches)
  // }, [])

  // useEffect(() => {
  //     handleCondition(darkMode)
  // }, [darkMode])

  

  return (
    <main className=''>
      {/* <button onClick={()=>setDarkMode((prev) => !prev)}>dark</button> */}
      <Outlet/>
    </main>
  )
} 

function Feed(){
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
  return(
    <>
      <TweetForm newTweetHandler={tweetInsertionHandler}/>
      <TweetList tweetList={tweetList}/>
    </>
  )
}

export{Feed}
export default App
