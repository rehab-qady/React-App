import React from 'react'
import port1 from '../imgs/poert1.png'
import port2 from '../imgs/port2.png'
import port3 from '../imgs/port3.png'

export default function Portofolio() {
  return (
    <>
    <h1 className='port text-center fw-bold pt-4'>PORTFOLIO COMPONENT</h1>
    <div className="icons d-flex align-items-center justify-content-center my-3">
          <div className="line1"></div>
          <i class="fa-solid fa-star mx-2 icon-sec"></i>
          <div className="line1"></div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 portfoloio position-relative mb-5 ">
          <img src={port1} alt="" className='w-100 rounded-3 ' />
          <div className="layer  position-absolute   rounded-3 d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-plus text-white "></i>
          </div>
        </div>
        <div className="col-md-4 portfoloio position-relative mb-5 ">
          <img src={port2} alt=""  className='w-100 rounded-3 '/>
          <div className="layer   position-absolute d-flex align-items-center justify-content-center rounded-3 ">
          <i class="fa-solid fa-plus text-white"></i>
          </div>
        </div>
        <div className="col-md-4 portfoloio position-relative mb-5 ">
          <img src={port3} alt="" className='w-100 rounded-3 ' />
          <div className="layer   position-absolute d-flex align-items-center justify-content-center rounded-3 ">
          <i class="fa-solid fa-plus text-white"></i>
          </div>
        </div>
        <div className="col-md-4 portfoloio position-relative mb-4 ">
          <img src={port1} alt="" className='w-100 rounded-3 ' />
          <div className="layer  position-absolute d-flex align-items-center justify-content-center rounded-3 ">
          <i class="fa-solid fa-plus text-white"></i>
          </div>
        </div>
        <div className="col-md-4 portfoloio position-relative mb-4 ">
          <img src={port2} alt=""  className='w-100 rounded-3 '/>
          <div className="layer   position-absolute d-flex align-items-center justify-content-center rounded-3 ">
          <i class="fa-solid fa-plus text-white"></i>
          </div>
        </div>
        <div className="col-md-4 portfoloio position-relative mb-4 ">
          <img src={port3} alt="" className='w-100 rounded-3 ' />
          <div className="layer  h-100 position-absolute d-flex align-items-center justify-content-center rounded-3 ">
          <i class="fa-solid fa-plus text-white"></i>
          </div>
        </div>
        
      </div>
    </div>



    </>
  )
}
