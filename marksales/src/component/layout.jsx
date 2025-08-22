import React from 'react'
import { Link,Outlet } from 'react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUpload,faSignOut} from '@fortawesome/free-solid-svg-icons';

const Home = <FontAwesomeIcon className='Lup' color='white' icon={faHome} size='3x'/>
const Upload = <FontAwesomeIcon className='Lup' icon={faUpload} size='3x' />
const Signout = <FontAwesomeIcon className='Lup' icon={faSignOut} size='3x' />

export default function Layout () {

  function Logout () {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className='linknav'>
        <ul>
            <li>
                <Link className='linkup' to='/'>{Home}Home</Link>
            </li>
              <li>
                <Link className='linkup' to='/upload'>{Upload}Upload</Link>
            </li>
            <li>
                <Link className='linkup' to='/' onClick={Logout}>{Signout}Logout</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}
