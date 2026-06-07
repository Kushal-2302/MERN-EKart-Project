import React from 'react'
import { Routes , Route } from 'react-router-dom'
import './app.css'
import LandingPage from './pages/LandingPage'
import Navbar from './Components/Navbar'
import Viewmore from './pages/Viewmore'
import AdminPortal from './Admin/AdminPortal'
import AddProducts from './Admin/AddProducts'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Viewmore/>} path='/viewmore'/>
        <Route element={<AdminPortal/>} path='/me-as-admin'/>
        <Route element={<AddProducts/>} path='/me-as-admin/addproducts'/>
      </Routes>
    </>
  )
}

export default App
