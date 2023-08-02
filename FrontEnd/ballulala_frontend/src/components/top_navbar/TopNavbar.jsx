import React from 'react'
import { Link } from 'react-router-dom'
import './TopNavbar.css'

function TopNavbar() {
  return (
    <div className='top-navbar'>
        <div className='nav-item-left'>
            <Link to='/'>
                <img src={'/small_logo2.png'} alt='Logo' />
            </Link>
        </div>
        <div className='nav-item-right'>
            <Link to='/'>
                <img src={'/mypage2.png'} alt='My Page' />
            </Link>
        </div>
    </div>
  )
}

export default TopNavbar
