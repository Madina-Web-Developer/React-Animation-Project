import React from 'react'
import Navbar from '../Navbar/Navbar'

const LayoutOne = () => {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        
    </div>
  )
}

export default LayoutOne