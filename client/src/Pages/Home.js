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
        <Container style={{flex:1}}>
          <AboutUS />
          <OurMethod />
          <Team />
          <Terms />
          <Industries />
          <Geo />
          <Contact />
        </Container>
    )
}



export default Home;