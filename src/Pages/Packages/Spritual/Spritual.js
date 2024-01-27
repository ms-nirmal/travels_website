import React from 'react'
import './Spritual.css'
import img1 from './Assets/thirupathi.jpg'
import img2 from './Assets/shoretemple.jpg'
import img3 from './Assets/chidhamabram.jpg'
import img4 from './Assets/Thanjavur_Brihadeeswara_Temple_side_view.jpeg'
import img5 from './Assets/rameshwara.jpg'
import img6 from './Assets/meenakshi.jpg'

function Spritual() {
  return (
    <section className='Spritual'>
      <hr />
      <div className="tripInfo">
        <center><h2>Package Of Spritual</h2></center>          
        <div className="packageInfo">
          <p>Duration : 8 Nights 9 Days <br/> PackageName : Spritual</p>
          <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>
      </div>

      <div className="timeline">
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Tirupathi</p>
          </div>
          <div className="tl-content">
            <h1>Lord Venkateshwara's temple</h1>
            <p>the richest and most visited place of worship in the world!</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Pondicherry</p>
          </div>
          <div className="tl-content">
            <h1>Shore temple</h1>
            <p>classified as a UNESCO World Heritage Site, Arjuna Penance and Five Rathas at Mahabalipuram.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Chidambaram</p>
          </div>
          <div className="tl-content">
            <h1>Natarajar temple</h1>
            <p>Thillai Natraja Temple in Chidambaram as a UNESCO World Heritage Site, Arjuna Penance and Five Rathas at Chidambaram.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Thanjavur</p>
          </div>
          <div className="tl-content">
            <h1>Brihadeeshwara temple</h1>
            <p>Yet another gorgeous temple that needs no introduction.World Heritage site.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img5}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Rameshwaram</p>
          </div>
          <div className="tl-content">
            <h1>Lord Rama Temple</h1>
            <p>Rameshwaram - the place from where Lord Rama, built a bridge across the sea to rescue his consort Sita, from her abductor, Ravana.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img6}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Madurai</p>
          </div>
          <div className="tl-content">
            <h1>Meenakshi temple</h1>
            <p>Madurai's claim to fame for its meticulous colorful carvings on the Gopurams (towers), in the vivid tamilians image of Gods, Goddess, animal and mythical figures.</p>
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

export default Spritual
