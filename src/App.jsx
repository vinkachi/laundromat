import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Account from './pages/Account'
import Services from './pages/Services'
import { Footer, Header } from './components'
import { GiZipper } from 'react-icons/gi'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      delay: 500,
    })
  },[])

function PageOutlet(){
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const pageLinks = createBrowserRouter([
  {
    path: "/",
    element: <PageOutlet/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/account",
        element: <Account/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
    ],
    errorElement: <>
     <Header/>
    <Error/>
    <Footer/>
    </>
  }
])

  return (
    <div>
      <RouterProvider router={pageLinks}>
      </RouterProvider></div>
  )
}
