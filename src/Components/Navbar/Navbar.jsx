import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (

    <div className='navbar'>

      <div className="nav_logo">
        <img src={logo} alt=""/>
        <p>Eliora</p>
      </div>

      <ul className='nav_menu'></ul>
      <li>Shop</li>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/>
      </div>

    </div>



  );
}

export default Navbar
