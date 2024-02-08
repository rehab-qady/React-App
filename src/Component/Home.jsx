import React from 'react'
import img1 from '../imgs/avataaars.svg'

export default function Home() {
  return (
    <div className='home-section text-white d-flex flex-column justify-content-center align-items-center py-5'>
      <div className="img">
      <img src={img1} className='w-75 ps-5' alt="" />
      </div>
      <div className="start mt-5 ">
        <h1 className='fw-bold text-white'>START FRAMEWORK</h1>
        <div className="icons d-flex align-items-center justify-content-center my-3">
          <div className="line"></div>
          <i class="fa-solid fa-star mx-2"></i>
          <div className="line"></div>
        </div>
      </div>
      <div className="home-footer ">    
        <p>
        Graphic Artist - Web Designer - Illustrator
        </p>
      </div>


    </div>
  )
}
