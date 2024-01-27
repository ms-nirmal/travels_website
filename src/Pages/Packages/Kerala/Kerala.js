import React from 'react'
import './Kerala.css'
import img1 from './Assets/1.jpg'
import img2 from './Assets/2.jpg'
import img3 from './Assets/3.jpg'
import img4 from './Assets/4.jpg'
import img5 from './Assets/5.jpg'

function KeralaPackage() {
  return (
    <section className='Kerala'>
      <div className="tripInfo">
      <center><h2>Kerala</h2></center>
        <div className="packageInfo">
        <p>Duration : 3Nights 4Days <br/> Location : Kerala</p> 
        <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>
    </div>

    <div className="timeline">
      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Alleppey</p>
        </div>
        <div className="tl-content">
          <h1>Alleppey (Alappuzha)</h1>
          <p>Alleppey! Esteemed as the ‘Backwater Capital of India’ or the ‘Venice of the East’, Alleppey is known for its silent backwaters and bountiful beauty!</p>
        </div>
      </div>  


      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif"> Wayanad</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Wayanad</h1>
          <p>Cradled in the lap of the Western Ghats, Wayanad truly deserves a top rank in the list of places to visit in Kerala. Situated at an astounding height of 700-2,100m, this stunning hill station is all about fantasy, untouched nature, unforgettable moments, and merriment!</p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Cochin</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Cochin</h1>
          <p>Kochi or Cochin is a unique placein God’s Own Country that is perfectly blended with cultural values and modern ideas! Fondly called the ‘Queen of the Arabian Sea’, this imposing port-city has always been an attraction point since the beginning of history.</p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif"> Munnar</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Munnar</h1>
          <p>Yet another gorgeous hill station in the lap of the fascinating Western Ghats, Munnar needs no introduction. </p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img5}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Vagamon</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Vagamon</h1>
          <p>One of the most scenic hill stations and least explored tourist places in Kerala, this retreat in the Idukki district is known for its salubrious beauty, pleasant climate, and much more. </p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Pykara Waterfalls</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Pykara Waterfalls</h1>
          <p>Pykara is a river 19 kilometres from Ooty in the Indian State of Tamil Nadu with a village by the same name nearby. The Pykara River is considered very sacred by the Todas.</p>
        </div>
      </div>   

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
         <div className="tl-year">
          <p className="f2 heading--sanSerif">Ketti Valley</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Ketti Valley View Point</h1>
          <p>Valley View is a tourist spot in Ooty, India. It is located on the Ooty Coonoor road at a distance of 4 kilometres from Ooty bus stand and constitutes ward number 5 of the Nilgiris Lok Sabha constituency</p>
        </div>
      </div>
    </div> 
    
    <div className="genralInfo">
      <div className="inclusions">
        <h2>Inclusions</h2>
        <ul>
          <li>Daily Buffet Breakfast at Hotels except on Day 01</li>
          <li>Transportation service using 01 A/c Etios/ Dzire all transfers & sightseeing throughout the tour</li>
          <li>Accommodation as 01 Double room at the above mentioned hotel</li>
          <li>All expenses related to vehicle such as toll, fuel and parking, Driver allowances etc</li>
        </ul>
      </div>
      <div className="exclusions">
        <h2>Exclusions</h2>
        <ul>
          <li>Flight / Train Fare</li>
          <li>Guide and Entrance Fee at the sight seeing</li>
          <li>Lunch / Dinner not included at any place</li>
          <li>Other personal expenses</li>
          <li>Any additional activities</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default KeralaPackage