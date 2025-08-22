import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Login ({setToken}) {

    const [Validate,setValidate] = useState ({email:'',password:''})
    const [Response,setResponse] = useState ('')
    const [Message,setMsg] = useState('')
 
   async function HandleSubmit (e) {
        e.preventDefault();
        let url = 'http://31.97.51.179:8081/login';
        await axios.post (url,Validate).then ((result)=>{setResponse(result.data)})
    }

    function Validasi () {
        if (Response > 0){
            setToken(Response);
            localStorage.setItem('token',Response)
        }
        else if (Response === 0){
             setMsg ('User Invalid');
        }   
    }

    useEffect(()=>{ Validasi()},[Response])

    console.log (Validate)
    console.log (Response)
    console.log (Message)

    return (
        <div className='wraplogin'>
            <div className='loginline'>
                <div className='titlelogin'>
                    <h1 style={{fontSize:'50px'}}>iModul</h1>
                </div>
                <div className='formlogin'>
                    <form action="">
                        <label htmlFor="" style={{textAlign:'left',color:''}}>Username</label><br/>
                        <input className='flogin' type="email" placeholder='username' onChange={(e)=>{setValidate({...Validate,email:e.target.value})}} /><br/><br/>
                        <label htmlFor="">Password</label><br/>
                        <input className='flogin' type="password" placeholder='password' onChange={(e)=>{setValidate({...Validate,password:e.target.value})}}/><br/><br/>
                        <input className='sflogin' type="submit"  onClick={HandleSubmit} />
                    </form>
                    <p style={{color:'red',textAlign:'center'}}>{Message}</p>
                </div>
            </div>
        </div>
    )
}
