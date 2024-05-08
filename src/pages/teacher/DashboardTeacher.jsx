import React from 'react'
import Navbar from '../../components/layout/Navbar'

function DashboardTeacher() {
  return (
    <>
        <Navbar />
        <h1 className='mt-4 ms-3'>Hello,</h1>
       
        <div className='row d-flex gap-2'>
<div className=' card col-3 p-3 shadow-lg '>
  <div>
 <h3>Students</h3>
<p className=' text-black-50 fs-4'>200</p>
</div>
</div>
<div className=' card col-3  p-3 shadow-lg'>
  <div className=' text-nowrap'>
 <h3>Finished Homework</h3>
<p className=' text-black-50 fs-4'>140</p>
</div>
</div>
<div className=' card col-3  p-3 shadow-lg'>
  <div>
 <h3>Booked Events</h3>
<p className=' text-black-50 fs-4'>30</p>
</div>
</div>
</div>
    </>
  )
}

export default DashboardTeacher 
