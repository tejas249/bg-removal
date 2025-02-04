import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/result' element={<Result/>} />
           <Route path='/buy' element={<BuyCredit/>} />
        </Routes>
    </div>
  )
}

export default App




// 23:48