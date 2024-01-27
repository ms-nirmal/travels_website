import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/TopDestinations.css'

function TopDestinations() {
  return (
    <section className='top-destinations'>
        <h3>Top <span>Destinations</span></h3>
        <div className="grid-gallery">
            <div className='item item1'>
                <Link to='/ooty'><img src={require('../Assets/Ooty.jpg')} alt="Ooty Img" /></Link>
                <div className="text text1">
                    <h1>Ooty</h1>
                    <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div> 
            </div>
            <div className='item item3'>
                <Link to='/kodaikanal'><img src={require('../Assets/kodaikaanal.jpg')} alt="Kodaikaanal Img"/></Link>
                <div className="text text3">
                        <h1>Kodaikaanal</h1>
                        <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div>   
            </div>
            <div className='item item4'>
                <Link to='/coorg'><img src={require('../Assets/Coorg.jpg')} alt="Coorg Img"/></Link>
                <div className="text text4">
                        <h1>Coorg</h1>
                        <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div>   
            </div>
            <div className='item item5'>
                <Link to='/valparai'><img src={require('../Assets/valparai.jpg')} alt="Valparai Img"/></Link>
                <div className="text text5">
                        <h1>Valparai</h1>
                        <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div>   
            </div>  
        </div>
    </section>
  )
}

export default TopDestinations