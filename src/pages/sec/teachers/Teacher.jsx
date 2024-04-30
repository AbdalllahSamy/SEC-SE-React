import React from 'react'
import t1 from './../../../assets/images/t-1.jpg'
import t2 from './../../../assets/images/t-2.webp'
import t3 from './../../../assets/images/t-3.webp'
import t4 from './../../../assets/images/t4.jpg'
import FormButton from '../../../components/layout/FormButton'
import FormDelete from '../../../components/layout/FormDelete'
import Navbar from '../../../components/layout/Navbar'
function Teacher() {
  
  return (
    <div>
      <Navbar />
      <div className="event-header mt-3">
        <h1>Teachers</h1>
        <FormButton title="add" stl="add-btn" />
        </div>
      
        <div className="container py-5">  
  <div className="row pb-5 mb-4">
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t1} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-3">Mark Rockwell</h5>
            <div className='d-flex flex-column gap-2'>
                <FormButton title="Update" stl="book-btn btn"/> 
                <FormDelete title="delete"/>
                </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t2} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-3">Mark Rockwell</h5>
            <div className='d-flex flex-column gap-2'>
                <FormButton title="Update" stl="book-btn btn"/> 
                <FormDelete title="delete"/>
                </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t3} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-3">Mark Rockwell</h5>
            <div className='d-flex flex-column gap-2'>
                <FormButton title="Update" stl="book-btn btn"/> 
                <FormDelete title="delete"/>
                </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t4} alt="" className="w-100  card-img-top"/>
          <div className="p-4">
            <h5 className="mb-3">Deby Mosa</h5>
            <div className='d-flex flex-column gap-2'>
                <FormButton title="Update" stl="book-btn btn"/> 
                <FormDelete title="delete"/>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>







      </div>
    </div>
  )
}

export default Teacher
