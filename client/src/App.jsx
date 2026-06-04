import React from 'react'
import { Routes , Route } from 'react-router-dom'
import './app.css'
import LandingPage from './pages/LandingPage'
import Navbar from './Components/Navbar'
import Viewmore from './pages/Viewmore'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Viewmore/>} path='/viewmore'/>
      </Routes>
    </>
  )
}

export default App
