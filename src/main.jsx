import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
1