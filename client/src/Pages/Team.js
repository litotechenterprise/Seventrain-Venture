import React from 'react';
import {Image, Container, Row, Col, Card, Button} from 'react-bootstrap';
import Org_Struct from '../images/7VenturePics/Org_structure.png'
import VK_Head from '../images/7VenturePics/VK_Headshot.png'
import FS_Head from '../images/7VenturePics/FS_Headshot.png'
import XF_Head from '../images/7VenturePics/XF_Headshot.jpg'
import ST_Head from '../images/7VenturePics/ST_Headshot.png'
import STBioInfo from '../component/STBio'
import XFBioInfo from '../component/XfBio'
import VKBioInfo from '../component/VkBio'
import FSBioInfo from '../component/FsBio'
import '../css/index.css'


const Team = () => {
    const [VKBio, setVKBio] = React.useState(false)
    const [XFBio, setXFBio] = React.useState(false)
    const [FSBio, setFSBio] = React.useState(false)
    const [STBio, setSTBio] = React.useState(false)

    return(
        <div className='App-Container' style={{padding:"3%"}}>
            <Container>     
                <h1 style={{textAlign:'center'}}><u>Senior Leadership Team</u></h1>
                <h2>An effective combination of venture investing exprtise and knowledge</h2>

                <Container style={{marginTop:30}}>
                    <Image src={Org_Struct} style={{width:"100%"}}/>
                </Container>
                

                {/* VK */}
                <div className="BioStyle" style={{backgroundColor:'white', marginTop: 50}}>
                    <div style={{alignItems:'center', justifyContent:'center'}}>
                        <div class='parent inline-flex-parent' style={{alignSelf:'center', justifyItems:'center'}}>
                            <div class='Image' style={{}}>
                                <Image className="ProfilePic" src={VK_Head} />
                            </div>
                            <div class='Header' >
                                <h5>Vikal Kapoor</h5>
                                <p>General Partner</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="Info">Experience:  20+ Years </p>
                        <hr/>
                        <p className="Info">Category: Private Equity, Venture Capital, Technology</p>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Position:</p> 
                            <div>
                                <p>CEO of DAPPS <br /> global leader in Enterprise Blockchain CRM </p>
                            </div> 
                        </div>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Activity:</p> 
                            <div>
                                <p>AngelList India’s only approved investor <br/> World Economic Forum Committee <br /> Digital Transformation Board of Advisors of US Telecom-Exchange</p>
                            </div> 
                        </div>
                        <hr/>
                        <p className="Info">Background: JP Morgan, Deutsche Bank, Bloomberg, Bank of America, XV Group and Proton Enterprises</p>
                    </div>
                    <div class='parent grid-parent' >
                        <Button variant="secondary" onClick={() => setVKBio(!VKBio)}> Bio</Button>
                        <Button variant="secondary" href="mailto:v@Seventrainventure.com">Email</Button> 
                    </div>
                    {VKBio ? <VKBioInfo /> : null}
                </div>

                <div className="BioStyle" style={{backgroundColor:'white', marginTop: 50}}>
                    <div style={{alignItems:'center', justifyContent:'center'}}>
                        <div class='parent inline-flex-parent' style={{alignSelf:'center', justifyItems:'center'}}>
                            <div class='Image' style={{}}>
                                <Image className="ProfilePic" src={XF_Head} style={{width:100, height:100}} />
                            </div>
                            <div class='Header' >
                                <h5>Xavi Flores</h5>
                                <p>General Partner</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="Info">Experience:  20+ Years </p>
                        <hr/>
                        <p className="Info">Category: Lodging, Real Estate, Investment Valuation</p>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Position:</p> 
                            <div>
                                <p>Advisor at SevenTrain Ventures <br /> Former Head of RE Underwriting <br /> Sourcing at WeLive</p>
                            </div> 
                        </div>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Activity:</p> 
                            <div>
                                <p>Independent PropTech <br /> TourTech advisor ESADE <br /> University of Houston Alum</p>
                            </div> 
                        </div>
                        <hr/>
                        <p className="Info">Background: Lodging, Real Estate, Investment Valuation</p>
                    </div>
                    <div class='parent grid-parent' >
                        <Button variant="secondary" onClick={() => setXFBio(!XFBio)}> Bio</Button>
                        <Button variant="secondary" href="mailto:xavi@Seventrainventure.com">Email</Button> 
                    </div>
                    {XFBio ? <XFBioInfo /> : null}
                </div>

                <div className="BioStyle" style={{backgroundColor:'white', marginTop: 50}}>
                    <div style={{alignItems:'center', justifyContent:'center'}}>
                        <div class='parent inline-flex-parent' style={{alignSelf:'center', justifyItems:'center'}}>
                            <div class='Image' style={{}}>
                                <Image className="ProfilePic" src={FS_Head} />
                            </div>
                            <div class='Header' >
                                <h5>Federico Salvitti</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="Info">Experience:  20+ Years </p>
                        <hr/>
                        <p className="Info">Category: Sales Strategy, Operations and Enablement, Marketing Strategy, Operations and Communications, Executive Coaching</p>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Position:</p> 
                            <div>
                                <p>Partner & Venture Developer at SevenTrain Ventures <br/> Faculty member at NYU</p>
                            </div> 
                        </div>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Activity:</p> 
                            <div>
                                <p>Street Soccer USA <br/> Universita.it <br/> IULM Innovation Lab</p>
                            </div> 
                        </div>
                        <hr/>
                        <p className="Info">Background: Launched 5 Start Ups and Covered 4 positions Gartner in Europe and in the US. Currently SVP of Sales & Marketing at Technology Companies and Faculty of Business Strategy & Marketing at NYU</p>
                    </div>
                    <div class='parent grid-parent' >
                        <Button variant="secondary" onClick={() => setFSBio(!FSBio)}> Bio</Button>
                        <Button variant="secondary" href="mailto:f@Seventrainventure.com">Email</Button> 
                    </div>
                    {FSBio ? <FSBioInfo /> : null}
                </div>

                <div className="BioStyle" style={{backgroundColor:'white', marginTop: 50}}>
                    <div style={{alignItems:'center', justifyContent:'center'}}>
                        <div class='parent inline-flex-parent' style={{alignSelf:'center', justifyItems:'center'}}>
                            <div class='Image' style={{}}>
                                <Image className="ProfilePic" src={ST_Head} />
                            </div>
                            <div class='Header' >
                                <h5>Serge Tedjong</h5>
                                <p>Investment Banker</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="Info">Experience:  15+ Years </p>
                        <hr/>
                        <p className="Info">Category: Finance and investment banking, Entrepreneurship Capital Structure Tech, BioTech, Media, Industrial</p>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Position:</p> 
                            <div>
                                <p>Managing Director at Wells Fargo <br /> Head of Corporate Solutions for Technology, Media and Telecom companies</p>
                            </div> 
                        </div>
                        <hr/>
                        <div class='parent inline-flex-parent'>
                            <p className="Info" style={{alignSelf:'center'}}>Activity:</p> 
                            <div>
                                <p>Managing Director of West Coast Region <br /> Hedging and derivative solutions</p>
                            </div> 
                        </div>
                        <hr/>
                        <p className="Info">Background: Wells Fargo, JP Morgan, AT&T</p>
                    </div>
                    <div class='parent grid-parent' >
                        <Button variant="secondary" onClick={() => setSTBio(!STBio)}> Bio</Button>
                        <Button variant="secondary" href="mailto:serge@seventrainventures.com">Email</Button> 
                    </div>
                    {STBio ? <STBioInfo /> : null}
                </div>

            </Container> 
        </div>
    )
}



export default Team;