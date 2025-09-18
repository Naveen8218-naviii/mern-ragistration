import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{ Link}from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Ragister from "./pages/ragister"
import Login from './pages/login'
import Home from './pages/home'

const App = () => {
return(
<Routes>
  <Route path='/' element={<Ragister/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/ragister' element={<Ragister/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
</Routes>
)
}

export default App