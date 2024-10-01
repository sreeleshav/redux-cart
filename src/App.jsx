import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wish from './pages/Wish'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wish' element={<Wish/>}/>
       </Routes>
       <Footer/> 
    </>
  )
}

export default App
