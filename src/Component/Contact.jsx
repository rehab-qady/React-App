import React from 'react'
// import $ from 'jquery'
export default function Contact() {


//  function label(){
//   // console.log('hiii');
//   // $('label').css("visiblity", "visible");
//  }
 
 
  
  return (
    <>
    <h1 className='text-center pt-5'>CONATCT SECTION</h1>
    <div className="icons d-flex align-items-center justify-content-center my-3">
          <div className="line1"></div>
          <i class="fa-solid fa-star mx-2 icon-sec"></i>
          <div className="line1"></div>
    </div>

    <div className="form d-flex flex-column w-50 mx-auto ">
      <form action="" >
      <label htmlFor="userName" >userName:</label>
      <input type="text" placeholder='userName' id='userName' className='form-control border-0 border-bottom py-3'/>
      <label htmlFor="userAge">userAge:</label>
      <input type="text" placeholder='userAge' id='userAge' className='form-control border-0 border-bottom py-3'/>
      <label htmlFor="userEmail">userEmail:</label>
      <input type="email" placeholder='userEmail' id='userEmail' className='form-control border-0 border-bottom py-3'/>
      <label htmlFor="userPassword">userPassword:</label>
      <input type="text" placeholder='userPassword' id='userPassword' className='form-control border-0 border-bottom py-3'/>

      <button type="submit" className='mb-5 mt-4 text-white border-0 rounded-3  py-2 px-3'>Send Message</button>
      </form>
    </div>
    </>
  )
}






