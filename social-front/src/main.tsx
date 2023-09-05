import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import { Feed } from './App.tsx'
import Profile from './components/profile.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <Feed />
  }, {
    path: '/profile',
    element: <Profile />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
