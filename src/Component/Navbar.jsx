import React from 'react'
import { useState } from 'react';
import {Link}  from 'react-router-dom'

export default function Navbar() {

  const [pathName , setpathname]= useState('');

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
  <div className="container py-3 ">
    <Link  className="navbar-brand fw-bold fs-2 text-white " to={'/home'}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
        <li className="nav-item me-2 fw-bold">
          <Link onClick={()=>{setpathname('/about')} } className={pathName === "/about" ? "nav-link active text-white" :"nav-link  text-white"} aria-current="page" to={'/about'}>ABOUT</Link>
        </li>
        <li className="nav-item me-2 fw-bold">
          <Link onClick={()=>{setpathname('/portfolio')} } className={pathName === "/portfolio" ? "nav-link active text-white" :"nav-link  text-white"} to={'/portfolio'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item me-2 fw-bold">
          <Link onClick={()=>{setpathname('/contact')} } className={pathName === "/contact" ? "nav-link active text-white" :"nav-link  text-white"} to={'/contact'}>CONTACT</Link>
        </li>
         
      </ul>
     
    </div>
  </div>
</nav>
  )
}
