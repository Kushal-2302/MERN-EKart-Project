import React from 'react'
import { Routes , Route } from 'react-router-dom'
import './app.css'
import LandingPage from './pages/LandingPage'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
      </Routes>
    </>
  )
}

export default App
