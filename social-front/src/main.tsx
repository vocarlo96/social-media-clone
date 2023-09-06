import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import Profile from './components/profile.tsx'
import Feed from './components/feed.tsx'

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
