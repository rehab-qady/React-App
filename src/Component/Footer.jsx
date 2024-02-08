import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="app-footer ">
        <div className="footer py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 py-5 text-white text-center">
                        <h2>Location</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 py-5 text-white text-center">
                        <h2>AROUND THE WEB</h2>
                        <div className="icon d-flex justify-content-center">
                        <div className="circle rounded-circle mx-1  p-3  d-flex justify-content-center align-items-center">
                        <i class="fa-brands fa-facebook m-5 "></i>
                        </div>
                        <div className="circle rounded-circle mx-1  p-3  d-flex justify-content-center align-items-center">
                        <i class="fa-brands fa-twitter m-5"></i>
                        </div>
                        <div className="circle rounded-circle mx-1 p-3  d-flex justify-content-center align-items-center">
                        <i class="fa-brands fa-linkedin-in m-5"></i>
                        </div>
                        <div className="circle rounded-circle mx-1 p-3  d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-globe m-5"></i>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-md-4 py-5 text-white text-center">
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>


                    </div>
                </div>
            </div>
        </div>
        <div className="foot">
            <p className='text-center text-white py-3 m-0'>Copyright © Your Website 2021</p>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}
