import React from 'react'
import { Link } from 'react-router-dom'
import './TopNavbar.css'

function TopNavbar() {
  return (
    <div className='top-navbar'>
        <div className='nav-item-left'>
            <Link to='/' className="link-no-line">
                <div className="nav-one">BALLULALA</div>
            </Link>
        </div>
        <div className='nav-item-right'>
            <Link to='/'>
                <img src={'/mypage.png'} alt='My Page' />
            </Link>
        </div>
    </div>
  )
}

export default TopNavbar
