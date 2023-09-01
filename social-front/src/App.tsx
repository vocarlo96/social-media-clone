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


  return (
    <main className=''>
      {/* <button onClick={()=>setDarkMode((prev) => !prev)}>dark</button> */}
      <TweetForm/>
      <TweetList/>
    </main>
  )
}

export default App
