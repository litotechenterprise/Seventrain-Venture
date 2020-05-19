import React from 'react'
import {Container} from 'react-bootstrap'

const Press = () => {
    return(
    <div style={{padding:"3%"}}>
        <a name="Press"></a>
        <h1 style={{textAlign:'center'}}><u>Press / Publications</u></h1>
        <Container style={{ padding:40, borderRadius:100}}>
            <ul>
                <li><a href="https://www.linkedin.com/pulse/ideas-how-reactivate-quintana-roo-post-covid19-xavier-flores"><h4>Ideas on how to reactivate Quintana Roo post-COVID 19</h4></a></li>
                <li><a href="https://lucesdelsiglo.com.mx/images/multimedia/Banners/Periodico/28_abril_2020.pdf"><h4>Ideas para reactivar un destino turístico</h4></a></li>
                <li><a href="https://www.linkedin.com/pulse/proptech-startups-way-forward-xavier-flores"><h4>PropTech Startups - The way forward</h4></a></li>
            </ul>
        </Container>
    </div>
    )
}



export default Press;