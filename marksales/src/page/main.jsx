import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Layout from '../component/layout'
import LineChart from '../component/chart'
import '../asset/style.css';
import { Container,Row,Col } from 'react-bootstrap'

export default function Main () {
   return (
        <Container className='boxcontent' fluid="xxl">
            <Row className='head'>
                <Col>
                     <Header/>
                </Col>
            </Row>
            <Row className='midcontent' xs={2} md={1} xxl={10}>
                <Col className='menu' xs={12} xl={2}>
                    <Layout/>
                </Col>
                <Col className='maincontent' xs={12} xl={10}>
                    <div className='dashboard'>
                        <h3 style={{textAlign:'center',fontFamily:'calibri',fontWeight:'bold'}}>Dashboard Marketing</h3>
                        <div className='chart'>
                            <LineChart/>
                        </div>            
                    </div>
                </Col>
            </Row>
             <Row>
                <Col className='foot'>
                    <Footer/>
                </Col>
            </Row>
        </Container>
   )
}





//  return (
//     <div className='container'>
//         <div className='header'>
//             <Header/>   
//         </div> 
//             <div className='title'>
//                 <h2>Dashboard Market</h2>
//             </div>
//             <div className='sidemenu'>
//                 <Layout/>
//             </div>
//             
       
//         <div className='footer'>
//             <Footer/>
//         </div>
//     </div>
//     )