import React from 'react'
import '../asset/style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';

export default function Header () {

  const user = <FontAwesomeIcon icon={faUser} />

  return (
    <div className='containHeader'>
        <div className='titleHeader'>
            <h2>iModul</h2>
        </div>
        <div className='profile'>
            <span>{user}FDicky</span>
        </div>
    </div>
  )
}
