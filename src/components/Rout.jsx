import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home/Home'
import Shop from './Shop/Shop'
 

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
      </Routes>
    </div>
  )
}

export default Rout