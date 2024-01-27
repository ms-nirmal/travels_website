import React from 'react'
import './Valparai.css'
import img1 from './Assets/monkey-falls.jpg'
import img2 from './Assets/Anamalai_tiger_reserve,_Valparai_-_panoramio_(1).jpg'
import img3 from './Assets/koolangal-river.jpg'
import img4 from './Assets/aliyar-dam-from.jpg'
import img5 from './Assets/TeaGarden.jpg'
import img6 from './Assets/Balaji_Temple.webp'

function Valparai() {
  return (
    <section className='Valparai'>
      <hr />
      <div className="tripInfo">
        <center><h2>Valparai</h2></center>
        <div className="packageInfo">
          <p>Duration : 1 Nights 2Days <br/> Location : Valparai </p>
          <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>
      </div>
                
      <div className="timeline">
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Monkey falls</p>
          </div>
          <div className="tl-content">
            <h1>Monkey waterfalls</h1>
            <p>Monkey Falls are natural waterfalls located near the uphill ghat road Valparai on the Pollachi-Valparai road in the Anaimalai Hills range, in Coimbatore district. </p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Tiger Reserve</p>
          </div>
          <div className="tl-content">
            <h1>Aanamalai Tiger Reserve</h1>
            <p>Anaimalai Tiger Reserve, earlier known as Indira Gandhi Wildlife Sanctuary and National Park and as Anaimalai Wildlife Sanctuary, is a protected area in the Anaimalai Hills of Pollachi and Valparai taluks of Coimbatore District and Udumalaipettai taluk in Tiruppur District, Tamil Nadu, India </p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Kuzhankal River</p>
          </div>
          <div className="tl-content">
            <h1>Kuzhankal River</h1>
            <p>The freshwater of the river is clean and pure and is ideal for swimming, and relaxing amid lush green environs</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Aliyar Dam</p>
          </div>
          <div className="tl-content">
            <h1>Aliyar Dam</h1>
            <p>Aliyar Dam is a charming location surrounded by Annamali Hills with wonderful natural views. It is located between Pollachi and Valparai</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img5}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Tea Estate Garden</p>
          </div>
          <div className="tl-content">
            <h1>Tea Estate Garden</h1>
            <p>A tea garden is an outdoor space where tea and light refreshments are served, or any garden with which the drinking of tea is associated.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img6}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Balaji Temple</p>
          </div>
          <div className="tl-content">
            <h1>Balaji Temple (Karumalai Estate)</h1>
            <p>At a distance of 10 km from Valparai Bus Station, Balaji Temple is one of the prominent temples located in Valparai, Tamilnadu. Situated inside Karumalai.</p>
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

export default Valparai
