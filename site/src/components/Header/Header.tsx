import React from 'react';
import './Header.css'

export default function Header(){

  function toggleMenu(){
    const button: any = document.querySelector(".menu-section")
    button.classList.toggle("on")
  }

  return(
    <header className="container header">
      <img src="/assets/logo.svg" alt="Rocketseat"/>
      <div className="menu-section">
        <div onClick={toggleMenu} className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>
      <a className="btnOrange btnHeader" href="#">Get Started</a>        
    </header>
  )
}