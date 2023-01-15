import React from 'react';
import "../App.css";

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/Menu'>Menu</a></li>
            <li><a href='/Reservation'>Reservation</a></li>
            <li><a href='/OrderOnline'>Order Online</a></li>
            <li><a href='/Login'>Login</a></li>
        </ul>
    </nav>
  )
}
