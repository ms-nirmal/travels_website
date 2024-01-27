import React from 'react'
import './Kanyakumari.css'
import img1 from './Assets/rock.jpg'
import img2 from './Assets/441px-Thiruvalluvar_Statue_at_Kanyakumari_02.jpg'
import img3 from './Assets/bhagavathy-amman-temple-1686112243_3a75e4692a6fd5e0dea3.webp'
import img4 from './Assets/church.jpg'
import img5 from './Assets/vattakottai-fort-kanyakumari-.jpg'
import img6 from './Assets/padmanabhapuram-palace-1656252445_8cbe61cc4095e2382601.webp'
import img7 from './Assets/gandhi-memorial-mandapam-1656142782_e7509cbe9abdae4e0db7.webp'

function Kanyakumaripackage() {
  return (
    <section className='Kanyakumari'>
      <hr />
      <div className="tripInfo">
      <center><h2>Kanyakumari</h2></center>
        <div className="packageInfo">
          <p>Duration : 1 Nights 2 Days <br/> Location : Kanyakumari</p>
          <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>
      </div>
       
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">Rock Memorial</p>
            </div>
            <div className="tl-content">
              <h1>Vivekananda Rock Memorial</h1>
              <p>Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip.</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">Thiruvalluvar</p>
            </div>
            <div className="tl-content">
              <h1>Thiruvalluvar Statue</h1>
              <p>The Thiruvalluvar Statue, or the Valluvar Statue, is a 41-metre-tall stone sculpture of the Tamil poet and philosopher Valluvar, known as Thiruvalluvar, the author of the Thirukkural, an ancient Tamil work on Dharma and morality</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">Amman Temple</p>
            </div>
            <div className="tl-content">
              <h1>Bhagavathy Amman Temple</h1>
              <p>The Thiruvalluvar Statue, or the Valluvar Statue, is a 41-metre-tall stone sculpture of the Tamil poet and philosopher Valluvar, known as Thiruvalluvar, the author of the Thirukkural, an ancient Tamil work on Dharma and morality</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">Ransom Shrine</p>
            </div>
            <div className="tl-content">
              <h1>Our Lady of Ransom Shrine</h1>
              <p>Our Lady of Ransom Church is a Catholic church located at Kanyakumari, Tamil Nadu, India. Our Lady of Ransom Church.</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img5}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">Vattakottai Fort</p>
            </div>
            <div className="tl-content">
              <h1>Vattakottai Fort</h1>
              <p>Vattakottai Fort is a seaside fort near Kanyakumari, Tamil Nadu the southern tip of India. It was built in the 18th century as a coastal defence-fortification and barracks in the former Travancore kingdom.</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img6}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">Padmanabhapuram Palace</p>
            </div>
            <div className="tl-content">
              <h1>Padmanabhapuram Palace</h1>
              <p>Padmanabhapuram Palace, also known as Kalkulam Palace, is a Travancore era palace located in Padmanabhapuram in the Kanyakumari district of the Indian state of Tamil Nadu.</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url("${img7}")` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif"> Gandhi Mandapam</p>
            </div>
            <div className="tl-content">
              <h1>Mahatma Gandhi Mandapam</h1>
              <p>Pink memorial building with sea views on site where Gandhi's ashes were held after his death.</p>
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

export default Kanyakumaripackage
