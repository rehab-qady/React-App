import React from 'react'

export default function About() {
  return (
    <div className='about '>
    <h1 className='text-center fw-bold text-white'>ABOUT COMPONENT</h1>
    <div className="icons d-flex align-items-center justify-content-center my-3">
          <div className="line"></div>
          <i class="fa-solid fa-star mx-2"></i>
          <div className="line"></div>
    </div>
    <div className="container about-text d-flex ">
      <div className="about-text1 ps-5">
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </div>
      <div className="about-text2 ">
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </div>
    </div>
    </div>
  )
}
