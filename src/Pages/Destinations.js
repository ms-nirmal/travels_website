import React from 'react';
import '../styles/Destinations.css';
import { Link } from 'react-router-dom';

function Destinations() {
  return (
    <section className='destinations'>
        <h3>Tour <span>Packages</span></h3>
        <div className="gridGallery2">
            <div className='itm itm6'>
                <Link to='/kerala'><img src={require('../Assets/kerala.jpg')} alt="" /></Link>
                <div className="txt txt6">
                    <h1>Kerala</h1>
                    <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div> 
            </div>
            <div className='itm itm7'>
                <Link to='/spritual'><img src={require('../Assets/Temple.jpg')} alt="" /></Link>
                <div className="txt txt7">
                    <h1>Spritual South</h1>
                    <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div> 
            </div>
            <div className='itm itm8'> 
                <Link to='/kanyakumari'><img src={require('../Assets/Kanyakumari.jpg')} alt="Kanyakumari Img" /></Link>
                <div className="txt txt8">
                    <h1>Kanyakumari</h1>
                    <h2>charming hill station nestled amidst the Nilgiri Mountains.</h2>
                </div>           
            </div>
        </div>

        <div className="top-destinations">
            
        </div>
    </section>
  )
}

export default Destinations