import React, { useRef } from 'react'
import '../styles/Home.css'
import IntroVideo from '../Assets/Vid1.mp4'
import TopDestinations from './Topdestinations'
import TravelForm from './TravelForm'


function Home() {

  const targetDivRef = useRef(null);

  return (
    <section className='home'>
        <div className="vid-container">
            <video src={IntroVideo} autoPlay muted loop id='video1'/>
          <div className="motto">
            <h2>MAYIL VEERA HOLIDAYS </h2>
            <p id='motto'>Don’t Listen To What They Say, Go See.</p>
            <div className="btn-travel"><button onClick={()=>{
            targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
            }}> Book a travel</button>
          </div>
          </div>
        </div> 
      <TopDestinations/>
        <div className="formContainer" ref={targetDivRef}>
          <TravelForm/>
        </div>
    </section>
  )
}

export default Home