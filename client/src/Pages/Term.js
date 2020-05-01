import React from 'react';

import {Image,Table} from 'react-bootstrap';
import Law from '../images/Company/Sentient_Law.png'
import Consult from '../images/Company/consulting.jpeg'

const Terms = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Terms"></a>
            <h1><u>SevenTrain terms of inventments </u></h1>
            <h4>Summary of terms</h4>
            {/* <Container style={{ alignItems:'center',justifyContent:'center', padding:50, borderRadius:100}}> */}
                {/* <Image src={Fund} fluid /> */}
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Overview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Fund Size</b></td>
                            <td>$25MM target, 30MM cap</td>
                        </tr>
                        
                        <tr>
                            <td><b>Investment period</b></td>
                            <td>1 - 2 years</td>
                        </tr>

                        <tr>
                            <td><b>Target Management Fee</b></td>
                            <td>2% for 2 years or first close of new fund</td>
                        </tr>

                        <tr>
                            <td><b>Carried interest</b></td>
                            <td>20%</td>
                        </tr>

                        <tr>
                            <td><b>Return target</b></td>
                            <td>Top decile</td>
                        </tr>

                        <tr>
                            <td><b>Fund Life</b></td>
                            <td>5 year with option to extend by 2 years</td>
                        </tr>

                        <tr>
                            <td><b>Counsel</b></td>
                            <td>
                                <a href='https://www.sentientlaw.com/'>
                                    <Image src={Law} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Administrator</b></td>
                            <td>FCS Group</td>
                        </tr>

                        <tr>
                            <td><b>Auditor</b></td>
                            <td>
                                <a href='http://syerconsulting.com/'>
                                    <Image src={Consult} />
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            
        </div>
         
    )
}



export default Terms;