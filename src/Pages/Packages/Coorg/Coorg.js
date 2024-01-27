import React from 'react'
import './Coorg.css'
import img1 from '../Coorg/Assets/Raja Seat (9).jpg'
import img2 from '../Coorg/Assets/Tiger.png'
import img3 from '../Coorg/Assets/Golden Temple.jpg'
import img4 from '../Coorg/Assets/Wildlife.jpg'
import img5 from '../Coorg/Assets/Elephant.jpg'

function Coorgpackage() {
  return (
  <section className='Coorg'>
    <hr />
    <div className="tripInfo">
        <center><h2> Coorg</h2></center>
        <div className="packageInfo">
          <p>Duration : 2 Nights 3 Days <br/> Location : Coorg</p>
          <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>   
    </div>

    <div className="timeline">
      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Raja's Seat</p>
        </div>
        <div className="tl-content">
          <h1>Raja's Seat</h1>
          <p>Raja's Seat is a culturally significant site and tourist attraction in Madikeri of Coorg District. It is 270km away from Bangalore, the capital of Karnataka. Raja's Seat is located in the middle of a garden called as Gandhi Mantap</p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif"> Tiger Reserve</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Nagarahole Tiger Reserve</h1>
          <p>Nagarhole National Park, also known as Rajiv Gandhi National Park, is a wildlife reserve in the South Indian state of Karnataka. Part of the Nilgiri Biosphere Reserve, the park is backed by the Brahamagiri Mountains and filled with sandalwood and teak trees</p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Golden Temple</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Namdroling Monastery Golden Temple</h1>
          <p>The Namdroling Monastery, popularly referred to as 'The Golden Temple' is one of the largest Tibetan settlements in India. Located in Bylakuppe.</p>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif"> Wildlife Sanctuary</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Brahmagiri Wildlife Sanctuary</h1>
          <p>The Brahmagiri Wildlife Sanctuary is located in Kodagu District, Karnataka State, India, within the Western Ghats and about 250 km from Bangalore.</p>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url("${img5}")` }}></div>
        <div className="tl-year">
          <p className="f2 heading--sanSerif">Elephant Bathing</p>
        </div>
        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Dubare Elephant Bathing Spot</h1>
          <p>Dubare is famous as a tourist place for its Elephants and other wildlife activities including elephant ride, river rafting, trekking, etc..</p>
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

export default Coorgpackage
