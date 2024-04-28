import React from 'react'
import t1 from './../../../assets/images/t-1.jpg'
import t2 from './../../../assets/images/t-2.webp'
import t3 from './../../../assets/images/t-3.webp'
import t4 from './../../../assets/images/t4.jpg'
function Teacher() {
  return (
    <div>
        <div className="event-header">
        <h1>Teachers</h1>
      <button className='add-btn'>Add</button>
        </div>
      
        <div className="container py-5">  

  



  <div className="row pb-5 mb-4">
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t1} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <button class="btn book-btn mb-2 mt-4"><span>Update</span></button>
		    <button class="btn info"><span>Delete</span></button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t2} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <button class="btn book-btn mb-2 mt-4"><span>Update</span></button>
		    <button class="btn info"><span>Delete</span></button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t3} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <button class="btn book-btn mb-2 mt-4"><span>Update</span></button>
		    <button class="btn info"><span>Delete</span></button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0"><img src={t4} alt="" className="w-100 card-img-top"/>
          <div className="p-4">
            <h5 className="mb-0">Diab Mosa</h5>
            <button class="btn book-btn mb-2 mt-4"><span>Update</span></button>
		    <button class="btn info"><span>Delete</span></button>
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
