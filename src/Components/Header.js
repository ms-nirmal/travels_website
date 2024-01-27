import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
         <h3> MV Holiydays </h3>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/tour-packages'>Tour Packages</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>
        </nav>
    </header>
  )
}

export default Header