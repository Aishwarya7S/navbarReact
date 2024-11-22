import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <h2 className='text'> React Navbar</h2>
        <ul className='nav'>
            <li><NavLink to='/' className='link'>Home</NavLink></li>
            <li><NavLink to='/about' className='link'>About</NavLink></li>
            <li><NavLink to='/contact' className='link'>Contact</NavLink></li>
            <li><NavLink to='/login' className='link'>Login</NavLink></li>
            <li><NavLink to='/register' className='link'>Register</NavLink></li>
        </ul>
      
    </div>
  </>
  )
}

export default Navbar
