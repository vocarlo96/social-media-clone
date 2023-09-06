import { Outlet } from 'react-router-dom'
import './App.css'

import Nav from './components/nav'

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
    <main className='flex items-start'>
      {/* <button onClick={()=>setDarkMode((prev) => !prev)}>dark</button> */}
      <Nav />
      <Outlet />
    </main>
  )
}

export default App
