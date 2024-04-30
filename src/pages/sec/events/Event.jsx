import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Image from './../../../assets/images/3Jkqz66.png'; // Corrected path
import E1 from './../../../assets/images/e-1.jpeg'; // Corrected path
import E2 from './../../../assets/images/e-2.jpeg'; // Corrected path
import E3 from '../../../assets/images/e-3.png'; // Corrected path
import E4 from '../../../assets/images/e-4.png'; // Corrected path
import FormButton from '../../../components/layout/FormButton';
import FormDelete from '../../../components/layout/FormDelete';
import { useCheckValidation } from '../../../hooks/useCheckValidation';
function Event() {

  return (
    <>
      <Navbar />  
      <div className='event-header'>
      <h1 className='m-4'>events</h1>
      <div className=" ">
      <FormButton title="add" stl="add-btn" />
      </div>
      </div>
     
      <div className="all-cards row flex-column align-items-center gap-5">
            <div className="event-card w-75">
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
                <div className='d-flex  gap-2 justify-content-center'>
                <FormButton title="Update" stl="  my-btn "/> 
                <FormDelete title="delete"/>
                </div>
            </div>
            <div className="event-card w-75">
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
                <div className='d-flex  gap-2 justify-content-center'>
                <FormButton title="Update" stl="  my-btn "/> 
                <FormDelete title="delete"/>
                </div>
            </div>
            <div className="event-card w-75">
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
                <div className='d-flex  gap-2 justify-content-center'>
                <FormButton title="Update" stl="  my-btn "/> 
                <FormDelete title="delete"/>
                </div>
            </div>
      </div>
    </>
  );
}

export default Event;
