import React from 'react';
import OurMethod from './OurMethod'
import AboutUS from './AboutUs'
import Team from './Team'
import Industries from './Industries'
import Contact from './Contact'
import Geo from './Geographic_Focus'
import Terms from './Term'
import { Container} from 'react-bootstrap'



const Home = () => {
    return (
        <div style={{backgroundColor:'#556f8a'}}>
        <Container style={{flex:1, backgroundColor:'lightgray'}}>
          <AboutUS />
          <OurMethod />
          <Team />
          <Terms />
          <Industries />
          <Geo />
          <Contact />
        </Container>
      </div>
    )
}



export default Home;