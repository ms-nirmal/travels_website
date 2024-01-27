import React from 'react'
import './Kodaikanal.css'
import img1 from './assets/vfalls.jpg'
import img2 from './assets/Pine.jpg'
import img3 from './assets/cwalk.jpg'
import img4 from './assets/ScFalls.jpg'
import img5 from './assets/hill.jpg'
import img6 from './assets/cave.jpg'
import img7 from './assets/Mlake.jpg'
import img8 from './assets/Temple.jpg'

function Kodaikanalpackage() {
  return (
    <section className='Kodaikanal'>
      <hr />
      <div className="tripInfo">
      <center><h2>Kodaikanal</h2></center>
        <div className="packageInfo">
          <p>Duration : 2 Nights 3 Days <br/> Location : Kodaikanal</p>
          <p>The Packages are Customizable <br/> Contact: 123456789</p>
        </div>
      </div>
      
      <div className="timeline">
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img1}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Vattakanal falls</p>
          </div>
          <div className="tl-content">
            <h1>Vattakanal Waterfalls</h1>
            <p>The Vattakanal Falls is packed with panoramic vistas and offers a stunning sight for all the tourists to behold.</p>
          </div>
        </div> 

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img2}")` }}></div>
          <div className="tl-year">
              <p className="f2 heading--sanSerif"> Pine Forest</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Pine Forest</h1>
            <p>Forest known for its dramatic tall pines, popular for horse-riding, walking & photography.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img3}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Coakers Walk</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Coakers Walk</h1>
            <p>Coakers walk gives you a pleasant walk through the edge of a cliff, which either gives you a stunning view of the valley below or an amazing fog.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img4}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif"> SC falls</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Silver cascade falls</h1>
            <p>The perfect stop over in-between a long journey, these silver cascade falls demand your attention while you travel from Kodaikanal till Madurai</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage:
             `url("${img5}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Hill Station</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Kodaikanal Hill Station</h1>
            <p>Kodaikanal hill station, in the Palani Hills of the Western Ghats, is a picture-perfect hill station </p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img8}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Andavar Temple</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Kurinji Andavar Temple</h1>
            <p>This 1936 Hindu temple dedicated to Lord Murugan is set in scenic surrounds with Kurinji flowers.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img6}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Guna Cave</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Guna Cave</h1>
            <p>Guna caves (Devil's Kitchen) are deep bat-infested chambers between the three gigantic boulders that are the Pillar Rocks.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url("${img7}")` }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Mannavanur Lake</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Mannavanur Lake</h1>
            <p>Very calm place -- Very neatly maintained -- Must visit lake - One can enjoy a nice picnic.. This place is worth a visit until it becomes too crowded..</p>
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

export default Kodaikanalpackage
