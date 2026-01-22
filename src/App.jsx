import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Header from './components/Header'
import Login from './containers/Login'
import Register from './containers/Register'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App