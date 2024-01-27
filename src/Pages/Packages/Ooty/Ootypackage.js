import React from 'react'
import '../Ooty/Ootypackage.css'
import img1 from './assets/Ooty/RoseGarden.jpg'
import img2 from './assets/Ooty/Botanical_Garden_(125298855).jpeg'
import img3 from './assets/Ooty/boat.webp'
import img4 from './assets/Ooty/Doddabetta_Peak.jpg'
import img5 from './assets/Ooty/tea-estate.jpg'
import img6 from './assets/Ooty/pykara.jpg'
import img7 from './assets/Ooty/Ketti_valley,ooty,tamilnadu_-_panoramio.jpg'

function Ootypackage() {
  return (
    <section className='ooty'>
      <div className="tripInfo">
        <center><h2>The Ooty</h2></center>
        <div className="packageInfo">
            <p>Duration : 2 Nights 3 Days <br/> Location : Ooty</p>
            <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>
      </div>    

      <div className="timeline">
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Rose Garden</p>
          </div>
          <div className="tl-content">
            <h1>Rose Garden</h1>
            <p>The Government Rose Garden is situated on the slopes of the Elk Hill in Vijayanagaram of Ooty town in Tamil Nadu, India at an altitude of 2200 meters.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Botanical Garden</p>
          </div>
          <div className="tl-content">
            <h1>Botanical Garden</h1>
            <p>The Government Botanical Garden is a botanical garden in Udhagamandalam, near Coimbatore (Ooty), Tamil Nadu state, India laid out in 1848..</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">BoatHouse</p>
          </div>
          <div className="tl-content">
            <h1>Ooty BoatHouse</h1>
            <p>Ooty lake is an artificial lake near Ooty in the Nilgiris district of Tamil Nadu, India. It covers an area of 26 hectares. The boathouse on the lake is a major tourist attraction..</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Dottabeta</p>
          </div>
          <div className="tl-content">
            <h1>Dottabeta Peak</h1>
            <p>Doddabetta is the highest mountain in the Nilgiri Mountains at 2,637 metres.There is a reserved forest area around the peak. It is 9 km from Ooty, on the Ooty-Kotagiri Road in the Nilgiris District of Tamil Nadu.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img5}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Tea Factory</p>
          </div>
          <div className="tl-content">
            <h1>Tea Factory & Museum</h1>
            <p>Tours revealing the manufacturing process that turns fresh leaves into Nilgiri tea, plus tastings..</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img6}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Pykara Waterfalls</p>
          </div>
          <div className="tl-content">
            <h1>Pykara Waterfalls</h1>
            <p>Pykara is a river 19 kilometres from Ooty in the Indian State of Tamil Nadu with a village by the same name nearby. The Pykara River is considered very sacred by the Todas.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img7}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Ketti Valley</p>
          </div>
          <div className="tl-content">
            <h1>Ketti Valley View Point</h1>
            <p>Valley View is a tourist spot in Ooty, India. It is located on the Ooty Coonoor road at a distance of 4 kilometres from Ooty bus stand and constitutes ward number 5 of the Nilgiris Lok Sabha constituency.</p>
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

export default Ootypackage
