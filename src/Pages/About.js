import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section className='about'>
    <center>
        <div className="quote">
            <h2>MV Holidays</h2>
            <h4>Re Discover YourSelf</h4>
        </div>
        <div className="motto">
            <h2>MV HOLIDAYS MOTTO</h2>
            <p id='motto'>Don’t Listen To What They Say, Go See.</p>
            <p>“Stuff your eyes with wonder, live as if you’d drop dead in ten seconds. See the world. It’s more fantastic than any dream made or paid for in factories.” </p>
        </div>
        <div className="Mission">
            <h2>OUR MISSION</h2>
            <p>MV Holidays is a full integrated travel company that offers comprehensive solutions for all the business and leisure travelers across the world. This prestigious travel company in Chennai mainly aims to satisfy the client’s requirements with ultimate transparency and cost-effectiveness. We assure to offer round the clock support and assistance at any point of your travel.</p>
        </div>
        <div className="Vision">
            <h2>OUR VISION</h2>
            <p>
            Our MV Team is striving hard to become the world class travel company and industry leader in the near future. We are planning to focus on customer centric approach and gain recognition among the worldwide clients. The travel company believes in maintaining highest quality standards and craft extraordinary moments especially for you.
            </p>
        </div>

        <div className="address">
            <div className="corpOfc">
                <h3>Corporate Office</h3>
                    <div>MV Holidays Pvt LTD</div>
                    <div>Novel Tech Park,</div>
                    <div>Opposite to 1 MG Mall,</div>
                    <div>MG Road, Bangalore – 560042</div>
                    <div>Karnataka, India.</div>
            </div>
            <div className="headOfc">
                <h3>Head Office</h3>
                    <div>MV Holidays Pvt LTD</div>
                    <div>No.1, Gemini Parsn,</div>
                    <div>Kodambakkam High Road,</div>
                    <div>Nungambakkam, Chennai – 560042</div>
                    <div>Tamilnadu, India.</div>
            </div>
        </div>
    </center>
    </section>
  )
}

export default About