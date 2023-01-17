import React from 'react';
import "./Navbar.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Navbar() {

  const [click, setClick] = React.useState(false)
  const handlClick = ()=> setClick(!click)
  return (
    <div className='navbar'>
      <div className='container'>
        <img src='/images/Logo.svg' />
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='/home'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/reservation'>Reservation</a></li>
          <li><a href='/menu'>Menu</a></li>
          <li><a href='/order online'>order online</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
        <div className='hamburger' onClick={handlClick}>
          {click ? (<FaRegTimesCircle className='icon' />): (<HiOutlineMenuAlt4 className='icon' />)}
        
        </div>
      </div>
    </div>
    
  )
}
