import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home/Home'
 

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default Rout