import React from 'react';
import {Image, Container} from 'react-bootstrap';
import offer from '../images/7VenturePics/offer.png'


const AboutUs = () => {
    return(
        <div>
            <a name="About"></a>
            <div style={{padding:"3%"}}>
                <h1 style={{textAlign:'center'}}><u>Early Stage Support</u></h1>
                <h4 style={{textAlign:'center'}}>A refined skill-set for managing special startup situations. Founders concerns persuant to Co-Founders, Hirings/Firings, Leadership Team Dealing wiht Board, and future / existing Investors</h4>
                <h3>Ecosystem</h3>
                <Container style={{marginLeft:'10'}}>
                    <ul>
                        <li>Curated introductions to partners, institutions, and B2B customers</li>
                        <li>Networking with other portfolio members and alums</li>
                    </ul>
                    <h3>Nurturing</h3>
                    <ul>
                        <li>Leadership coaching and mentorship</li>
                        <li>Venture development of content and markets</li>
                    </ul>
                    <h3>Capital</h3>
                    <ul>
                        <li>C-Suite-as-a-Service serves founders without sacrificing by equity dilution</li>
                        <li>Fundraising support, from pre-seed to exit valuations</li>
                    </ul>
                    <h3>Growth Acceleration</h3>
                    <ul>
                        <li>Access to our executive network in Wall Street and top corporation in their fields</li>
                    </ul>
                </Container>
            </div>
        </div>
  
    )
}



export default AboutUs;