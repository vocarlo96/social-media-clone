import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import Profile from './components/profile.tsx'
import Feed from './components/feed.tsx'
import TweetProvider from './context/tweetsContext.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <Feed />
  }, {
    path: '/profile',
    element: <Profile />,
    children: [{
      path: '/profile/replies',
      element: <></>
    },
    {
      path: '/profile/highlights',
      element: <></>
    },
    {
      path: '/profile/media',
      element: <></>
    },
    {
      path: '/profile/likes',
      element: <></>
    }]
  }]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TweetProvider>
      <RouterProvider router={router} />
    </TweetProvider>
  </React.StrictMode>,
)
