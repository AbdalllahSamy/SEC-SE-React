import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Image from './../../../assets/images/3Jkqz66.png'; // Corrected path
import E1 from './../../../assets/images/e-1.jpeg'; // Corrected path
import E2 from './../../../assets/images/e-2.jpeg'; // Corrected path
import E3 from '../../../assets/images/e-3.png'; // Corrected path
import E4 from '../../../assets/images/e-4.png'; // Corrected path

function Event() {
  return (
    <>
      <Navbar />  
      <div className='event-header'>
      <h1 className='m-4'>events</h1>
      <button className='add-btn'>Add</button>
      </div>
     
      <div className="all-cards row">
            <div className="event-card">
                <div className="event-name">
                    <img src={E3} alt="" className='event-img'/>
                    <p className='fs-3 ms-3'>name</p>
                </div>
                <p className='text-black-50 ms-2 mt-4'>10/06/20 -- Remote</p>
                <p className='ms-2'>Apple Worldwide Developer conference 2020</p>
                <p className='mt-5 ms-2 text-black-50'>Hosted by</p>
                <div className="hosters">
                    <img src={E1} alt="" />
                    <img src={E2} alt="" />
                    <img src={Image} alt="" />
                    <img src={E4} alt="" />
                </div>
                <button class="btn book-btn mb-2"><span>Update</span></button>
		        <button class="btn info"><span>Delete</span></button>
            </div>
            <div className="event-card">
            <div className="event-name">
                    <img src={E3} alt="" className='event-img'/>
                    <p className='fs-3 ms-3'>name</p>
                </div>
                <p className='text-black-50 ms-2 mt-4'>10/06/20 -- Remote</p>
                <p className='ms-2'>Apple Worldwide Developer conference 2020</p>
                <p className='mt-5 ms-2 text-black-50'>Hosted by</p>
                <div className="hosters">
                    <img src={E1} alt="" />
                    <img src={E2} alt="" />
                    <img src={Image} alt="" />
                    <img src={E4} alt="" />
                </div>
                <button class="btn book-btn mb-2"><span>Update</span></button>
		        <button class="btn info"><span>Delete</span></button>
            </div>
            <div className="event-card">
            <div className="event-name">
                    <img src={E3} alt="" className='event-img'/>
                    <p className='fs-3 ms-3'>name</p>
                </div>
                <p className='text-black-50 ms-2 mt-4'>10/06/20 -- Remote</p>
                <p className='ms-2'>Apple Worldwide Developer conference 2020</p>
                <p className='mt-5 ms-2 text-black-50'>Hosted by</p>
                <div className="hosters">
                    <img src={E1} alt="" />
                    <img src={E2} alt="" />
                    <img src={Image} alt="" />
                    <img src={E4} alt="" />
                </div>
                <button class="btn book-btn mb-2"><span>Update</span></button>
		        <button class="btn info"><span>Delete</span></button>
            </div>
      </div>
    </>
  );
}

export default Event;
