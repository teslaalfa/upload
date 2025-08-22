import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../component/header' 
import Footer from '../component/footer'
import Layout from '../component/layout'
import papa from 'papaparse'
import { useState} from 'react'
import '../asset/style.css'
import { getProgress } from '../api/api'
import {Container,Row,Col,ProgressBar,Dropdown} from 'react-bootstrap';

export default function Upload () {

    const [DataUp, setDataup] = useState ([{}]);
    const [Process,setProcess] = useState ('');
    const [Option,setOption] = useState ('');
    const [progress, setProgress] = useState ({progress:'0',notif:'none'})

    useEffect(()=>{
        getProgress().then((result)=>{setProgress({...progress,progress:result})
        })
    },[progress])

    // console.log (progress.progress)
    // console.log (Process)
    // console.log (DataUp);
    
function HandleData (event) {
    const filedata = event.target.files[0]
    papa.parse (filedata, {
        header:true,
        complete : (result)=>{setDataup(result.data)
             console.log (result.data);
        }
    })
}

function BarProgress() {
        const now = progress.progress;
         return(
            <div>
                <ProgressBar variant='success' now={now} label={now+'%'}/>
            </div>
         ) 
    }

async function Handlesubmit (e) {
    e.preventDefault();
    setProgress({...progress,notif:'block'})
    let url = Option;
    await axios.post (url,DataUp).then ((result)=>{setProcess (result.data)})
}


    return (
        <Container className='boxcontent' fluid="xxl">
            <Row className='head'>
                <Col>
                     <Header/>
                </Col>
            </Row>
            <Row className='midcontent' xs={2} md={1} xxl={10}>
                <Col className='menu' xs={12} xl={2} >
                    <Layout/>
                </Col>
                <Col className='maincontent' xs={12} xl={10}>
                    <div className='upload'>
                        <h1>Upload Menu</h1>
                         <form action="">
                            <div>
                                <select onChange={(e)=>{setOption(e.target.value)}}>
                                    <option disabled selected>-Select One-</option>
                                    <option value='http://api.imodul.xyz/upload'>Production</option>
                                    <option value='http://api.imodul.xyz/upload/profile'>Profile</option>
                                </select>
                            </div>
                            <br/>
                            <input type="file" accept='.text' onChange={HandleData} /><br/><br/>
                            <input type="submit" onClick={Handlesubmit}/>
                         </form><br/>
                         <BarProgress/>
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