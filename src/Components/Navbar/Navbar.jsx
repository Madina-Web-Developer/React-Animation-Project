import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <>

    <div className="all_mina_nav">
      <div className="container">
        <div className="mina_nav">

            <div className="logo_part">
                <img src={logo} alt="" />
            </div>

            <div className="text_part">
                <ul>
                    <li><Link to={'/'} >All Recipes</Link></li>
                    <li><Link to={'/'} >Vegan</Link></li>
                    <li><Link to={'/'} >Gluten-Free</Link></li>
                    <li><Link to={'/'} >Shop</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar
