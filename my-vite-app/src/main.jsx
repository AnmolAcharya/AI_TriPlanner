import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateTrip from './components/CreateTrip.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Create-trip',
    element: <CreateTrip/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
