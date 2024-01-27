import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp,IoLogoTwitter,IoLogoInstagram,IoLogoFacebook  } from "react-icons/io";

function Footer() {
  return (
    <footer className='footer'>
        <div className="con1">
            <div className="motto">
                <h2>MV HOLIDAYS MOTTO</h2>
                <p id='motto'>Don’t Listen To What They Say, Go See.</p>
            </div>
            <div className="social">
                <h3>Follow Us</h3>
                <Link to=""><IoLogoWhatsapp className='i'/></Link>
                <Link to=""><IoLogoTwitter className='i'/></Link>
                <Link to=""><IoLogoInstagram className='i'/></Link>
                <Link to=""><IoLogoFacebook className='i'/></Link>
            </div> 
        </div>
        <div className="con2">
            <div className="address">
              <div>No.10 Main Street - Irugur, Coimbatore - 641103</div>
              <div>Phone: 1246167851 </div>
            </div> 
            <div className="nav">
                <Link to="/travels_website">Home</Link>
                <Link to="/tour-packages">Packages</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>   
    </footer>
  )
}

export default Footer